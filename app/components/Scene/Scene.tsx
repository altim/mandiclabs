"use client";

import { Suspense, useState } from "react";
import dynamic from "next/dynamic";
import { Canvas } from "@react-three/fiber";
import { useGLTF, useProgress } from "@react-three/drei";
import styles from "./Scene.module.scss";

const MODEL_PATH = "./DJController-compressed.glb";
const DRACO_PATH = "/draco/";

// Start loading the model immediately with local Draco decoder
useGLTF.preload(MODEL_PATH, DRACO_PATH);

const Experience = dynamic(() => import("./components/Experience/Experience"), {
  ssr: false,
});

function Loader() {
  const { progress } = useProgress();
  return (
    <div className={styles.loader}>
      <div className={styles.progressBar}>
        <div
          className={styles.progressFill}
          style={{ width: `${progress}%` }}
        />
      </div>
      <span className={styles.progressText}>{progress.toFixed(0)}%</span>
    </div>
  );
}

export default function Scene() {
  const [ready, setReady] = useState(false);

  return (
    <div className={styles.container}>
      {!ready && <Loader />}
      <Canvas
        className={styles.root}
        dpr={[1, 2]}
        gl={{ alpha: true, antialias: false }}
      >
        <Suspense fallback={null}>
          <Experience onReady={() => setReady(true)} />
        </Suspense>
      </Canvas>
    </div>
  );
}
