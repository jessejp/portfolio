import React, { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const MovingScenery = (props) => {
  const boxRef = useRef();
  const matcap = useMemo(
    () => new THREE.TextureLoader().load("/matcap_256.png"),
    []
  );

  useFrame(({ clock }, delta) => {
    boxRef.current.position.z =
     ( (-clock.getElapsedTime() % (props.spawnOffset+1)) * 3.5 )+
      props.spawnOffset;
  });

  return (
    <group position={props.position} rotation={props.rotation}>
      <mesh ref={boxRef} scale={0.5} rotation={props.meshRotation}>
        {props.shape}
        <meshMatcapMaterial matcap={matcap} wireframe />
      </mesh>
    </group>
  );
};

export default MovingScenery;
