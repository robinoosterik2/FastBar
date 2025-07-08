import { usePageTranslations } from "@/app/hooks/usePageTranslations";

export default function Careers() {
  const { t } = usePageTranslations("careers");

  return (
    <div className="w-full flex flex-col items-center justify-start">
      <h1 className="text-4xl font-bold text-primary pb-4 text-center">
        {t("title")}
      </h1>
      {t.rich("introduction", { br: () => <br /> })}
    </div>
  );
}
