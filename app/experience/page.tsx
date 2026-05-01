import { HorizontalLines } from "@/components/horizontal-lines";
import { ToolChip } from "@/components/tools-chip";
import {
  AccordionContent,
  Accordion,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { experiences } from "@/lib/constants/experience";
import { cn } from "@/lib/utils";
import {
  LucideBriefcaseBusiness,
  LucideExternalLink,
  LucidePanelsTopLeft,
} from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Full Stack skills of Joel C V in React, Angular, Node.js, and modern web development.",
};

const Experience = () => {
  return (
    <>
      <h1 className="text-xl font-bold pt-2 pb-1 px-2">Experience</h1>

      <p className="font-mono text-xs pb-2 px-2">
        Detailed work experience, company roles, and projects I've contributed
        to.
      </p>

      <HorizontalLines />
      <div className="py-4">
        <Accordion
          multiple
          className="max-w-3xl mx-auto px-3 md:px-0"
          defaultValue={[
            "ConnectingDots Infotech",
            "Genex Corporate Services Ltd",
          ]}
        >
          {experiences.map((experience, index) => (
            <AccordionItem
              key={experience.company}
              value={experience.company}
              className="relative group"
            >
              <AccordionTrigger className="relative pointer-events-none rounded-none border border-muted flex justify-between items-center w-full bg-neutral-100/5 dark:bg-black/10 p-3">
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

                  <h5 className="text-base font-semibold mt-3">Projects</h5>

                  {experience.projects?.map((project,idx) => (
                    <div key={project.title} className={cn(idx !== experience.projects.length && 'mb-3')}>
                      <div className="flex gap-2 mb-3 items-center">
                        <div className="rounded-sm border border-dashed border-muted-foreground p-1 flex items-center justify-center bg-muted h-12.5 w-12.5">
                          {project?.icon ? (
                            <Image
                              src={`/icons/brands/${project.icon}`}
                              alt={project.icon}
                              width={40}
                              height={40}
                              className="object-cover rounded-md"
                            />
                          ) : (
                            <LucidePanelsTopLeft size={30} strokeWidth={2} />
                          )}
                        </div>
                        <div>
                          <h3 className="text-base font-semibold inline-flex gap-2 items-center">
                            {project.title}
                            {project.url && (
                              <Link href={project.url} target="_blank">
                                <LucideExternalLink size={16} />
                              </Link>
                            )}
                          </h3>
                          <p className="text-muted-foreground font-semibold text-sm font-mono">
                            {project.projectDescription}
                          </p>
                        </div>
                      </div>

                      {project.description?.map((point) => (
                        <div className="flex gap-2 items-start" key={point}>
                          <div className="aspect-square h-1.5 w-1.5 bg-neutral-500 mt-1.75"></div>
                          <p className="mb-1.5 font-mono">{point}</p>
                        </div>
                      ))}
                    </div>
                  ))}
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
