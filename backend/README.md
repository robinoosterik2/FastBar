# FastBar Backend

A robust NestJS backend for the FastBar application, providing RESTful APIs and real-time functionality.

## 🚀 Features

- **RESTful API** built with NestJS
- **WebSocket** support for real-time features
- **PostgreSQL** database with TypeORM
- **JWT Authentication**
- **Role-based access control**
- **Validation** using class-validator
- **API documentation** with Swagger

## 📦 Prerequisites

- Node.js (v16+)
- pnpm
- PostgreSQL (v13+)

## 🛠️ Installation

1. Install dependencies:

   ```bash
   pnpm install
   ```

2. Set up environment variables. Copy `.env.example` to `.env` and update the values:

   ```bash
   cp .env.example .env
   ```

3. Run database migrations:
   ```bash
   pnpm run migration:run
   ```

## 🚀 Running the App

```bash
# Development
$ pnpm run start:dev

# Production
$ pnpm run build
$ pnpm run start:prod
```

## 🧪 Testing

```bash
# Unit tests
$ pnpm run test

# E2E tests
$ pnpm run test:e2e

# Test coverage
$ pnpm run test:cov
```

## 📚 API Documentation

When the app is running in development mode, you can access the API documentation at:

- Swagger UI: http://localhost:3000/api

## 🏗️ Project Structure

```
.
├── src/
│   ├── auth/               # Authentication module
│   ├── common/             # Common utilities and decorators
│   ├── config/             # Configuration files
│   ├── database/           # Database configuration and migrations
│   ├── modules/            # Feature modules
│   ├── app.controller.ts   # Root controller
│   ├── app.module.ts       # Root module
│   └── main.ts             # Application entry file
├── test/                  # Test files
├── .env.example           # Example environment variables
└── package.json           # Project dependencies and scripts
```

## 🔧 Development

### Generating Resources

To generate a new module with CRUD operations:

```bash
nest g resource modules/name
```

### Database Migrations

```bash
# Generate new migration
pnpm run migration:generate MigrationName

# Run migrations
pnpm run migration:run

# Revert last migration
pnpm run migration:revert
```

## 📝 Notes

- [Database Schema](./notes/database-schema.md)
