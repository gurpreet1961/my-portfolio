# Gurpreet Singh — Developer Portfolio

A modern, interactive developer portfolio built with React, TypeScript, and Three.js. Features a 3D animated hero scene, live GitHub project feed, LeetCode stats, and a fully responsive design with dark/light theme support.

---

## Live Preview

> Run locally with `npm run dev` and open [http://localhost:5173](http://localhost:5173)

---

## Features

- **3D Hero Scene** — Interactive globe with orbit rings, microservices network graph, and floating wireframe shapes powered by React Three Fiber
- **Professional Experience** — Timeline layout showcasing career progression from Accenture → GlobalLogic → ADP
- **Live GitHub Projects** — Fetches repositories dynamically via the GitHub API, merged with featured Crio.do projects
- **Skills Section** — Categorized tech stack across Frontend, Backend, Tools, and Problem Solving
- **LeetCode Stats** — Live coding stats widget
- **Dark / Light Theme** — System preference detection with manual toggle, persisted in localStorage
- **Smooth Animations** — Page transitions and scroll animations via Framer Motion
- **Fully Responsive** — Mobile-first layout using Tailwind CSS

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 + TypeScript |
| Build Tool | Vite 7 |
| 3D Graphics | Three.js, React Three Fiber, Drei |
| Styling | Tailwind CSS v4, PostCSS |
| Animations | Framer Motion |
| Routing | React Router DOM v7 |
| HTTP | Axios |
| Icons | Lucide React |
| Linting | ESLint + TypeScript ESLint |

---

## Project Structure

```
src/
├── components/
│   ├── Hero.tsx          # 3D animated landing section
│   ├── Experience.tsx    # Career timeline
│   ├── Skills.tsx        # Tech stack grid
│   ├── Projects.tsx      # GitHub + Crio project cards
│   ├── LeetCodeStats.tsx # Coding stats widget
│   ├── Navbar.tsx        # Navigation + theme toggle
│   └── Contact.tsx       # Contact form / links
├── services/
│   └── githubService.ts  # GitHub API integration
├── App.tsx
└── main.tsx
```

---

## Getting Started

**Prerequisites:** Node.js >= 22

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start Vite dev server with HMR |
| `npm run build` | Type-check + production build |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint across the codebase |

---

## Deployment

The `dist/` folder produced by `npm run build` is a static site — deploy to any static host:

- **Vercel** — connect the repo, set build command to `npm run build`, output dir to `dist`
- **Netlify** — same settings as above
- **GitHub Pages** — use the `gh-pages` package or a GitHub Actions workflow

---

## Author

**Gurpreet Singh**  
Software Engineer @ ADP  
[GitHub](https://github.com/gurpreet012guru) · [LinkedIn](https://linkedin.com/in/gurpreet-singh)
