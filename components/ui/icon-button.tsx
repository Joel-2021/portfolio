"use client";

import React, { useRef } from "react";
import { Button } from "./button";

type IconHandle = {
  startAnimation: () => void;
  stopAnimation: () => void;
};

type IconType = React.ForwardRefExoticComponent<
  React.RefAttributes<IconHandle> & { size?: number }
>;

export const IconButton = ({
  Icon,
  label,
  redirectLink,
}: {
  Icon: IconType;
  label: string;
  redirectLink: string;
}) => {
  const iconRef = useRef<IconHandle>(null);

  return (
    <Button
      variant="outline"
      size="xs"
      className="rounded-xs flex items-center gap-2"
      onMouseEnter={() => iconRef.current?.startAnimation()}
      onMouseLeave={() => iconRef.current?.stopAnimation()}
      onClick={() => window.open(redirectLink, "_blank")}
    >
      <Icon ref={iconRef} size={20} />
      {label}
    </Button>
  );
};
