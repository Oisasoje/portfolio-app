import * as THREE from "three";
import { Float, useGLTF } from "@react-three/drei";
import type { GLTF } from "three-stdlib";
import type { JSX } from "react";
import { useMediaQuery } from "react-responsive";

type TargetGLTF = GLTF & {
  nodes: {
    Cylinder_arrow_red_0: THREE.Mesh;
    Cylinder_target_white_0: THREE.Mesh;
    Cylinder001_Gold_0: THREE.Mesh;
    Cylinder001_Material002_0: THREE.Mesh;
  };
  materials: {
    arrow_red: THREE.MeshStandardMaterial;
    target_white: THREE.MeshStandardMaterial;
    Gold: THREE.MeshStandardMaterial;
    "Material.002": THREE.MeshStandardMaterial;
  };
};

const Target = (props: JSX.IntrinsicElements["group"]) => {
  const { nodes, materials } = useGLTF(
    "/models/target-transformed.glb"
  ) as unknown as TargetGLTF;

  // const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  // const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  return (
    <Float floatIntensity={1}>
      <group
        {...props}
        position={isMobile ? [-8, 2, 0] : [-22, 2, 0]}
        scale={isMobile ? 0.8 : 1.3}
        dispose={null}
      >
        <mesh
          geometry={nodes.Cylinder_arrow_red_0.geometry}
          material={materials.arrow_red}
          position={[0.072, 0, 0]}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          geometry={nodes.Cylinder_target_white_0.geometry}
          material={materials.target_white}
          position={[0.072, 0, 0]}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          geometry={nodes.Cylinder001_Gold_0.geometry}
          material={materials.Gold}
          position={[1.018, 0, 0]}
          rotation={[-Math.PI, Math.PI, 0]}
          scale={1.309}
        />
        <mesh
          geometry={nodes.Cylinder001_Material002_0.geometry}
          material={materials["Material.002"]}
          position={[1.018, 0, 0]}
          rotation={[-Math.PI, Math.PI / 2, 0]}
          scale={1.309}
        />
      </group>
    </Float>
  );
};

useGLTF.preload("/models/target-transformed.glb");
export default Target;
