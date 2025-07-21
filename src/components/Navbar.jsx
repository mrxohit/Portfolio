// src/components/Navbar.jsx
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  const location = useLocation();

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white/15 text-white bo font-semibold p-3 shadow-lg"
    >
      <div className="container mx-auto  flex justify-between  items-center">
        <h1 className="text-xl bg-white/10 bo  px-3  py-1 rounded-2xl text-black/60 font-bold">
          MOHIT'S PORTFOLIO
        </h1>
        <div className="space-x-7  bg-black/20  px-3 py-2 rounded-2xl text-[1em]  text-white/80 hidden md:flex">
           <a href="#home" className="hover:text-black/70">
            Home
          </a>
          
          <a href="#about" className="hover:text-black/70">
            About
            </a>
    
           <a href="#projects" className="hover:text-black/70">
            Projects
          </a>
           <a href="#skills" className="hover:text-black/70">
            Skills
          </a>
           <a href="#service" className="hover:text-black/70">
            Service
          </a>
           <a href="#contact" className="hover:text-black/70">
            Contact
         </a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
