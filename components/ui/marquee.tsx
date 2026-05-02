import { ReactNode } from "react";
import { cn } from "@/lib/utils";

export const Marquee = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("overflow-hidden relative", className)}>
      <div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-linear-to-r from-background to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-linear-to-l from-background to-transparent z-10" />
      {children}
    </div>
  );
};

export const MarqueeItem = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "group/skill flex gap-2 items-center rounded-xs bg-neutral-100/5 dark:bg-black/10 px-2 py-1 dark:hover:bg-zinc-500/10",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const MarqueeRow = <T,>({
  direction,
  items,
  renderItem,
  className,
}: {
  direction: "left" | "right";
  items: T[];
  renderItem: (item: T, index: number) => ReactNode;
  className?: string;
}) => {
  const MIN_ITEMS = 12;

  const repeated =
    items.length >= MIN_ITEMS
      ? items
      : Array(Math.ceil(MIN_ITEMS / items.length))
          .fill(items)
          .flat();

  return (
    <div
      className={cn(
        "flex w-max gap-2 px-2 marquee-left",
        direction === "left" ? "marquee-left" : "marquee-right",
        className,
      )}
    >
      {[...repeated, ...repeated].map((item, i) => (
        <div key={i} className="shrink">
          {renderItem(item, i)}
        </div>
      ))}
    </div>
  );
};
