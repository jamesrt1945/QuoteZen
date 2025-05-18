# QuoteZen: Your Daily Dose of Inspiration

A web application designed to provide users with inspirational and wise quotes. QuoteZen features a clean interface, random quote generation, and AI-powered suggestions tailored to the user's mood.

# 🖼️ Preview

[quotezen-codecircuit netlify app_](https://github.com/user-attachments/assets/a5f9a4cf-4293-44a9-b9fa-cff2657f0b24)


# 🚀 Features
*   **Random Quote Fetch**: Displays a random quote from a curated collection.
*   **New Quote Button**: Instantly loads a new quote with a smooth animation.
*   **AI-Powered Mood-Based Quote Suggestions**: Leverages Genkit and AI to analyze user's journal entries (text input) and suggest quotes that resonate with their current mood.
*   **Clean & Modern UI**: Built with ShadCN UI components and Tailwind CSS for a visually appealing and responsive experience.
*   **Subtle Animations**: Fade-in effects for quotes to enhance user experience.

# 🛠 Tech Stack
> **Frontend**
*   Next.js (App Router)
*   React
*   TypeScript
*   Tailwind CSS
*   ShadCN UI Components
*   Lucide React Icons

> **AI / Backend Logic**
*   Genkit (for AI flow orchestration)
*   Google AI (e.g., Gemini models via Genkit)

# 📂 Directory Structure
A simplified overview of the project structure:
```
QuoteZen/
├── README.md
├── next.config.ts
├── package.json
├── tailwind.config.ts
├── tsconfig.json
├── .env                     # For API keys and environment variables
├── public/                  # Static assets
└── src/
    ├── app/                 # Next.js App Router (pages, layout)
    │   ├── layout.tsx
    │   ├── page.tsx
    │   └── globals.css      # Global styles and ShadCN theme
    ├── components/          # React components
    │   ├── ui/              # ShadCN UI components
    │   ├── QuoteDisplay.tsx
    │   └── MoodQuoteSuggester.tsx
    ├── ai/                  # Genkit AI flows and configuration
    │   ├── genkit.ts
    │   └── flows/
    │       └── mood-based-quote-suggestions.ts
    ├── data/                # Static data like the initial quotes list
    │   └── quotes.ts
    ├── hooks/               # Custom React hooks
    │   └── use-toast.ts
    └── lib/                 # Utility functions
        └── utils.ts
```

# 📌 Setup & Installation

### 1. Clone the Repository
```bash
git clone <your-repository-url> # Replace with your actual repository URL
cd QuoteZen
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Set Up Environment Variables
Create a `.env` file in the root of your project and add your Google AI API Key:
```env
GOOGLE_API_KEY=YOUR_GOOGLE_AI_API_KEY
```
*Note: Ensure this file is added to `.gitignore` to prevent committing your API key.*

### 4. Run the Application
You'll need to run two processes in separate terminals: the Next.js development server and the Genkit development server.

```bash
# Terminal 1: Start the Next.js frontend
npm run dev
```

```bash
# Terminal 2: Start the Genkit AI development server
npm run genkit:dev
# or for auto-reloading on changes
npm run genkit:watch
```

### 5. Access the Application
Open your browser and navigate to the URL provided by the Next.js development server (usually `http://localhost:9002`).

# ✨ Key AI Functionality

*   **`mood-based-quote-suggestions.ts`**: This Genkit flow (located in `src/ai/flows/`) takes user journal entries as input, analyzes the sentiment, and returns a relevant quote and author. It uses a prompt defined within the flow to instruct the AI model.

# 💡 Future Enhancements

<div style="border: 1px solid #ccc; padding: 10px; border-radius: 5px;">
  <p>✅ User accounts to save favorite quotes.</p>
  <p>✅ Ability to share quotes directly to social media.</p>
  <p>✅ Integration with external quote APIs for a wider variety of quotes.</p>
  <p>✅ More sophisticated sentiment analysis for nuanced mood detection.</p>
  <p>✅ Theme customization options (e.g., dark/light mode toggle, accent colors).</p>
  <p>✅ Categories/tags for quotes and ability to filter by them.</p>
</div>

# 🤝 Contributing
This project was created for the CodeCircuit Hackathon. Contributions, forks, and pull requests are welcome! If you have ideas for improvements or find any bugs, please open an issue.

---

Made with ❤️ for the CodeCircuit Hackathon.
