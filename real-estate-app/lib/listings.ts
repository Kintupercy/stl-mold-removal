export type Listing = {
  id: string;
  address: string;
  city: string;
  priceUsd: number;
  beds: number;
  baths: number;
  sqft: number;
  /** Optional URL to a GLB/GLTF model. If omitted, the viewer renders a placeholder. */
  modelUrl?: string;
};

export const listings: Listing[] = [
  {
    id: "loft-001",
    address: "412 Washington Ave",
    city: "St. Louis, MO",
    priceUsd: 549000,
    beds: 2,
    baths: 2,
    sqft: 1480,
  },
  {
    id: "house-002",
    address: "88 Forest Park Pkwy",
    city: "St. Louis, MO",
    priceUsd: 1250000,
    beds: 4,
    baths: 3,
    sqft: 3200,
  },
  {
    id: "condo-003",
    address: "210 N 10th St #1402",
    city: "St. Louis, MO",
    priceUsd: 389000,
    beds: 1,
    baths: 1,
    sqft: 820,
  },
];

export function getListing(id: string): Listing | undefined {
  return listings.find((l) => l.id === id);
}
