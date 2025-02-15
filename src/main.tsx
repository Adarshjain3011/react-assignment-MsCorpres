import React from "react";
import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";

import App from "./App";
import theme from "./theme/theme.ts";
import "./index.css";

import store from "./redux/store.ts";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ThemeProvider>
      </QueryClientProvider>
    </Provider>
  </StrictMode>
);


