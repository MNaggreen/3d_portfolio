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
  gptv
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
      'Разработка и сопровождение веб-приложений с использованием React.js и других связанных технологий.',
      'Сотрудничество с кросс-функциональными командами, включая дизайнеров, менеджеров по продуктам и других разработчиков, для создания высококачественных продуктов.',
      'Внедрение адаптивного дизайна и обеспечение кроссбраузерной совместимости.',
      'Участие в обзорах кода и предоставление конструктивная обратная связь с другими разработчиками.',
    ],
  },
  {
    title: 'Java Script',
    company_name: 'Udemy',
    icon: javascript1,
    iconBg: '#1d1836',
    date: 'Январь 2023 - Июнь 2023',
    points: [
      'Разработка и сопровождение веб-приложений с использованием React.js и других связанных технологий.',
      'Сотрудничество с кросс-функциональными командами, включая дизайнеров, менеджеров по продуктам и других разработчиков, для создания высококачественных продуктов.',
      'Внедрение адаптивного дизайна и обеспечение кроссбраузерной совместимости.',
      'Участие в обзорах кода и предоставление конструктивная обратная связь с другими разработчиками.',
    ],
  },
  {
    title: 'React.js',
    company_name: 'Udemy',
    icon: react,
    iconBg: '#1d1836',
    date: 'Июль 2023 - Январь 2024',
    points: [
      'Разработка и сопровождение веб-приложений с использованием React.js и других связанных технологий.',
      'Сотрудничество с кросс-функциональными командами, включая дизайнеров, менеджеров по продуктам и других разработчиков, для создания высококачественных продуктов.',
      'Внедрение адаптивного дизайна и обеспечение кроссбраузерной совместимости.',
      'Участие в обзорах кода и предоставление конструктивная обратная связь с другими разработчиками.',
    ],
  },
  {
    title: 'Full stack Разработка',
    company_name: 'Udemy',
    icon: fullstack,
    iconBg: '#1d1836',
    date: 'Февраль 2024 - Активно изучаю',
    points: [
      'Разработка и сопровождение веб-приложений с использованием React.js и других связанных технологий.',
      'Сотрудничество с кросс-функциональными командами, включая дизайнеров, менеджеров по продуктам и других разработчиков, для создания высококачественных продуктов.',
      'Внедрение адаптивного дизайна и обеспечение кроссбраузерной совместимости.',
      'Участие в обзорах кода и предоставление конструктивная обратная связь с другими разработчиками.',
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
      'Я никогда не встречал веб-разработчика, который по-настоящему заботился бы об успехе своих клиентов так, как это делает Николай.',
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
  },
  {
    name: 'GPT-V',
    description:
      'Веб-приложение, продающее подписку на доступ к искусственному интеллекту, опписывает его возможности и предоставляет форму для заполнения заявки и шаблона блога компании создателя.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: gptv,
    source_code_link: 'https://github.com/',
  },
  {
    name: 'Trip Guide',
    description:
      'Комплексная платформа бронирования путешествий, которая позволяет пользователям бронировать авиабилеты, отели и арендованные автомобили, а также предлагает подробные рекомендации по популярным направлениям.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: tripguide,
    source_code_link: 'https://github.com/',
  },
]

export { services, technologies, experiences, testimonials, projects }
