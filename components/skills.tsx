import { LucideCode } from "lucide-react";
import { buttonVariants } from "./ui/button";
import Link from "next/link";
import Image from "next/image";
import { skillList1, skillList2 } from "@/lib/constants/skills";
import { cn } from "@/lib/utils";

export const Skills = () => {
    
  return (
    <>
      <div className="flex justify-between items-center  px-4 py-2 border-y border-muted">
        <h2 className="text-lg font-semibold">Skills</h2>
        <Link
          type="button"
          className={cn(
            buttonVariants({
              variant: "outline",
              size: "xs",
            }),
            "rounded-xs ms-auto",
          )}
          href={"/skills"}
        >
          <span>View All</span>
          <LucideCode size={20} />
        </Link>
      </div>

      <div className="overflow-hidden relative">
        <div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-linear-to-r from-background to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-linear-to-l from-background to-transparent z-10" />
        <div
          className="flex w-max gap-2 pt-3 pb-1 px-2 marquee-left"
         
        >
          {[...skillList1, ...skillList1].map((skill, i) => (
            <div
              key={i}
              className="group/skill shrink-0 relative border border-muted flex gap-2 items-center rounded-xs bg-neutral-100/5 dark:bg-black/10 px-2 py-1 dark:hover:bg-zinc-500/10"
            >
              <span className="h-1 w-1 border-t border-r border-neutral-500 absolute top-0 right-0 opacity-0 group-hover/skill:opacity-100 transition" />
              <span className="h-1 w-1 border-t border-l border-neutral-500 absolute top-0 left-0 opacity-0 group-hover/skill:opacity-100 transition" />
              <span className="h-1 w-1 border-b border-r border-neutral-500 absolute bottom-0 right-0 opacity-0 group-hover/skill:opacity-100 transition" />
              <span className="h-1 w-1 border-b border-l border-neutral-500 absolute bottom-0 left-0 opacity-0 group-hover/skill:opacity-100 transition" />

              <Image
                src={`icons/tech-stack/${skill.icon}`}
                alt={skill.name}
                width={20}
                height={20}
                className="opacity-60 grayscale group-hover/skill:opacity-100 group-hover/skill:filter-none transition"
              />

              <span className="text-xs font-mono select-none grayscale group-hover/skill:filter-none">
                {skill.name}
              </span>
            </div>
          ))}
        </div>

        <div
          className="flex w-max gap-2 pt-1 pb-3 px-2 marquee-right"
        >
          {[...skillList2, ...skillList2].map((skill, i) => (
            <div
              key={i}
              className="group/skill shrink-0 relative border border-muted flex gap-2 items-center rounded-xs bg-neutral-100/5 dark:bg-black/10 px-2 py-1 dark:hover:bg-zinc-500/10"
            >
              <span className="h-1 w-1 border-t border-r border-neutral-500 absolute top-0 right-0 opacity-0 group-hover/skill:opacity-100 transition" />
              <span className="h-1 w-1 border-t border-l border-neutral-500 absolute top-0 left-0 opacity-0 group-hover/skill:opacity-100 transition" />
              <span className="h-1 w-1 border-b border-r border-neutral-500 absolute bottom-0 right-0 opacity-0 group-hover/skill:opacity-100 transition" />
              <span className="h-1 w-1 border-b border-l border-neutral-500 absolute bottom-0 left-0 opacity-0 group-hover/skill:opacity-100 transition" />

              <Image
                src={`icons/tech-stack/${skill.icon}`}
                alt={skill.name}
                width={20}
                height={20}
                className="opacity-60 grayscale group-hover/skill:opacity-100 group-hover/skill:filter-none transition"
              />

              <span className="text-xs font-mono select-none grayscale group-hover/skill:filter-none">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
