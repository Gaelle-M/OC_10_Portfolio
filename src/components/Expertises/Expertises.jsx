import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './Expertises.scss';

const Expertises = () => {
  const containerRef = useRef(null);
  
  // Animation de scroll pour le Desktop
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, 200]);

  // Listes de compétences
  const line1 = ["HTML5", "CSS3/SASS", "JavaScript", "React", "Redux"];
  const line2 = ["WordPress", "SEO", "Maintenance web"];

  // Variante d'animation pour l'apparition progressive (Mobile & Desktop)
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1, 
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <section className="expertises" id="expertises" ref={containerRef}>
      <motion.h2 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="title-section"
      >
        Mes Expertises
      </motion.h2>

      <div className="expertises__wrapper">
        {/* Première ligne */}
        <motion.div style={{ x: x1 }} className="expertises__line">
          {line1.map((skill, index) => (
            <motion.span 
              key={index} 
              custom={index}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="skill-item"
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>

        {/* Deuxième ligne */}
        <motion.div style={{ x: x2 }} className="expertises__line">
          {line2.map((skill, index) => (
            <motion.span 
              key={index} 
              custom={index + 5} 
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="skill-item outline"
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Expertises;