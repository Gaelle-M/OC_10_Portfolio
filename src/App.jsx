import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Expertises from "./components/Expertises/Expertises";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import Stats from "./components/Stats/Stats";
import Footer from "./layout/Footer/Footer";
import Navbar from "./layout/navbar/Navbar";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Expertises />
      <Projects />
      <Stats />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;