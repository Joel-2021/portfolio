import { HorizontalLines } from "@/components/horizontal-lines";
import Link from "next/link";
import { LinkedinIcon } from "@/components/ui/linkedin-icon";
import { GithubIcon } from "@/components/ui/github-icon";
import Experience from "@/components/experience";
import { Button } from "@/components/ui/button";
import { DownloadIcon } from "@/components/ui/download-icon";
import { MailIcon } from "@/components/ui/mail-icon";
import Education from "@/components/education";
import Certifications from "@/components/certification";
import { IconButton } from "@/components/ui/icon-button";
import { links } from "@/lib/constants/links";
import { Skills } from "@/components/skills";

export default function Home() {
  return (
    <>
      <p className="border-b border-muted px-4 py-1 text-sm font-mono">Hi, I am</p>
      <div className="flex items-center justify-between px-4 py-2">
        <h1 className="text-xl md:text-4xl font-bold tracking-tight">
          Joel C Varughese
        </h1>

        <div className="flex justify-between items-center gap-5">
          <Link href="https://github.com/joel-2021" target="_blank">
            <GithubIcon size={20} />
          </Link>
          <Link href="https://linkedin.com/in/joel-c-v" target="_blank">
            <LinkedinIcon size={20} />
          </Link>
        </div>
      </div>
      <p className="border-t border-muted text-sm px-4 py-1 font-mono">
        FullStack Developer | Open Source Enthusiast | Tech Blogger
      </p>
      <HorizontalLines />

      <h2 className="text-lg font-semibold px-4 py-2 border-b border-muted">
        About
      </h2>
      <div className="border-b border-muted px-4 py-2">
        <p className="text-sm font-mono">
          Frontend developer specializing in Angular and React with 3 years of
          experience building modular, high-performance applications for OTT and
          SaaS platforms. Focused on maintainable code, efficient data flow, and
          delivering smooth, real-time user experiences.
        </p>

        <div className="flex gap-3 items-center justify-start py-3">
          <IconButton
            Icon={MailIcon}
            label="Send an Email"
            redirectLink={links.sendEmail}
          />
          <IconButton
            Icon={DownloadIcon}
            label="Download Resume"
            redirectLink={links.resume}
          />
        </div>
      </div>

      <Experience />
      <Skills />
      <HorizontalLines classname="absolute left-0 right-0" />
      <Education />
      <Certifications />
    </>
  );
}
