import { useEffect, useRef } from "react";
import { useGLTF, useVideoTexture } from "@react-three/drei";
//import type { GLTF } from 'three-stdlib'

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const DemoComputer = (props: any) => {
  const group = useRef(null as any);
  const { nodes, materials } = useGLTF("/models/computer.glb") as any;

  const txt = useVideoTexture(
    props.texture ? props.texture : "/textures/project/project1.mp4"
  );

  useEffect(() => {
    if (txt) {
      txt.flipY = false;
    }
  }, [txt]);

  useGSAP(() => {
    gsap.from(group!.current.rotation, {
      y: Math.PI / 2,
      duration: 1.5,
      ease: "power3.out",
    });
  }, [txt]);

  return (
    <group ref={group} {...props} dispose={null}>
      {/* Monitor Screen */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["monitor-screen"].geometry}
        //  material={nodes["monitor-screen"].material}
        position={[0.127, 1.831, 0.511]}
        rotation={[1.571, -0.005, 0.031]}
        scale={[0.661, 0.608, 0.401]}
      >
        <meshBasicMaterial map={txt} />
      </mesh>

      <group
        position={[0.266, 1.132, 0.051]}
        rotation={[0, -0.033, 0]}
        scale={[0.042, 0.045, 0.045]}
      >
        {[
          "Monitor-B-_computer_0_1",
          "Monitor-B-_computer_0_2",
          "Monitor-B-_computer_0_3",
          "Monitor-B-_computer_0_4",
          "Monitor-B-_computer_0_5",
          "Monitor-B-_computer_0_6",
          "Monitor-B-_computer_0_7",
          "Monitor-B-_computer_0_8",
        ].map((name, i) => (
          <mesh
            key={name}
            castShadow
            receiveShadow
            geometry={(nodes as any)[name].geometry}
            material={
              (materials as any)[Object.keys(materials)[i]] ||
              materials.computer
            }
          />
        ))}
      </group>
    </group>
  );
};

useGLTF.preload("/models/computer.glb");

export default DemoComputer;
