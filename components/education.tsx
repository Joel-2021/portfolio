import { educationList, EducationType } from "@/lib/constants/education";
import { LucideGraduationCap, LucideSchool } from "lucide-react";

const Education = () => {
  return (
    <>
      <div className="mt-8">
        <h2 className="text-lg font-semibold px-4 py-2 border-b border-muted">
          Education
        </h2>

        <div className="max-w-3xl mx-auto flex flex-col gap-6 py-4 px-2 md:px-0">
          {educationList.map((education) => (
            <div key={education.institute} className="border border-muted flex justify-between items-center w-full bg-neutral-100/5 dark:bg-black/10 p-3">
              <div className="flex gap-4">
                <div className="border border-muted bg-muted/10 p-3 flex justify-center items-center">
                  {education.type === EducationType.COLLEGE ? (
                    <LucideGraduationCap
                      className="dark:text-muted text-neutral-400/50"
                      size={20}
                    />
                  ) : (
                    <LucideSchool
                      className="dark:text-muted text-neutral-400/50"
                      size={20}
                    />
                  )}
                </div>
                <div>
                  <h4 className="md:text-lg text-sm font-medium">
                    {education.institute}
                  </h4>
                  <p className="text-muted-foreground font-mono md:text-sm text-xs">
                    {education.degree}
                  </p>
                </div>
              </div>

              <div>
                <p className="md:text-xs text-[10px] font-medium">
                  {education.duration}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Education;
