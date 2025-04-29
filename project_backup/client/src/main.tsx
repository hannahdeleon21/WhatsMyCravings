import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Initialize theme based on localStorage or system preference
const initializeTheme = () => {
  // Check if theme is stored in localStorage
  const storedTheme = localStorage.getItem("theme");
  
  if (storedTheme === "dark") {
    document.documentElement.classList.add("dark");
  } else if (storedTheme === "light") {
    document.documentElement.classList.remove("dark");
  } else {
    // If no stored preference, use system preference
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (prefersDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }
};

// Run the initialization
initializeTheme();

createRoot(document.getElementById("root")!).render(
  <App />
);
