import type { ComponentProps } from "react";
import { Link as NextIntlLink } from "@/i18n/navigation";
import { Link as NextUILink } from "@heroui/react";
import { cn } from "@/lib/utils";

type SmartLinkProps = ComponentProps<typeof NextUILink> & {
  href: string;
  children: React.ReactNode;
  className?: string;
  color?: string;
};

export function SmartLink({
  href,
  children,
  className,
  color = "foreground",
  ...props
}: SmartLinkProps) {
  const isExternal = href.startsWith("http") || href.startsWith("//");

  if (isExternal) {
    return (
      <NextUILink
        href={href}
        color={color}
        underline="hover"
        className={cn("hover:text-primary-hover", className)}
        target="_blank"
        rel="noopener noreferrer"
        showAnchorIcon
        {...props}
      >
        {children}
      </NextUILink>
    );
  }

  return (
    <NextUILink
      as={NextIntlLink}
      color={color}
      href={href}
      underline="hover"
      className={cn("hover:text-primary-hover", className)}
      {...props}
    >
      {children}
    </NextUILink>
  );
}
