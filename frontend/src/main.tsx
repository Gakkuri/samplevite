// @ts-expect-error - no types for modulepreload-polyfill
import "vite/modulepreload-polyfill";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: (
      <div>
        <p>This is about us </p>
        <p>
          <a href="/accounts/login/">Click to Sign in</a>
        </p>
        <p>
          <a href="/accounts/signup/">Click to Sign up</a>
        </p>
        <p>
          <a href="/">Go Back Home</a>
        </p>
      </div>
    ),
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
