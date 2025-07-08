import VenuesClient from "./VenuesClient";

export default async function Venues() {
  const venues = await fetch("http://backend:3000/api/venues");
  const venuesData = await venues.json();

  return <VenuesClient venuesData={venuesData} />;
}
