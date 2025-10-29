import { PropTypes } from "./skeleton.types";

export function Skeleton(props: PropTypes) {
  const { rows = 8 } = props;
  return (
    <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4">
      {Array.from({ length: rows }).map((_, i) => (
        <div
          key={i}
          className="h-40 w-full animate-pulse rounded-xl bg-slate-200 dark:bg-slate-800"
        />
      ))}
    </div>
  );
}
