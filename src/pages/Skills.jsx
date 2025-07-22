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
    <div id="skills" className="   rounded-3xl  w-full text-black/70 px-4 py-16 mb-[4%]">
      <div className="flex justify-center">
        <h1 className="text-3xl text-center md:text-4xl font-bold  mb-14 border-b-4 border-black/30 text-white/60 px-10 py-1 hd rounded-2xl inline-block">
          Skills
        </h1>
        </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-black/10 bo rounded-2xl p-6 shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <h2 className="text-xl text-white/70 font-bold mb-2">{skill.name}</h2>
            <p className="text-sm text-white font-semibold tracking-wider">Level: {skill.level}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
