function About() {
  return (
    <section id="about" className="bg-slate-950 text-white py-20 px-8">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Left Side */}
        <div className="max-w-xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-cyan-400">Me</span>
          </h2>

          <p className="text-gray-400 leading-8 text-lg mb-6">
            I'm Kritika, a passionate Frontend Developer who enjoys building
            responsive and modern websites using React, Tailwind CSS and
            JavaScript.
          </p>

          <p className="text-gray-400 leading-8 text-lg">
            I love learning new technologies and creating beautiful,
            user-friendly interfaces that provide a great user experience. My
            goal is to become a skilled Full Stack Developer and build impactful
            web applications.
          </p>

          <button className="mt-8 bg-cyan-500 hover:bg-cyan-400 px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg shadow-cyan-500/30">
            Read More
          </button>
        </div>

        {/* Right Side */}
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-slate-900 p-8 rounded-xl border border-cyan-500 text-center transition-all duration-300 hover:-translate-y-2 hover:border-cyan-300 hover:shadow-[0_0_25px_rgba(34,211,238,0.4)]">
            <h3 className="text-4xl font-bold text-cyan-400">5+</h3>
            <p className="text-gray-400 mt-2">Projects</p>
          </div>

          <div className="bg-slate-900 p-8 rounded-xl border border-cyan-500 text-center transition-all duration-300 hover:-translate-y-2 hover:border-cyan-300 hover:shadow-[0_0_25px_rgba(34,211,238,0.4)]">
            <h3 className="text-4xl font-bold text-cyan-400">1+</h3>
            <p className="text-gray-400 mt-2">Years Learning</p>
          </div>

          <div className="bg-slate-900 p-8 rounded-xl border border-cyan-500 text-center transition-all duration-300 hover:-translate-y-2 hover:border-cyan-300 hover:shadow-[0_0_25px_rgba(34,211,238,0.4)]">
            <h3 className="text-4xl font-bold text-cyan-400">100%</h3>
            <p className="text-gray-400 mt-2">Dedication</p>
          </div>

          <div className="bg-slate-900 p-8 rounded-xl border border-cyan-500 text-center transition-all duration-300 hover:-translate-y-2 hover:border-cyan-300 hover:shadow-[0_0_25px_rgba(34,211,238,0.4)]">
            <h3 className="text-4xl font-bold text-cyan-400">∞</h3>
            <p className="text-gray-400 mt-2">Continuous Learning</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
