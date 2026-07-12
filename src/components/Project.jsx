import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function Project() {
  const projects = [
    {
      title: "FoodShare",
      description:
        "A food wastage management website that connects donors with NGOs and people in need.",
      image: "/foodshare.png",
      tech: ["React", "Tailwind CSS", "JavaScript"],
      github: "https://github.com/kritikahargun22-a11y/FoodShare",
      live: "#",
    },
    {
      title: "Portfolio Website",
      description:
        "My personal portfolio website built using React and Tailwind CSS.",
      image: "/portfolio.png",
      tech: ["React", "Tailwind CSS", "Vite"],
      github: "https://github.com/kritikahargun22-a11y",
      live: "#",
    },
    {
      title: "Birthday Website",
      description:
        "A responsive birthday celebration website with animations and modern UI.",
      image: "/taxi.png",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/kritikahargun22-a11y",
      live: "#",
    },
  ];

  return (
    <section id="projects" className="bg-slate-950 py-20 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          My <span className="text-cyan-400">Projects</span>
        </h2>

        <p className="text-center text-gray-400 mb-14">
          Some projects that I've built while learning web development.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-cyan-400 transition duration-300 hover:-translate-y-2"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-5">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-400 text-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 px-4 py-2 rounded-lg transition"
                  >
                    <FaGithub />
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 border border-cyan-400 px-4 py-2 rounded-lg hover:bg-cyan-500/10 transition"
                  >
                    <FaExternalLinkAlt />
                    Live
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Project;