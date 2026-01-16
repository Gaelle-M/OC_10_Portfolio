import React from 'react';
import {Helmet} from 'react-helmet-async';
import Hero from "../../components/Hero/Hero";
import About from "../../components/About/About";
import Expertises from "../../components/Expertises/Expertises";
import Projects from "../../components/Projects/Projects";
import Stats from "../../components/Stats/Stats";
import Contact from "../../components/Contact/Contact";

const Home = () => {
    return (
        <> 
        < Helmet > 
          <title>Gaëlle Mazzali | Intégratrice web</title>
          <meta
            name="description"
            content="Découvrez mon portfolio : experte en React, Sass et WordPress."/>
           < meta property = "og:title" content = "Gaëlle Mazzali | Intégratrice web" /> <meta property="og:type" content="website"/>
    </Helmet>

    <Hero/>
    <About/>
    <Expertises/>
    <Projects/>
    <Stats/>
    <Contact/>
</>
    );
};

export default Home;