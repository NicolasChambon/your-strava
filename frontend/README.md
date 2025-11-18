# Frontend - Your Strava

Modern user interface to visualize and manage your Strava activities.

## 🛠️ Technologies

- **Framework**: React 19
- **Build tool**: Vite 7
- **Language**: TypeScript
- **Styling**: TailwindCSS 4
- **Routing**: React Router v7
- **UI Components**: Radix UI
- **HTTP Client**: Axios
- **Data Fetching**: SWR
- **Linting**: ESLint

## 📁 Project Structure

```
frontend/
├── public/                    # Static assets
├── src/
│   ├── components/            # Reusable components
│   │   ├── Home/              # Home page specific components
│   │   └── ui/                # Base UI components (shadcn/ui)
│   ├── lib/                   # Utilities and helpers
│   │   ├── api.ts             # API client
│   │   ├── stravaAuth.ts      # Strava authentication
│   │   └── utils.ts           # Utility functions
│   ├── pages/                 # Application pages
│   │   ├── Home.tsx           # Home page
│   │   ├── Callback.tsx       # OAuth callback page
│   │   └── Pictures.tsx       # Pictures page
│   ├── types/                 # TypeScript types
│   ├── App.tsx                # Root component
│   ├── main.tsx               # Entry point
│   └── index.css              # Global styles
└── package.json
```

## 🚀 Installation

1. Install dependencies

```bash
npm install
```

2. Create a `.env.development.local` file with the following variables:

```env
VITE_BACKEND_URL="http://localhost:3001"
VITE_STRAVA_CLIENT_ID="your_client_id"
```

## 🏃 Available Commands

```bash
# Start development server
npm run dev

# Production build
npm run build

# Preview production build
npm run preview

# Lint the code
npm run lint
```

## 🎨 UI Components

UI components are based on [shadcn/ui](https://ui.shadcn.com/) and [Radix UI](https://www.radix-ui.com/), located in `src/components/ui/`:

- `button` - Buttons with different variants
- `dialog` - Modals and dialogs
- `field` - Form fields
- `input` - Input fields
- `label` - Form labels
- `separator` - Visual separators
- `spinner` - Loading indicator
- `typography*` - Typography components

## 🔄 Strava Authentication Flow

1. User clicks "Connect with Strava"
2. Redirect to Strava authorization page
3. Callback to `/callback` with authorization code
4. Exchange code for access token via backend API
5. Store token and redirect to activities page

## 📡 API Client

The API client (`src/lib/api.ts`) uses Axios and automatically configures:

- Backend base URL
- Default headers
- Error handling

## 🎨 Styling

- **TailwindCSS 4** for utility styling
- **Radix UI** for accessible components
- **class-variance-authority** for component variants
- **lucide-react** for icons

## 🌐 Routes

- `/` - Home page with Strava authentication
- `/callback` - OAuth callback page
- `/pictures` - Activity pictures visualization page

## 📝 Notes

- The `src/components/ui/` folder is excluded from linting
- Components use the Radix UI design system
- The application uses SWR for data caching and synchronization
- ESM mode is enabled (`"type": "module"`)
