import { motion } from "framer-motion";

const Heartbeat = () => {
  return (
    <div className="">
      <motion.div
        className="relative"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatType: "loop",
        }}
      >
        {/* Heart Icon /}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-24 h-24 text-red-500"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>

        {/ Pulse Line */}
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          width="64"
          height="24"
          viewBox="0 0 64 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
        >
          <motion.polyline
            points="0,12 16,12 24,4 32,20 40,8 48,12 64,12"
            initial={{ strokeDasharray: "0,100" }}
            animate={{ strokeDasharray: "100,0" }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Heartbeat;