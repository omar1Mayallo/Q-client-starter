import React from "react";
import ReactDOM from "react-dom/client";
import QueryProvider from "./providers/QueryProvider.tsx";
import NotifyProvider from "./providers/NotifyProvider.tsx";
import ThemeProvider from "./providers/ThemeProvider.tsx";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./i18n/config.ts";

import "@fontsource/cairo/300.css"; // Light
import "@fontsource/cairo/400.css"; // Regular
import "@fontsource/cairo/500.css"; // Medium
import "@fontsource/cairo/700.css"; // Bold
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryProvider>
      <NotifyProvider>
        <ThemeProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ThemeProvider>
      </NotifyProvider>
    </QueryProvider>
  </React.StrictMode>,
);
