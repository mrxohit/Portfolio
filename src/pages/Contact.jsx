import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaFacebook, FaLinkedin, FaReddit } from "react-icons/fa";

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      id="contact"
      className="min-h-screen flex items-center  justify-center  px-4 py-10"
    >
      <div className="w-full max-w-4xl bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-2xl p-10 text-black/60">
        <h2 className="text-4xl font-bold mb-6 text-center">Get in Touch</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="">
            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-xl text-black/40" />
              <span className="text-lg">+91 9876543210</span>
            </div>
            <div className="flex mt-4 items-center gap-4">
              <FaEnvelope className="text-xl text-black/40" />
              <span className="text-lg">youremail@example.com</span>
            </div>
            <div className="flex mt-4 items-center gap-4">
              
              <FaMapMarkerAlt className="text-xl text-black/40" />
              <span className="text-lg">Rajasthan, India</span>
            </div>
            <div className="flex items-center gap-4 ml-28 mt-20">
              <a href="https://www.instagram.com/mohits.codes?utm_source=ig_web_button_share_sheet&igsh=dWMzaGNydTkxcnF3" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-xl hover:text-blue-900  cursor-pointer text-black/40" />
            </a>

            <FaFacebook className="text-xl  hover:text-blue-900  cursor-pointer text-black/40" />

            <a href="https://www.linkedin.com/in/mr-xohit/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-xl  hover:text-blue-900  cursor-pointer text-black/40" />
            </a>
            <FaReddit className="text-xl  hover:text-blue-900  cursor-pointer text-black/40" />
            
            </div>
          </div>


          
          <form className="space-y-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-white/10 backdrop-blur-sm placeholder-black/40 border border-white/50 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black/30"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full bg-white/10 backdrop-blur-sm placeholder-black/40 border border-white/50 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black/30"
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full bg-white/10 backdrop-blur-sm placeholder-black/40 border border-white/50 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black/30"
            ></textarea>
            <button
              type="submit"
              className="bg-white/90 hover:bg-black/50 text-black/60 font-semibold py-2 px-6 rounded-md transition-all duration-300"
            >
              Send Message
            </button>
          </form>
           
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
