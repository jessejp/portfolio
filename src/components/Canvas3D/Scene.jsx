import React, { Suspense, useEffect } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { RunningMan } from "./Running_man";
import { PresentationControls, Center } from "@react-three/drei";
import MovingScenery from "./MovingScenery";

const Scene = () => {
  const state = useThree();
  const responsiveCenter = state.size.width > 565;

  useEffect(() => {
    console.log(state.size.width, responsiveCenter);
    if (responsiveCenter) {
      state.camera.position.set(0.4, 0.45, 1.75);
      state.camera.lookAt(1.2, 0.25, 0);
    } else {
      state.camera.position.set(0, 0.8, 2);
      state.camera.lookAt(0, 0, 0);
    }
  }, [responsiveCenter]);

  return (
    <>
      <MovingScenery
        position={[4, -0.1, 0]}
        rotation={[0, Math.PI * 0.2, 0]}
        meshRotation={[Math.PI * 2, 1.2, 2.3]}
        shape={<coneGeometry args={[2, 2, 8, 1]} />}
        spawnOffset={9}
      />
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
        spawnOffset={7}
      />
      <MovingScenery
        position={[-1.4, -0.1, 0]}
        rotation={[0, Math.PI * 0.2, 0]}
        meshRotation={[0, 1, 0]}
        shape={<coneGeometry args={[0.8, 1.5, 8, 1]} />}
        spawnOffset={6}
      />
      <MovingScenery
        position={[0, -0.5, 0]}
        rotation={[0, Math.PI * 0.2, 0]}
        meshRotation={[Math.PI / 2, 0, 0]}
        shape={<planeGeometry args={[2, 2]} />}
        spawnOffset={3}
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
        spawnOffset={7}
      />
      <MovingScenery
        position={[0, -0.5, 0]}
        rotation={[0, Math.PI * 0.2, 0]}
        meshRotation={[Math.PI / 2, 0, 0]}
        shape={<planeGeometry args={[2, 2]} />}
        spawnOffset={9}
      />
      <RunningMan rotation={[0, Math.PI * 0.2, 0]} position={[0, -1, -0.5]} />
    </>
  );
};

export default Scene;
