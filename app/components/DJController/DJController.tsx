import { useGLTF } from "@react-three/drei";
import { useEffect } from "react";
import * as THREE from "three";

export default function DJController() {
  const djController = useGLTF("./DJController.glb");

  useEffect(() => {
    djController.scene.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.material = new THREE.MeshStandardMaterial({
          color: "#5A5A5A",
          roughness: 0.3,
          metalness: 0,
          side: THREE.DoubleSide,
        });
      }
    });
  }, [djController]);

  return (
    <primitive
      object={djController.scene}
      scale={[0.004, 0.004, 0.004]}
      position={[0, 0.24, 0]}
    />
  );
}
