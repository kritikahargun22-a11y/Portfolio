import { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import Loader from "./components/Loader";
import ScrollProgress from "./components/ScrollProgress";
import BackToTop from "./components/BackToTop";
import BackgroundEffects from "./components/BackgroundEffects";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="relative bg-slate-950 text-white overflow-x-hidden">

      {/* Background Effects */}
      <BackgroundEffects />
      <div className="relative z-10">

      {/* Scroll Progress */}
      <ScrollProgress />

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <Hero />
      <About />
      <Education />
      <Skills />
      <Services />
      <Project />
      <Contact />
      <Footer />

      {/* Back To Top */}
      <BackToTop />
      </div>

    </div>
  );
}

export default App;