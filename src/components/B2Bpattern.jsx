import React, { useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";

const B2Bpattern = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"], 
  });

  const scale = useTransform(scrollYProgress, [0, 0.1], [0, 1]); 
  const opacity = useTransform(scrollYProgress, [0, 0.05], [0, 1]); 

  return (
    <div className="relative">
      <div ref={targetRef} className="h-screen sticky top-0 flex text-white">
        {/* Sidebar with lines */}
        <div className="flex flex-col justify-around p-3 md:p-9">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="w-10 md:w-14 h-[5px] mt-10 bg-white"></div>
          ))}
        </div>

        {/* Main Content */}
        <div className="bg-white flex flex-col w-full text-black overflow-hidden relative p-10">
          <motion.div
            className="text-3xl font-semibold text-center h-screen flex items-center justify-center"
            style={{ scale, opacity }}
          >
            THE BORING B2B VIDEO PATTERN
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default B2Bpattern;
