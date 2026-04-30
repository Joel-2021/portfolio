"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { experiences } from "@/lib/constants/experience";
import { LucideBriefcaseBusiness, LucideLayers } from "lucide-react";
import { ToolChip } from "./tools-chip";
import { Button, buttonVariants } from "./ui/button";
import Link from "next/link";

const Experience = () => {
  return (
    <>
      <div className="px-4 py-2 border-b border-muted flex justify-between items-center">
        <h2 className="text-lg font-semibold ">Experience</h2>

        <Link
          type="button"
          className={cn(
            buttonVariants({
              variant: "outline",
              size: "xs",
            }),
            "rounded-xs ms-auto",
          )}
          href={"/experience"}
        >
          <span>View All</span>
          <LucideLayers size={20} />
        </Link>
      </div>

      <div className="py-4">
        <Accordion multiple className="max-w-3xl mx-auto px-3 md:px-0">
          {experiences.map((experience, index) => (
            <AccordionItem
              key={experience.company}
              value={experience.company}
              className="relative group"
            >
              <AccordionTrigger className="relative rounded-none border border-muted flex justify-between items-center w-full bg-neutral-100/5 dark:bg-black/10 p-3">
                <div className="flex gap-4">
                  <div className="border border-muted bg-muted/10 p-3 flex justify-center items-center">
                    <LucideBriefcaseBusiness
                      className="dark:text-muted text-neutral-400/50"
                      size={20}
                    />
                  </div>
                  <div>
                    <h4 className="md:text-lg text-sm font-medium">
                      {experience?.company}
                    </h4>
                    <p className="text-muted-foreground font-mono md:text-sm text-xs">
                      {experience?.role}
                    </p>
                  </div>
                </div>

                <div>
                  <p className="md:text-xs text-[10px]">
                    {experience.duration}
                  </p>
                </div>
              </AccordionTrigger>
              {index !== experiences.length - 1 && (
                <div
                  className={cn(
                    "absolute left-9 top-18.25 w-px bg-muted transition-all duration-300 h-6",
                    "group-data-open:bottom-0 group-data-open:h-auto",
                  )}
                />
              )}
              <AccordionContent>
                <div className="ps-20 py-2">
                  <h5 className="text-base font-semibold">
                    Technologies and Tools
                  </h5>

                  <div className="flex flex-wrap gap-1 py-1">
                    {experience.technologies.map((technology, index) => (
                      <ToolChip key={index} technology={technology} />
                    ))}
                  </div>

                  <h5 className="text-base font-semibold mt-3">
                    What I have done
                  </h5>
                  <ol className="py-1">
                    {experience.description.map((point) => (
                      <div className="flex gap-2 items-start" key={point}>
                        <div className="aspect-square h-1.5 w-1.5 bg-neutral-500 mt-[7px]"></div>
                        <p className="mb-1.5 font-mono">{point}</p>
                      </div>
                    ))}
                  </ol>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </>
  );
};

export default Experience;
