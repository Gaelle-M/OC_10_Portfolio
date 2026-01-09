import About from "./components/About/About";
import Expertises from "./components/Expertises/Expertises";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import Navbar from "./layout/navbar/Navbar";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Expertises />
      <Projects />
    </div>
  );
}

export default App;