import React, { useEffect } from "react";
import { useThree } from "@react-three/fiber";
import { RunningMan } from "./Running_man";
import MovingScenery from "./MovingScenery";

const Scene = ({ enableCharacter, meshScale }) => {
  const state = useThree();
  const responsiveCenter = state.size.width > 750;

  useEffect(() => {
    if (!enableCharacter) return;

    if (responsiveCenter) {
      state.camera.position.set(0.3, 0.4, 1.85);
      // state.camera.lookAt(1.2, 0.25, 0);
      state.camera.rotation.set(-0.1, -0.4, 0);
    } else {
      state.camera.position.set(-0.1, 0.6, 1.8);
      // state.camera.lookAt(0, 0, 0);
      state.camera.rotation.set(-0.2, -0.0, 0);
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
        meshScale={meshScale}
      />
      <MovingScenery
        position={[1.4, 0, 0]}
        rotation={[0, Math.PI * 0.2, 0]}
        shape={<dodecahedronGeometry args={[1]} />}
        spawnOffset={5}
        meshScale={meshScale}
      />
      <MovingScenery
        position={[1.6, 0, 0]}
        rotation={[0, Math.PI * 0.2, 0]}
        shape={<boxGeometry args={[1, 2, 2]} />}
        spawnOffset={3.2}
        meshScale={meshScale}
      />
      <MovingScenery
        position={[1.6, 0, 0]}
        rotation={[0, Math.PI * 0.2, 0]}
        shape={<boxGeometry args={[1, 2, 2]} />}
        spawnOffset={9.9}
        meshRotation={[0, 1, 0]}
        meshScale={meshScale}
      />
      <MovingScenery
        position={[-1.5, 0, 0]}
        rotation={[0, Math.PI * 0.2, 0]}
        shape={<boxGeometry args={[2, 2, 2]} />}
        spawnOffset={6.6}
        meshScale={meshScale}
      />
      <MovingScenery
        position={[-1.4, -0.1, 0]}
        rotation={[0, Math.PI * 0.2, 0]}
        meshRotation={[0, 1, 0]}
        shape={<coneGeometry args={[0.8, 1.7, 8, 1]} />}
        spawnOffset={8.4}
        meshScale={meshScale}
      />
      <MovingScenery
        position={[-1.9, 0, 0]}
        rotation={[0, Math.PI * 0.2, 0]}
        shape={<boxGeometry args={[1, 2, 3]} />}
        spawnOffset={5}
        meshRotation={[0, 1, 0]}
        meshScale={meshScale}
      />
      <MovingScenery
        position={[2, -0.1, 0]}
        rotation={[0, Math.PI * 0.2, 0]}
        meshRotation={[0, 1, 0]}
        shape={<coneGeometry args={[1.2, 1.5, 8, 1]} />}
        spawnOffset={7.7}
        meshScale={meshScale}
      />
      <MovingScenery
        position={[0, -0.5, 0]}
        rotation={[0, Math.PI * 0.2, 0]}
        meshRotation={[Math.PI / 2, 0, 0]}
        shape={<planeGeometry args={[2.5, 2.5]} />}
        spawnOffset={3}
      />
      <MovingScenery
        position={[0, -0.5, 0]}
        rotation={[0, Math.PI * 0.2, 0]}
        meshRotation={[Math.PI / 2, 0, 0]}
        shape={<planeGeometry args={[2.5, 2.5]} />}
        spawnOffset={5}
      />
      <MovingScenery
        position={[0, -0.5, 0]}
        rotation={[0, Math.PI * 0.2, 0]}
        meshRotation={[Math.PI / 2, 0, 0]}
        shape={<planeGeometry args={[2.5, 2.5]} />}
        spawnOffset={7}
      />
      <MovingScenery
        position={[0, -0.5, 0]}
        rotation={[0, Math.PI * 0.2, 0]}
        meshRotation={[Math.PI / 2, 0, 0]}
        shape={<planeGeometry args={[2.5, 2.5]} />}
        spawnOffset={9}
      />
      <MovingScenery
        position={[0, -0.5, 0]}
        rotation={[0, Math.PI * 0.2, 0]}
        meshRotation={[Math.PI / 2, 0, 0]}
        shape={<planeGeometry args={[2.5, 2.5]} />}
        spawnOffset={11}
      />
      {!!enableCharacter && (
        <RunningMan rotation={[0, Math.PI * 0.2, 0]} position={[0, -1, -0.5]} />
      )}
    </>
  );
};

export default Scene;
