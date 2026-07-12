import { FaGithub, FaLinkedin, FaInstagram, FaArrowUp } from "react-icons/fa";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14">

        {/* Top Section */}
        <div className="grid md:grid-cols-3 gap-10">

          {/* Left */}
          <div>
            <h2 className="text-4xl font-bold text-white">
              Kritika<span className="text-cyan-400">.</span>
            </h2>

            <p className="mt-5 text-gray-400 leading-8 max-w-sm">
              Frontend Developer passionate about creating modern,
              responsive and user-friendly web applications using
              React, Tailwind CSS and JavaScript.
            </p>
          </div>

          {/* Center */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="#home" className="hover:text-cyan-400 transition">
                  Home
                </a>
              </li>

              <li>
                <a href="#about" className="hover:text-cyan-400 transition">
                  About
                </a>
              </li>

              <li>
                <a href="#skills" className="hover:text-cyan-400 transition">
                  Skills
                </a>
              </li>

              <li>
                <a href="#project" className="hover:text-cyan-400 transition">
                  Projects
                </a>
              </li>

              <li>
                <a href="#contact" className="hover:text-cyan-400 transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Right */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-5">
              Contact
            </h3>

            <p className="text-gray-400">
              📧 kritikahargun22@gmail.com
            </p>

            <p className="text-gray-400 mt-3">
              📍 Punjab, India
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-8">

              <a
                href="https://github.com/kritikahargun22-a11y"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center hover:bg-cyan-500 transition duration-300 hover:scale-110"
              >
                <FaGithub size={20} />
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center hover:bg-cyan-500 transition duration-300 hover:scale-110"
              >
                <FaLinkedin size={20} />
              </a>

              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center hover:bg-cyan-500 transition duration-300 hover:scale-110"
              >
                <FaInstagram size={20} />
              </a>

            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">

          <p className="text-gray-500 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Kritika. All Rights Reserved.
          </p>

          <p className="text-gray-500 text-sm mt-4 md:mt-0">
            Built with ❤️ using{" "}
            <span className="text-cyan-400">React</span> &{" "}
            <span className="text-cyan-400">Tailwind CSS</span>
          </p>

        </div>

      </div>

      {/* Scroll To Top */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-cyan-500 text-white shadow-lg hover:bg-cyan-400 transition duration-300 hover:scale-110"
      >
        <FaArrowUp className="mx-auto" />
      </button>
    </footer>
  );
}

export default Footer;