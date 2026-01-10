import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from "./layout/navbar/Navbar";
import Footer from "./layout/Footer/Footer";
import Home from "./pages/Home/Home";
import ProjectPage from "./pages/ProjectPage/ProjectPage";


function App() {
console.log("App est chargé");
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<ProjectPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;