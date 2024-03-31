import React, { Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
// это помощники для отрисовки canvas
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import { logo, menu, close } from "../../assets";
import CanvasLoader from '../Loader'

const Computers = ({ isMobile } ) => {
  /* const computer = useGLTF('./desktop_pc/scene.gltf') */
  const computer = useGLTF('./delorian/scene.gltf')
  return (
    /* окружение основа нашего 3d все что ниже будет создано с помощью билиотеки react-three-fiber*/
    <mesh>
      {/* постоянный свет */}
      <hemisphereLight intensity={2} groundColor="black" />

      {/* место откуда будет светить свет */}
      <spotLight
        position={[-30, 50, 10]}
        /* color={{'white'}} */
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />

      {/* сила свечения */}
      <pointLight intensity={1} />

      {/* непостредственно сам компьютер const computer = useGLTF('./desktop_pc/scene.gltf')*/}
      {/* так же тут мы настраиваем исходное положение */}
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.8 :  2}
        position={ isMobile ? [0, -0.5, -0.2]  : [0, -1, -1.5]}
        rotation={[-0.01, 3.8, 0.1]}
      />
    </mesh>
  )
}

const ComputersCanvas = () => {
  /* проверка версии сайта */
  const [isMobile, setIsMobile] = useState(false);

    
  /* все что делает этот useEffect то изменят isMobile если Max width меньше 500 */
  useEffect(() => { 
  // Добавляем listener для проверки размера окна   
  /* если размер окна не больше 500 */
  const mediaQuery = window.matchMedia('(max-width: 500px)');
  // устанавливаем текущее значение `isMobile` как состояние true false
  setIsMobile(mediaQuery.matches);

  // функция которая будет изменять согласно media query? которая будет измнеять isMobile при изменении окна
  const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

  // Add the callback function as a listener for changes to the media query
  mediaQuery.addEventListener("change", handleMediaQueryChange);

  // Remove the listener when the component is unmounted
  return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    // сюда мы будем добавлять компьютер и задавать стратовые позиции камеры
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}      
      camera={{ position: [20, 3, 5], fov: 25 }}
      // это значение необходимо здесь чтобы правильно рендерить модель
      gl={{ preserveDrawingBuffer: true }}
    >
      {/* loader for canvas model */}
      <Suspense fallback={<CanvasLoader />}>
        {/* это позволит нам упралять и круть нашу модель */}
        <OrbitControls
          autoRotate
          enableZoom={false}
          /* все что ниже установит ограничение чтобы мы могли круть только в определенном направлении */
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
    
        {/* computers компонент */}
        {!isMobile && <Computers isMobile={isMobile} />}
        {isMobile && <></>}
      </Suspense> 

      <Preload all />
      
    </Canvas>
  )
}

export default ComputersCanvas
