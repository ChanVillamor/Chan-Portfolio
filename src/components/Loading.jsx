import { motion } from "framer-motion";

const Loading = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
      {/* Background decorations */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-green-900 to-black"
      />
      <div className="absolute flex items-center justify-center">
        {/* Pac-Man style scary pumpkin */}
        <motion.div
          className="relative w-16 h-16 bg-orange-600 rounded-full"
          animate={{
            rotate: [0, 30, -30, 0], // Chomping motion
            x: [0, 20, 0], // Side-to-side movement
          }}
          transition={{
            repeat: Infinity,
            duration: 0.5,
          }}
        >
          {/* Scary face elements */}
          {/* Eyes */}
          <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-black rounded-full" />
          <div className="absolute top-1/4 right-1/4 w-4 h-4 bg-black rounded-full" />
          
          {/* Mouth */}
          <div className="absolute bottom-1/4 left-1/2 w-10 h-4 bg-black rounded-t-full transform -translate-x-1/2" />
          <div className="absolute bottom-1/4 left-1/2 w-10 h-1 bg-white rounded-full transform -translate-x-1/2" />
          <div className="absolute bottom-1/4 left-1/2 w-6 h-1 bg-white rounded-full transform -translate-x-1/2 translate-y-1" />
        </motion.div>
      </div>
    </div>
  );
};

export default Loading;
