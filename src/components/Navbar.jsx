// src/components/Navbar.jsx
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  const location = useLocation();

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white/15 text-white  font-semibold p-4 shadow-lg"
    >
      <div className="container mx-auto  flex justify-between  items-center">
        <h1 className="text-xl font-bold">My Portfolio</h1>
        <div className="space-x-7">
          <Link
            to="/"
            className={`hover:text-yellow-400 ${location.pathname === '/' ? 'text-yellow-400' : ''}`}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`hover:text-yellow-400 ${location.pathname === '/about' ? 'text-yellow-400' : ''}`}
          >
            About
          </Link>
          <Link to="/projects">Projects</Link>
          <Link to="/skills">Skills</Link>



        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
