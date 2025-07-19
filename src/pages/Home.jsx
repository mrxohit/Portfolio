import { motion } from "framer-motion";
import "../index.css";
function Home() {
  return (<div className="h-screen ">
      <div className="text-center p-16 ml-10 grid grid-cols-2  text-gray-300">
        

        <div className="justify-items-start pt-32 ">

        <motion.h1
          className="text-4xl  md:text-6xl font-bold"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hi, I'm  Mohit Tailor
        </motion.h1>
        <motion.p
          className="text-xl bg-black/30 md:text-2xl mt-4 font-medium rounded-2xl px-3 text-black/70"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Web Developer
        </motion.p>
        <motion.p
          className="text-md font-semibold text-gray-900 md:text-lg mt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          Web Developer | Chatbot Developer | AI Specialist
        </motion.p>
        <motion.div
          className="mt-6"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <button className="bg-white/10 bo font-semibold text-white/70 px-5 py-2 rounded-full font-semibold hover:bg-black/30">
            View Projects
          </button>
        </motion.div>
        
        </div>
        <div>
          <motion.img
            src="./bg.png"
            alt="Mohit Tailor"
            className="h-[70vh] rounded-2xl mx-auto mb-6"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1 }}
          />
        </div>
      </div>

    </div>
    );
}

export default Home;