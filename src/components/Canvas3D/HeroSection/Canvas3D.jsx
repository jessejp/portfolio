import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { PresentationControls } from "@react-three/drei";
import Scene from "./Scene";

const Canvas3D = () => {
  const presentationProps = {
    enabled: true,
    global: true,
    cursor: true,
    speed: 0.5,
    rotation: [0.13, 0.1, 0],
    zoom: 1,
    polar: [-0.8, 0.3], // Vertical limit
    azimuth: [-2.7, 0.7], // Horizontal limit
    config: {
      // Spring config for drag-n-drop
      mass: 3,
      tension: 400,
      friction: 26,
    },
    snap: {
      // Spring config for release
      mass: 3,
      tension: 400,
      friction: 20,
    },
  };

  return (
    <Canvas
      camera={{
        far: 7.5,
      }}
    >
      {/* <ambientLight />
      <pointLight position={[10, 10, 10]} /> */}
      <PresentationControls {...presentationProps}>
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </PresentationControls>
    </Canvas>
  );
};

export default Canvas3D;
