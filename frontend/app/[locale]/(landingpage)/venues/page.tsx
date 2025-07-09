import VenuesClient from "./VenuesClient";

export default async function Venues() {
  const venues = await fetch("http://backend:3000/venue?page=1");
  const venuesData = await venues.json();
  console.log(venuesData);

  return <VenuesClient venuesData={venuesData} />;
}
