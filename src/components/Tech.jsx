import React, { useEffect, useState } from 'react'

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { ballsmobile } from '../assets';

const Tech = () => {
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
    /* поле где будут храниться наши шары */
   <div className='flex flex-row flex-wrap justify-center gap-10'>
      {/* получаем обект с информацией из constants indexjs и генирируем шары */}
      {!isMobile && 
        <>
          {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>          
           <BallCanvas icon={technology.icon} />
      </div> 
      ))} 
      </> 
      }

      {isMobile && <><div className=''>
       <img src={ballsmobile} className='h-auto w-[90vw] max-width-[100%];'></img>
      </div> </>}
         
    </div>
    
  );
};

export default SectionWrapper(Tech, "");