import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { RunningMan } from "./Running_man";
import { PresentationControls } from "@react-three/drei";
import MovingScenery from "./MovingScenery";
import { useControls } from "leva";

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
        position: [0, 0.5, 2],
        far: 7.5,
      }}
    >
      {/* <ambientLight />
      <pointLight position={[10, 10, 10]} /> */}
      <PresentationControls {...presentationProps}>
        <Suspense fallback={null}>
          <MovingScenery
            position={[1.4, 0, 0]}
            rotation={[0, Math.PI * 0.2, 0]}
            shape={<dodecahedronGeometry args={[1]} />}
            spawnOffset={4}
          />
          <MovingScenery
            position={[1.4, 0, 0]}
            rotation={[0, Math.PI * 0.2, 0]}
            shape={<boxGeometry args={[1, 2, 1]} />}
            spawnOffset={12}
          />
          <MovingScenery
            position={[-1.4, -0.1, 0]}
            rotation={[0, Math.PI * 0.2, 0]}
            meshRotation={[0, 1, 0]}
            shape={<coneGeometry args={[0.8, 1.5, 8, 1]} />}
            spawnOffset={9}
          />
          <MovingScenery
            position={[0, -0.5, 0]}
            rotation={[0, Math.PI * 0.2, 0]}
            meshRotation={[Math.PI / 2, 0, 0]}
            shape={<planeGeometry args={[2, 2]} />}
            spawnOffset={5}
          />
          <MovingScenery
            position={[0, -0.5, 0]}
            rotation={[0, Math.PI * 0.2, 0]}
            meshRotation={[Math.PI / 2, 0, 0]}
            shape={<planeGeometry args={[2, 2]} />}
            spawnOffset={9}
          />
          <MovingScenery
            position={[0, -0.5, 0]}
            rotation={[0, Math.PI * 0.2, 0]}
            meshRotation={[Math.PI / 2, 0, 0]}
            shape={<planeGeometry args={[2, 2]} />}
            spawnOffset={12}
          />
          <RunningMan
            rotation={[0, Math.PI * 0.2, 0]}
            position={[0, -1, -0.5]}
          />
        </Suspense>
      </PresentationControls>
    </Canvas>
  );
};

export default Canvas3D;
