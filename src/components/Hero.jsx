function Hero() {
  return (
    <>
      <section
        id="home"
        className=" mt-8 min-h-screen bg-slate-950 text-white flex items-center justify-between px-10 py-24"
      >
        <div className="max-w-7x1 mx-auto px-8 grid md:grid-cols-2 gap-12 items-center">
          {/*Left side*/}
          <div>
            <h1 className="text-6xl md:text-7xl font-bold leading-tight">
              Hi, I'm{" "}
              <span className="text-cyan-400 transition duration-300 hover:text-cyan-300">
                Kritika
              </span>
            </h1>
            <h2 className="text-3xl font-semibold text-cyan-400 mt-6">
              Frontend Developer | React Developer | UI Designer |
            </h2>
            <p className="mt-6 text-gray-300 text-lg leading-9 max-w-x1">
              I build responsive, modern, and user-friendly web applications
              using React, Tailwind CSS, and JavaScript. I'm passionate about
              creating beautiful user interfaces and continuously improving my
              skills.
            </p>
            <div className="flex gap-5 mt-10">
              <button className="bg-cyan-400 text-white px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_35px_rgba(0,255,255,0.5)]">
                Download CV
              </button>

              <button className="border border-cyan-400 px-8 py-4 rounded-xl transition-all duration-300 hover:bg-cyan-400 hover:text-black hover:scale-105">
                Contact Me
              </button>
            </div>
          </div>

          {/*Right side*/}
          <div className="flex justify-center">
            <div className="relative flex justify-center items-center">
              {/* Background Glow */}
              <div className="absolute w-[430px] h-[430px] rounded-full bg-cyan-500/10 blur-[90px]"></div>

              {/* Profile Image */}
              <img
                src="/hero.png"
                alt="Kritika"
                className="relative w-96 h-96 rounded-full object-cover border-4 border-cyan-400 shadow-[0_0_80px_rgba(0,255,255,0.4)] transition-all duration-500 hover:scale-105 hover:rotate-2 animate-float"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Hero;
