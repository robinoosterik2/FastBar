import { cn } from "@/lib/utils";
import { usePageTranslations } from "@/app/hooks/usePageTranslations";

export default function HeroSection({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  const { t } = usePageTranslations("home");
  return (
    <section className={cn("w-3/4 flex", className)}>
      <div>
        <div className="flex flex-col items-center mb-16">
          <div className="text-4xl font-bold">{t("hero.title")}</div>
          <br />
          <p className="text-xl text-center">
            {t.rich("hero.description", { br: () => <br /> })}
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full">
          {children}
        </div>
      </div>
    </section>
  );
}
