import { motion } from "framer-motion";

export default function BackgroundEffects() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">

      {/* Cyan */}
      <motion.div
        animate={{
          x: [0, 120, 0],
          y: [0, -80, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -left-44 top-20
        w-[420px] h-[420px]
        rounded-full
        bg-cyan-500/20
        blur-[170px]"
      />

      {/* Blue */}
      <motion.div
        animate={{
          x: [0, -120, 0],
          y: [0, 90, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute
        right-[-150px]
        top-1/3
        w-[460px]
        h-[460px]
        rounded-full
        bg-blue-500/20
        blur-[190px]"
      />

      {/* Purple */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, 70, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute
        bottom-[-180px]
        left-1/3
        w-[400px]
        h-[400px]
        rounded-full
        bg-purple-500/20
        blur-[180px]"
      />
    </div>
  );
}