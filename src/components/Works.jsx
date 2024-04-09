import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { github } from '../assets'
import { SectionWrapper } from '../hoc'
import { projects } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  web_site_url
}) => {
  return (
    /* все появится равномерно с анимацией 
    карточка будет поворачиваться за мышкой*/
    <motion.div variants={fadeIn('up', 'spring', index * 0.5, 0.75)}>
      
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <a href={web_site_url}>
        {/* контейнер для карточек */}
        <div className="relative w-full h-[230px]">
          {/* картинка проекта */}
          
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />

          {/* непосредственно сама карточка и ссылка на гитхаб */}
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <a href={source_code_link}> <div
              onClick={() => window.open(source_code_link, '_blank')}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >      
                
              <img
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div></a>
          </div>
        </div></a>

        {/* заголовок сайта и описания */}
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        {/* также перебираем таги из нашего constant и там projects tags*/}
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  )
}

const Works = () => {
  return (
    <>
      {/* плавное появение текста при прокрутке */}
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>Самые интересные</p>
        <h2 className={`${styles.sectionHeadText}`}>Проекты.</h2>
      </motion.div>

      {/* описание с плавным появлением */}
      <div className="w-full flex">
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Следующие проекты демонстрируют мои навыки и опыт с помощью реальных
          примеров моей работы. Каждый проект кратко описан с помощью ссылок на
          репозитории кода и живые демонстрации в нем. Это отражает мою
          способность решать сложные задачи, работать с различными технологиями
          и эффективно управлять проектами.<br/><br/>
          Краткое резюме того, что я обычно использую:<br/>
          Frontend: React.js, Three.js Tailwind, DaisyUI, ShadCN, GSAP, Tilt<br/>
          Backend: API, Vercel, Netlify, Reg, Appwrite, Sanity<br/>
          
          
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, '')
