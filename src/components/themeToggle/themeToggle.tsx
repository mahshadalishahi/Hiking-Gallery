"use client";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [dark, setDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const changeTheme = () => {
      setDark(window.matchMedia("(prefers-color-scheme: dark)").matches);
      setMounted(true);
    };

    changeTheme();
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", dark);
  }, [dark]);

  if (!mounted) return null;
  return (
    <button
      onClick={() => setDark((d) => !d)}
      className="rounded-full border px-3 py-1 text-sm shadow hover:bg-slate-200 bg-slate-100
      dark:border-slate-700 dark:hover:bg-slate-900 dark:bg-slate-800 border-slate-500"
      aria-label="Toggle theme"
    >
      {dark ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}
