# Set-up & Maintenance Plugin – mockee.ai

## Purpose

This plugin ensures CLINE understands how to set up and maintain the mockee.ai project correctly.

## Tech Stack

- Next.js
- TailwindCSS
- Firebase
- Vapi AI (Voice agents)
- Google Gemini
- shadcn/ui
- Zod

## Setup Instructions

1. **(If starting fresh) Clone the repository**
   ```bash
   git clone https://github.com/ChrisAleksey/mockee.ai.git
   cd mockee.ai
   ```
2. Install dependencies
   npm install
3. Set up environment variables
   Create a .env.local file in the root of your project and add:
   NEXT_PUBLIC_VAPI_WEB_TOKEN=
   NEXT_PUBLIC_VAPI_WORKFLOW_ID=
   GOOGLE_GENERATIVE_AI_API_KEY=
   NEXT_PUBLIC_BASE_URL=

NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=

FIREBASE_PROJECT_ID=
FIREBASE_CLIENT_EMAIL=
FIREBASE_PRIVATE_KEY=
Replace each placeholder with your actual credentials. 4. Run the development server
npm run dev
Then open http://localhost:3000 in your browser to use the app.
Maintenance Guidelines
• Keep .env.local updated when rotating API keys or changing services.
• If new packages are added, run npm install and commit the updated package-lock.json.
• If structural changes are made, type Start. in CLINE to refresh reasoning.
• Review /app, /lib, and /components for clean, maintainable code.
• Monitor Firebase and Vapi API for changes that may require updates.
• Use CLINE to regenerate documentation and ensure semantic consistency across business logic and implementation.
