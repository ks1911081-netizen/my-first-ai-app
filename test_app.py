import base64
import json
import os
import unittest
from io import BytesIO
from unittest.mock import Mock, patch
from urllib.error import URLError

import app as app_module


KUSHIRO_WEATHER = {
    "location": "北海道釧路市",
    "latitude": 42.9849,
    "longitude": 144.3814,
    "timezone": "Asia/Tokyo",
    "current": {
        "time": "2026-11-24T08:00",
        "temperature_c": 4.2,
        "apparent_temperature_c": 1.1,
        "humidity_percent": 68,
        "weather_code": 3,
        "description": "曇り",
        "wind_speed_kmh": 12.4,
        "wind_direction_degrees": 310,
        "precipitation_mm": 0.0,
    },
    "today": {
        "date": "2026-11-24",
        "weather_code": 3,
        "description": "曇り",
        "high_c": 7.0,
        "low_c": 1.0,
    },
    "forecast": [
        {
            "date": f"2026-11-{day:02d}",
            "weather_code": 3,
            "description": "曇り",
            "high_c": 7.0 + day - 24,
            "low_c": 1.0 + day - 24,
        }
        for day in range(24, 31)
    ],
    "fetched_at": "2026-11-24T08:05+09:00",
    "source": "Open-Meteo",
}


class SystemPromptIdentityTests(unittest.TestCase):
    def test_identity_prompt_answers_name_calls_as_direct_address(self):
        prompt = app_module.build_system_prompt([])

        self.assertIn("あなたの名前はJ.A.R.V.I.S.（ジャービス）です", prompt)
        self.assertIn("STARK INTELLIGENCE SYSTEM", prompt)
        self.assertIn("J.A.R.V.I.S.本人として一貫して振る舞ってください", prompt)
        self.assertIn(
            "「ジャービス」「ジャービス？」のように名前だけの呼びかけなら",
            prompt,
        )
        self.assertIn("はい、伊吹様。お呼びでしょうか？", prompt)
        self.assertIn("はい、待機しております、伊吹様。", prompt)

    def test_hud_mode_instructions_switch_between_detailed_and_concise(self):
        standard_prompt = app_module.build_system_prompt([], hud_mode="standard")
        mark_iii_prompt = app_module.build_system_prompt([], hud_mode="mark-iii")

        self.assertIn("背景・理由・具体的な手順", standard_prompt)
        self.assertIn("結論や最優先の解決策を最初に", mark_iii_prompt)
        self.assertIn("短い箇条書き", mark_iii_prompt)

    def test_system_prompt_requires_self_contained_html_for_prototype_requests(self):
        prompt = app_module.build_system_prompt([])

        self.assertIn("CSSとJavaScriptを内包した完全な単一HTML文書", prompt)
        self.assertIn("単一の```htmlコードブロック内", prompt)


class ClientWeatherValidationTests(unittest.TestCase):
    def test_validates_browser_weather_and_keeps_seven_day_forecast(self):
        weather = app_module.validate_client_weather(KUSHIRO_WEATHER)

        self.assertEqual(weather["current"]["temperature_c"], 4.2)
        self.assertEqual(weather["forecast"], KUSHIRO_WEATHER["forecast"])
        self.assertEqual(weather["source"], "Open-Meteo")

    def test_rejects_browser_weather_with_invalid_forecast_or_location(self):
        with self.assertRaises(ValueError):
            app_module.validate_client_weather(
                {**KUSHIRO_WEATHER, "forecast": KUSHIRO_WEATHER["forecast"][:6]}
            )
        with self.assertRaises(ValueError):
            app_module.validate_client_weather(
                {**KUSHIRO_WEATHER, "latitude": 0}
            )


