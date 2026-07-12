import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Project", href: "#project" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const handleScroll = () => {
      const scrollY = window.scrollY;

      setScrolled(scrollY > 30);

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id");

        if (
          scrollY >= sectionTop &&
          scrollY < sectionTop + sectionHeight
        ) {
          setActive(sectionId);
        }
      });
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-4 left-0 w-full z-50 px-4">
      <nav
        className={`mx-auto max-w-7xl rounded-2xl border border-white/10
        bg-slate-900/70 backdrop-blur-xl
        transition-all duration-300
        ${scrolled
            ? "py-3 shadow-2xl shadow-cyan-500/10"
            : "py-5"
          }`}
      >
        <div className="flex items-center
         justify-between px-6 md:px-8">

          {/* Logo */}
          <a
            href="#home"
            className="text-2xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent"
          >
            Kritika.
          </a>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => {
              const id = link.href.substring(1);

              return (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={`relative transition duration-300
                    ${active === id
                        ? "text-cyan-400"
                        : "text-gray-300 hover:text-cyan-400"
                      }`}
                  >
                    {link.name}

                    <span
                      className={`absolute left-0 -bottom-2 h-[2px] bg-cyan-400 transition-all duration-300
                      ${active === id
                          ? "w-full"
                          : "w-0"
                        }`}
                    ></span>
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Resume Button */}
          <a
            href="/resume.pdf"
            className="hidden md:block rounded-full bg-gradient-to-r
            from-cyan-500 to-blue-600
            px-6 py-2.5
            font-semibold
            text-white
            transition
            hover:scale-105
            hover:shadow-lg
            hover:shadow-cyan-500/30"
          >
            Resume
          </a>

          {/* Mobile Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white md:hidden"
          >
            {menuOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`overflow-hidden transition-all duration-300 md:hidden ${menuOpen ? "max-h-96 py-6" : "max-h-0"
            }`}
        >
          <ul className="flex flex-col items-center gap-6">
            {navLinks.map((link) => {
              const id = link.href.substring(1);

              return (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`text-lg transition
                    ${active === id
                        ? "text-cyan-400"
                        : "text-gray-300 hover:text-cyan-400"
                      }`}
                  >
                    {link.name}
                  </a>
                </li>
              );
            })}

            <a
              href="/resume.pdf"
              className="rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-2.5 font-semibold text-white"
            >
              Resume
            </a>
          </ul>
        </div>
      </nav>
    </header>
  );
}