import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import Box from "./Box";
import { RunningMan } from "./Running_man";
import { Center } from "@react-three/drei";

const Canvas3D = () => {
  return (
    <Canvas
      camera={{
        position: [0, 0.5, 2],
      }}
    >
      {/* <ambientLight />
      <pointLight position={[10, 10, 10]} /> */}
      <Suspense fallback={null}>
        <RunningMan rotation={[0, Math.PI * 0.2, 0]} position={[0, -1, 0]} />
      </Suspense>
    </Canvas>
  );
};

export default Canvas3D;
