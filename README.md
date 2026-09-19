# ✦ Rohit Bhardwaj — Portfolio

<p align="center">
  <strong>A modern, interactive developer portfolio built with React, TypeScript and Vite.</strong>
</p>

<p align="center">
  <a href="https://github.com/rishabhbhardwaj-dev/Rohit_Portfolio">
    <img src="https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github" alt="GitHub Repository">
  </a>
  <a href="https://rishabh-portfolio-lac.vercel.app/">
    <img src="https://img.shields.io/badge/Portfolio-Live-000000?style=for-the-badge&logo=vercel" alt="Portfolio">
  </a>
  <a href="https://www.linkedin.com/in/rishabhbhardwaj-tech/">
    <img src="https://img.shields.io/badge/LinkedIn-Profile-0A66C2?style=for-the-badge&logo=linkedin" alt="LinkedIn">
  </a>
</p>

---

## 🚀 About The Project

This repository contains my personal developer portfolio, designed to present my work, projects, services, and technical profile through a modern and highly visual interface.

Rather than following a traditional portfolio layout, the website focuses on:

- Minimal dark aesthetics
- Large typography
- Interactive UI elements
- Smooth animations
- Visual project presentation
- Responsive layouts
- Component-based React architecture

The portfolio is built with a focus on both **development quality and visual experience**.

---

## ✨ Features

- 🎨 Modern dark-themed portfolio design
- 🧑‍💻 Personalized hero section
- 🖼️ Custom profile portrait
- ✨ Smooth entrance animations
- 🧲 Interactive magnetic UI elements
- 📱 Responsive design
- 🧩 Reusable React components
- 🎯 Services section
- 💼 Project showcase
- 🔄 Animated project marquee
- 🧭 Section-based navigation
- ⚡ Fast Vite development environment
- 📦 Production-ready build configuration

---

## 🛠️ Tech Stack

### Frontend

| Technology | Purpose |
|---|---|
| React | User interface development |
| TypeScript | Type-safe JavaScript development |
| Vite | Development server and build tool |
| Tailwind CSS | Styling and responsive layouts |
| Framer Motion | Animations and motion effects |
| Lucide React | Interface icons |

### Development Tools

| Tool | Usage |
|---|---|
| VS Code | Development environment |
| Git | Version control |
| GitHub | Source code hosting |
| Vercel | Deployment |

---

## 📂 Project Structure

```text
Rohit_Portfolio/
│
├── public/
│   └── rishabh-portrait.png
│
├── src/
│   │
│   ├── components/
│   │   ├── AnimatedText.tsx
│   │   ├── ContactButton.tsx
│   │   ├── FadeIn.tsx
│   │   ├── LiveProjectButton.tsx
│   │   └── Magnet.tsx
│   │
│   ├── sections/
│   │   ├── AboutSection.tsx
│   │   ├── HeroSection.tsx
│   │   ├── MarqueeSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   └── ServicesSection.tsx
│   │
│   ├── App.tsx
│   ├── data.ts
│   ├── index.css
│   ├── main.tsx
│   └── vite-env.d.ts
│
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

---

## 🎨 Portfolio Sections

### Hero

The hero section introduces the portfolio with:

- Personal branding
- Navigation links
- Large typography
- Developer introduction
- Interactive portrait
- Contact CTA

### About

The About section provides an introduction and gives visitors more context about my approach to development and creative work.

### Services

The portfolio currently presents services including:

- **3D Modeling**
- **Rendering**
- **Motion Design**
- **Branding**
- **Web Design**

### Projects

A dedicated project section showcases selected work through a visual layout with project imagery and information.

### Marquee

An animated visual marquee displays project previews and adds motion to the overall browsing experience.

---

## 🧩 Reusable Components

The project uses reusable React components to keep the interface modular and maintainable.

### `FadeIn`

A reusable animation component for smoothly revealing elements as they appear.

### `Magnet`

Creates an interactive magnetic cursor effect for selected interface elements.

### `AnimatedText`

Handles animated typography and text presentation.

### `ContactButton`

A reusable animated contact call-to-action component.

### `LiveProjectButton`

Provides a consistent interface for project-related actions.

---

## 📸 Personalization

The portfolio has been customized from the original template/design to represent **Rishabh Bhardwaj**.

The hero section uses a locally stored portrait:

```text
/public/rishabh-portrait.png
```

The portfolio branding, hero text, and personal information have also been customized for the developer profile.

---

## 💻 Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm
- Git

You can verify your installation with:

```bash
node --version
npm --version
git --version
```

---

## 📥 Installation

### 1. Clone the repository

```bash
git clone https://github.com/rishabhbhardwaj-dev/Rohit_Portfolio.git
```

### 2. Enter the project directory

```bash
cd Rohit_Portfolio
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Vite will provide a local development URL in the terminal, usually:

