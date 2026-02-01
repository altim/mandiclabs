"use client";

import dynamic from "next/dynamic";
import { Canvas } from "@react-three/fiber";
import styles from "./Scene.module.scss";

const Experience = dynamic(() => import("./components/Experience/Experience"), {
  ssr: false,
});

export default function Scene() {
  return (
    <Canvas
      className={styles.root}
      dpr={[1, 2]}
      gl={{ alpha: true, antialias: false }}
    >
      <Experience />
    </Canvas>
  );
}
