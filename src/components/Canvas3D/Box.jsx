import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

const Box = () => {
  const boxRef = useRef();
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
      <meshStandardMaterial color="#0000ff" wireframe={true} />
    </mesh>
  );
};

export default Box;