class VisionAndThreatDataTests(unittest.TestCase):
    def test_selects_active_vision_models_in_fallback_order(self):
        models = [
            {"id": "llama-3.2-11b-vision-preview"},
            {"id": "meta-llama/llama-4-scout-17b-16e-instruct"},
            {"id": "llama-3.2-90b-vision-preview", "active": False},
        ]

        self.assertEqual(
            app_module.select_vision_models(models),
            [
                "meta-llama/llama-4-scout-17b-16e-instruct",
                "llama-3.2-11b-vision-preview",
            ],
        )

    def test_image_validation_checks_mime_signature_and_count(self):
        png = base64.b64encode(b"\x89PNG\r\n\x1a\nimage").decode("ascii")
        self.assertEqual(
            app_module.validate_images([{"mime_type": "image/png", "data": png}])[0]["mime_type"],
            "image/png",
        )
        with self.assertRaises(ValueError):
            app_module.validate_images([{"mime_type": "image/jpeg", "data": png}])
        with self.assertRaises(ValueError):
            app_module.validate_images([])

    def test_threat_validation_rejects_out_of_range_kp(self):
        with self.assertRaises(ValueError):
            app_module.validate_threat_data(
                {
                    "earthquakes": [],
                    "geomagnetic": {"kp": 12, "observed_at": "", "g_level": "G5"},
                }
            )

    def test_threat_prompt_uses_kp_and_measured_xray_class_with_context(self):
        threat = app_module.validate_threat_data(
            {
                "fetched_at": "2026-11-24T23:48:00Z",
                "earthquakes": [
                    {
                        "magnitude": 5.2,
                        "latitude": 42.1,
                        "longitude": 144.3,
                        "depth_km": 38.0,
                        "time": "2026-11-24T23:40:00Z",
                        "place": "Kushiro region",
                    }
                ],
                "geomagnetic": {"kp": 5, "observed_at": "2026-11-24T23:48Z", "g_level": "G1"},
                "solar": {"flux_w_m2": 1.5e-7, "observed_at": "2026-11-24T23:48Z"},
            }
        )
        prompt = app_module.build_system_prompt([], threat_data=threat)

        self.assertEqual(threat["solar"]["flare_class"], "B1.5")
        self.assertIn("USGS地震速報", prompt)
        self.assertIn("公式の警報・予報ではありません", prompt)
        self.assertIn('"g_level": "G1"', prompt)

    @patch.dict(os.environ, {"GROQ_API_KEY": "test-key"})
    def test_chat_attaches_image_and_falls_back_to_available_vision_model(self):
        analysis_response = Mock(
            ok=True,
            json=lambda: {
                "choices": [
                    {
                        "message": {
                            "content": json.dumps(
                                {
                                    "memories": [],
                                    "search": {"needed": False, "query": ""},
                                }
                            )
                        }
                    }
                ]
            },
        )
        unavailable_vision_response = Mock(
            ok=False,
            status_code=404,
            text="model unavailable",
            reason="Not Found",
        )
        vision_response = Mock(
            ok=True,
            json=lambda: {"choices": [{"message": {"content": "画像を確認しました。"}}]},
        )
        png = base64.b64encode(b"\x89PNG\r\n\x1a\nimage").decode("ascii")
        with (
            patch("app.get_kushiro_weather", return_value=KUSHIRO_WEATHER),
            patch(
                "app.requests.get",
                return_value=Mock(
                    ok=True,
                    json=lambda: {
                        "data": [
                            {"id": "llama-test"},
                            {"id": "meta-llama/llama-4-scout-17b-16e-instruct"},
                            {"id": "llama-3.2-11b-vision-preview"},
                        ]
                    },
                ),
            ),
            patch(
                "app.requests.post",
                side_effect=[analysis_response, unavailable_vision_response, vision_response],
            ) as post,
        ):
            response = app_module.app.test_client().post(
                "/api/chat",
                json={
                    "weather_data": KUSHIRO_WEATHER,
                    "messages": [{"role": "user", "content": "この画像を説明してください"}],
                    "images": [{"mime_type": "image/png", "data": png}],
                },
            )

        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.get_json()["reply"], "画像を確認しました。")
        vision_payload = post.call_args.kwargs["json"]
        self.assertEqual(vision_payload["model"], "llama-3.2-11b-vision-preview")
        user_content = vision_payload["messages"][-1]["content"]
        self.assertEqual(user_content[0]["text"], "この画像を説明してください")
        self.assertEqual(
            user_content[1]["image_url"]["url"],
            f"data:image/png;base64,{png}",
        )
        self.assertIn("添付した画像", vision_payload["messages"][0]["content"])


