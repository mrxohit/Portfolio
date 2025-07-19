// src/pages/Projects.jsx
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "PlantPal",
      description: "A plant care web app made with React and Tailwind.",
      imgUrl: "https://via.placeholder.com/400x200", // Replace with real screenshot
      tech: "React, Tailwind CSS",
      liveLink: "https://mrxohit.github.io/PlantPal/",
      codeLink: "https://github.com/mrxohit/PlantPal"
    },
    {
      title: "Insta Clone",
      description: "Instagram clone using React and Firebase.",
      imgUrl: "https://via.placeholder.com/400x200", // Replace with your screenshot
      tech: "React, Firebase",
      liveLink: "#",
      codeLink: "#"
    },
    {
      title: "Insta Clone",
      description: "Instagram clone using React and Firebase.",
      imgUrl: "https://via.placeholder.com/400x200", // Replace with your screenshot
      tech: "React, Firebase",
      liveLink: "#",
      codeLink: "#"
    }
  ];

  return (
    <div className="min-h-screen w-[85vw] ml-[5.5vw] mx-16 py-16 px-4">
      <h2 className="text-3xl text-white font-bold mb-8 text-center">My Projects</h2>
      <div className="grid  md:grid-cols-2  min-w-screen lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
