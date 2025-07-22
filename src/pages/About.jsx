// src/pages/About.jsx
import { motion } from "framer-motion";
import { FaLaptopCode, FaRocket, FaUserAstronaut } from "react-icons/fa"; 

function About() {
  return (
     <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      id= "about"
       className="h-full mt-[5vw] w-[80vw] ml-[8vw] sda bg-black/30  text-white/40 rounded-2xl bo ab  p-12">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
           className="text-4xl hd md:text-5xl font-bold mb-8 border-b-4 border-black/30 sm:text-3xl bg-white/20 px-10 py-1 rounded-2xl inline-block">
          About Me
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-10  items-center">
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <p className="text-lg bg-black/15 sda rounded-2xl p-2 font-semibold leading-relaxed mb-4">
              Hey there! I'm <span className="font-bold text-white/60">Mohit</span>, a passionate front-end developer who loves creating sleek, user-friendly, and lightning-fast websites. With a strong foundation in technologies like <span className="font-bold text-white/60">React, Tailwind CSS, and JavaScript</span>, I aim to build impactful digital experiences that speak for themselves.
            </p>
            <p className="text-lg bg-black/15 sda rounded-2xl p-2  font-semibold leading-relaxed mb-4">
              I’m currently sharpening my skills in full-stack development and freelancing while dreaming big — <span className="font-bold text-white/60">building my own empire</span> one project at a time. My mission? To level up daily, serve top-notch work, and create value-driven digital assets.
            </p>
            <p className="text-lg bg-black/15 sda rounded-2xl p-2  font-semibold leading-relaxed">
              Outside of code, I’m all about hustling smart, learning endlessly, and inspiring others through growth. Let’s connect, collaborate, and conquer new digital horizons together.
            </p>
           </motion.div>

          <motion.div
            
            initial={{ x: 40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
           className="flex justify-center">
            <img
              src="./me.png"
              alt="Mohit's Profile"
              className="rounded-2x bg-black/20 bo r shadow-lg max-w-[300px] md:max-w-[400px] "
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export default About;
