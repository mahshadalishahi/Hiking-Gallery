import { Skeleton } from "@/components/skeleton";
import { IMAGES } from "@/constants/gallery";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

export default function Gallery() {
  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-semibold">Destinations</h2>
        <span className="text-sm text-slate-500 dark:text-slate-400">
          {IMAGES.length} photos
        </span>
      </div>

      <Suspense fallback={<Skeleton rows={9} />}>
        <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4">
          {IMAGES.map((img) => (
            <li
              key={img.id}
              className="group relative overflow-hidden rounded-xl shadow-soft"
            >
              <Link
                href={`/gallery/${img.id}`}
                scroll={false}
                prefetch
                replace={false}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={img.width}
                  height={img.height}
                  className="h-40 w-full object-cover transition-transform duration-200 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  priority={true}
                />
              </Link>
            </li>
          ))}
        </ul>
      </Suspense>
    </div>
  );
}
