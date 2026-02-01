import { useGLTF } from "@react-three/drei";
import { useEffect } from "react";
import * as THREE from "three";

const MODEL_PATH = "./DJController-compressed.glb";
const DRACO_PATH = "/draco/";

interface DJControllerProps {
  onReady?: () => void;
}

export default function DJController({ onReady }: DJControllerProps) {
  const djController = useGLTF(MODEL_PATH, DRACO_PATH);

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
    onReady?.();
  }, [djController, onReady]);

  return (
    <primitive
      object={djController.scene}
      scale={[0.004, 0.004, 0.004]}
      position={[0, 0.24, 0]}
    />
  );
}
