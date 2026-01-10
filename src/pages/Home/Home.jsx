import React from 'react';
import Hero from "../../components/Hero/Hero";
import About from "../../components/About/About";
import Expertises from "../../components/Expertises/Expertises";
import Projects from "../../components/Projects/Projects";
import Stats from "../../components/Stats/Stats";
import Contact from "../../components/Contact/Contact";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Expertises />
      <Projects />
      <Stats />
      <Contact />
    </>
  );
};

export default Home;