// src/components/Navbar.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react"; // react-icons alternative

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Service", href: "#service" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-black/30 nn fixed w-full z-20 text-white font-semibold p-3 shadow-lg"
    >
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-[90%] bg-white/10 bo px-3 py-1 rounded-2xl text-black/60 font-bold">
          MOHIT'S PORTFOLIO
        </h1>

        {/* Desktop nav */}
        <div className="space-x-7 bg-black/20 px-3 py-2 rounded-2xl text-[1em] text-white/80 hidden md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-black/70 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile menu icon */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-black/30">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <div className=" fixed  right-[2%]">
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          transition={{ duration: 0.3 }}
          className="md:hidden  bg-black/50 sda mt-3 rounded-xl  p-4 space-y-3"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block  text-white/80 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
        </motion.div></div>
      )}
    </motion.nav>
  );
};

export default Navbar;
