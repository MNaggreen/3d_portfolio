import { motion } from "framer-motion";

import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";

/* функция контейнер которая будет служить оберткой для наших компонентов формуя padding
чтобы не прописывать каждый раз все для нашего компонента */
const StarWrapper = (Component, idName) =>
  function HOC() {
    return (
      <motion.section
      /* анимации при первом скролле */
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        /* анимация при первом скролле */
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        {/* якорь для ссылок */}
        <span className='hash-span' id={idName}>
          &nbsp;
        </span>

        <Component />
      </motion.section>
    );
  };

export default StarWrapper;
