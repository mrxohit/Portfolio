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
      tech: "React, Firebase",
      liveLink: "https://mrxohit.github.io/RajKhabar/",
      codeLink: "https://github.com/mrxohit/RajKhabar"
    },
    {
      title: "Insta Clone",
      description: "Instagram clone using React and Firebase.",
      imgUrl: "./p3.png", // Replace with your screenshot
      tech: "React, Firebase",
      liveLink: "#",
      codeLink: "https://github.com/mrxohit/instagram-clone"
    }
  ];

  return (
    <div className="min-h-screen w-[85vw] mt-16  ml-[5.7vw] py-16 px-4">
      {/* <h2 className="text-3xl text-white font-bold mb-8 text-center">My Projects</h2> */}
      <h1 className="text-4xl md:text-5xl font-bold  mb-8 border-b-4 border-black/30 text-black/60  bg-white/20 px-10 py-1 rounded-2xl inline-block">
          Projects
        </h1>
      <div className="grid  md:grid-cols-2  min-w-screen lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
