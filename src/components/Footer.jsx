import { FaGithub, FaLinkedin, FaHeart } from "react-icons/fa";

function Footer() {
    return (
        <footer className="bg-slate-900 border-t border-slate-800 text-white py-8">
            <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-6">

                {/* Left */}
                <div className="text-center md:text-left">
                    <h2 className="text-2xl font-bold">
                        Kritika<span className="text-cyan-400">.</span>
                    </h2>

                    <p className="text-gray-400 mt-2">
                        Frontend Developer | React | Tailwind CSS
                    </p>
                </div>

                {/* Social Icons */}
                <div className="flex gap-6 text-2xl">
                    <a
                        href="https://github.com/kritikahargun22-a11y"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-cyan-400 transition"
                    >
                        <FaGithub />
                    </a>

                    <a
                        href="https://www.linkedin.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-cyan-400 transition"
                    >
                        <FaLinkedin />
                    </a>
                </div>

                {/* Copyright */}
                <p className="text-gray-400 text-center">
                    Made with{" "}
                    <FaHeart className="inline text-red-500" /> using React &
                    Tailwind CSS
                </p>
            </div>

            <div className="text-center text-gray-500 mt-6 text-sm">
                © {new Date().getFullYear()} Kritika. All Rights Reserved.
            </div>
        </footer>
    );
}

export default Footer;