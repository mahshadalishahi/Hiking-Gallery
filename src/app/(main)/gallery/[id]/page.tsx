import { getImageById } from "@/utils/gallery";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Usable, use } from "react";

type PropTypes = {
  params: Usable<{ id: string }>;
};

export default function ImagePage(props: PropTypes) {
  const { params } = props;
  const { id } = use(params);

  const item = getImageById(id);
  if (!item) return notFound();

  return (
    <div className="mx-auto max-w-3xl">
      <Link
        href="/gallery"
        className="mb-6 inline-flex items-center text-sm text-slate-600 hover:underline dark:text-slate-300"
      >
        ← Back to gallery
      </Link>
      <div className="overflow-hidden rounded-2xl border bg-white shadow-soft dark:border-slate-800 dark:bg-slate-900">
        <Image
          src={item.src}
          alt={item.alt}
          width={item.width}
          height={item.height}
          className="h-auto w-full"
        />
        <div className="p-5">
          <h1 className="text-2xl font-semibold">{item.title}</h1>
          <p className="mt-2 text-slate-600 dark:text-slate-300">
            {item.description}
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {item.tags.map((t) => (
              <span
                key={t}
                className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700 dark:bg-slate-800 dark:text-slate-200"
              >
                #{t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
