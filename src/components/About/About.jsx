import {useState, useEffect} from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import './About.scss';
import photoProfil from '../../assets/img/image-gaelle-a-propos.jpg';
import Typewriter from 'typewriter-effect';

const About = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <section className="about" id="about">
            <div className="about__container">

                <motion.div
                    initial={{
                        opacity: 0,
                        x: -50
                    }}
                    whileInView={{
                        opacity: 1,
                        x: 0
                    }}
                    transition={{
                        duration: 0.8
                    }}
                    className="about__image-wrapper">
                    <img src={photoProfil} alt="Gaëlle Mazzali" className="about__photo"/>

                    <div className="about__badge">
                        <span className="badge-title">Je suis :</span>
                        <div className="skill-text-animated">
                            <Typewriter
                                options={{
                                    strings: [
                                        "Passionnée", "Rigoureuse", "Autonome", "Curieuse", "Organisée"
                                    ],
                                    autoStart: true,
                                    loop: true,
                                    deleteSpeed: 50,
                                    delay: 100
                                }}/>
                        </div>
                    </div>
                </motion.div>

                <div className="about__content">
                    <motion.h2
                        initial={{
                            opacity: 0,
                            y: 20
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0
                        }}
                        className="title-section">
                        À propos de moi
                    </motion.h2>

                    <div className="about__text">
                        <p>Développeuse front-end et intégratrice web passionnée, je me suis spécialisée
                            dans la création d'interfaces performantes et esthétiques, avec une expertise
                            particulière sur WordPress.</p>

                        <p>Mon parcours dans le développement web a débuté en 2021, fruit d'une
                            reconversion professionnelle motivée par une passion grandissante pour l'univers
                            du web et des technologies. Après une première formation en développement web et
                            web mobile, j'ai rapidement identifié ma vocation : le front-end et
                            l'intégration web.</p>

                        <AnimatePresence>
                            {
                                isOpen && (
                                    <motion.div initial={{
                                            height: 0,
                                            opacity: 0
                                        }} animate={{
                                            height: "auto",
                                            opacity: 1
                                        }} exit={{
                                            height: 0,
                                            opacity: 0
                                        }} transition={{
                                            duration: 0.5,
                                            ease: "easeInOut"
                                        }} className="about__hidden-text" style={{
                                            overflow: 'hidden'
                                        }}
>
                                        <p>Je maîtrise aujourd'hui HTML, CSS, JavaScript, React et WordPress, des
                                            technologies que je mobilise quotidiennement dans mes projets. Mon approche se
                                            distingue par ma capacité à travailler aussi bien en équipe avec la méthode
                                            Agile qu'en totale autonomie, avec rigueur et efficacité.</p>
                                        <p>Je suis convaincue qu'il est possible de créer des interfaces visuellement
                                            remarquables sans compromettre les performances, un équilibre que je m'efforce
                                            d'atteindre dans chacune de mes réalisations.</p>
                                        <p>Actuellement en alternance chez Yesss Communication à Marseille, j'aspire à
                                            poursuivre mon aventure au sein de cette agence en tant qu'intégratrice
                                            WordPress. Entourée par Clémentine Moulin, fondatrice de l'agence, Alexia
                                            Dalmasso-Cogollos, graphiste-webdesigner, et Eloïse Guillout, content manager,
                                            j'ai la chance de travailler avec une équipe qui m'accompagne dans mon évolution
                                            et mon perfectionnement au quotidien.</p>
                                    </motion.div>
                                )
                            }
                            </AnimatePresence>

                            <button className="btn-read-more" onClick={() => setIsOpen(!isOpen)}>
                                {
                                isOpen
                                    ? "Lire moins"
                                    : "En savoir plus"
                            }</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;