import HeroSection from "@/components/ui/layout/sections/heroSection/heroSection";
import { HeroSectionPart } from "@/components/ui/layout/sections/heroSection/heroSectionPart";
import Button from "@/components/ui/buttons/button";
import { usePageTranslations } from "@/app/hooks/usePageTranslations";
import AppStoreButtons from "@/components/ui/buttons/storeButtons";
import ImageTextSection from "@/components/ui/layout/sections/imageTextSection";
import Image from "next/image";
import FadeInOnScroll from "@/components/animations/fadeInOnScroll";

export default function Home() {
  const { t } = usePageTranslations("home");

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <HeroSection className="flex-col h-full gap-12 lg:flex-row items-center lg:items-baseline">
        <HeroSectionPart
          title={t("hero.customers.customers")}
          description={t("hero.customers.description")}
          color="primary"
          reason={t("hero.customers.reason")}
          buttons={[
            <AppStoreButtons
              key="appStoreButtons"
              playStoreUrl="https://play.google.com/store/apps/details?id=com.fastbar.app"
              appStoreUrl="https://apps.apple.com/us/app/your-app/id123456789"
            />,
          ]}
        />
        <HeroSectionPart
          title={t("hero.owners.owners")}
          description={t("hero.owners.description")}
          color="primary"
          reason={t("hero.owners.reason")}
          buttons={[
            <Button
              key="moreInfo"
              href="/features"
              color="primary"
              className="font-bold text-primary-foreground"
              children={t("common.moreInfo")}
            />,
          ]}
        />
      </HeroSection>
      <FadeInOnScroll className="w-full bg-alt-background mt-16 py-16 flex justify-center">
        <ImageTextSection
          className="w-3/4 h-full"
          imagePosition="right"
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
              {t("hero.owners.exampleTitle")}
            </h1>
            <p className="text-xl">{t("hero.owners.exampleDescription")}</p>
            <p className="text-xl font-bold">
              {t("hero.owners.exampleFooter")}
            </p>
          </div>
        </ImageTextSection>
      </FadeInOnScroll>
      <FadeInOnScroll className="w-full py-16 flex justify-center">
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
              {t("hero.owners.dataTitle")}
            </h1>
            <p className="text-xl">
              {t.rich("hero.owners.dataDescription", { br: () => <br /> })}
            </p>
            <p className="text-xl font-bold">{t("hero.owners.dataFooter")}</p>
          </div>
        </ImageTextSection>
      </FadeInOnScroll>
    </div>
  );
}
