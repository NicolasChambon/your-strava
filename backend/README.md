# Backend - Your Strava

REST API for the Your Strava application, handling Strava authentication and user activities.

## 🛠️ Technologies

- **Runtime**: Node.js with TypeScript
- **Framework**: Express 5
- **Database**: PostgreSQL with Prisma ORM
- **Validation**: Zod
- **HTTP Client**: Axios
- **Dev tools**: TSX, Nodemon, ESLint

## 📁 Project Structure

```
backend/
├── prisma/
│   ├── schema.prisma          # Database schema
│   └── migrations/            # Database migrations
├── src/
│   ├── controllers/           # Controllers (routing logic)
│   ├── services/              # Services (business logic)
│   ├── routes/                # Route definitions
│   ├── lib/                   # Utilities and helpers
│   │   ├── errors.ts          # Error handling
│   │   └── prisma.ts          # Prisma client
│   └── index.ts               # Application entry point
└── package.json
```

## 🚀 Installation

1. Install dependencies

```bash
npm install
```

2. Create a `.env.development.local` file with the following variables:

```env
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/your_strava"

# Strava API
STRAVA_CLIENT_ID="your_client_id"
STRAVA_CLIENT_SECRET="your_client_secret"

# Server configuration
BACKEND_PORT=3001
FRONTEND_URL="http://localhost:5173"
```

3. Run Prisma migrations

```bash
npx prisma migrate dev
```

4. (Optional) Open Prisma Studio to visualize the database

```bash
npx prisma studio
```

## 🏃 Available Commands

```bash
# Start the server in development mode
npm run dev

# Lint the code
npm run lint

# Generate Prisma client
npx prisma generate

# Create a new migration
npx prisma migrate dev --name migration_name

# Open Prisma Studio
npx prisma studio
```

## 📡 API Routes

### Authentication

- `GET /auth/url` - Get Strava authentication URL
- `POST /auth/exchange` - Exchange authorization code for a token

### Activities

- `GET /activities` - Retrieve user activities

## 🗄️ Data Model

### User

```prisma
model User {
  id             String    @id @default(cuid())
  stravaUserId   Int       @unique
  accessToken    String
  refreshToken   String
  expiresAt      DateTime
  createdAt      DateTime  @default(now())
  updatedAt      DateTime  @updatedAt
}
```

## 🔒 Security

- CORS configured to accept only requests from the frontend
- Strava tokens stored securely
- Centralized error handling
- Input validation with Zod

## 🐛 Debugging

The server displays errors in the console with:

- Request path
- Error message
- Stack trace
- Timestamp

## 📝 Notes

- The generated Prisma client is located in `src/generated/prisma/`
- Migrations are versioned in `prisma/migrations/`
- The server uses ESM mode (`"type": "module"`)
