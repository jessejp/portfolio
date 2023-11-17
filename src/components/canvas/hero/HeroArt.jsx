import {
  MarchingCube,
  MarchingCubes,
  MeshTransmissionMaterial,
  Center,
} from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

function MetaBall({ vec = new THREE.Vector3(), ...props }) {
  const api = useRef();

  useFrame(({ clock }) => {
    if (api.current) {
      api.current.position.x =  Math.sin(clock.getElapsedTime()) * 0.5 - 0.8;
    }
  });

  return <MarchingCube ref={api} vec={vec} {...props} />;
}

const HeroArt = () => {
  return (
    <Canvas
      camera={{
        near: 0.001,
        far: 100,
        fov: 90,
        position: [0, 0, 1],
      }}
    >
      <color attach="background" args={["#f0f0f0"]} />
      <ambientLight intensity={2} />

      <MarchingCubes
        resolution={80}
        maxPolyCount={10000}
        enableUvs={false}
        enableColors
      >
        <MeshTransmissionMaterial
          vertexColors
          transmissionSampler
          transmission={0.9}
          thickness={0.15}
          roughness={0}
          chromaticAberration={0.15}
          anisotropy={0.5}
          envMapIntensity={0.5}
          distortion={0.5}
          distortionScale={0.5}
          temporalDistortion={0.1}
          flatShading
        />
        <MetaBall color={"red"} strength={2} />
      </MarchingCubes>
    </Canvas>
  );
};

export default HeroArt;
