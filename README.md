# Project Overview

This project consists of two main tasks:

1. **Task 1:** Implement a Landing Page based on a provided Figma design.
2. **Task 2:** Create a route that fetches data from an external API with client-side caching and proper error handling.

## Technologies Used
- React (TypeScript)
- Styled Components (Theme-based styling)
- React Router
- Jest (Testing)
- Axios / React Query (Data fetching & Caching)
- Redux / XState (State management)

---

## Task 1: Landing Page
- **File:** `src/pages/LandingPage.tsx`
- **Design:** The Landing Page is implemented using Styled Components and follows a headless UI approach.
- **Features:**
  - Uses a `theme.ts` file for consistent styling.
  - Components are structured for reuse and maintainability.
  - The page is integrated into the app via React Router.
  - Jest test cases are written for component validation.

---

## Task 2: API Fetching with Client-side Caching
- **File:** `src/pages/Temp.tsx`
- **Description:** This component fetches and displays GitHub repositories based on user input.
- **Features:**
  - Uses **React Query** / Axios for fetching data from an external REST API.
  - Implements **client-side caching** to store API responses, reducing unnecessary network requests.
  - Handles authentication errors (401 Unauthorized) and token expiration.
  - Uses Redux / XState for rendering fetched data in a headless UI manner.
  
### Key Code Elements:
- **Styled Components**: The UI is built using `styled-components`.
- **React State Management**: `useState` is used for handling user input.
- **API Request Handling**: Fetching repositories using `RepoList.tsx` component.
- **Client-side Caching**: Ensures faster subsequent API requests.

---

## Project Structure
```
my-project/
├── public/                  # Public assets
├── src/
│   ├── api/                 # API calls
│   ├── components/          # Reusable UI components
│   ├── hooks/               # Custom hooks
│   ├── pages/               # LandingPage.tsx (Task 1), Temp.tsx (Task 2)
│   ├── redux/               # State management
│   ├── theme/               # Theme configuration
│   ├── utils/               # Utility functions
│   ├── App.tsx              # Main App component
│   ├── index.tsx            # Entry point
│
├── .env                     # Environment variables
├── package.json             # Dependencies and scripts
├── README.md                # Project documentation
└── ...
```

---

## Setup Instructions
### Prerequisites
- Node.js installed
- GitHub API token (if required)

### Installation Steps
1. Clone the repository:
   ```bash
   git clone <repo-url>
   cd my-project
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open `http://localhost:3000` in your browser.

---

## Testing
Run Jest test cases:
```bash
npm test
```

---

## Future Improvements
- Implement better UI animations.
- Enhance caching strategy with IndexedDB for persistence.
- Improve authentication handling with OAuth login.

---

## Contributors
- **Your Name** (Developer)

---

## License
This project is licensed under the MIT License.

