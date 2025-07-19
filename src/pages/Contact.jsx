import { motion } from "framer-motion";

function Contact() {
  return (
    <div className="min-h-screen  to-gray-900 text-white flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-2xl p-8 bg-gray-800 rounded-2xl shadow-2xl"
      >
        <h2 className="text-4xl font-bold text-center mb-6 text-blue-400">Contact Me</h2>

        <form
          action="https://formspree.io/f/xayrqqpz"  // 🔁 Replace with your Formspree ID
          method="POST"
          className="space-y-6"
        >
          <div>
            <label className="block text-sm mb-1">Your Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Your Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Your Message</label>
            <textarea
              name="message"
              rows="5"
              required
              className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 transition-all duration-300 py-2 rounded-lg font-semibold"
          >
            Send Message
          </motion.button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-400">Or connect on</p>
          <div className="flex justify-center space-x-6 mt-3 text-xl">
            <a href="https://github.com/mrxohit" target="_blank" rel="noreferrer">🐱 GitHub</a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">💼 LinkedIn</a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">📸 Instagram</a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Contact;
