import { useFrame } from "@react-three/fiber";
import React, { useMemo, useRef } from "react";
import * as THREE from "three";

const pointsMaterial = new THREE.PointsMaterial({
    color: "#0000ff",
    size: 0.05,
    depthWrite: true,
});

const Geometry = (props) => {
  const boxRef = useRef();
  const matcap = useMemo(
    () => new THREE.TextureLoader().load("/matcap_256.png"),
    []
  );

  useFrame(({ clock }, delta) => {
    boxRef.current.position.z +=
      (props.position[1] / 0.4) *
      Math.sin(clock.getElapsedTime()) *
      0.1 *
      delta;
    // boxRef.current.rotation.x -= 0.1 * delta;
  });

  return (
    <group position={props.position} rotation={props.rotation}>
      <points
        ref={boxRef}
        scale={0.5}
        rotation={props.meshRotation}
        geometry={props.shape}
        material={pointsMaterial}
      >
      </points>
    </group>
  );
};

export default Geometry;
