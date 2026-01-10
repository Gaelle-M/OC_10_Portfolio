import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Contact.scss';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici, on connectera EmailJS plus tard pour l'envoi réel
    console.log('Données envoyées :', formData);
    alert('Merci ! Votre message a bien été envoyé (simulation).');
  };

  return (
    <section className="contact" id="contact">
      <div className="contact__container">
        <motion.div 
          className="contact__info"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="title-section">Me Contacter</h2>
          <div className="contact__details">
            <p><strong>Email :</strong> gaelle-mazzali@hotmail.fr</p>
          </div>
        </motion.div>

        <motion.form 
          className="contact__form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="form-group">
            <input 
              type="text" 
              placeholder="Nom" 
              required 
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>
          <div className="form-group">
            <input 
              type="email" 
              placeholder="Email" 
              required 
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>
          <div className="form-group">
            <textarea 
              placeholder="Votre message" 
              rows="5" 
              required 
              onChange={(e) => setFormData({...formData, message: e.target.value})}
            ></textarea>
          </div>
          <button type="submit" className="btn-submit">Envoyer</button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;