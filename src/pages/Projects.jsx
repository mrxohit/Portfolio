// src/pages/Projects.jsx
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "PlantPal",
      description: "A plant care web app made with React and Tailwind.",
      imgUrl: "./p1.png", // Replace with real screenshot
      tech: "React, Tailwind CSS",
      liveLink: "https://mrxohit.github.io/PlantPal/",
      codeLink: "https://github.com/mrxohit/PlantPal"
    },
    {
      title: "Rajkhabar",
      description: "News app using React and Firebase.",
      imgUrl: "./p2.png", 
      tech: "React, Tailwind CSS",
      liveLink: "https://mrxohit.github.io/RajKhabar/",
      codeLink: "https://github.com/mrxohit/RajKhabar"
    },
    {
      title: "Insta Clone",
      description: "Instagram clone using React and Firebase.",
      imgUrl: "./p3.png", // Replace with your screenshot
      tech: "React, Tailwind CSS, backend",
      liveLink: "#",
      codeLink: "https://github.com/mrxohit/instagram-clone"
    }
  ];

  return (
    <div id="projects" className="   w-auto mt-16   py-16 mx-[4%] mb-24 rounded-3xl">
      {/* <h2 className="text-3xl text-white font-bold mb-8 text-center">My Projects</h2> */}
      <div className="flex justify-center"><h1 className="text-3xl md:text-4xl font-bold  mb-8 border-b-4 border-black/30 text-white/60  hd   px-10 py-1 rounded-2xl inline-block">
          Projects
        </h1></div>
      <div className="grid  md:grid-cols-2  min-w-screen lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
