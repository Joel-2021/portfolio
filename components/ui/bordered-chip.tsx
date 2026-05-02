import React from "react";
import Image from "next/image";

const BorderedChip = ({ item }: { item: { icon: string; name: string } }) => {
  return (
    <>
      <span className="h-1 w-1 border-t border-r border-neutral-500 absolute top-0 right-0 opacity-0 group-hover/skill:opacity-100 transition" />
      <span className="h-1 w-1 border-t border-l border-neutral-500 absolute top-0 left-0 opacity-0 group-hover/skill:opacity-100 transition" />
      <span className="h-1 w-1 border-b border-r border-neutral-500 absolute bottom-0 right-0 opacity-0 group-hover/skill:opacity-100 transition" />
      <span className="h-1 w-1 border-b border-l border-neutral-500 absolute bottom-0 left-0 opacity-0 group-hover/skill:opacity-100 transition" />

      <Image
        src={`icons/tech-stack/${item.icon}`}
        alt={item.name}
        width={20}
        height={20}
        className="opacity-60 grayscale group-hover/skill:opacity-100 group-hover/skill:filter-none transition"
      />

      <span className="text-xs font-mono select-none grayscale group-hover/skill:filter-none">
        {item.name}
      </span>
    </>
  );
};

export default BorderedChip;
