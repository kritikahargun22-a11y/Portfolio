 import { motion } from "framer-motion";
import {
  Code2,
  Laptop,
  Database,
  GitBranch,
} from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: <Code2 className="w-7 h-7 text-cyan-400" />,
    skills: [
      { name: "HTML", level: 95 },
      { name: "CSS", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "React", level: 90 },
      { name: "Tailwind CSS", level: 90 },
    ],
  },
  {
    title: "Tools",
    icon: <GitBranch className="w-7 h-7 text-cyan-400" />,
    skills: [
      { name: "Git", level: 85 },
      { name: "GitHub", level: 90 },
      { name: "VS Code", level: 95 },
      { name: "Vite", level: 85 },
    ],
  },
  {
    title: "Currently Learning",
    icon: <Database className="w-7 h-7 text-cyan-400" />,
    skills: [
      { name: "Node.js", level: 60 },
      { name: "Express.js", level: 50 },
      { name: "MongoDB", level: 45 },
    ],
  },
];

function Skills() {
  return (
    <section
      id="skills"
      className="relative py-24 bg-slate-950 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute right-0 top-20 w-80 h-80 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="text-center mb-20"
        >
          <p className="uppercase tracking-[6px] text-cyan-400 text-sm">
            My Skills
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Technical{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="rounded-3xl border border-cyan-500/20 bg-white/5 backdrop-blur-xl p-8 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(34,211,238,.25)] transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-8">
                {category.icon}
                <h3 className="text-2xl font-semibold">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-6">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span>{skill.name}</span>
                      <span className="text-cyan-400">
                        {skill.level}%
                      </span>
                    </div>

                    <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-600"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Tech Stack */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: .6 }}
          className="mt-16 flex flex-wrap justify-center gap-4"
        >
          {[
            "React",
            "Tailwind",
            "JavaScript",
            "HTML",
            "CSS",
            "Git",
            "GitHub",
            "Vite",
            "Node.js",
          ].map((tech) => (
            <span
              key={tech}
              className="px-5 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 hover:bg-cyan-500 hover:text-white transition duration-300"
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;