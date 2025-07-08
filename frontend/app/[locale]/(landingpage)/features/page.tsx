import { useLocale, useTranslations } from "next-intl";
import React from "react";
import FeatureCard from "@/components/ui/cards/feature";
import features from "@/data/features";

export default function FeaturesPage() {
  const t = useTranslations("features");
  const locale = useLocale() as "en" | "nl";

  const allFeatureCategories = [
    { title: "features", features: features.features },
    // { title: "upcomingFeatures", features: features.upcomingFeatures },
    // { title: "confirmedFeatures", features: features.confirmedFeatures },
    { title: "futureFeatures", features: features.futureFeatures },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {allFeatureCategories.map((section, sectionIndex) => (
        <React.Fragment key={sectionIndex}>
          <h1 className="text-4xl font-bold text-center mb-8 text-primary">
            {t(section.title)}
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {section.features.map((feature, featureIndex) => (
              <FeatureCard
                key={feature.id}
                feature={{
                  title: feature.title[locale],
                  description: feature.description[locale],
                }}
              />
            ))}
          </div>
          {sectionIndex < allFeatureCategories.length - 1 && (
            <div className="my-8 text-center">
              <p className="text-lg text-foreground">
                {/* Content between feature categories */}
              </p>
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}
