import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  // Simple direct DOM manipulation approach for theme toggling
  const toggleTheme = () => {
    const root = window.document.documentElement;
    // Check if it's currently using dark mode
    const isDark = root.classList.contains("dark");
    
    // Toggle the class
    if (isDark) {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  // Determine current theme for button display
  const isDarkMode = () => {
    if (typeof window !== "undefined") {
      return document.documentElement.classList.contains("dark");
    }
    return false;
  };

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      className="rounded-full border-0 bg-gray-100 dark:bg-gray-800 text-tomato-red hover:bg-gray-200 dark:hover:bg-gray-700"
    >
      {isDarkMode() ? (
        <Moon className="h-5 w-5" />
      ) : (
        <Sun className="h-5 w-5" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
