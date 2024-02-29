import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
/* тукстуры и вращение для наших шаров */
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

/* загрузка процентов */
import CanvasLoader from "../Loader";

const Ball = (props) => {
  /* полкчаем текстуру из technologies index .js переданную из tech.js */
  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      {/* настраиваем свет */}
      <ambientLight intensity={0.75} />
       <directionalLight position={[0, 0, 0.05]} /> 

      {/* формируем шар */}
      <mesh castShadow receiveShadow scale={2.75}>
        {/* создание формы */}
        <icosahedronGeometry args={[1, 5]} />
        {/* создание материала */}
        <meshStandardMaterial
          color='#544b80'
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        {/* созданием текстуры обема  */}
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  return (
    /* тот же самый трюк что и зс делориан */
    <Canvas
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      {/* fallback={<CanvasLoader />} во время загруки будет выведен loader */}
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;