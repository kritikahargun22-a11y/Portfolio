import { motion } from "framer-motion";
import {
  GraduationCap,
  Code2,
  FolderGit2,
  Sparkles,
} from "lucide-react";

function About() {
  const cards = [
    {
      icon: <FolderGit2 className="w-8 h-8 text-cyan-400" />,
      value: "5+",
      title: "Projects",
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-cyan-400" />,
      value: "BCA",
      title: "Student",
    },
    {
      icon: <Code2 className="w-8 h-8 text-cyan-400" />,
      value: "10+",
      title: "Technologies",
    },
    {
      icon: <Sparkles className="w-8 h-8 text-cyan-400" />,
      value: "∞",
      title: "Learning",
    },
  ];

  return (
    <section
      id="about"
      className="relative py-24 bg-slate-950 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute left-20 top-24 w-72 h-72 bg-cyan-500/10 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-cyan-400 uppercase tracking-[6px] text-sm">
            Get To Know Me
          </p>

          <h2 className="text-5xl font-bold mt-4">
            About{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .7 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-6">
              Passionate Frontend Developer
            </h3>

            <p className="text-gray-400 leading-9 text-lg">
              I'm <span className="text-cyan-400 font-semibold">Kritika</span>,
              a BCA student passionate about creating beautiful,
              responsive and user-friendly web applications using
              React, Tailwind CSS and JavaScript.
            </p>

            <p className="mt-6 text-gray-400 leading-9 text-lg">
              I enjoy transforming ideas into interactive digital
              experiences and continuously learning modern web
              technologies. My goal is to become a skilled Full Stack
              Developer and contribute to impactful real-world projects.
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-3 mt-10">
              {[
                "React",
                "Tailwind",
                "JavaScript",
                "HTML",
                "CSS",
                "Git",
                "GitHub",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400"
                >
                  {tech}
                </span>
              ))}
            </div>

            <button className="mt-10 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 font-semibold hover:scale-105 transition">
              Read More
            </button>
          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .7 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {cards.map((card, index) => (
              <div
                key={index}
                className="backdrop-blur-xl bg-white/5 border border-cyan-500/20 rounded-3xl p-8 text-center hover:-translate-y-3 hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(34,211,238,.35)] transition duration-500"
              >
                <div className="flex justify-center mb-4">
                  {card.icon}
                </div>

                <h3 className="text-4xl font-bold text-cyan-400">
                  {card.value}
                </h3>

                <p className="text-gray-400 mt-3">
                  {card.title}
                </p>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default About;