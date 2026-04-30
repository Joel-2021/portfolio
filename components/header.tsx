"use client";

import { Button } from "@/components/ui/button";
import { LucideSun, LucideMoon } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";

export const Header = () => {
  const { setTheme, theme } = useTheme();
  return (
    <div className="flex items-center justify-between px-4 py-8 border-b border-muted">
      <Link href="/">
        <h1 className="font-black text-3xl text-transparent bg-clip-text bg-[repeating-linear-gradient(var(--muted-foreground)_0,var(--muted-foreground)_1px,transparent_1px,transparent_3px)]">
          JCV
        </h1>
      </Link>
      <div className="flex justify-between items-center gap-3">
        <Link
          href="/components"
          className="text-sm font-medium text-muted-foreground hover:text-foreground transition-color"
        >
          Components
        </Link>
        <Link
          href="/skills"
          className="text-sm font-medium text-muted-foreground hover:text-foreground transition-color"
        >
          Skills
        </Link>
        <Link
          href="/projects"
          className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
        >
          Projects
        </Link>
        <Button
          variant={"ghost"}
          size={"sm"}
          className={"cursor-pointer"}
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "dark" ? (
            <LucideSun size={10} />
          ) : (
            <LucideMoon size={10} />
          )}
        </Button>
      </div>
    </div>
  );
};
