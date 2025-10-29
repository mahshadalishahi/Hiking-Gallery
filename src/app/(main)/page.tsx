import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 justify-center font-sans">
      <h1 className="text-3xl font-bold">Welcome!</h1>
      <p className="text-xl font-medium">
        Explore our gallery to see a collection of images and view each one in
        detail.
      </p>

      <Link
        href="/gallery"
        className="mt-4 inline-block rounded-md border px-4 py-2 hover:bg-slate-200 bg-slate-100
      dark:border-slate-700 dark:hover:bg-slate-900 dark:bg-slate-800 border-slate-500 max-w-40 text-center"
      >
        View Gallery
      </Link>
    </div>
  );
}
