function Projects() {
    const projects = [
        {
            title: "Portfolio Website",
            description:
                "A modern personal portfolio built with React and Tailwind CSS.",
            tech: ["React", "Tailwind", "JavaScript"],
            image: "/project1.png",
            github: "https://github.com/kritikahargun22-a11y/Project",
            live: "http://localhost:5173/",
        },
        {
            title: "Food Wastage Management",
            description:
                "A platform that helps reduce food waste by connecting donors with NGOs.",
            tech: ["React", "Tailwind Css", "JavaScript"],
            image: "/project2.png",
            github: "#",
            live: "#",
        },
        {
            title: "Lost & Found System",
            description:
                "A smart campus system to report and find lost items.",
            tech: ["React", "Tailwind CSS", "JavaScript"],
            image: "/project3.png",
            github: "#",
            live: "#",
        },
    ];

    return (
        <section
            id="projects"
            className="bg-slate-950 text-white py-24 px-8"
        >
            <div className="max-w-7xl mx-auto">

                {/* Heading */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold">
                        My <span className="text-cyan-400">Projects</span>
                    </h2>

                    <p className="text-gray-400 mt-4 text-lg">
                        Here are some of the projects I have built while learning web development.
                    </p>
                </div>

                {/* Project Cards */}
                <div className="grid md:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-slate-900 rounded-xl overflow-hidden border border-cyan-500 hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(34,211,238,0.35)] transition-all duration-300"
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-52 object-cover"
                            />

                            <div className="p-6">
                                <h3 className="text-2xl font-bold mb-3">
                                    {project.title}
                                </h3>

                                <p className="text-gray-400 mb-5">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tech.map((item, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-4">
                                    <a
                                        href={project.live}
                                        className="flex-1 text-center bg-cyan-500 hover:bg-cyan-400 py-2 rounded-lg transition"
                                    >
                                        Live Demo
                                    </a>

                                    <a
                                        href={project.github}
                                        className="flex-1 text-center border border-cyan-400 hover:bg-cyan-400 hover:text-black py-2 rounded-lg transition"
                                    >
                                        GitHub
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

export default Projects;