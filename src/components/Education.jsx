import { motion } from "framer-motion";
import { GraduationCap, BookOpen } from "lucide-react";

const education = [
  {
    year: "2024 - Present",
    title: "Bachelor of Computer Applications (BCA)",
    institute: "Pyramid College of Business and Technology",
    description:
      "Currently pursuing BCA with a focus on Web Development, Programming, Data Structures and Database Management.",
    icon: <GraduationCap size={22} />,
  },
  {
    year: "2023 - 2024",
    title: "Senior Secondary",
    institute: "Sant Sarwan Dass Model School",
    description:
      "Completed higher secondary education with Computer Science.",
    icon: <BookOpen size={22} />,
  },
  {
    year: "2022 - 2023",
    title: "Secondary",
    institute: "Sant Sarwan Dass Model School",
    description:
      "Completed higher secondary education with Computer Science.",
    icon: <BookOpen size={22} />,
  },
];

function Education() {
  return (
    <section id="education" className="bg-slate-950 py-24 text-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="text-center mb-20"
        >
          <p className="uppercase tracking-[6px] text-cyan-400 text-sm">
            My Journey
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Education{" "}
            <span className="text-cyan-400">& Timeline</span>
          </h2>
        </motion.div>

        <div className="relative">

          {/* Vertical Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-cyan-500/30 -translate-x-1/2"></div>

          <div className="space-y-16">

            {education.map((item, index) => (

              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: .6 }}
                className={`relative flex flex-col md:flex-row items-center ${
                  index % 2 === 0
                    ? "md:flex-row"
                    : "md:flex-row-reverse"
                }`}
              >

                {/* Timeline Dot */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-cyan-500 flex items-center justify-center shadow-lg shadow-cyan-500/40">
                  {item.icon}
                </div>

                {/* Card */}
                <div className="w-full md:w-5/12 ml-20 md:ml-0">

                  <div className="rounded-3xl border border-cyan-500/20 bg-white/5 backdrop-blur-xl p-8 hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(34,211,238,.2)] transition">

                    <span className="text-cyan-400 font-semibold">
                      {item.year}
                    </span>

                    <h3 className="text-2xl font-bold mt-3">
                      {item.title}
                    </h3>

                    <h4 className="text-gray-400 mt-2">
                      {item.institute}
                    </h4>

                    <p className="text-gray-400 mt-4 leading-7">
                      {item.description}
                    </p>

                  </div>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </div>
    </section>
  );
}

export default Education;