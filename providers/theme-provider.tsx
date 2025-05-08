"use client";

import { createContext, useState, useContext, useEffect } from "react";

export type Theme = "light" | "dark" | "system";

interface ThemeState {
  theme: Theme;
  toggleTheme: (newTheme: Theme) => void;
}

const initialState: ThemeState = {
  theme: "light",
  toggleTheme: () => {},
};

const ThemeContext = createContext<ThemeState>(initialState);

export const useTheme = () => { 
  const context = useContext(ThemeContext);
  if(context === undefined){
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const isDarkTheme = localStorage.theme === "dark" ||
    (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches);

    setTheme(isDarkTheme ? "dark" : "light");
    document.documentElement.classList.toggle(
      "dark",
      isDarkTheme
    );
  }, []);

  const toggleTheme = (theme: Theme) => {
    const systemPrefersDark = matchMedia("(prefers-color-scheme=dark)").matches;

    const newTheme = theme !== "system" ? theme : systemPrefersDark ? "dark" : "light";

    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
