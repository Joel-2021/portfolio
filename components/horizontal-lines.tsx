import { cn } from "@/lib/utils"

export const HorizontalLines = ({classname}: {classname?: string}) => {
    return (
        <div className={cn("border-y border-muted bg-[repeating-linear-gradient(45deg,var(--muted)_0,var(--muted)_1px,transparent_1px,transparent_7px)] h-8 w-full", classname)}></div>
    );
}