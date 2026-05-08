import { notFound } from "next/navigation";
import { getListing, listings } from "@/lib/listings";
import PropertyTourClient from "@/components/PropertyTourClient";

const fmtUsd = (n: number) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);

export function generateStaticParams() {
  return listings.map((l) => ({ id: l.id }));
}

export default async function ListingPage(props: PageProps<"/listings/[id]">) {
  const { id } = await props.params;
  const listing = getListing(id);
  if (!listing) notFound();

  return (
    <main className="container">
      <h1>{listing.address}</h1>
      <div className="addr">
        {listing.city} · {listing.beds} bd · {listing.baths} ba · {listing.sqft.toLocaleString()} sqft
      </div>
      <p className="price" style={{ fontSize: 24, marginTop: 8 }}>{fmtUsd(listing.priceUsd)}</p>

      <PropertyTourClient modelUrl={listing.modelUrl} />

      <p style={{ color: "var(--muted)", marginTop: 16 }}>
        Drag to orbit. Drop a real GLB scan into <code>public/models/</code> and set{" "}
        <code>modelUrl</code> on the listing in <code>lib/listings.ts</code> to replace the placeholder.
      </p>
    </main>
  );
}
