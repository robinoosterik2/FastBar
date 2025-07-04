// components/ui/Button.tsx
"use client";

import { Button as HeroButton } from "@heroui/react";

type Props = {
  children: React.ReactNode;
  onPress?: () => void;
  variant?:
    | "flat"
    | "light"
    | "solid"
    | "bordered"
    | "faded"
    | "shadow"
    | "ghost"
    | undefined;
  color?:
    | "primary"
    | "secondary"
    | "default"
    | "success"
    | "warning"
    | "danger"
    | undefined;
};

export default function Button({
  children,
  onPress,
  variant = "solid",
  color = "primary",
}: Props) {
  return (
    <HeroButton onPress={onPress} variant={variant} color={color}>
      {children}
    </HeroButton>
  );
}
