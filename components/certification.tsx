"use client";
import { Button } from "@/components/ui/button";
import { certifications } from "@/lib/constants/certifications";
import { LucideAward, LucideExternalLink } from "lucide-react";

const Certifications = () => {
  return (
    <>
        <h2 className="text-lg font-semibold px-4 py-2 border-y border-muted">
          Certifications
        </h2>

        <div className="max-w-3xl mx-auto flex flex-col gap-6 py-4 px-2 md:px-0">
          {certifications.map((certificate, index) => (
            <div
              key={certificate.title}
              className="border border-muted flex justify-between items-center w-full bg-neutral-100/5 dark:bg-black/10 p-3"
            >
              <div className="flex gap-4">
                <div className="border border-muted bg-muted/10 p-3 flex justify-center items-center">
                  <LucideAward
                    className="dark:text-muted text-neutral-400/50"
                    size={20}
                  />
                </div>
                <div>
                  <h4 className="md:text-lg text-sm font-medium">
                    {certificate.title}
                  </h4>
                  <p className="text-muted-foreground font-mono md:text-sm text-xs">
                    {certificate.description}
                  </p>
                </div>
              </div>
              {certificate.link && (
                <Button
                  size={"icon"}
                  variant={"ghost"}
                  onClick={() => window.open(certificate?.link, "_blank")}
                >
                  <LucideExternalLink size={20} />
                </Button>
              )}
            </div>
          ))}
        </div>
    </>
  );
};

export default Certifications;
