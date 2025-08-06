# Two Words - A Minimalist Search Engine

🔍 **Two Words** is a minimalist search engine that forces users to think creatively by limiting searches to exactly two words. This constraint drives innovation and focused discovery.

## 🎯 Core Concept

Users can only input two words per search query. This limitation forces brevity and focus, while encouraging creative phrasing and associations. It positions itself as the anti-Google—not trying to answer everything, but to provide meaningful, high-signal results quickly.

## ✨ Features

- **Two-Word Constraint**: Only allows exactly two words per search
- **Real-time Word Counting**: Visual feedback showing word count
- **Search History**: Remembers recent searches for quick access
- **Example Searches**: Curated examples to inspire users
- **Minimalist UI**: Clean, distraction-free interface using ShadCN UI
- **Responsive Design**: Works seamlessly on desktop and mobile
- **Dark Mode Support**: Built-in dark/light theme support

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd two-words
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: ShadCN UI
- **Deployment**: Vercel-ready

## 📁 Project Structure

```
two-words/
├── src/
│   ├── app/
│   │   ├── page.tsx              # Homepage with search interface
│   │   ├── search/
│   │   │   └── page.tsx          # Search results page
│   │   └── api/
│   │       └── search/
│   │           └── route.ts      # Search API endpoint
│   ├── components/
│   │   └── ui/                   # ShadCN UI components
│   └── lib/
│       └── utils.ts              # Utility functions
├── public/                       # Static assets
└── package.json
```

## 🎨 Design Philosophy

- **Minimalism**: Clean, uncluttered interface
- **Focus**: Two-word constraint drives creative thinking
- **Speed**: Fast, responsive search experience
- **Inspiration**: Encourages exploration and discovery

## 🔮 Future Enhancements

- [ ] Real search engine integration
- [ ] Voice search capability
- [ ] Search analytics and insights
- [ ] API for third-party integrations
- [ ] Premium features for power users
- [ ] Browser extension
- [ ] Mobile app

## 💡 Use Cases

- **Creative Exploration**: Writers, poets, and artists looking for inspiration
- **Trend Surfing**: Quickly check associations between terms
- **Idea Validation**: Entrepreneurs testing concept pairings
- **Fast Research**: Instant overviews of topic connections
- **Domain Search**: Finding original brand name combinations

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🚀 Deployment

The project is ready for deployment on Vercel:

```bash
npm run build
```

## 📞 Contact

For questions or feedback, reach out to the development team.

---

**Two Words** - Where constraint meets creativity, and discovery begins with just two words.
