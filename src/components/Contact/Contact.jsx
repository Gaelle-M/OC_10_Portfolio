import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Contact.scss';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};
    if (!formData.name) newErrors.name = "Le nom est requis";
    if (!formData.email) {
      newErrors.email = "L'email est requis";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Format d'email invalide";
    }
    if (formData.message.length < 10) newErrors.message = "Le message doit faire au moins 10 caractères";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('Données prêtes pour EmailJS :', formData);
      // reglage emailjs à ajouter
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="contact__container">
        <div className="contact__info">
          <h2 className="title-section">Me Contacter</h2>
        </div>

        <motion.form className="contact__form" onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <label htmlFor="name">Nom complet</label>
            <input 
              id="name"
              type="text" 
              className={errors.name ? 'input-error' : ''}
              placeholder="Ex: Jean Dupont"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
            {errors.name && <span className="error-msg">{errors.name}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input 
              id="email"
              type="email" 
              className={errors.email ? 'input-error' : ''}
              placeholder="exemple@mail.com"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
            {errors.email && <span className="error-msg">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="message">Votre message</label>
            <textarea 
              id="message"
              className={errors.message ? 'input-error' : ''}
              rows="5"
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
            ></textarea>
            {errors.message && <span className="error-msg">{errors.message}</span>}
          </div>

          <button type="submit" className="btn-submit">Envoyer</button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;