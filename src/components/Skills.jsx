function Skills() {
  const skills = [
    { name: "HTML5", level: "90%" },
    { name: "CSS3", level: "85%" },
    { name: "JavaScript", level: "80%" },
    { name: "React", level: "75%" },
    { name: "Tailwind CSS", level: "90%" },
    { name: "Git & GitHub", level: "70%" },
  ];

  return (
    <section id="skills" className="bg-slate-950 text-white py-24 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            My <span className="text-cyan-400">Skills</span>
          </h2>

          <p className="text-gray-400 mt-4 text-lg">
            Technologies I use to build responsive and modern web applications.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-slate-900 p-6 rounded-xl border border-cyan-500
              hover:-translate-y-2
              hover:shadow-[0_0_25px_rgba(34,211,238,0.35)]
              transition-all duration-300"
            >
              {/* Skill Name + Percentage */}
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold">{skill.name}</h3>

                <span className="text-cyan-400 font-semibold">
                  {skill.level}
                </span>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-3 bg-slate-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-cyan-400 rounded-full transition-all duration-1000"
                  style={{ width: skill.level }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
