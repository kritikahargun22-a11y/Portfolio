import { motion } from "framer-motion";

function Loader() {
  return (
    <div className="fixed inset-0 bg-slate-950 flex flex-col items-center justify-center z-[99999]">

      <motion.h1
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="text-6xl md:text-7xl font-extrabold"
      >
        <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
          Kritika.
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="mt-5 text-gray-400 tracking-[4px] uppercase"
      >
        Frontend Developer
      </motion.p>

      {/* Animated Loader */}
      <div className="flex gap-2 mt-12">
        <span className="w-3 h-3 rounded-full bg-cyan-400 animate-bounce"></span>
        <span
          className="w-3 h-3 rounded-full bg-blue-500 animate-bounce"
          style={{ animationDelay: "0.2s" }}
        ></span>
        <span
          className="w-3 h-3 rounded-full bg-purple-500 animate-bounce"
          style={{ animationDelay: "0.4s" }}
        ></span>
      </div>
    </div>
  );
}

export default Loader;