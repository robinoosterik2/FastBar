import { usePageTranslations } from "@/app/hooks/usePageTranslations";

interface VenuesClientProps {
  venuesData: any;
}

export default function VenuesClient({ venuesData }: VenuesClientProps) {
  const { t } = usePageTranslations("venues");

  return (
    <div>
      <h1>{t("title")}</h1>
      {venuesData.map((venue: any) => (
        <div key={venue.id}>{venue.name}</div>
      ))}
    </div>
  );
}
