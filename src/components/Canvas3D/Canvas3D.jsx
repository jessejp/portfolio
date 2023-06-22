import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import Box from "./Box";

const Canvas3D = () => {
  return (
    <Canvas>
      {/* <ambientLight />
      <pointLight position={[10, 10, 10]} /> */}
      <Box />
    </Canvas>
  );
};

export default Canvas3D;
