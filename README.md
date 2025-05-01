# Persona AI

A modern React application that leverages Google's Generative AI to create personalized AI experiences.

## 🚀 Features

- React-based modern UI
- Integration with Google's Generative AI
- Responsive design with Tailwind CSS
- Environment variable support for secure API key management
- ESLint for code quality

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v18 or higher)
- npm or yarn package manager
- Google Cloud account with Generative AI API access

## 🛠️ Installation

1. Clone the repository:

```bash
git clone [your-repository-url]
cd persona-ai
```

2. Install dependencies:

```bash
# Using npm
npm install

# Using yarn
yarn install
```

3. Create a `.env` file in the root directory and add your Google AI API key:

```
VITE_GOOGLE_AI_API_KEY=your_api_key_here
```

## 🚀 Running the Application

### Development Mode

```bash
# Using npm
npm run dev

# Using yarn
yarn dev
```

The application will start on `http://localhost:5173`

### Building for Production

```bash
# Using npm
npm run build

# Using yarn
yarn build
```

### Preview Production Build

```bash
# Using npm
npm run preview

# Using yarn
yarn preview
```

## 🧹 Linting

To run the linter:

```bash
# Using npm
npm run lint

# Using yarn
yarn lint
```

## 📁 Project Structure

```
persona-ai/
├── public/          # Static assets
│   ├── assets/      # Images and other assets
│   ├── components/  # React components
│   ├── App.jsx      # Main application component
│   ├── App.css      # Main styles
│   ├── main.jsx     # Application entry point
│   └── index.css    # Global styles
├── .env             # Environment variables
├── .gitignore       # Git ignore file
├── package.json     # Project dependencies
├── vite.config.js   # Vite configuration
└── README.md        # Project documentation
```

## 🔧 Technologies Used

- React 19
- Vite
- Tailwind CSS
- Google Generative AI
- ESLint
- dotenv

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
