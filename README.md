# PromptShield - Chrome Extension

A "Grammarly for Security" that runs locally in your browser. It scans your prompts on ChatGPT, Claude, and other AI sites *before* you hit send, warning you if you are about to leak PII or API keys.

## Features
- **Zero Configuration:** Just install and browse.
- **Local Processing:** No data leaves your browser. All scanning happens in `privacy.js`.
- **Real-time Feedback:** Floating shield icon (Bottom-Left) turns red if sensitive data is detected.

## Supported Sites
- ChatGPT
- Claude.ai
- DeepSeek
- Google Bard/Gemini

## Installation

1.  Open Chrome (or Brave/Edge).
2.  Navigate to `chrome://extensions`.
3.  Enable **Developer mode** (toggle in the top right corner).
4.  Click **Load unpacked**.
5.  Select this folder (`prompt-safe`).
6.  Go to `https://chatgpt.com` and start typing!

## Usage
- **Green Shield (Bottom Left):** You are safe.
- **Red Shield:** Click it to see what sensitive data was found (API Keys, Emails, etc.).
