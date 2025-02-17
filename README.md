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

Images -->

![image](https://github.com/user-attachments/assets/5f0e891d-e564-4c4d-b4c3-9df29dace6d8)
![image](https://github.com/user-attachments/assets/22491d5a-db3b-48c4-bbd0-3deef5716e4b)
![image](https://github.com/user-attachments/assets/151746ed-77b6-46de-90fb-7e36e3e130f9)
![image](https://github.com/user-attachments/assets/d1ab3814-ae96-4b3c-b2a1-074849b5e8f0)
![image](https://github.com/user-attachments/assets/7f25086c-c5a9-46d2-8460-225812eb0e14)



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

Task 2 Images ->
![image](https://github.com/user-attachments/assets/436b679a-6345-4482-9f25-1617eeb10818)


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
4. Open `http://localhost:5173` in your browser.

---

## Testing
Run Jest test cases:
```bash
npm test
```



