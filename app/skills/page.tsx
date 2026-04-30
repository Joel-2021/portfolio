import { HorizontalLines } from "@/components/horizontal-lines";
import { cn } from "@/lib/utils";
import { skills } from "@/lib/constants/skills";
import Image from "next/image";

const SkillsPage = () => {
  return (
    <>
      <h1 className="text-xl font-bold pt-2 pb-1 px-2">Skills</h1>

      <p className="font-mono text-xs pb-2 px-2">
        Tools and technologies I use daily to build scalable and efficient
        applications.
      </p>

      <HorizontalLines />

      {skills.map((skill, index) => (
        <div key={skill.title}>
          <h3 className="text-sm font-medium uppercase font-mono px-3 py-3 before:content-[''] relative before:absolute before:h-1.5 before:w-1.5 before:bg-neutral-500 before:top-1/2 before:transform before:-translate-y-1/2">
            <span className="ps-3">{skill.title}</span>
          </h3>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(50px,120px))] justify-start gap-1.5 md:gap-3 px-3 py-1 pb-3">
            {skill.techStack.map((tech) => (
              <div key={tech.icon} className="aspect-square relative group/skill flex flex-col gap-2 items-center justify-center border bg-neutral-500/5 p-3 h-full max-h-30 border-dashed border-neutral-500/30 hover:bg-zinc-300/50 dark:hover:bg-zinc-400/10">
                <span className="absolute h-3 w-3 border-r-2 border-t-2 border-neutral-400/40 -top-px -right-px"></span>
                <span className="absolute h-3 w-3 border-l-2 border-t-2 border-neutral-400/40 -top-px -left-px"></span>
                <span className="absolute h-3 w-3 border-b-2 border-r-2 border-neutral-400/40 -bottom-px -right-px"></span>
                <span className="absolute h-3 w-3 border-l-2 border-b-2 border-neutral-400/40 -bottom-px -left-px"></span>
                <div className="absolute inset-0 pointer-events-none  bg-[radial-gradient(circle,rgba(0,0,0,0.06)_1px,transparent_1px)] dark:bg-[radial-gradient(circle,rgba(255,255,255,0.03)_1px,transparent_2px)] bg-size-[14px_14px]"></div>
                <Image
                  src={`icons/tech-stack/${tech.icon}`}
                  alt={tech.name}
                  width={32}
                  height={32}
                  className={cn(
                    "grayscale",
                    "group-hover/skill:scale-110 group-hover/skill:filter-none transition-all",
                  )}
                />
                <p
                  className={cn(
                    "grayscale",
                    "group-hover/skill:filter-none transition-all group-hover/skill:font-semibold",
                    "text-xs uppercase font-mono text-center",
                  )}
                >
                  {tech.name}
                </p>
              </div>
            ))}
          </div>
          {index !== skills.length - 1 && <HorizontalLines />}
        </div>
      ))}
    </>
  );
};

export default SkillsPage;
