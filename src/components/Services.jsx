import { motion } from "framer-motion";
import {
  MonitorSmartphone,
  LayoutDashboard,
  Code2,
  Smartphone,
} from "lucide-react";

const services = [
  {
    icon: <MonitorSmartphone size={40} />,
    title: "Responsive Websites",
    description:
      "Building websites that look great and work smoothly on desktop, tablet, and mobile devices.",
  },
  {
    icon: <Code2 size={40} />,
    title: "Frontend Development",
    description:
      "Developing modern web applications using React, JavaScript, and Tailwind CSS.",
  },
  {
    icon: <LayoutDashboard size={40} />,
    title: "UI Development",
    description:
      "Creating clean, modern, and user-friendly interfaces with smooth animations.",
  },
  {
    icon: <Smartphone size={40} />,
    title: "Performance Optimization",
    description:
      "Writing clean code and optimizing websites for speed and better user experience.",
  },
];

function Services() {
  return (
    <section id="services" className="bg-slate-950 py-24 text-white">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="uppercase tracking-[6px] text-cyan-400 text-sm">
            What I Do
          </p>

          <h2 className="text-5xl font-bold mt-4">
            My <span className="text-cyan-400">Services</span>
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            I create modern, responsive, and user-friendly web applications
            with a focus on clean design and performance.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {services.map((service, index) => (

            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="rounded-3xl border border-cyan-500/20 bg-white/5 backdrop-blur-xl p-8 text-center hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(34,211,238,.25)] transition-all duration-300"
            >

              <div className="w-20 h-20 rounded-full bg-cyan-500/20 flex items-center justify-center mx-auto text-cyan-400 mb-6">
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold mb-4">
                {service.title}
              </h3>

              <p className="text-gray-400 leading-7">
                {service.description}
              </p>

            </motion.div>

          ))}

        </div>
      </div>
    </section>
  );
}

export default Services;