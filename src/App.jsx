import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";

import React, { useEffect, useState } from 'react'


const App = () => {
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
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className='relative z-0'>
          <Contact />
          {!isMobile && <StarsCanvas />}
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;