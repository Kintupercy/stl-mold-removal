"use client";

import dynamic from "next/dynamic";

const PropertyTour = dynamic(() => import("./PropertyTour"), {
  ssr: false,
  loading: () => (
    <div className="viewer">
      <div className="status">Loading 3D tour…</div>
    </div>
  ),
});

export default function PropertyTourClient({ modelUrl }: { modelUrl?: string }) {
  return <PropertyTour modelUrl={modelUrl} />;
}
