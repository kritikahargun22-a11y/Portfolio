import { motion } from "framer-motion";

function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10">

      {/* Blob 1 */}
      <motion.div
        animate={{
          x: [0, 120, 0],
          y: [0, 80, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          repeatType: "mirror",
        }}
        className="absolute top-20 left-20 w-80 h-80 rounded-full bg-cyan-500/15 blur-[120px]"
      />

      {/* Blob 2 */}
      <motion.div
        animate={{
          x: [0, -100, 0],
          y: [0, -60, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "mirror",
        }}
        className="absolute bottom-10 right-20 w-96 h-96 rounded-full bg-blue-500/15 blur-[140px]"
      />

      {/* Blob 3 */}
      <motion.div
        animate={{
          x: [0, 80, 0],
          y: [0, -100, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          repeatType: "mirror",
        }}
        className="absolute top-1/2 left-1/2 w-72 h-72 rounded-full bg-purple-500/10 blur-[130px]"
      />
    </div>
  );
}

export default AnimatedBackground;