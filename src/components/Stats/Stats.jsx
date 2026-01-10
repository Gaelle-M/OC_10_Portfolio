import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { statsData } from '../../data/statsData';
import './Stats.scss';

const StatCard = ({ item }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="stat-card-container"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div 
        className="stat-card-inner"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 1, type: "spring", stiffness: 280, damping: 40 }}
      >
        {/* RECTO */}
        <div className="stat-card-front">
          <span className="stat-number">{item.number}</span>
          <h3 className="stat-title">{item.title}</h3>
          <div className="stat-plus">+</div>
        </div>

        {/* VERSO */}
        <div className="stat-card-back">
          <p>{item.description}</p>
        </div>
      </motion.div>
    </div>
  );
};

const Stats = () => {
  return (
    <section className="stats-section" id="parcours">
      <h2 className="title-section">Mon Parcours</h2>
      <div className="stats-grid">
        {statsData.map((item) => (
          <StatCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default Stats;