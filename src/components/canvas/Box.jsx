import React, { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const Box = () => {
  const boxRef = useRef();
  const matcap = useMemo(
    () => new THREE.TextureLoader().load("/matcap_256.png"),
    []
  );

  useFrame(({ clock }, delta) => {
    boxRef.current.rotation.x += 0.6 * delta;
  });

  return (
    <mesh
      ref={boxRef}
      scale={3}
      onPointerEnter={(ThreeEvent) =>
        (ThreeEvent.object.material.wireframe = false)
      }
      onPointerLeave={(ThreeEvent) =>
        (ThreeEvent.object.material.wireframe = true)
      }
    >
      <sphereGeometry args={[1, 12, 6]} />
      <meshMatcapMaterial matcap={matcap} />
    </mesh>
  );
};

export default Box;
