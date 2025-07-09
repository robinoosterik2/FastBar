"use client";

import { Button as HeroButton } from "@heroui/react";
import { ComponentProps } from "react";
import { Link } from "@/i18n/navigation";

type Props = ComponentProps<typeof HeroButton> & {
  href?: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  className?: string;
};

export default function Button({
  href,
  startIcon,
  endIcon,
  className = "",
  ...props
}: Props) {
  return (
    <HeroButton
      as={Link}
      href={href}
      className={`font-bold text-foreground hover:scale-105 flex items-center gap-2 ${className}`}
      {...props}
    >
      {startIcon && <span className="flex-shrink-0">{startIcon}</span>}
      {props.children}
      {endIcon && <span className="flex-shrink-0">{endIcon}</span>}
    </HeroButton>
  );
}
