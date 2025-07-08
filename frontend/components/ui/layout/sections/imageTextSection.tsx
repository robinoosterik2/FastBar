import { cn } from "@/lib/utils";

export default function ImageTextSection({
  children,
  className,
  image,
  imagePosition = "left",
}: {
  children?: React.ReactNode;
  className?: string;
  image?: React.ReactNode;
  imagePosition?: "left" | "right";
}) {
  return (
    <section
      className={cn(
        "flex flex-col lg:flex-row gap-8 lg:gap-16 items-center",
        className
      )}
    >
      {imagePosition === "left" && image}
      {children}
      {imagePosition === "right" && image}
    </section>
  );
}
