import { motion } from "framer-motion";
import About from "./pages/About";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import Skills from "./pages/Skills";
import Blog from './pages/Blog';

function App() {
  return (<Router>
   <Navbar />
  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <About />
      <Projects />
      <Skills />
      <Blog />
      <Contact />
      <Footer />

</Router>
   
  );
}

export default App;
