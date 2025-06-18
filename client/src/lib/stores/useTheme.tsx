import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ThemeState {
  theme: "light" | "dark";
  toggleTheme: () => void;
  setTheme: (theme: "light" | "dark") => void;
}

export const useTheme = create<ThemeState>()(
  persist(
    (set, get) => ({
      theme: "dark",
      
      toggleTheme: () => {
        const newTheme = get().theme === "light" ? "dark" : "light";
        set({ theme: newTheme });
        
        // Update document class
        if (typeof document !== "undefined") {
          document.documentElement.classList.remove("light", "dark");
          document.documentElement.classList.add(newTheme);
        }
      },
      
      setTheme: (theme) => {
        set({ theme });
        
        // Update document class
        if (typeof document !== "undefined") {
          document.documentElement.classList.remove("light", "dark");
          document.documentElement.classList.add(theme);
        }
      },
    }),
    {
      name: "theme-storage",
      onRehydrateStorage: () => (state) => {
        // Set initial theme on hydration
        if (state && typeof document !== "undefined") {
          document.documentElement.classList.remove("light", "dark");
          document.documentElement.classList.add(state.theme);
        }
      },
    }
  )
);
