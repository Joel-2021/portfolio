import { HorizontalLines } from "./horizontal-lines";
import Link from "next/link";
import { GithubIcon } from "./ui/github-icon";
import { LinkedinIcon } from "./ui/linkedin-icon";
import { links } from "@/lib/constants/links";
import { Redis } from "@upstash/redis";
import { Eye } from "lucide-react";

const redis = Redis.fromEnv();

const Footer = async () => {
  const views = (await redis.get<number>("unique_visitors:portfolio")) ?? 0;

  return (
    <>
      <HorizontalLines />
      <div className="px-4 py-2">
        <div className="flex items-center justify-between">
          <Link href={"/"}>
            <h1 className="font-black mb-2 text-3xl text-transparent bg-clip-text bg-[repeating-linear-gradient(30deg,var(--muted-foreground)_0,var(--muted-foreground)_1px,transparent_1px,transparent_3px)]">
              JCV
            </h1>
          </Link>

          <div className="flex items-center gap-1 text-sm font-mono font-medium">
            <Eye size={16}/>
            {views}
          </div>
        </div>

        <div className=" flex justify-between items-end ">
          <ul>
            <li>
              <Link
                href={links.resume}
                target="_blank"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-color"
              >
                Resume
              </Link>
            </li>
            <li>
              <Link
                href={"/components"}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-color"
              >
                Components
              </Link>
            </li>
            <li>
              <Link
                href={"/experience"}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-color"
              >
                Experience
              </Link>
            </li>
          </ul>

          <ul>
            <li>
              <Link
                href={"/skills"}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-color"
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                href={"/projects"}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-color"
              >
                Projects
              </Link>
            </li>
          </ul>

          <div className="mt-auto">
            <div className="flex justify-between items-center gap-5">
              <Link href="https://github.com/joel-2021" target="_blank">
                <GithubIcon size={20} />
              </Link>
              <Link href="https://linkedin.com/in/joel-c-v" target="_blank">
                <LinkedinIcon size={20} />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <p className="font-mono text-xs border-y py-2 mb-3 border-muted text-center">
        Built By - <span>Joel</span>
        <br />
        Source code available in{" "}
        <Link
          href={links.portfolio}
          target="_blank"
          className="underline font-semibold"
        >
          Github
        </Link>
      </p>
    </>
  );
};

export default Footer;
