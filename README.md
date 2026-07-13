<div align="center">

<img src="public/L logo.jpg" alt="Project Logo" width="80" height="80" />

# Gokul R — Technical Portfolio

### Data Analysis, Machine Learning, and Agentic AI Systems

[![Next.js](https://img.shields.io/badge/Next.js-16.1.6-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.4-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Three.js](https://img.shields.io/badge/Three.js-0.170-000000?style=for-the-badge&logo=threedotjs&logoColor=white)](https://threejs.org/)
[![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)

[![Live Demo](https://img.shields.io/badge/Live_Demo-Visit_Portfolio-6366f1?style=for-the-badge)](https://gokul-r-portfolio.vercel.app)
[![GitHub](https://img.shields.io/badge/GitHub-Lukog10-181717?style=for-the-badge&logo=github)](https://github.com/Lukog10)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=for-the-badge&logo=linkedin)](https://linkedin.com/in/GokulRlukoG)

---

![GitHub last commit](https://img.shields.io/github/last-commit/Lukog10/Gokul_R_Portfolio?style=flat-square&color=6366f1)
![GitHub repo size](https://img.shields.io/github/repo-size/Lukog10/Gokul_R_Portfolio?style=flat-square&color=a855f7)
![GitHub stars](https://img.shields.io/github/stars/Lukog10/Gokul_R_Portfolio?style=flat-square&color=f59e0b)
![License](https://img.shields.io/badge/license-MIT-22c55e?style=flat-square)

</div>

---

## Executive Summary

A production-grade, highly interactive portfolio application engineered to showcase technical expertise across Data Science, Machine Learning, and Agentic AI. Moving beyond traditional static documentation, this platform delivers an immersive, high-performance user experience powered by real-time telemetry integrations, dynamic animations, and responsive performance-aware styling.

---

## System Architecture & Technologies

The repository is built on a modern, decoupled architecture designed for maximal performance, scalability, and maintainability.

### Core Framework
- **Next.js 16 (App Router):** Leverages server-side rendering (SSR), static site generation (SSG), and advanced caching mechanisms for optimal content delivery.
- **React 19 & TypeScript:** Enforces strict type safety and modern reactive paradigms across custom UI components.

### 3D Graphics & Visual FX
- **Three.js & React Three Fiber (R3F):** Powers WebGL rendering systems.
- **Custom GLSL Shaders:** Utilized for bespoke background elements, including the Hyperspeed and warp effects.

### UI/UX Choreography
- **Framer Motion & GSAP:** Drives complex, timeline-based animations, micro-interactions, and fluid page transitions.
- **Tailwind CSS & Shadcn UI:** Provides a scalable, utility-first design system utilizing robust Radix UI accessibility primitives.
- **Lenis:** Implements smooth, premium scrolling dynamics.

### System Integrations & APIs
- **GraphQL & REST Pipelines:** Consumes GitHub GraphQL for repository statistics and WakaTime API for real-time code telemetry.
- **Next-Intl:** Provides a robust English internationalization (i18n) setup for content translation and clean route generation.

---

## Project Structure

```text
Gokul_R_Portfolio/
├── src/
│   ├── app/                          # Next.js 16 App Router Entry Points
│   │   ├── api/                      # Backend API Routes (GitHub, WakaTime, Contact Form)
│   │   ├── projects/                 # Comprehensive Project Directory
│   │   ├── experience/               # Career Timeline and Analytics
│   │   ├── skills/                   # Technical Skill Radar
│   │   └── resume/                   # Custom PDF Rendering Engine (react-pdf)
│   ├── components/
│   │   ├── three/                    # WebGL & R3F Components (Splash, Scene3D)
│   │   ├── sections/                 # Primary Page Layout Structures
│   │   └── ui/                       # Custom Shadcn & Animated Primitives
│   ├── data/
│   │   └── portfolio.ts              # Centralized JSON/TS Data Store
│   ├── hooks/                        # Custom React Hooks (Performance, Intersection)
│   └── styles/                       # Global CSS & Tailwind Directives
├── public/                           # Static Assets (Images, 3D Models, PDFs)
├── next.config.ts                    # Next.js Optimization Configuration
└── tailwind.config.ts                # Custom Design System Configurations
```

---

## Key Features

### 1. Immersive 3D Environments
Implements hardware-accelerated 3D backdrops using `@react-three/drei` and `@react-three/fiber`. Visual effects dynamically adjust and scale based on viewport dimensions.

### 2. Real-Time Telemetry
Dashboards across the platform retrieve and display real-time engineering metrics, utilizing authenticated GraphQL requests to GitHub (activity heatmaps, language breakdown) and WakaTime (coding hours, IDE preferences).

### 3. Interactive PDF Document Viewer
A custom-built document rendering engine utilizing `react-pdf`, allowing users to zoom, rotate, search, and download the resume natively within the browser application without relying on external plugins.

### 4. Performance Diagnostics
The application implements a `usePerformance` hook to evaluate client hardware capabilities in real time, automatically disabling intensive WebGL shaders and complex GSAP animations on low-power or mobile devices to preserve battery life and maintain stable framerates.

---

## Local Development Setup

### Prerequisites
- Node.js >= 18.0.0
- npm >= 9.0.0

### Installation

1. **Clone the repository:**
   ```bash
    git clone https://github.com/Lukog10/Gokul_R_Portfolio.git
    cd Gokul_R_Portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Create a `.env.local` file in the root directory.

   ```env
   NEXT_PUBLIC_GITHUB_USERNAME=Lukog10
   GITHUB_TOKEN=your_personal_access_token
   WAKATIME_API_KEY=your_wakatime_key
   EMAIL_USER=your_smtp_email
   EMAIL_APP_PASSWORD=your_smtp_app_password
   ```

4. **Initialize Development Server:**
   ```bash
   npm run dev
   ```
   Navigate to `http://localhost:3000` to interact with the application.

### Production Build
Execute the following to compile and serve the optimized application bundle:
```bash
npm run build
npm start
```

---

## Project Showcase Overview

The platform currently documents **7 technical projects** spanning multiple engineering disciplines:

| Discipline | Notable Projects | Core Technologies |
|------------|------------------|-------------------|
| **AI & Machine Learning** | VAULT-Aegis AI Security Gateway, Laptop Price Prediction, FWC26 Football Match Predictor | Python, FastAPI, spaCy, Streamlit, Random Forest, XGBoost |
| **Data Science & Analytics** | Video Games Sales Prediction, Land Approval Prediction, Gaming Addiction Analysis, London Bike Ride Analysis | Python, scikit-learn, XGBoost, pandas, seaborn, Tableau, Excel |

---

## License

This project is licensed under the [MIT License](LICENSE).

<div align="center">
  <p>Engineered by Gokul R</p>
</div>
