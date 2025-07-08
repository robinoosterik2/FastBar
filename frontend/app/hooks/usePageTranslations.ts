import { useTranslations } from "next-intl";

type RichTranslationFunction = (
  key: string,
  values?: Record<string, any>
) => string;

interface TranslationFunction extends RichTranslationFunction {
  rich: (key: string, values?: Record<string, any>) => string;
}

export function usePageTranslations(namespace: string) {
  const tPage = useTranslations(namespace);
  const tCommon = useTranslations("common");

  const t = ((key: string, values?: Record<string, any>) => {
    if (key.startsWith("common.")) {
      return tCommon(key.replace("common.", ""), values);
    }
    return tPage(key, values);
  }) as TranslationFunction;

  t.rich = (key: string, values?: Record<string, any>) => {
    if (key.startsWith("common.")) {
      return tCommon.rich(key.replace("common.", ""), values) as string;
    }
    return tPage.rich(key, values) as string;
  };

  return { t };
}
