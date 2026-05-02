"use client";
import { Eye } from "lucide-react";
import { animate } from "motion";
import { motion, useInView } from "motion/react";
import { useEffect, useLayoutEffect, useRef } from "react";

const Counter = ({ from, to }: { from: number; to: number }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useLayoutEffect(() => {
    const element = ref.current;

    if (!element) return;
    if (!inView) return;

    if(window.matchMedia('(prefers-reduced-motion)').matches) {

        element.textContent = String(to);
        return;
    }

    element.textContent = String(from);

    const control = animate(from, to, {
      duration: 0.5,
      ease: "easeOut",
      onUpdate: (value) => {
        element.textContent = value.toFixed(0);
      },
    });

    return () => control.stop();
  }, [ref, from,inView, to]);

  return (
    <motion.div
      className="flex items-center gap-1 text-sm text-muted-foreground font-mono font-medium"
      layout
    >
        <Eye size={16} />
     
     <motion.span ref={ref}></motion.span>
    </motion.div>
  );
};

export default Counter;
