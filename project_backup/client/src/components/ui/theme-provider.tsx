import { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light" | "system";

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
};

type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  resolvedTheme: "dark" | "light"; // Add resolved theme for accurate current state
};

const initialState: ThemeProviderState = {
  theme: "system",
  resolvedTheme: "light",
  setTheme: () => null,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "ui-theme", // Changed to match our storageKey in main.tsx
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem(storageKey) as Theme) || defaultTheme
  );
  
  const [resolvedTheme, setResolvedTheme] = useState<"dark" | "light">("light");

  // Watch for system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    
    const handleChange = () => {
      if (theme === "system") {
        updateTheme(theme);
      }
    };
    
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [theme]);

  // Function to update the theme on the document
  const updateTheme = (newTheme: Theme) => {
    const root = window.document.documentElement;
    const isDark = 
      newTheme === "dark" || 
      (newTheme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);

    // Update the resolved theme state
    setResolvedTheme(isDark ? "dark" : "light");
    
    // Update class
    root.classList.remove("light", "dark");
    root.classList.add(isDark ? "dark" : "light");
    
    // Optional: store the current display mode for quick access without calculation
    root.style.colorScheme = isDark ? "dark" : "light";
  };

  // Update theme when it changes
  useEffect(() => {
    updateTheme(theme);
  }, [theme]);

  // Initial theme setup
  useEffect(() => {
    updateTheme(theme);
  }, []); // Empty deps array for initial setup only

  const value = {
    theme,
    resolvedTheme,
    setTheme: (newTheme: Theme) => {
      localStorage.setItem(storageKey, newTheme);
      setTheme(newTheme);
    },
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider");

  return context;
};
