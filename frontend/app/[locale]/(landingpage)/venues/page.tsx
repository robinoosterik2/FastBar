import { usePageTranslations } from "@/app/hooks/usePageTranslations";

export default async function Venues() {
  const venues = await fetch("http://backend:3000/api/venues");
  const venuesData = await venues.json();
  const { t } = usePageTranslations("venues");

  return <div>{t("title")}</div>;
}
