# Afrodigital Website

This is a Vite + React + TypeScript application using React Router for client-side routing.

## Deployment

This application is deployed on Vercel. The `vercel.json` configuration file is required to handle SPA routing properly.

### SPA Routing on Vercel

The `vercel.json` file contains a rewrite rule that redirects all requests to `index.html`. This is essential for Single Page Applications using client-side routing (React Router) because:

- When users directly navigate to routes like `/about` or `/services`, Vercel needs to serve the `index.html` file
- Without this configuration, Vercel would try to find actual files at those paths and return 404 errors
- The rewrite rule ensures that React Router can handle the routing client-side

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Tech Stack

- **Framework:** React 18
- **Build Tool:** Vite
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** Radix UI + shadcn/ui
- **Routing:** React Router v6
- **Form Handling:** React Hook Form + Zod
- **State Management:** TanStack Query
