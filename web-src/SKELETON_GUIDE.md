# Logitext Skeleton - Quick Reference

## What's Included

This is a **fully functional UI skeleton** with no backend logic. Everything compiles and runs, but there's no actual proof editing functionality yet.

### Layout Structure

**App.svelte** is the root component with a 3-part layout:
- **Header** - Top navigation bar with Logitext logo and user menu
- **Sidebar** - Collapsible navigation with 5 main pages
- **Main Content** - Router that displays the current page
- **Footer** - Footer with links and copyright

### Pages (5 templates ready to extend)

1. **Dashboard** - Overview with recent proofs, quick actions, and statistics
2. **Editor** - Main proof editing workspace with placeholder sections
   - Proof canvas (for visualization)
   - Proof steps panel (for step history)
   - Available rules panel (with proof rules)
   - Console output (for messages)
3. **Projects** - Project management with project cards and proof table
4. **Settings** - User account and editor preferences
5. **Help** - Documentation and FAQs

### UI Components (6 reusable components)

- **Button** - With variants (primary, secondary, outline, danger) and sizes
- **Card** - Container with title and shadow effects
- **Input** - Text input with label and error support
- **Modal** - Centered dialog with backdrop
- **Tabs** - Tab navigation component
- **Alert** - Status alerts (success, warning, error, info)

### Styling

- **Tailwind CSS v4** with custom color system
- **Responsive design** - Mobile-first breakpoints
- **8px spacing system** - Consistent margins and padding
- **Professional color palette** - Blue primary, purple secondary, neutral grays

### Navigation

Currently uses **hash-based routing**:
- `#dashboard` - Dashboard page
- `#editor` - Editor workspace
- `#projects` - Projects list
- `#settings` - Settings page
- `#help` - Help documentation

Click navigation items in the sidebar to test routing.

## Files to Know

### Core Files

- `src/App.svelte` - Root component, layout structure
- `src/main.ts` - Entry point
- `src/styles.css` - Global Tailwind styles
- `vite.config.ts` - Build configuration with path aliases

### Component Directories

- `src/components/layout/` - Header, Sidebar, Footer
- `src/components/ui/` - Reusable UI components
- `src/pages/` - Page templates

### Configuration

- `tailwind.config.js` - Color system and design tokens
- `tsconfig.json` - TypeScript settings with path aliases
- `.env.example` - Template for environment variables

## Customization Starting Points

### To add a new page:
1. Create `src/pages/NewPage.svelte`
2. Add it to the Router.svelte conditions
3. Add navigation item to Sidebar.svelte

### To modify colors:
Edit `tailwind.config.js` in the `colors` section

### To add UI components:
Create in `src/components/ui/` and export from each page

### To connect to backend:
- Update `src/types/index.ts` with API response types
- Create utility functions in `src/lib/`
- Fetch data in page components using `onMount`

## Build & Run

```bash
npm install          # Install dependencies
npm run dev          # Start dev server (localhost:5173)
npm run build        # Build for production
npm run preview      # Preview production build
```

## Architecture Philosophy

- **Component-based** - Everything is a reusable Svelte component
- **Type-safe** - Full TypeScript support with custom types
- **No external state management** - Ready for Svelte stores when needed
- **Modular structure** - Easy to split and organize as it grows
- **Layout flexibility** - Sidebar collapses, responsive grid layouts

## Next Implementation Phase

Once you're ready to add functionality:

1. **Backend connectivity** - Create service layer in `src/lib/`
2. **State management** - Add Svelte stores for proofs and projects
3. **Editor logic** - Implement proof tree visualization in Editor page
4. **Rule engine** - Add TypeScript backend for proof rules and validation
5. **Persistence** - Connect to Supabase or your backend API

The skeleton is ready - just add the proof logic!
