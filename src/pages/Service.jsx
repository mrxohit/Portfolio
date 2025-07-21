import React from "react";
import { motion } from "framer-motion";
import { Code, Brush, Smartphone, Globe } from "lucide-react";

const services = [
  {
    title: "Frontend Development",
    icon: <Code className="w-8 h-8 text-indigo-600" />,
    desc: "Responsive & interactive web apps using React, Tailwind CSS, and JavaScript.",
  },
  {
    title: "UI/UX Design",
    icon: <Brush className="w-8 h-8 text-pink-500" />,
    desc: "Clean, creative and user-centered design using Figma, Canva & modern tools.",
  },
  {
    title: "Mobile Friendly Design",
    icon: <Smartphone className="w-8 h-8 text-green-500" />,
    desc: "Fully responsive designs that work seamlessly across all devices.",
  },
  {
    title: "Web Optimization & SEO",
    icon: <Globe className="w-8 h-8 text-yellow-500" />,
    desc: "Optimizing performance and visibility of your site for search engines.",
  },
];

const Services = () => {
  return (
    <section id="service" className="py-20  text-white px-4 md:px-12">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-14"
      >
        <h1 className="text-4xl text-center md:text-5xl font-bold  mb-14 border-b-4 border-black/30 text-black/60  bg-white/20 px-10 py-1 rounded-2xl inline-block">
          Services
        </h1>
        <p className="text-black/70 font-semibold">Here’s what I can offer to boost your online presence</p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
        {services.map((service, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-white/10 rounded-2xl p-6 bo "
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-white/30 p-3 rounded-xl">{service.icon}</div>
              <h3 className="text-xl font-bold text-b   lack/60">{service.title}</h3>
            </div>
            <p className="text-black/40 tracking-wider  font-semibold text-sm">{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
