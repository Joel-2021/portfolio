import { cn } from "@/lib/utils";

export const VerticalLines = ({classname}:{ classname?: string}) => {
  return (
    <div className={cn("w-8 fixed top-0 bottom-0 border-x border-muted bg-[repeating-linear-gradient(45deg,var(--muted)_0px,var(--muted)_1px,transparent_1px,transparent_7px)]", classname)}
    />
  );
};