"use client";
import { User, Link } from "@heroui/react";
import { cn } from "@/lib/utils";

export interface EmployeeProps {
  name: string;
  linkText: string;
  avatar: string;
  link: string;
  className?: string;
}

export default function Employee({
  name,
  linkText,
  avatar,
  link,
  className,
}: EmployeeProps) {
  return (
    <User
      className={cn(
        "border-4 shadow-lg rounded-2xl border-primary text-primary3 p-2 m-2",
        className
      )}
      avatarProps={{
        src: avatar,
      }}
      description={
        <Link className="" isExternal href={link} size="sm">
          {linkText}
        </Link>
      }
      name={name}
    />
  );
}
