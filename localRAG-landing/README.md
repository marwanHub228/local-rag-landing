# local-rag-landing

**A privacy-first, local RAG application.**

> Your documents, your model, your machine. No data leaves your computer.

## Features

- **100% Offline** - Works without internet
- **Privacy-First** - All data stays on your machine
- **Local LLM** - Uses Ollama for inference
- **Multi-Format Support** - PDF, Markdown, plain text
- **Source Citations** - See exactly where answers come from
- **Open Source** - Fully transparent, auditable code

## Tech Stack

| Component | Technology |
|-----------|------------|
| UI | React + Vite |
| LLM | Ollama (Phi-3.5-mini / Llama 3.2 1B) |
| Embeddings | all-MiniLM-L6-v2 |
| Vector DB | ChromaDB |

## Landing Page Sections

- **Hero** - Introduction and call-to-action
- **About Us** - Features for businesses and students
- **Pricing** - Three tiers (Free, Professional, Enterprise)
- **Contact** - Email, phone, and address

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/marwanHub228/local-rag-landing.git
cd local-rag-landing
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

### 4. Build for production

```bash
npm run build
```

## Project Structure

```
local-rag-landing/
├── src/
│   ├── assets/            # Images and static assets
│   ├── App.jsx            # Main React component
│   ├── App.css            # Component styles
│   ├── index.css          # Global styles
│   └── main.jsx           # Entry point
├── public/                 # Public assets
├── index.html             # HTML template
├── package.json           # Dependencies
├── vite.config.js        # Vite configuration
├── eslint.config.js      # ESLint configuration
└── README.md              # This file
```

## Tech Stack

- **React** - UI framework
- **Vite** - Build tool and dev server
- **CSS** - Styling

## License

MIT
