import Link from "next/link";
import { listings } from "@/lib/listings";

const fmtUsd = (n: number) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);

export default function Home() {
  return (
    <main>
      <section className="hero">
        <h1>3D walkthroughs for every listing.</h1>
        <p>
          Buyers explore the property from anywhere. Agents publish a tour in minutes
          with PlayCanvas-powered WebGL/WebGPU scenes — no plugin, runs on any phone.
        </p>
        <Link href="/listings" className="btn">Browse listings</Link>
      </section>

      <section className="container">
        <h2>Featured</h2>
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
      </section>
    </main>
  );
}
