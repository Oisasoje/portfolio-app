import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { easing } from "maath";

const HeroCamera = ({
  children,
  isMobile,
}: {
  children: any;
  isMobile: boolean;
}) => {
  const groupRef = useRef(0 as any);

  useFrame((state, delta) => {
    easing.damp3(state.camera.position, [0, 0, 27], 0.25, delta);

    if (!isMobile) {
      easing.dampE(
        groupRef.current.rotation,
        [-state.pointer.y / 3, state.pointer.x / 5, 0],
        0.25,
        delta
      );
    }
  });
  return (
    <group scale={isMobile ? 1 : 1.4} ref={groupRef}>
      {children}
    </group>
  );
};
export default HeroCamera;
