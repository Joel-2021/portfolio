"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

export function TextFlip({
  texts,
  interval = 3,
}: {
  texts: string[];
  interval?: number;
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, interval * 1000);

    return () => clearInterval(timer);
  }, [texts.length, interval]);

  return (
    <motion.div
      layout="size"
      className="inline-flex relative border border-muted px-3 py-0.5"
      transition={{ duration: 0.3 }}
    >
      <span className="h-1 w-1 border-t border-r border-neutral-500 absolute top-0 right-0 animate-pulse" />
      <span className="h-1 w-1 border-t border-l border-neutral-500 absolute top-0 left-0 animate-pulse" />
      <span className="h-1 w-1 border-b border-r border-neutral-500 absolute bottom-0 right-0 animate-pulse" />
      <span className="h-1 w-1 border-b border-l border-neutral-500 absolute bottom-0 left-0 animate-pulse" />
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={index}
          initial={{ y: 8, opacity: 0, filter: "blur(2px)" }}
          animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          exit={{ y: -8, opacity: 0, filter: "blur(2px)" }}
          transition={{ duration: 0.3 }}
          layout
        >
          {texts[index]}
        </motion.span>
      </AnimatePresence>
    </motion.div>
  );
}
