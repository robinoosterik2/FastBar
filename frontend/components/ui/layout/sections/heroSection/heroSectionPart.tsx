import FadeInOnScroll from "@/components/animations/fadeInOnScroll";
import { cn } from "@/lib/utils";

const colorClasses = {
  primary: {
    text: "text-primary",
    border: "border-primary",
    bg: "bg-primary",
  },
  secondary: {
    text: "text-secondary",
    border: "border-secondary",
    bg: "bg-secondary",
  },
  tertiary: {
    text: "text-tertiary",
    border: "border-tertiary",
    bg: "bg-tertiary",
  },
};

export function HeroSectionPart({
  title,
  description,
  color,
  reason,
  buttons,
}: {
  title: string;
  description: string;
  color: keyof typeof colorClasses;
  reason: string;
  buttons?: React.ReactNode[];
}) {
  const classes = colorClasses[color];
  return (
    <FadeInOnScroll>
      <div className="flex flex-col h-full transition-all">
        <div
          className={cn(
            "text-4xl font-bold text-nowrap w-full flex justify-center mb-4",
            classes.text
          )}
        >
          {title}
        </div>
        <div className="h-full">
          <div className={cn("p-8 border-2 rounded-2xl h-full flex flex-col")}>
            <div className="flex-1 flex flex-col">
              <h1 className="text-2xl font-bold mb-4">{description}</h1>
              <div className="flex-1">{reason}</div>
            </div>
            <div className="flex justify-center pt-4 gap-4 md:flex-col">
              {buttons}
            </div>
          </div>
        </div>
      </div>
    </FadeInOnScroll>
  );
}
