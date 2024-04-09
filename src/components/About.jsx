import React from 'react'
import {Tilt} from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

/* данные мы получаем из папки constants index.js объект services */
const ServiceCard = ({ index, title, icon }) => (

  /* тилт будет использоваться для анимирования */
  <Tilt className='xs:w-[250px] w-full'>
    {/* карточка */}
    {/* index * 0.5, 0.75 шаг  0.75 длина */}
    <motion.div 
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      {/* options это фишка tilt анимации */}
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
      
      {/* непосредственно наш значек для карточки */}
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        {/* заголовок для каждой карточки */}
        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
); 

const About = () => {


  return (
    <>
       <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Вступление</p>
        <h2 className={styles.sectionHeadText}>Представление.</h2>
      </motion.div>

{/* fadeIn(start, start, delay, duration) анимация */}
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Я разработчик программного обеспечения с опытом работы в 
        JavaScript, а также с такими фреймворками, как React, Node.js и
        Three.js. Я быстро учусь и тесно сотрудничаю с клиентами для
        создания эффективных, масштабируемых и удобных в использовании решений, которые решают
        реальные проблемы. Давайте работать вместе, чтобы воплотить ваши идеи в жизнь!
      </motion.p>

{/* карточки представления моих умениё */}
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div> 
    </>
  );
};

/* оборащчиваем весь наш контент с помощьб компонента высшего порядка Section wrapper
который будет служить оберткой для нашего сайта туда передаем названия компонента и его id */
export default SectionWrapper( About , "about");