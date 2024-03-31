// тут мы будет хранить текст для вставки в наши компоненты

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  python,
  javascript1,
  react,
  fullstack,
  lyppreview,
  gptv,
} from '../assets'

export const navLinks = [
  {
    id: 'about',
    title: 'Обо мне',
  },
  {
    id: 'work',
    title: 'Работы',
  },
  {
    id: 'contact',
    title: 'Контакты',
  },
]

const services = [
  {
    title: 'Web Разработчик',
    icon: web,
  },
  {
    title: 'React Native Разработчик',
    icon: mobile,
  },
  {
    title: 'Frontend Разработчик',
    icon: backend,
  },
  {
    title: 'Создатель Контента',
    icon: creator,
  },
]

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
]

const experiences = [
  {
    title: 'Python',
    company_name: 'Stepik',
    icon: python,
    iconBg: '#1d1836',
    date: 'Январь 2022 - Декабрь 2022',
    points: [
      'Базовый уровень: ввод-вывод данных, условные операторы, типы данных, циклы for и while, строковый тип данных, списки, функции.',
      'Продвинутый уровень: Вложенные списки, матрицы, кортежи, множества, словари, модули(random, string, decimal, fractions, complex, turtle), функции.',
      'Работа с файлами и мини-проектами.',
      'Объектно-ориентированное программирование.',
    ],
  },
  {
    title: ' HTML, CSS, Java Script',
    company_name: 'Udemy',
    icon: javascript1,
    iconBg: '#1d1836',
    date: 'Январь 2023 - Июнь 2023',
    points: [
      'Базовая верстка HTML+CSS с использованием Microsoft Visual Studio Code, GIT, NPM.',
      'Продвинутая адаптиная, кросс-браузерная верстка с использованием SASS CSS + Grid или Flexbox.',
      'Добавление логики в приложения с ипользованием базового Java Script стандарта EСMAScript 14 (2023)',
      'Продвинутый уровень JS, использование хуков, а также централизиронного состояния при помощи Redux.',
    ],
  },
  {
    title: 'React.js',
    company_name: 'Udemy',
    icon: react,
    iconBg: '#1d1836',
    date: 'Июль 2023 - Январь 2024',
    points: [
      'Разработка и сопровождение веб-приложений с использованием связки Vite.js + React.js + Tailwind CSS и других связанных технологий.',
      'Сотрудничество с кросс-функциональными командами, включая дизайнеров, менеджеров по продуктам и других разработчиков, для создания высококачественных продуктов.',
      'Внедрение адаптивного дизайна и обеспечение кроссбраузерной совместимости, а также анимаций(Tilt, GASP) и 3D моделей, используя Three.js.',
      'Участие в обзорах кода и предоставление конструктивной обратной связи с другими разработчиками.',
    ],
  },
  {
    title: 'Full stack Разработка',
    company_name: 'Udemy',
    icon: fullstack,
    iconBg: '#1d1836',
    date: 'Активно изучаю в данный момент',
    points: [
      'Отправка и получение данных с сервера.',
      'Опыт в API для получения информации и вывода в приложении.',
      'Работа в  CMS системах, таких как Appwrite, a также Sanity.',
      'Комплексоное создание социальной сети Lypgraph используя CMS .',
    ],
  },
]

const testimonials = [
  {
    testimonial:
      'Я думала, что невозможно сделать сайт таким же красивым, как наш продукт, но Николай доказал, что я ошибалась.',
    name: 'Светлана',
    designation: 'Фин. Директор',
    company: 'АКМЕ',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      'Быстро и качественно получили сайт под ключ от Николая, сделанный с использовнием комбинированного дизайна с двух разных макетов.',
    name: 'Карим',
    designation: 'Исп. Директор',
    company: 'ДЕФ',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      'Я никогда не встречала веб-разработчика, который по-настоящему заботился бы об успехе своих клиентов так, как это делает Николай. После того, как Николай оптимизировал наш веб-сайт, трафик увеличился на 50%!',
    name: 'Елизавета',
    designation: 'Тех. Директор',
    company: '456 IT',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
]

const projects = [
  {
    name: 'Lypgraph',
    description:
      'Веб-платформа, которая позволяет пользователям загружать, сохранять и лайкать изображения, обеспечивая удобное и эффективное решение для обмена настроением.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'appwrite',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: lyppreview,
    source_code_link: 'https://github.com/MNaggreen/Lypgraph',
    web_site_url: 'https://lypgraph.vercel.app/'
  },
  {
    name: 'GPTV',
    description:
      'Веб-приложение, продающее подписку на доступ к искусственному интеллекту, опписывает его возможности и предоставляет форму для заполнения заявки и шаблона блога компании создателя.',
    tags: [
      {
        name: 'rca',
        color: 'blue-text-gradient',
      },
      {
        name: 'shacn',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: gptv,
    source_code_link: 'https://github.com/MNaggreen/GPT-V',
    web_site_url: 'https://gpt-v.netlify.app/'
  },
  {
    name: 'Fleght AI',
    description:
      'Современный дизайн, а также использование GASP + Parallax.js позволило создать готовый SPA под использование и подажу доступа к платформы генерирующей текст, видео, а также улучшение фото и использованием искусственного интеллекта.',
    tags: [
      {
        name: 'vitejs',
        color: 'blue-text-gradient',
      },
      {
        name: 'gasp',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: tripguide,
    source_code_link: 'https://github.com/MNaggreen/Fleght',
    web_site_url: 'https://fleght.netlify.app/' 
  },
]

export { services, technologies, experiences, testimonials, projects }
