import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ka11trr",
        "template_6m3x1sr",
        form.current,
        "ZiiLTtes-5rg18Z1Y"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("Failed to send message.");
          console.log(error);
        }
      );
  };

  return (
    <section
      id="contact"
      className="relative py-24 bg-slate-950 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute right-10 bottom-10 w-80 h-80 bg-cyan-500/10 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="uppercase tracking-[6px] text-cyan-400">
            Get In Touch
          </p>

          <h2 className="text-5xl font-bold mt-4 text-white">
            Contact{" "}
            <span className="text-cyan-400">
              Me
            </span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h3 className="text-3xl font-bold text-white">
              Let's Work Together
            </h3>

            <p className="text-gray-400 leading-8">
              I'm currently looking for internship opportunities.
              Feel free to contact me for internships,
              freelance work or collaboration.
            </p>

            <div className="space-y-5">

              <div className="flex items-center gap-4">
                <Mail className="text-cyan-400" size={22} />
                <span className="text-gray-300">
                  your-email@gmail.com
                </span>
              </div>

              <div className="flex items-center gap-4">
                <MapPin className="text-cyan-400" size={22} />
                <span className="text-gray-300">
                  Punjab, India
                </span>
              </div>

            </div>

            <div className="flex gap-4">

              <a
                href="https://github.com/kritikahargun22-a11y"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-full bg-slate-800 hover:bg-cyan-500 transition"
              >
                <FaGithub size={22} />
              </a>

              <a
                href="https://linkedin.com/in/YOUR-LINKEDIN"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-full bg-slate-800 hover:bg-cyan-500 transition"
              >
                <FaLinkedin size={22} />
              </a>

              <a
                href="https://instagram.com/YOUR-INSTAGRAM"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-full bg-slate-800 hover:bg-cyan-500 transition"
              >
                <FaInstagram size={22} />
              </a>

            </div>
          </motion.div>

          {/* Right Side */}
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-cyan-500/20 bg-slate-900 p-8 space-y-6"
          >

            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              required
              className="w-full rounded-xl bg-slate-800 border border-slate-700 p-4 text-white outline-none focus:border-cyan-400"
            />

            <input
              type="email"
              name="from_email"
              placeholder="Your Email"
              required
              className="w-full rounded-xl bg-slate-800 border border-slate-700 p-4 text-white outline-none focus:border-cyan-400"
            />

            <textarea
              rows="6"
              name="message"
              placeholder="Your Message"
              required
              className="w-full rounded-xl bg-slate-800 border border-slate-700 p-4 text-white outline-none focus:border-cyan-400"
            ></textarea>

            <button
              type="submit"
              className="w-full rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 py-4 font-semibold text-white hover:scale-105 transition"
            >
              Send Message
            </button>

          </motion.form>

        </div>

      </div>
    </section>
  );
}

export default Contact;