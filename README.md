# Touree

**Touree** is a travel marketplace monorepo for finding tours, managing bookings, and operating travel packages across customer, admin, and coordinator experiences.

## Repository structure

- `client/` — Primary customer-facing Next.js web app
- `client-admin/` — Admin dashboard app
- `client-coordinator/` — Coordinator dashboard app
- `server/` — NestJS backend API with Prisma and authentication
- `test/` — Shared or repo-level test utilities and cases

## Prerequisites

- Node.js 20+ recommended
- npm or pnpm installed
- Git for repository management

## Install dependencies

From the repository root:

```bash
npm install
npm run setup
```

The `setup` script installs dependencies for all packages:

```bash
npm run setup:server
npm run setup:client
npm run setup:client-admin
npm run setup:client-coordinator
```

## Development commands

### Run the customer app

```bash
cd client
npm run dev
```

### Run the admin app

```bash
cd client-admin
npm run dev
```

### Run the coordinator app

```bash
cd client-coordinator
npm run dev
```

### Run the backend server

```bash
cd server
npm run start:dev
```

## Server package commands

From `server/`:

```bash
npm run build
npm run start
npm run start:dev
npm run start:prod
npm run lint
npm run test
npm run test:watch
npm run test:cov
npm run test:e2e
npm run prisma:generate
npm run prisma:db-push
npm run prisma:db-seed
```

## Formatting

Use the root formatting scripts to format workspace files:

```bash
npm run format-all
npm run format
```

## Notes

- The backend is built with NestJS, Prisma, and MariaDB.
- Frontend packages are Next.js applications using React.
- The root repo uses a monorepo-style setup with package-specific install scripts.

## Contribution

1. Install dependencies from the root.
2. Run the appropriate package locally.
3. Make changes in the matching package directory.
4. Format with `npm run format-all`.

## License

This repository uses the license defined in the root `package.json`.
