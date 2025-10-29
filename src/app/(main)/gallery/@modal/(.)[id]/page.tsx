"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { getImageById } from "@/utils/gallery";
import { Modal } from "@/components/modal";
import { Usable, use } from "react";

type PropTypes = {
  params: Usable<{ id: string }>;
};

export default function ModalIntercept(props: PropTypes) {
  const { params } = props;
  const { id } = use(params);

  const router = useRouter();
  const item = getImageById(id);

  if (!item) return null;

  const onClose = () => router.back();

  return (
    <Modal onClose={onClose}>
      <Image
        src={item.src}
        alt={item.alt}
        width={item.width}
        height={item.height}
        className="h-auto w-full"
        priority
      />
      <div className="p-5">
        <h3 className="text-xl font-semibold">{item.title}</h3>
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
    </Modal>
  );
}
