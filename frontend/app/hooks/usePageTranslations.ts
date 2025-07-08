import { useTranslations } from "next-intl";

// Use the same types that next-intl expects
type TranslationValues = Record<string, string | number | Date>;
type RichTranslationValues = Record<
  string,
  string | number | Date | ((chunks: React.ReactNode) => React.ReactNode)
>;

type RichTranslationFunction = (
  key: string,
  values?: TranslationValues
) => string;

interface TranslationFunction extends RichTranslationFunction {
  rich: (key: string, values?: RichTranslationValues) => string;
}

export function usePageTranslations(namespace: string) {
  const tPage = useTranslations(namespace);
  const tCommon = useTranslations("common");

  const t = ((key: string, values?: TranslationValues) => {
    if (key.startsWith("common.")) {
      return tCommon(key.replace("common.", ""), values);
    }
    return tPage(key, values);
  }) as TranslationFunction;

  t.rich = (key: string, values?: RichTranslationValues) => {
    if (key.startsWith("common.")) {
      return tCommon.rich(key.replace("common.", ""), values) as string;
    }
    return tPage.rich(key, values) as string;
  };

  return { t };
}
