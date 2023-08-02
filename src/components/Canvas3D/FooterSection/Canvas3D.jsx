import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Scene from "./Scene";

const Canvas3D = () => {
  return (
    <Canvas
      camera={{
        far: 100,
        fov: 60,
      }}
      flat={true}
    >
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
    </Canvas>
  );
};

export default Canvas3D;
