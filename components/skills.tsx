import { LucideCode } from "lucide-react";
import { buttonVariants } from "./ui/button";
import Link from "next/link";
import { skillList1, skillList2 } from "@/lib/constants/skills";
import { cn } from "@/lib/utils";
import BorderedChip from "./ui/bordered-chip";
import { Marquee, MarqueeItem, MarqueeRow } from "@joel_c_v/marquee";

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
      <Marquee className="py-3 flex flex-col gap-2">
        <MarqueeRow
          direction="left"
          items={skillList1}
          renderItem={(item, index) => (
            <MarqueeItem
              key={index}
              className="border border-muted relative bg-neutral-100/5 dark:bg-black/10 h-8"
            >
             <BorderedChip item={item}/>
            </MarqueeItem>
          )}
        />

        <MarqueeRow
          direction="right"
          items={skillList2}
          renderItem={(item, index) => (
            <MarqueeItem
              key={index}
              className="border relative border-muted bg-neutral-100/5 dark:bg-black/10 h-8"
            >
             <BorderedChip item={item}/>
            </MarqueeItem>
          )}
        />
      </Marquee>
    </>
  );
};
