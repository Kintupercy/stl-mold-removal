import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const BASE = "https://stlmoldremoval.com";

const slugs = [
  "chesterfield-mo", "ballwin-mo", "kirkwood-mo", "webster-groves-mo",
  "florissant-mo", "ofallon-mo", "st-charles-mo", "fenton-mo",
  "manchester-mo", "wildwood-mo", "creve-coeur-mo", "mehlville-mo",
  "oakville-mo", "hazelwood-mo", "maryland-heights-mo",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const core = [
    { url: BASE, lastModified: now, changeFrequency: "weekly" as const, priority: 1.0 },
    { url: `${BASE}/mold-remediation`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${BASE}/service-areas`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${BASE}/faq`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${BASE}/contact`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.8 },
  ];
  const areas = slugs.map((slug) => ({
    url: `${BASE}/service-areas/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));
  return [...core, ...areas];
}