```text
http://localhost:5173
```

---

## 🏗️ Production Build

To create an optimized production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

The generated production files are placed inside:

```text
dist/
```

---

## 📱 Responsive Design

The portfolio is designed to work across different screen sizes, including:

- 📱 Mobile
- 📟 Tablet
- 💻 Laptop
- 🖥️ Desktop

Responsive Tailwind CSS utilities are used throughout the interface to adapt layouts and typography.

---

## 🔐 Environment Variables

The project currently does not require sensitive environment variables for the main portfolio interface.

If environment variables are added in the future, they should be stored in a local `.env` file and should **never be committed to GitHub**.

The repository includes:

```text
.env
.env.local
```

in `.gitignore`.

---

## 🚀 Deployment

The project is configured as a Vite application and can be deployed using Vercel or another platform that supports Vite applications.

### Build command

```bash
npm run build
```

### Output directory

```text
dist
```

### Deployment

The GitHub repository can be connected to Vercel for automatic deployments whenever changes are pushed to the repository.

---

## 🔮 Future Improvements

Planned improvements may include:

- [ ] Add detailed project case studies
- [ ] Add a dedicated contact form
- [ ] Improve SEO metadata
- [ ] Add custom Open Graph preview image
- [ ] Add more interactive page transitions
- [ ] Add accessibility improvements
- [ ] Add additional project categories
- [ ] Add GitHub activity integration
- [ ] Improve loading and image optimization
- [ ] Continue refining mobile interactions

---

## 👨‍💻 About Me

I'm **Rishabh Bhardwaj**, a Computer Science & Engineering developer interested in building modern web applications, AI-powered products, and interactive digital experiences.

My interests include:

- Full-stack development
- AI-powered applications
- Modern frontend development
- Backend systems
- Interactive web experiences
- Creative UI development

I enjoy taking ideas from concept to a working product — from designing interfaces and writing frontend code to building backend systems and integrating modern technologies.

---

## 🌐 Connect With Me

<p align="center">

<a href="https://github.com/rishabhbhardwaj-dev">
  <img src="https://img.shields.io/badge/GitHub-rishabhbhardwaj--dev-181717?style=for-the-badge&logo=github" alt="GitHub">
</a>

<a href="https://www.linkedin.com/in/rishabhbhardwaj-tech/">
  <img src="https://img.shields.io/badge/LinkedIn-Rishabh%20Bhardwaj-0A66C2?style=for-the-badge&logo=linkedin" alt="LinkedIn">
</a>

<a href="https://rishabh-portfolio-lac.vercel.app/">
  <img src="https://img.shields.io/badge/Portfolio-Visit%20Website-000000?style=for-the-badge&logo=vercel" alt="Portfolio">
</a>

</p>

---

## ⭐ Support

If you find this project interesting, consider giving the repository a ⭐ on GitHub.

---

<p align="center">
  <strong>Built with React, TypeScript & creativity.</strong>
</p>

<p align="center">
  © 2026 Rishabh Bhardwaj
</p>