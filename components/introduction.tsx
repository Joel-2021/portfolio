"use client";
import { links } from "@/lib/constants/links";
import Link from "next/link";
import { GithubIcon } from "./ui/github-icon";
import { LinkedinIcon } from "./ui/linkedin-icon";
import { TextFlip } from "./ui/textflip";
import { motion } from "motion/react";
import { DownloadIcon } from "@/components/ui/download-icon";
import { MailIcon } from "@/components/ui/mail-icon";
import { IconButton } from "./ui/icon-button";
import { HorizontalLines } from "./horizontal-lines";

const Introduction = () => {
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.03,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 10, filter: "blur(5px)", scale: 0.98 },
    show: {
      opacity: 1,
      filter: "blur(0px)",
      scale: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <div className="border-b border-muted">
        <motion.p variants={item} className="px-4 py-1 text-sm font-mono">
          Hi, I am
        </motion.p>
      </div>

      <div className="flex items-center justify-between px-4 py-2">
        <motion.h1
          variants={item}
          className="text-xl md:text-4xl font-bold tracking-tight"
        >
          Joel C Varughese
        </motion.h1>

        <motion.div variants={item} className="flex gap-5">
          <Link href={links.github} target="_blank" aria-label="github-profile">
            <GithubIcon size={20} />
          </Link>
          <Link href={links.linkedin} target="_blank" aria-label="linkedin-profile">
            <LinkedinIcon size={20} />
          </Link>
        </motion.div>
      </div>

      <div className="border-t border-muted text-sm px-4 py-1 font-mono">
        <motion.div variants={item}>
          <TextFlip
            texts={[
              "Frontend Engineer",
              "Full Stack Developer",
              "Based in India",
            ]}
          />
        </motion.div>
      </div>
      <HorizontalLines />

      <motion.h2 className="text-lg font-semibold px-4 py-2" variants={item}>
        About
      </motion.h2>
      <div className="border-y border-muted px-4 py-2">
        <motion.p className="text-sm font-mono" variants={item}>
          Frontend developer specializing in Angular and React with 3 years of
          experience building modular, high-performance applications for OTT and
          SaaS platforms. Focused on maintainable code, efficient data flow, and
          delivering smooth, real-time user experiences.
        </motion.p>

        <motion.div
          className="flex gap-3 items-center justify-start py-3"
          variants={item}
        >
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
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Introduction;
