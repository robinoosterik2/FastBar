# FastBar

A modern bar ordering system built with React and NestJS.

## 🚀 Features

- **Frontend**: Modern React application with TypeScript
- **Backend**: Robust NestJS API server with TypeORM
- **Database**: PostgreSQL
- **Authentication**: JWT-based authentication
- **Real-time**: WebSocket support for live updates (WORK IN PROGRESS)

## 🏗️ Project Structure

```
.
├── backend/           # NestJS backend application
├── frontend/         # React frontend application
├── notes/            # Project documentation and notes
└── README.md
```

## 🛠️ Development Setup

### Prerequisites

- Node.js (v20+)
- pnpm
- PostgreSQL
- Docker

### Getting Started

1. Clone the repository
2. Install dependencies:

   ```bash
   cd backend
   pnpm install

   cd ../frontend
   pnpm install
   ```

3. Set up environment variables (see `.env.example`)
4. Start the development servers:

   ```bash
   docker compose up --build
   ```

## 📚 Documentation

- [Backend Documentation](./backend/README.md)
- [Development Notes](./notes/)
- [Project TODOs](./notes/TODO.md)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