class SelectChatModelTests(unittest.TestCase):
    def test_prefers_llama_and_skips_inactive_or_audio_models(self):
        models = [
            {"id": "qwen/qwen3-32b"},
            {"id": "whisper-large-v3"},
            {"id": "llama-3.3-70b-versatile", "active": False},
            {"id": "openai/gpt-oss-120b"},
            {"id": "llama-4-scout"},
        ]

        self.assertEqual(app_module.select_chat_model(models), "llama-4-scout")

    def test_raises_when_no_chat_text_models_are_available(self):
        with self.assertRaises(ValueError):
            app_module.select_chat_model(
                [{"id": "whisper-large-v3"}, {"id": "openai/gpt-oss-20b", "active": False}]
            )

    @patch.dict(os.environ, {"GROQ_API_KEY": "test-key"})
    @patch("app.requests.post")
    @patch("app.requests.get")
    def test_chat_uses_a_model_from_the_current_model_list(self, get, post):
        get.return_value = Mock(
            ok=True,
            json=lambda: {
                "data": [
                    {"id": "whisper-large-v3"},
                    {"id": "openai/gpt-oss-20b"},
                ]
            },
        )
        post.side_effect = [
            Mock(
                ok=True,
                json=lambda: {
                    "choices": [
                        {
                            "message": {
                                "content": json.dumps(
                                    {
                                        "memories": [
                                            {
                                                "text": "ユーザーはコーヒーが好き。",
                                                "category": "preference",
                                            }
                                        ],
                                        "search": {"needed": False, "query": ""},
                                    },
                                    ensure_ascii=False,
                                )
                            }
                        }
                    ]
                },
            ),
            Mock(
                ok=True,
                json=lambda: {"choices": [{"message": {"content": "こんにちは"}}]},
            ),
        ]

        with patch("app.get_kushiro_weather", return_value=KUSHIRO_WEATHER) as weather_fetch:
            response = app_module.app.test_client().post(
                "/api/chat",
                json={
                    "weather_data": KUSHIRO_WEATHER,
                    "hud_mode": "mark-iii",
                    "memories": [
                        {
                            "id": "existing-memory",
                            "text": "伊吹様は釧路にお住まいです。",
                            "category": "profile",
                            "created_at": "2026-11-24T00:00:00+00:00",
                        }
                    ],
                    "messages": [
                        {
                            "role": "user",
                            "content": "僕の好きなものはコーヒーです。覚えておいて。",
                        }
                    ]
                },
            )

        self.assertEqual(response.status_code, 200)
        self.assertEqual(post.call_count, 2)
        self.assertEqual(post.call_args.kwargs["json"]["model"], "openai/gpt-oss-20b")
        self.assertEqual(response.get_json()["memory_count"], 2)
        self.assertEqual(response.get_json()["memory_added"], 1)
        returned_memories = response.get_json()["memories"]
        self.assertEqual(returned_memories[0]["id"], "existing-memory")
        self.assertEqual(returned_memories[1]["text"], "ユーザーはコーヒーが好き。")
        system_prompt = post.call_args.kwargs["json"]["messages"][0]["content"]
        self.assertIn("伊吹様は釧路にお住まいです。", system_prompt)
        self.assertIn("ユーザーはコーヒーが好き。", system_prompt)
        self.assertIn("伊吹様", system_prompt)
        self.assertIn("北海道釧路市", system_prompt)
        self.assertIn("体感温度", system_prompt)
        self.assertIn("HUD MODEはMARK-III", system_prompt)
        self.assertIn("戦術補佐AI", system_prompt)
        self.assertIn("結論や最優先の解決策を最初に", system_prompt)
        self.assertIn("短い箇条書き", system_prompt)
        self.assertIn('"temperature_c": 4.2', system_prompt)
        self.assertNotIn("サー", system_prompt)
        weather_fetch.assert_not_called()
        get.assert_called_once_with(
            app_module.GROQ_MODELS_URL,
            headers={"Authorization": "Bearer test-key"},
            timeout=15,
        )

    @patch.dict(os.environ, {"GROQ_API_KEY": "test-key"})
    def test_news_search_uses_google_news_rss_and_returns_five_citations(self):
        analysis = Mock(
            ok=True,
            json=lambda: {
                "choices": [
                    {
                        "message": {
                            "content": json.dumps(
                                {
                                    "memories": [],
                                    "search": {
                                        "needed": True,
                                        "query": "日本の最新ニュース",
                                    },
                                },
                                ensure_ascii=False,
                            )
                        }
                    }
                ]
            },
        )
        answer = Mock(
            ok=True,
            json=lambda: {
                "choices": [
                    {"message": {"content": "伊吹様、こちらが最新情報です。"}}
                ]
            },
        )
        rss_items = "".join(
            f"<item><title>ニュース {index}</title>"
            f"<link>https://example.com/news-{index}</link>"
            f"<description><![CDATA[概要 {index}]]></description></item>"
            for index in range(1, 7)
        )
        rss_items += (
            "<item><title>不正なURL</title><link>javascript:alert(1)</link>"
            "<description>除外</description></item>"
        )
        rss = BytesIO(
            f"<rss><channel>{rss_items}</channel></rss>".encode("utf-8")
        )

        with (
            patch("app.get_kushiro_weather", return_value=KUSHIRO_WEATHER),
            patch(
                "app.requests.get",
                return_value=Mock(
                    ok=True, json=lambda: {"data": [{"id": "llama-test"}]}
                ),
            ),
            patch("app.requests.post", side_effect=[analysis, answer]) as post,
            patch("app.urlopen", return_value=rss) as urlopen_mock,
        ):
            response = app_module.app.test_client().post(
                "/api/chat",
                json={
                    "messages": [
                        {
                            "role": "user",
                            "content": "本日の主要ニュースを調べて",
                        }
                    ]
                },
            )

        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.get_json()["search_status"], "complete")
        results = response.get_json()["search_results"]
        self.assertEqual(len(results), 5)
        self.assertEqual(results[0]["title"], "ニュース 1")
        self.assertEqual(results[0]["summary"], "概要 1")
        self.assertIn("ニュース 1", post.call_args.kwargs["json"]["messages"][0]["content"])
        feed_request = urlopen_mock.call_args.args[0]
        self.assertEqual(feed_request.full_url, app_module.GOOGLE_NEWS_RSS_URL)
        self.assertTrue(feed_request.get_header("User-agent"))

    @patch.dict(os.environ, {"GROQ_API_KEY": "test-key"})
    def test_briefing_uses_google_news_even_when_analysis_does_not_request_search(self):
        analysis = Mock(
            ok=True,
            json=lambda: {
                "choices": [
                    {
                        "message": {
                            "content": json.dumps(
                                {
                                    "memories": [],
                                    "search": {"needed": False, "query": ""},
                                },
                                ensure_ascii=False,
                            )
                        }
                    }
                ]
            },
        )
        answer = Mock(
            ok=True,
            json=lambda: {"choices": [{"message": {"content": "主要ニュースです。"}}]},
        )
        rss = BytesIO(
            "<rss><channel><item><title>速報</title>"
            "<link>https://example.com/breaking</link></item></channel></rss>".encode("utf-8")
        )
        with (
            patch("app.get_kushiro_weather", return_value=KUSHIRO_WEATHER),
            patch(
                "app.requests.get",
                return_value=Mock(
                    ok=True, json=lambda: {"data": [{"id": "llama-test"}]}
                ),
            ),
            patch("app.requests.post", side_effect=[analysis, answer]) as post,
            patch("app.urlopen", return_value=rss) as urlopen_mock,
        ):
            response = app_module.app.test_client().post(
                "/api/chat",
                json={
                    "messages": [{"role": "user", "content": "朝の報告をお願いします"}],
                    "launcher_action": "briefing",
                },
            )

        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.get_json()["search_status"], "complete")
        self.assertEqual(response.get_json()["search_query"], "本日の日本の主要ニュース")
        urlopen_mock.assert_called_once()
        answer_system_prompt = post.call_args.kwargs["json"]["messages"][0]["content"]
        self.assertIn("伊吹様、本日の主要ニュースをご報告いたします", answer_system_prompt)
        self.assertIn("速報", answer_system_prompt)

    @patch.dict(os.environ, {"GROQ_API_KEY": "test-key"})
    def test_google_news_rss_failure_is_reported_and_logged(self):
        analysis = Mock(
            ok=True,
            json=lambda: {
                "choices": [
                    {
                        "message": {
                            "content": json.dumps(
                                {
                                    "memories": [],
                                    "search": {"needed": True, "query": "最新ニュース"},
                                },
                                ensure_ascii=False,
                            )
                        }
                    }
                ]
            },
        )
        answer = Mock(
            ok=True,
            json=lambda: {"choices": [{"message": {"content": "検索できませんでした。"}}]},
        )

        with (
            patch("app.get_kushiro_weather", return_value=KUSHIRO_WEATHER),
            patch(
                "app.requests.get",
                return_value=Mock(
                    ok=True, json=lambda: {"data": [{"id": "llama-test"}]}
                ),
            ),
            patch("app.requests.post", side_effect=[analysis, answer]),
            patch("app.urlopen", side_effect=URLError("search unavailable")),
        ):
            with self.assertLogs("app", level="ERROR") as logs:
                response = app_module.app.test_client().post(
                    "/api/chat",
                    json={"messages": [{"role": "user", "content": "最新ニュースを調べて"}]},
                )

        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.get_json()["search_status"], "failed")
        self.assertIn("GoogleニュースRSSの取得に失敗しました", response.get_json()["search_warning"])
        self.assertTrue(any("search unavailable" in entry for entry in logs.output))

    def test_memory_payload_is_validated_for_local_storage_roundtrip(self):
        memory = {
            "id": "memory-id",
            "text": "好きな飲み物はお茶。",
            "category": "preference",
            "created_at": "2026-11-24T00:00:00+00:00",
        }
        self.assertEqual(app_module.validate_memories([memory]), [memory])
        self.assertEqual(app_module.validate_memories(None), [])
        with self.assertRaises(ValueError):
            app_module.validate_memories([{**memory, "category": "unknown"}])
        with self.assertRaises(ValueError):
            app_module.validate_memories([{**memory, "text": "x" * 301}])

    def test_weather_endpoint_formats_open_meteo_kushiro_data(self):
        response = Mock()
        response.json.return_value = {
            "current": {
                "time": "2026-11-24T08:00",
                "temperature_2m": 4.2,
                "apparent_temperature": 1.1,
                "relative_humidity_2m": 68,
                "weather_code": 3,
                "wind_speed_10m": 12.4,
                "wind_direction_10m": 310,
                "precipitation": 0.0,
            },
            "daily": {
                "time": [f"2026-11-{day:02d}" for day in range(24, 31)],
                "weather_code": [3] * 7,
                "temperature_2m_max": [7.0 + day - 24 for day in range(24, 31)],
                "temperature_2m_min": [1.0 + day - 24 for day in range(24, 31)],
            },
        }
        with patch("app.requests.get", return_value=response) as get:
            weather = app_module.fetch_kushiro_weather()

        self.assertEqual(weather["location"], "北海道釧路市")
        self.assertEqual(weather["current"]["temperature_c"], 4.2)
        self.assertEqual(weather["current"]["description"], "曇り")
        self.assertEqual(weather["today"]["high_c"], 7.0)
        self.assertEqual(weather["today"]["low_c"], 1.0)
        self.assertEqual(len(weather["forecast"]), 7)
        self.assertEqual(weather["forecast"][0]["date"], "2026-11-24")
        self.assertEqual(weather["forecast"][-1]["low_c"], 7.0)
        self.assertEqual(get.call_args.args[0], app_module.OPEN_METEO_URL)
        self.assertEqual(get.call_args.kwargs["params"]["latitude"], 42.9849)
        self.assertEqual(get.call_args.kwargs["params"]["longitude"], 144.3814)
        self.assertEqual(get.call_args.kwargs["params"]["timezone"], "Asia/Tokyo")
        self.assertEqual(get.call_args.kwargs["params"]["forecast_days"], 7)

    def test_weather_api_returns_live_weather_payload(self):
        with patch("app.get_kushiro_weather", return_value=KUSHIRO_WEATHER):
            response = app_module.app.test_client().get("/api/weather")

        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.get_json(), KUSHIRO_WEATHER)

    def test_tts_endpoint_cleans_text_and_returns_mp3(self):
        created = {}

        class FakeCommunicator:
            def __init__(self, text, voice, **options):
                created.update(text=text, voice=voice, options=options)

            async def stream(self):
                yield {"type": "audio", "data": b"fake-mp3"}

        with patch("app.edge_tts.Communicate", side_effect=FakeCommunicator):
            response = app_module.app.test_client().post(
                "/api/tts",
                json={
                    "text": "## **お知らせ**\n"
                    "- [詳細](https://example.com)\n"
                    "NETWORK SEARCH COMPLETE // 終了",
                },
            )

        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.mimetype, "audio/mpeg")
        self.assertEqual(response.data, b"fake-mp3")
        self.assertEqual(created["text"], "お知らせ。詳細")
        self.assertEqual(created["voice"], "ja-JP-KeitaNeural")
        self.assertEqual(created["options"], {"rate": "+5%", "pitch": "-5Hz"})

    def test_tts_endpoint_rejects_empty_or_oversized_text(self):
        client = app_module.app.test_client()
        empty_response = client.post("/api/tts", json={"text": "  "})
        oversized_response = client.post(
            "/api/tts",
            json={"text": "あ" * (app_module.MAX_TTS_TEXT_LENGTH + 1)},
        )

        self.assertEqual(empty_response.status_code, 400)
        self.assertEqual(oversized_response.status_code, 400)

    def test_chat_rejects_unknown_launcher_action(self):
        with patch.dict(os.environ, {"GROQ_API_KEY": "test-key"}):
            client = app_module.app.test_client()
            response = client.post(
                "/api/chat",
                json={
                    "messages": [{"role": "user", "content": "Open it"}],
                    "launcher_action": "https://example.com",
                },
            )
            invalid_memory = client.post(
                "/api/chat",
                json={
                    "messages": [{"role": "user", "content": "Hello"}],
                    "memories": [{"id": "bad", "text": "secret", "category": [], "created_at": ""}],
                },
            )
            invalid_hud_mode = client.post(
                "/api/chat",
                json={
                    "messages": [{"role": "user", "content": "Hello"}],
                    "hud_mode": "mark-iv",
                },
            )
        self.assertEqual(response.status_code, 400)
        self.assertEqual(invalid_memory.status_code, 400)
        self.assertEqual(invalid_hud_mode.status_code, 400)


if __name__ == "__main__":
    unittest.main()
