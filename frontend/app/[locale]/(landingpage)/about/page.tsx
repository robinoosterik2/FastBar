import { usePageTranslations } from "@/app/hooks/usePageTranslations";
import ImageTextSection from "@/components/ui/layout/sections/imageTextSection";
import Image from "next/image";
import FadeInOnScroll from "@/components/animations/fadeInOnScroll";
import TeamSection from "@/components/ui/layout/sections/teamSection";

export default function About() {
  const { t } = usePageTranslations("about");

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-primary pb-4 text-center">
        {t("title")}
      </h1>
      <p className="text-sm w-3/4 text-center lg:text-lg">
        {t.rich("introduction", { br: () => <br /> })}
      </p>
      <FadeInOnScroll className="w-full bg-alt-background mt-16 py-16 flex justify-center">
        <ImageTextSection
          className="w-3/4 h-full"
          imagePosition="left"
          image={
            <Image
              src="https://picsum.photos/600/600"
              width={600}
              height={600}
              alt="placeholder"
              className="rounded-4xl border-12 border-primary"
            />
          }
        >
          <div className="flex flex-col gap-4 mt-8">
            <h1 className="text-4xl font-bold text-primary">
              {t("storyTitle")}
            </h1>
            <p className="text-xl">{t("storyDescription")}</p>
          </div>
        </ImageTextSection>
      </FadeInOnScroll>
      <TeamSection />
    </div>
  );
}
