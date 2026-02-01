"use client";

import DJController from "@/app/components/DJController/DJController";
import { PerspectiveCamera } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import fragmentShader from "../../shaders/fragment.glsl";
import vertexShader from "../../shaders/vertex.glsl";

export default function SmokeExperience() {
  const shaderMaterialRef = useRef<THREE.ShaderMaterial>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera>(null);
  const objectRef = useRef<THREE.Group>(null);

  useEffect(() => {
    cameraRef.current?.lookAt(0.2, 0.2, 0.2);
  }, []);

  // Update shader uniforms each frame
  useFrame((state, delta) => {
    if (!shaderMaterialRef.current) return;

    // Update time uniform for constant animation
    shaderMaterialRef.current.uniforms.uTime.value = state.clock.elapsedTime;

    if (objectRef.current) {
      objectRef.current.rotation.y += delta * 0.5;
    }
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[3, 3, 3]} intensity={2} />
      <mesh position={[0, 0, 0]} rotation={[-Math.PI * 0.5, 0, 0]}>
        <planeGeometry args={[3, 3, 64, 64]} />
        <shaderMaterial
          ref={shaderMaterialRef}
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
          uniforms={{
            uTime: { value: 0 },
          }}
          wireframe={true}
        />
      </mesh>
      <group position={[0.2, 0, 0.2]} ref={objectRef}>
        <DJController />
      </group>

      <PerspectiveCamera
        ref={cameraRef}
        position={[0.7, 0.9, 0.6]}
        makeDefault
      />
    </>
  );
}
