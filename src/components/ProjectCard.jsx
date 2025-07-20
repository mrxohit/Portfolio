// src/components/ProjectCard.jsx
import { motion } from "framer-motion";

const ProjectCard = ({ title, description, imgUrl, tech, liveLink, codeLink }) => {
  return (
    <motion.div 
      whileHover={{ scale: 1.03 }} 
      className="bg-white/10 sda text-white rounded-2xl shadow-lg p-5"
    >
      <img 
        src={imgUrl} 
        alt={title} 
        className="w-full  object-cover rounded-xl mb-4"
      />
      
      <h3 className="text-xl text-black/70 font-bold mb-2">{title}</h3>
      <p className="text-sm font-semibold text-black/70 mb-2">{description}</p>
      <p className="text-sm font-semibold text-black/70 mb-4">🔧 {tech}</p>
      <div className="flex gap-3">
        <a 
          href={liveLink} 
          target="_blank" 
          className="bg-white/15 bo text-white font-semibold px-3 py-1 rounded hover:bg-black/40 transition"
        >
          Live
        </a>
        <a 
          href={codeLink} 
          target="_blank" 
          className="bg-black/30 text-black font-semibold px-3 py-1 rounded hover:bg-black/50 transition"
        >
          Code
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
