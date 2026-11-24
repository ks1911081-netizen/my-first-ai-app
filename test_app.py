import os
import unittest
from unittest.mock import Mock, patch

import app as app_module


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
        post.return_value = Mock(
            ok=True,
            json=lambda: {"choices": [{"message": {"content": "こんにちは"}}]},
        )

        response = app_module.app.test_client().post(
            "/api/chat", json={"messages": [{"role": "user", "content": "こんにちは"}]}
        )

        self.assertEqual(response.status_code, 200)
        self.assertEqual(post.call_args.kwargs["json"]["model"], "openai/gpt-oss-20b")
        get.assert_called_once_with(
            app_module.GROQ_MODELS_URL,
            headers={"Authorization": "Bearer test-key"},
            timeout=15,
        )


if __name__ == "__main__":
    unittest.main()
