import { motion } from "framer-motion";

const blogs = [
  {
    id: 1,
    title: "How I built my first React App",
    description: "A deep dive into my journey of building a React project from scratch.",
    tags: ["React", "Frontend"],
    image: "https://source.unsplash.com/400x250/?coding",
  },
  {
    id: 2,
    title: "Why Tailwind is Awesome",
    description: "Tailwind CSS helped me build stylish UIs faster than ever before.",
    tags: ["Tailwind", "CSS"],
    image: "https://source.unsplash.com/400x250/?ui,design",
  },
  {
    id: 3,
    title: "Freelancing Tips for Beginners",
    description: "Here’s what I learned after doing freelance gigs as a student developer.",
    tags: ["Freelance", "Tips"],
    image: "https://source.unsplash.com/400x250/?freelancer",
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-8 md:px-16 text-white ">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">📚 My Blog</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog, index) => (
          <motion.div
            key={blog.id}
            className="bg-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
          >
            <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
            <div className="p-5">
              <h2 className="text-2xl font-semibold mb-2">{blog.title}</h2>
              <p className="text-gray-300 mb-4">{blog.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {blog.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-gray-700 text-sm px-3 py-1 rounded-full text-white"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
              <button className="text-sm text-blue-400 hover:underline">Read More →</button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
