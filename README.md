# Meme Generator

This is a Next.js web application that generates meme text and images using OpenAI's DALL-E model. The app includes rate limiting using Unkey to manage the API usage effectively.

## Features

- Generate meme images based on user-provided descriptions.
- Create meme text using OpenAI's chat model.
- Rate limiting to prevent abuse and manage requests.

## Tech Stack

- **Frontend:** Next.js, React, TypeScript
- **Backend:** OpenAI API, Unkey for rate limiting
- **Styling:** Tailwind CSS

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- NPM or Yarn
- OpenAI API Key
- Unkey Root Key

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/AshishViradiya153/AI-meme-genereter.git
   cd meme-generator
   ```
   
2. Install dependencies:

 ```bash
   npm install
   ```

3. Set up environment variables:
Create a .env.local file in the project root and add your keys:
 ```bash
OPENAI_API_KEY=your_openai_api_key
UNKEY_ROOT_KEY=your_unkey_root_key
   ```

4. Run the development server:
 ```bash
npm run dev
   ```

4. Run the development server:
 ```bash
npm run dev
   ```

5. Open your browser:
Go to http://localhost:3000 to see the app in action!

