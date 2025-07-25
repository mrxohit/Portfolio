import { motion } from "framer-motion";
import "../index.css";
function Portfolio() {
  return (<div id="home" className="mx-[2%] ">
      <div className=" grid md:grid-cols-2  gap-8  w-auto p-16  o   ">
        

        <div className="justify-items-start pt-[10vh] items-start flex flex-col   mt-[7vw]  ">

        <motion.h1
          className="text-4xl text-white/60 md:text-6xl font-bold"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hi, I'm  Mohit Tailor
        </motion.h1>
        <motion.p
          className="text-xl bg-white/30 md:text-2xl bo mt-4 font-medium rounded-2xl px-3 text-black/70"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Web Developer
        </motion.p>
        <motion.p
          className="text-md font-semibold text-black/40 md:text-lg mt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          Web Developer | Ui & Ux  | AI Specialist
        </motion.p>
        <motion.div
          className="mt-6"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <a href="#projects" >
          <button className="bg-gray-500 bo  text-white/70 px-5 py-2 rounded-full font-semibold hover:bg-black">
            View Projects
          </button>
          </a>
        </motion.div>
        
        </div>
        <div className="flex justify-center   pt-[13%] items-center">
          <motion.img
            src="./me.png"
            alt="Mohit Tailor"
            className="w-[80%]  rounded-2xl bo r shadow-xl  mx-auto mb-6"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1 }}
          />
        </div>
      </div>

    </div>
    );
}

export default Portfolio;