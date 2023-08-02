import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import Geometry from "./Geometry";
import * as THREE from "three";

// const geometry = new THREE.BoxGeometry(40, 5, 5, 10, 2, 2);
// const geometry = new THREE.PlaneGeometry(40, 40, 20, 20);

const Scene = () => {
  const rotationGroup = useRef();
  useFrame(({ clock }, delta) => {
    // Tilt the group back and forth on the x axis
    rotationGroup.current.rotation.x +=
      -Math.sin(clock.getElapsedTime() * 0.6) * 0.3 * delta;
    // Raise the group on the same rhythm as the rotation to keep it in the center
    rotationGroup.current.position.y +=
      Math.sin(clock.getElapsedTime() * 0.6) * 0.3 * delta + 0.002;
  });

  return (
    <group ref={rotationGroup} position={[0, -3, -5]} rotation={[0, 0, 0]}>
      <points>
        <planeGeometry args={[70, 70, 20, 20]} />
        <pointsMaterial color="#0000ff" size={0.1} depthWrite />
      </points>
    </group>
  );
};

export default Scene;
