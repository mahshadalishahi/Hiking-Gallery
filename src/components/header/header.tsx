import { ThemeToggle } from "../themeToggle";

export const Header = () => {
  return (
    <header className="sticky top-0 z-20 w-full border-b dark:border-slate-50 border-slate-950 backdrop-blur bg-slate-100 dark:bg-slate-950">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <h1 className="text-lg font-semibold">Hiking</h1>
        <ThemeToggle />
      </div>
    </header>
  );
};
