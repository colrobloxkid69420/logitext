# Logitext - Proof Editor

A modern web-based proof editor for Gentzen-style sequent calculus. Built with Svelte and Tailwind CSS.

## Project Structure

```
web-src/
├── src/
│   ├── components/
│   │   ├── layout/           # Main layout components
│   │   │   ├── Header.svelte
│   │   │   ├── Sidebar.svelte
│   │   │   └── Footer.svelte
│   │   ├── ui/               # Reusable UI components
│   │   │   ├── Button.svelte
│   │   │   ├── Card.svelte
│   │   │   ├── Input.svelte
│   │   │   ├── Modal.svelte
│   │   │   ├── Tabs.svelte
│   │   │   └── Alert.svelte
│   │   └── Router.svelte     # Client-side routing
│   ├── pages/                # Page components
│   │   ├── Dashboard.svelte
│   │   ├── Editor.svelte
│   │   ├── Projects.svelte
│   │   ├── Settings.svelte
│   │   └── Help.svelte
│   ├── lib/                  # Utilities and helpers (placeholder)
│   ├── types/                # TypeScript type definitions
│   ├── assets/               # Static assets
│   │   ├── icons/
│   │   └── images/
│   ├── App.svelte            # Root component
│   ├── main.ts               # Entry point
│   └── styles.css            # Global styles with Tailwind
├── index.html                # HTML entry point
├── vite.config.ts            # Vite configuration
├── tailwind.config.js        # Tailwind CSS configuration
├── postcss.config.js         # PostCSS configuration
├── tsconfig.json             # TypeScript configuration
└── package.json              # Dependencies

```

## Features

This skeleton includes:

- **Complete Layout System**: Header, sidebar navigation, main content area, and footer
- **Page Templates**: Dashboard, editor workspace, projects, settings, and help pages
- **UI Component Library**: Reusable components for buttons, cards, inputs, modals, tabs, and alerts
- **Type Definitions**: TypeScript types for Sequent, ProofStep, Proof, Project, and User
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Client-Side Routing**: Hash-based routing for single-page application navigation
- **Professional Styling**: Modern color scheme with neutral tones and primary blue accent

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Building

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## File Conventions

- `*.svelte` - Svelte components
- `*.ts` - TypeScript files
- Components use PascalCase naming
- Utility functions and helpers are lowercase

## Color Scheme

- **Primary**: `#2563eb` (Blue)
- **Secondary**: `#7c3aed` (Purple)
- **Accent**: `#06b6d4` (Cyan)
- **Success**: `#10b981` (Green)
- **Warning**: `#f59e0b` (Amber)
- **Error**: `#ef4444` (Red)
- **Neutral**: Gray scale from 50 to 900

## Path Aliases

The project uses TypeScript path aliases for cleaner imports:

- `$components/*` - UI and layout components
- `$pages/*` - Page components
- `$lib/*` - Utilities and helpers
- `$types/*` - Type definitions

## Next Steps

1. Connect to a backend API (placeholder for future TypeScript backend)
2. Implement proof editing logic and visualization
3. Add authentication (optional: Supabase)
4. Add state management (Svelte stores)
5. Implement keyboard shortcuts and editor interactions
6. Add proof validation and rule checking
7. Create export functionality for proofs

## Architecture Notes

- The skeleton uses hash-based routing (`#/page-name`)
- All UI is component-based for reusability
- Tailwind CSS is configured with a custom color system
- Components follow the single responsibility principle
- No backend functionality is implemented yet - focus is on UI structure
