import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { earthmobile } from '../assets';

/* template_9soz5oa emailjs id для получения сообщений с сайта
service_lx25jio
Vg05aEXRRJsRPzTUg public key */

const Contact = () => {
  const formRef = useRef();
  /* здесь будем хранить данные ввода пользователя */
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    /* вытаскиваем емаил */
    const { target } = e;
    /* вытаскиваем имя и сообщение */
    const { name, value } = target;

    /* записываем в стейт емаил и сообщение */
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    /* дальше идет код для связи нашего сайта с eamil.js */

    emailjs
    /* отправляем */
      .send(
        'service_lx25jio',
        'template_9soz5oa',
        {
          from_name: form.name,
          to_name: "Nikolay",
          from_email: form.email,
          to_email: "nickolasio1594@gmail.com",
          message: form.message,
        },
        'Vg05aEXRRJsRPzTUg'
      )
      /* после того как отправили */
      .then(
        () => {
          setLoading(false);
          alert("Спасибо Вам. Я вернусь с ответом как можно скорее.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ох, что то пошло не так. Попробуйте еще раз.");
        }
      );
  };

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
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      {/* анимация появления слева в центр 1 секунда */}
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Будьте на связи</p>
        <h3 className={styles.sectionHeadText}>Контакты.</h3>

    {/* форма */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Ваше Имя</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="Какое у Вас имя?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Ваша Почта</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="Какой у Вас адрес электронной почты?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Ваше Сообщение</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='Что хотите написать?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Отправляем..." : "Отправить"}
          </button>
        </form>
      </motion.div>

{/* планета  появляется справа */}
 {!isMobile && 
    <>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 md:h-[550px] h-[350px] xl:h-[800px]'
      >
        <EarthCanvas />
      </motion.div>
      </>}

      {isMobile && <div className="-mt-[100px] flex flex-row justify-center"><img src={earthmobile} className=" h-auto w-[90vw]"></img></div>}
    </div>
  );
};

export default SectionWrapper(Contact, "contact");