# Ecosystem Partnership Evaluation Dashboard

A Next.js dashboard for Qualcomm's ecosystem partnership evaluations. The app provides interactive analytics, partner drill-downs, and investment insights to help teams assess collaboration opportunities.

## Features

- **Executive overview** – displays partner statistics such as total evaluations, investment decisions, and average evaluation time.
- **Interactive metrics tabs** – switch between overview, technical, business, and trend metrics with chart visualizations powered by Recharts.
- **Partner list with detail dialog** – browse partner cards with status badges, ROI indicators, and a dialog showing technical/business breakdowns, ROI projections, and memo-ready summaries.
- **Responsive design** – Tailwind CSS styling with Radix UI components for an accessible layout across devices.

## Tech Stack

- [Next.js 15](https://nextjs.org/) with the App Router
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS v4](https://tailwindcss.com/) with Radix UI and shadcn/ui primitives
- [Recharts](https://recharts.org/) for data visualization

## Project Structure

```
├── app/                  # Next.js app directory (layout, global styles, root page)
├── components/           # Reusable UI and dashboard components
│   ├── charts/           # Chart wrappers for partner analytics
│   └── ui/               # shadcn/ui derived primitives
├── hooks/                # Custom React hooks
├── lib/                  # Utility modules and configuration helpers
├── public/               # Static assets
└── styles/               # Tailwind configuration helpers
```

## Getting Started

### Prerequisites

- Node.js 18+
- [pnpm](https://pnpm.io/) (recommended) or npm/yarn

### Installation

```bash
pnpm install
```

### Development

```bash
pnpm dev
```
This runs the development server on [http://localhost:3000](http://localhost:3000).

### Additional Scripts

```bash
pnpm build   # Create an optimized production build
pnpm start   # Start the production server after building
pnpm lint    # Run ESLint on the project
```

## Environment Variables

No environment variables are required for local development. Add your own `.env` file if integrating data sources or external APIs.

## Deployment

1. Build the project: `pnpm build`
2. Start the production server: `pnpm start`
3. Configure your hosting provider (Vercel, Netlify, etc.) to use the build command above.

## Contributing

1. Fork the repository and create a feature branch.
2. Install dependencies with `pnpm install`.
3. Submit a pull request with a clear description of changes.

---

© 2025 Qualcomm. All rights reserved.
