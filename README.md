# Staying in Bern Landing Page

[![Next.js](https://img.shields.io/badge/Next.js-14.2-black?style=flat&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1-38B2AC?style=flat&logo=tailwind-css)](https://tailwindcss.com/)

**🌐 Live Site:** [https://staying-in-bern-qhxsngo88-stayinginberns-projects.vercel.app](https://staying-in-bern-qhxsngo88-stayinginberns-projects.vercel.app)

A vibrant community hub in Bern where locals and international volunteers come together to socialize, connect, and build lasting friendships through shared experiences.

## 🌟 About

**Staying in Bern** is a community-driven platform that bridges the gap between Bern-based locals and international volunteers. Our mission is to create authentic connections through active socializing, cultural exchange, and shared experiences in the beautiful city of Bern, Switzerland.

### Key Features

- **Multilingual Support**: Available in English, German, and Spanish
- **Community Focused**: Connect locals with volunteers for authentic experiences
- **Event-Driven**: Regular social gatherings and cultural activities
- **Inclusive Platform**: Welcoming environment for diverse communities
- **Mobile Responsive**: Seamless experience across all devices

## 🛠️ Technologies Used

### Core Framework
- **Next.js 14.2** - React framework with App Router
- **React 18** - UI library
- **TypeScript 5** - Type-safe JavaScript

### Styling & UI
- **Tailwind CSS 4.1** - Utility-first CSS framework
- **Tailwind CSS Animate** - Animation utilities
- **Radix UI** - Accessible component primitives
- **Lucide React** - Beautiful icon library
- **Geist Font** - Modern typeface by Vercel

### Internationalization
- **i18next** - Internationalization framework
- **react-i18next** - React bindings for i18next
- **i18next-browser-languagedetector** - Language detection

### Developer Experience
- **PostCSS** - CSS transformation
- **Autoprefixer** - CSS vendor prefixing
- **Class Variance Authority** - Component variant styling
- **clsx & tailwind-merge** - Conditional class management

### Analytics & Performance
- **Vercel Analytics** - Web analytics and insights

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18.x or higher
- **npm** or **yarn** package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/deepnclear/Staying-in-bern-landing-page.git
   cd staying-in-bern
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

### Build for Production

```bash
npm run build
npm start
```

### Linting

```bash
npm run lint
```

## 📁 Project Structure

```
staying-in-bern/
├── app/                      # Next.js App Router pages
│   ├── page.tsx             # Home page
│   ├── layout.tsx           # Root layout
│   ├── not-found.tsx        # 404 page
│   ├── privacy/             # Privacy policy page
│   ├── terms/               # Terms of service page
│   ├── cookies/             # Cookie policy page
│   └── copyright/           # Copyright notice page
├── components/              # React components
│   ├── ui/                  # UI primitives
│   ├── hero-section.tsx     # Hero section
│   ├── benefits-section.tsx # Benefits section
│   ├── header.tsx           # Navigation header
│   ├── footer.tsx           # Site footer
│   ├── error-boundary.tsx   # Error handling
│   └── ...
├── lib/                     # Utilities and configurations
│   └── i18n/               # Internationalization
│       ├── i18n.ts         # i18n configuration
│       └── locales/        # Translation files
│           ├── en.json     # English
│           ├── de.json     # German
│           └── es.json     # Spanish
├── public/                  # Static assets
└── package.json            # Project dependencies
```

## 🌍 Supported Languages

- **English** (en)
- **German** (de) - Deutsch
- **Spanish** (es) - Español

## 🎨 Features

### User Experience Enhancements
- ✅ **Loading States** - Visual feedback for external form submissions
- ✅ **Error Boundaries** - Graceful error handling with user-friendly messages
- ✅ **Smooth Animations** - Mobile menu with slide-in/fade effects
- ✅ **Custom 404 Page** - Branded error page with helpful navigation

### Accessibility
- ARIA labels for interactive elements
- Semantic HTML structure
- Keyboard navigation support
- Screen reader compatibility

### Performance
- Optimized images with Next.js Image component
- Code splitting and lazy loading
- Fast page transitions
- Vercel Analytics integration

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some amazing feature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

### Development Guidelines

- Follow TypeScript best practices
- Maintain existing code style
- Add translations for all new user-facing text
- Test on mobile and desktop devices
- Ensure accessibility standards are met

## 📧 Contact

- **Email**: hello@stayinginbern.ch
- **Instagram**: [@stayinginbern](https://www.instagram.com/stayinginbern/)
- **Facebook**: [Staying in Bern](https://www.facebook.com/people/Staying-in-Bern/61579405777769/)
- **LinkedIn**: [Connect Bern](https://www.linkedin.com/company/connect-bern-staying-in-bern/about/)
- **Meetup**: [Meetup Bern](https://www.meetup.com/meetup-bern/events/jvqxstyhcnbdc/)

## 💝 Pro Bono Development

This landing page was developed **pro bono** by [@deepnclear](https://github.com/deepnclear) to support community building and social connection in Bern. The project is a testament to the power of technology in bringing people together and fostering meaningful relationships across cultures.

---

**Made with ❤️ in Switzerland**

© 2025 Staying in Bern. All rights reserved.
