/*
  Fixed version – works with modern GLTFs + matcap + GSAP
*/

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";
import { Float, useGLTF, useTexture } from "@react-three/drei";
import { type Mesh } from "three";

const Cube = ({ ...props }) => {
  const { nodes } = useGLTF("/models/cube.glb") as any; // we'll type it properly below

  const texture = useTexture("/textures/cube.png");

  const cubeRef = useRef<Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useGSAP(() => {
    if (!cubeRef.current) return;

    gsap
      .timeline({
        repeat: -1,
        repeatDelay: 0.5,
      })
      .to(cubeRef.current.rotation, {
        y: hovered ? "+=2" : `+=${Math.PI * 2}`,
        x: hovered ? "+=2" : `-=${Math.PI * 2}`,
        duration: 2.5,
        ease: "power2.inOut",
      });
  }, [hovered]);

  // Important: nodes.Cube is already a full Mesh with geometry + material
  const mesh = nodes.Cube as Mesh;

  return (
    <Float floatIntensity={2}>
      <group
        {...props}
        position={[9, -4, 0]}
        rotation={[2.6, 0.8, -1.8]}
        scale={0.74}
        dispose={null}
      >
        <mesh
          ref={cubeRef}
          castShadow
          receiveShadow
          geometry={mesh.geometry}
          material={mesh.material}
          onPointerEnter={() => setHovered(true)}
          onPointerLeave={() => setHovered(false)}
        >
          {/* Override the original material with matcap */}
          <meshMatcapMaterial matcap={texture} toneMapped={false} />
        </mesh>
      </group>
    </Float>
  );
};

useGLTF.preload("/models/cube.glb");
useTexture.preload("/textures/cube.png");

export default Cube;
