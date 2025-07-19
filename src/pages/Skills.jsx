import { motion } from "framer-motion";

const skills = [
  { name: "HTML", level: "Expert" },
  { name: "CSS", level: "Expert" },
  { name: "JavaScript", level: "Advanced" },
  { name: "React.js", level: "Advanced" },
  { name: "Tailwind CSS", level: "Advanced" },
  { name: "Git & GitHub", level: "Intermediate" },
  { name: "UI/UX Design", level: "Intermediate" },
  { name: "Canva / Figma", level: "Intermediate" },
];

const Skills = () => {
  return (
    <div className="min-h-screen  text-black/70 px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-10">My Skills</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white/10 bo rounded-2xl p-6 shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <h2 className="text-xl text-black/80 font-bold mb-2">{skill.name}</h2>
            <p className="text-sm text-gray-400">Level: {skill.level}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
