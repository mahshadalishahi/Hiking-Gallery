"use client";
import { useEffect } from "react";
import { PropTypes } from "./modal.types";

export function Modal(props: PropTypes) {
  const { children, onClose } = props;

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4
                 bg-black/30 backdrop-blur-sm
                 transition-opacity duration-300 ease-out
                 animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl overflow-hidden rounded-2xl border
                   bg-white/70 dark:bg-slate-900/70
                   backdrop-blur-md border-slate-200 dark:border-slate-700
                   p-4
                   transform transition-transform duration-300 ease-out
                   animate-scaleIn"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          aria-label="Close"
          onClick={onClose}
          className="absolute right-3 top-3 z-10 rounded-full border py-1 px-4 hover:bg-slate-200 bg-slate-100
              dark:border-slate-700 dark:hover:bg-slate-900 dark:bg-slate-800 border-slate-500"
        >
          Close
        </button>
        {children}
      </div>
    </div>
  );
}
