import React from "react";
/* вертикальная временная линия с анимацией */
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

/* это необходимо для корректной работы нашей вертикальной линии */
import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

/* функция формируящая карточку с моим опытом*/
const ExperienceCard = ({ experience }) => {
  return (
    /* этот компонент поможет нам сформироват ькрасивую верстку со временем */
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          {/* картинка языка прогармирования */}
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      {/* маленькие описание того что я имею разделенные точками слева(список обынче) */}
      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
    {/* анимация для p тегов */}
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          Что я делаю и изучаю
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Опыт.
        </h2>
      </motion.div>

    {/* вертикальная линия с опытом учебы */}
      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {/* вытаскиваем expirence объект и формируем карточку expirence */}
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");