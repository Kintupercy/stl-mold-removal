import Link from "next/link";
import { listings } from "@/lib/listings";

const fmtUsd = (n: number) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);

export default function ListingsPage() {
  return (
    <main className="container">
      <h1>All listings</h1>
      <div className="grid">
        {listings.map((l) => (
          <Link key={l.id} href={`/listings/${l.id}`} className="card">
            <div className="thumb" />
            <div className="body">
              <div className="price">{fmtUsd(l.priceUsd)}</div>
              <div>{l.address}</div>
              <div className="addr">{l.city} · {l.beds} bd · {l.baths} ba · {l.sqft.toLocaleString()} sqft</div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
