# ACL Frontend

React + Vite + TypeScript frontend foundation.

## Stack

- React + TypeScript + Vite
- Tailwind CSS v4
- shadcn/ui-ready utilities
- React Router
- Zod + React Hook Form
- Axios
- TanStack Query
- TanStack Table
- Lucide React

## Getting started

Requirements: Node.js 20.19+ or 22.12+.

```bash
npm install
npm run dev
```

## Environment

Copy `.env.example` to `.env.local` and configure `VITE_API_BASE_URL`.

## shadcn/ui

After installing dependencies, initialize shadcn/ui:

```bash
npx shadcn@latest init
```

Then add components as needed, for example:

```bash
npx shadcn@latest add button card input table dialog form
```
