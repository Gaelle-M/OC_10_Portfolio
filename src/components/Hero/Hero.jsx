import { motion, useScroll, useTransform } from 'framer-motion';
import './Hero.scss';

const Hero = () => {
  const { scrollY } = useScroll();
  const yTitle = useTransform(scrollY, [0, 500], [0, 200]);
  const xLeft = useTransform(scrollY, [0, 500], [0, -150]);
  const xRight = useTransform(scrollY, [0, 500], [0, 150]);

  return (
    <section className="hero">
      <motion.div style={{ y: yTitle }} className="hero__wrapper">
        <h1 className="hero__title">Gaëlle Mazzali</h1>
      </motion.div>
      
      <motion.h2 style={{ x: xLeft }} className="hero__subtitle left">
        Intégratrice Web
      </motion.h2>
      
      <motion.h2 style={{ x: xRight }} className="hero__subtitle right">
        Chez Yesss Communication
      </motion.h2>

      <div className="hero__scroll">
        <p>please scroll</p>
      </div>
    </section>
  );
};

export default Hero;