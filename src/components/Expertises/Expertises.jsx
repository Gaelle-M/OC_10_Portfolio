import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './Expertises.scss';

const Expertises = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Création des mouvements opposés pour les lignes
  const x1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, 200]);

  const line1 = ["HTML5", "CSS3","SASS", "JavaScript", "React", "Redux"];
  const line2 = ["WordPress", "SEO", "Maintenance web"  ];

  return (
    <section className="expertises" id="expertises" ref={containerRef}>
      <motion.h2 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="title-section"
      >
        Mes Expertises
      </motion.h2>

      <div className="expertises__wrapper">
        {/* Première ligne : défile vers la gauche */}
        <motion.div style={{ x: x1 }} className="expertises__line">
          {line1.map((skill, index) => (
            <span key={index} className="skill-item">{skill}</span>
          ))}
        </motion.div>

        {/* Deuxième ligne : défile vers la droite */}
        <motion.div style={{ x: x2 }} className="expertises__line">
          {line2.map((skill, index) => (
            <span key={index} className="skill-item outline">{skill}</span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Expertises;