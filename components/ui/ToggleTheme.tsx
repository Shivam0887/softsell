"use client";

import { cn } from "@/lib/utils";
import { Theme, useTheme } from "@/providers/theme-provider";
import { Moon, Sun } from "lucide-react";
import { useState } from "react";

interface ToggleButtonProps {
  theme: Theme;
}

const ToggleButton = ({ theme }: ToggleButtonProps) => {
  const { toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={() => toggleTheme(theme)}
      className="cursor-pointer w-full"
    >
      <span className="capitalize text-sm">{theme}</span>
    </button>
  );
};

const ToggleTheme = () => {
  const [isOpened, setIsOpened] = useState(false);
  const { theme } = useTheme();

  return (
    <div className="flex items-center relative">
      <button
        type="button"
        className="cursor-pointer transition-colors p-2 rounded-full relative z-10 hover:bg-neutral-200 dark:hover:bg-neutral-700"
        onClick={() => setIsOpened((prev) => !prev)}
        onBlur={() => setIsOpened(false)}
      >
        {theme === "light" ? (
          <Sun className="size-4 md:size-5" />
        ) : (
          <Moon className="size-4 md:size-5" />
        )}
      </button>

      <div
        className={cn(
          "top-full left-1/2 -translate-x-1/2 flex flex-col rounded-lg shadow w-20 absolute transition-opacity opacity-0 bg-muted",
          isOpened && "opacity-100"
        )}
      >
        <ToggleButton theme="light" />
        <ToggleButton theme="dark" />
        <ToggleButton theme="system" />
      </div>
    </div>
  );
};

export default ToggleTheme;
