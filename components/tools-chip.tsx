"use client";
import Image from "next/image";
import { motion } from "motion/react";

export const ToolChip = ({
  technology,
}: {
  technology: { icon: string; name: string };
}) => {
  const isTouch =
    typeof window !== "undefined" && window.matchMedia("(hover: none)").matches;

  return (
    <motion.div
      layout
      initial="rest"
      whileHover="hover"
      whileTap={isTouch ? "hover" : undefined}
      animate="rest"
      className="flex items-center border-2 border-dashed dark:border-muted border-neutral-500/10 bg-neutral-500/10 dark:bg-neutral-800/50 p-1 rounded-sm overflow-hidden"
    >
      <motion.div
        className="flex items-center justify-center w-6 h-6 shrink-0"
        whileHover={{ scale: 1.05 }}
      >
        <Image
          src={`/icons/tech-stack/${technology?.icon}`}
          alt={technology?.name}
          width={18}
          height={18}
        />
      </motion.div>

      <motion.span
        variants={{
          rest: { opacity: 0, width: 0 },
          hover: {
            opacity: 1,
            width: "auto",
            paddingLeft: "2px",
            paddingRight: "5px",
            scale: 1.03,
          },
        }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="text-xs font-semibold whitespace-nowrap overflow-hidden"
      >
        {technology?.name}
      </motion.span>
    </motion.div>
  );
};
