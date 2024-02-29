import { motion } from "framer-motion";
import React, { useEffect, useState } from 'react'
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
 import { delorianmobile } from '../assets'; 

const Hero = () => {
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
    <section className={`relative w-full md:h-[800px] h-[500px] xl:h-[1200px] mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          {/* кружок фиолетовый */}
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          {/* палочкафиолетовая */}
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

{/* заголовок и текст приветсвия */}
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Привет, Я <span className='text-[#915EFF]'>Nikolay</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Я создаю 3D изображения, пользовательские <br className='sm:block hidden' />
            интерфейсы и веб приложения
          </p>
        </div>
        
      </div>
      
{/* наш 3d рабочий стол из папки canvas */}
      
      {!isMobile && <ComputersCanvas />}
      
      {isMobile && <>
      <div className='pt-[320px] xs:pt-[340px] sm:pt-[380px] w-[100%]
      flex flex-row justify-center mx-auto w-[100%] '>
       <img src={delorianmobile} className='w-auto h-auto rounded-3xl rounded-full '></img></div></>}

{/* кнопка плавного перехода */}
      <div className={!isMobile ? 'absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center' 
      : 
      'flex justify-center items-center'}>
        {!isMobile && <p className='mr-5'>Попробуйте покрутить DeLorian</p>}
        <a href='#about'>
{/* овал */}
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2 rotate-90'>
           {/* летающий кружок */}
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;