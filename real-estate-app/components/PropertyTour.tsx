"use client";

import { Application, Entity, Container } from "@playcanvas/react";
import { Camera, Light, Render } from "@playcanvas/react/components";
import { useModel } from "@playcanvas/react/hooks";
import { FILLMODE_NONE, RESOLUTION_AUTO } from "playcanvas";

function LoadedModel({ url }: { url: string }) {
  const { asset, loading, error } = useModel(url);
  if (loading || error || !asset) return null;
  return (
    <Entity name="property-model" position={[0, 0, 0]}>
      <Container asset={asset} />
    </Entity>
  );
}

function Placeholder() {
  return (
    <Entity name="placeholder-house">
      <Entity position={[0, 0.5, 0]} scale={[3, 1, 2]}>
        <Render type="box" />
      </Entity>
      <Entity position={[0, 1.5, 0]} scale={[3.4, 1, 2.4]} rotation={[0, 0, 0]}>
        <Render type="cone" />
      </Entity>
      <Entity position={[0, 0.5, 1.01]} scale={[0.6, 1, 0.05]}>
        <Render type="box" />
      </Entity>
    </Entity>
  );
}

export default function PropertyTour({ modelUrl }: { modelUrl?: string }) {
  return (
    <div className="viewer">
      <Application
        fillMode={FILLMODE_NONE}
        resolutionMode={RESOLUTION_AUTO}
        graphicsDeviceOptions={{ alpha: false, antialias: true }}
      >
        <Entity name="camera" position={[5, 3, 6]} rotation={[-20, 35, 0]}>
          <Camera clearColor="#0d0f12" fov={55} />
        </Entity>
        <Entity name="sun" rotation={[45, 30, 0]}>
          <Light type="directional" intensity={1.1} />
        </Entity>
        <Entity name="ambient">
          <Light type="omni" intensity={0.3} range={20} />
        </Entity>
        {modelUrl ? <LoadedModel url={modelUrl} /> : <Placeholder />}
      </Application>
    </div>
  );
}
