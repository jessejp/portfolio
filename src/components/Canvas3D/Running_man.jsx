/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.4 running_man.glb
*/

import React, { useEffect, useMemo, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import * as THREE from "three";

export function RunningMan(props) {
  const group = useRef();
  const { nodes, animations } = useGLTF("/running_man.glb");
  const { actions } = useAnimations(animations, group);
  const matcap = useMemo(
    () => new THREE.TextureLoader().load("/matcap_256.png"),
    []
  );
  console.log(actions);
  useEffect(() => {
    actions.run.play();
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.012}>
          <primitive object={nodes.mixamorigHips} />
          <skinnedMesh
            name="Object_7"
            geometry={nodes.Object_7.geometry}
            skeleton={nodes.Object_7.skeleton}
          >
            <meshMatcapMaterial matcap={matcap} />
          </skinnedMesh>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/running_man.glb");