import { useTranslations } from 'next-intl';

export function usePageTranslations(namespace: string) {
  const tPage = useTranslations(namespace);
  const tCommon = useTranslations('common');
  
  const t = (key: string) => {
    if (key.startsWith('common.')) {
      return tCommon(key.replace('common.', ''));
    }
    return tPage(key);
  };
  
  return { t };
}