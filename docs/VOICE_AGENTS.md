# Voice agents — Paint Line Pro

Verified from source on 2026-10-13.

## AI Voice Copilot (`components/AICopilot.tsx`)
| Item | Value |
|---|---|
| Platform | Browser Web Speech API (`SpeechRecognition`/`webkitSpeechRecognition`) for speech input, with replies scripted client-side. No xAI, Twilio or other backend and no env vars. |
| Greeting (quoted) | "Hi! I'm your Paint Line Pro Voice Copilot. Ask me anything about painting, our process, or get a quote started. You can also speak to me!" |
| Answers | Website visitors. No phone calls. |
| Lead destination | Quote form at `/quote` |
| Phone number | None verified. The footer placeholder `(800) 555-0199` was replaced with a "Request a callback" link to `/quote`. The real number is unknown and needs confirmation. |
| Schedules / cron | None |

## Known gaps
- No real AI model or phone line is connected. If an xAI voice agent exists for Paint Line Pro, its account, agent name and number are unknown and need confirmation.
- `/visualizer`, `/partners`, `/process` and `/services` do not exist in this repo, so they return 404.
