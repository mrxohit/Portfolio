import { motion } from "framer-motion";
import About from "./pages/About";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import Skills from "./pages/Skills";

import Services from "./pages/Service";
import Portfolio from "./pages/Portfolio";

function App() {
  return (<Router>
   <Navbar />
  
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/skills" element={<Skills />} />
       
        <Route path="/service" element={<Services />} />
      </Routes>
      <Portfolio />
      <About />
      <Projects />
      <Skills />
      <Services />
      
      <Contact />
      <Footer />

</Router>
   
  );
}

export default App;
