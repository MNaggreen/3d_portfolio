import React, { Suspense } from "react";
/* все что мы рендиримв 3d мы рендирим в canvas */
import { Canvas } from "@react-three/fiber";
/* утилиты помощники */
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

/* индикатор загруки */
import CanvasLoader from "../Loader";

const Earth = () => {
  const earth = useGLTF("./planet/scene.gltf");

  return (
    /* настройка положение размера и обозначение сомой модели */
    <primitive object={earth.scene} scale={2.5} position-y={0} rotation-y={0} />
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      /* настройки камеры */
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
        /* авторотация */
          autoRotate
          /* запрет зума */
          enableZoom={false}
          /* ограничение по осям для пользователя (вращение) */
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;