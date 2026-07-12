import { TypeAnimation } from "react-type-animation";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-32 md:pt-24"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-20 items-center">

        {/* Left Side */}
        <div>
          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
              Kritika
            </span>
          </h1>

          {/* Typing Animation */}
          <div className="mt-6">
            <TypeAnimation
              sequence={[
                "Frontend Developer",
                2000,
                "React Developer",
                2000,
                "BCA Student",
                2000,
                "Open to Internship",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-2xl md:text-3xl font-semibold text-cyan-400"
            />
          </div>

          {/* Internship Badge */}
          <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-4 py-2 text-green-400">
            <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse"></span>
            Available for Internship
          </div>

          {/* Description */}
          <p className="mt-8 text-gray-300 text-lg leading-9 max-w-xl">
            I build responsive, modern, and user-friendly web applications
            using React, Tailwind CSS, and JavaScript. I'm passionate about
            creating beautiful user interfaces and continuously improving my
            skills.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-8">
            <a
              href="https://github.com/kritikahargun22-a11y"
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center hover:bg-cyan-500 hover:scale-110 transition-all duration-300"
            >
              <FaGithub size={22} />
            </a>

            <a
              href="#"
              className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center hover:bg-cyan-500 hover:scale-110 transition-all duration-300"
            >
              <FaLinkedin size={22} />
            </a>

            <a
              href="#"
              className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center hover:bg-cyan-500 hover:scale-110 transition-all duration-300"
            >
              <FaInstagram size={22} />
            </a>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 mt-10">
            <a
              href="/resume.pdf"
              target="_blank"
              className="rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 text-center font-semibold hover:scale-105 transition duration-300"
            >
              Download CV
            </a>

            <a
              href="#contact"
              className="rounded-full border border-cyan-500 px-8 py-4 text-center hover:bg-cyan-500/10 transition duration-300"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex justify-center">
          <div className="relative">

            {/* Glow */}
            <div className="absolute inset-0 rounded-full bg-cyan-500/20 blur-[90px]"></div>

            {/* Border Glow */}
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 animate-pulse"></div>

            {/* Image */}
            <img
              src="/profile.png"
              alt="Kritika"
              className="relative
              w-64 h-64
              sm:w-72 sm:h-72
              md:w-80 md:h-80
              lg:w-96 lg:h-96
              rounded-full
              object-cover
              border-4
              border-cyan-400"
            />
          </div>
        </div>
      </div>

      {/* Scroll Down */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-gray-400 text-sm mb-2">
          Scroll Down
        </span>

        <span className="text-cyan-400 text-3xl">↓</span>
      </div>
    </section>
  );
}

export default Hero;