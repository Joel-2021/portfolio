"use client";

import { Button } from "@/components/ui/button";
import { LucideSun, LucideMoon } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "motion/react";

export const Header = () => {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [hovered, setHovered] = useState<number | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const navItems = [
    {
      path: "/components",
      title: "Components",
    },
    {
      path: "/skills",
      title: "Skills",
    },
    {
      path: "/projects",
      title: "Projects",
    },
  ];

  return (
    <div className="flex items-center justify-between px-4 py-8 border-b border-muted">
      <Link href="/">
        <h1 className="font-black text-3xl text-transparent bg-clip-text bg-[repeating-linear-gradient(30deg,var(--muted-foreground)_0,var(--muted-foreground)_1px,transparent_1px,transparent_3px)]">
          JCV
        </h1>
      </Link>
      <div className="flex justify-between items-center">
        {navItems.map((navItem, index) => (
          <Link
            key={index}
            href={navItem.path}
            className="md:text-sm text-xs px-2 py-1 relative font-medium text-muted-foreground hover:text-foreground transition-color"
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
          >
            {hovered === index && (
              <>
                <motion.span
                  layoutId="hovered-link"
                  className="absolute inset-0 border border-muted"
                >
                  <span className="h-1 w-1 border-t border-r border-neutral-500 absolute top-0 right-0 animate-pulse" />
                  <span className="h-1 w-1 border-t border-l border-neutral-500 absolute top-0 left-0 animate-pulse" />
                  <span className="h-1 w-1 border-b border-r border-neutral-500 absolute bottom-0 right-0 animate-pulse" />
                  <span className="h-1 w-1 border-b border-l border-neutral-500 absolute bottom-0 left-0 animate-pulse" />
                </motion.span>
              </>
            )}

            <span className="relative z-1">{navItem.title}</span>
          </Link>
        ))}

        {mounted && (
          <Button
            variant={"ghost"}
            size={"sm"}
            name="toggle-theme"
            className={"cursor-pointer"}
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? (
              <LucideSun size={10} />
            ) : (
              <LucideMoon size={10} />
            )}
          </Button>
        )}
      </div>
    </div>
  );
};
