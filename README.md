# Task Dashboard

Task Dashboard is a Next.js app that fetches user data from JSONPlaceholder and presents it in a clean dashboard with multiple UI states and a validated contact form.

## What This Project Does

- Fetches and displays users from a public API
- Supports two display modes:
  - Card view
  - Table view
- Handles all common UI states:
  - Loading
  - Error (with retry)
  - Empty
  - Success
- Provides a contact form with client-side validation using Zod + React Hook Form
- Uses React Query for API state, caching, and refetch behavior

## Tech Stack

- Next.js 16 (App Router)
- React 19
- TypeScript (strict mode)
- Tailwind CSS 4
- `@tanstack/react-query`
- `react-hook-form`
- `zod`

## Default Port

This project is configured to run on **port `3338`** by default.

- Dev: `next dev -p 3338`
- Prod start: `next start -p 3338`

## Project Structure

```text
task_dash/
  app/
    dashboard/page.tsx        # Main dashboard page
    globals.css               # Global styles
    layout.tsx                # Root layout
    page.tsx                  # Landing page
    providers.tsx             # React Query provider
  components/
    DashboardCard.tsx         # User card UI
    DataTable.tsx             # Table UI for users
    EmptyState.tsx            # Empty-state UI
    ErrorState.tsx            # Error-state UI with retry
    Form.tsx                  # Contact form + validation
    Loader.tsx                # Loading skeletons
  hooks/
    useUsers.ts               # User query hook
  lib/
    react-query.ts            # Query client configuration
  services/
    api.ts                    # API requests
  types/
    index.ts                  # Shared TypeScript types
```

Note: a mirrored `src/` tree is also present. Current runtime imports (`@/*`) resolve from the repository root.

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Install Dependencies

```bash
npm install
```

### Run in Development

```bash
npm run dev
```

Open:

- `http://localhost:3338`
- `http://localhost:3338/dashboard`

## Available Scripts

```bash
npm run dev      # start dev server on 3338
npm run build    # production build
npm run start    # start production server on 3338
npm run lint     # run ESLint
```

## API Details

- Base URL: `https://jsonplaceholder.typicode.com`
- Endpoint used: `/users`

If the API fails or is unreachable, the dashboard shows the `ErrorState` with a retry action.

## Validation Rules (Contact Form)

- `name`
  - Required
  - Minimum length: 3
  - Maximum length: 50
- `email`
  - Required
  - Must be valid email format

## React Query Behavior

- Query key: `['users']`
- Data fetched through `services/api.ts`
- Built-in handling for loading, error, and refetch

## Manual Functionality Checklist

1. Open `/` and verify landing page loads.
2. Open `/dashboard` and verify users are shown.
3. Toggle `Card View` and `Table View`.
4. Disconnect internet or force API failure and verify error + retry.
5. Submit invalid form data and check validation messages.
6. Submit valid form data and confirm success feedback appears.

## Troubleshooting

### Port Already in Use

Run on a different port temporarily:

```bash
npm run dev -- -p 3340
```

### Lint Issues

```bash
npm run lint
```


## Notes

- This project is intentionally client-focused and uses a public mock API.
- No `.env` variables are required for local run in current implementation.
