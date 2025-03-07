import React, { useEffect, useRef, useState } from "react";
import { motion, useTransform, useScroll } from "framer-motion";

const CombinedAnimation = React.memo(() => {
  const containerRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const leftTextRef = useRef(null);
  const rightTextRef = useRef(null);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState(null);
  const [isBreakAnimationComplete, setIsBreakAnimationComplete] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.1], [0, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.05], [0, 1]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollDirection(currentScrollY > prevScrollY ? "down" : "up");
      setPrevScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollY]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (
            entry.isIntersecting &&
            scrollDirection === "down" &&
            leftRef.current &&
            rightRef.current &&
            leftTextRef.current &&
            rightTextRef.current
          ) {
            leftRef.current.classList.add("animate-tilt-left");
            rightRef.current.classList.add("animate-tilt-right");
            leftTextRef.current.classList.add("animate-text-left");
            rightTextRef.current.classList.add("animate-text-right");

            setTimeout(() => {
              setIsBreakAnimationComplete(true);
            }, 1000);
          } else if (
            !entry.isIntersecting &&
            scrollDirection === "up" &&
            leftRef.current &&
            rightRef.current &&
            leftTextRef.current &&
            rightTextRef.current
          ) {
            leftRef.current.classList.remove("animate-tilt-left");
            rightRef.current.classList.remove("animate-tilt-right");
            leftTextRef.current.classList.remove("animate-text-left");
            rightTextRef.current.classList.remove("animate-text-right");
            setIsBreakAnimationComplete(false);

            void leftRef.current.offsetHeight;
            void rightRef.current.offsetHeight;
          }
        });
      },
      {
        threshold: 0.7,
        rootMargin: "-10% 0px",
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [scrollDirection]);

  return (
    <div ref={containerRef} className="h-screen w-full relative overflow-hidden">
      {/* B2B Pattern (underneath) */}
      <div
        className={`absolute inset-0 bg-black transition-opacity duration-1000 ${
          isBreakAnimationComplete ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="h-screen sticky top-0 flex text-white">
          <div className="flex flex-col justify-around p-3 md:p-9">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="w-10 md:w-14 h-[5px] mt-10 bg-white"></div>
            ))}
          </div>
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

      {/* Split Screen Animation (overlay) */}
      <div
        className={`absolute inset-0 bg-black transition-opacity duration-1000 ${
          isBreakAnimationComplete ? "opacity-0" : "opacity-100"
        }`}
      >
        {/* Center container for text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none">
          <span
            ref={leftTextRef}
            className="text-white text-4xl font-bold mb-4 transition-all duration-1000 ease-in-out"
          >
            And
          </span>
          <span
            ref={rightTextRef}
            className="text-white text-[75px] md:text-[150px] lg:text-[300px] font-bold transition-all duration-1000 ease-in-out"
          >
            Break
          </span>
        </div>

        {/* Split screen panels (behind text) */}
        <div
          ref={leftRef}
          className="absolute top-0 left-0 w-1/2 h-full bg-black transform origin-bottom-left transition-all duration-1000 ease-in-out"
        />
        <div
          ref={rightRef}
          className="absolute top-0 right-0 w-1/2 h-full bg-black transform origin-bottom-right transition-all duration-1000 ease-in-out"
        />
      </div>

      <style jsx>{`
        .animate-tilt-left {
          transform: rotate(45deg) translateY(100%);
        }
        .animate-tilt-right {
          transform: rotate(-45deg) translateY(100%);
        }
        .animate-text-left {
          transform: rotate(45deg) translateY(100px);
          opacity: 0;
        }
        .animate-text-right {
          transform: rotate(-45deg) translateY(100px);
          opacity: 0;
        }
      `}</style>
    </div>
  );
});

export default CombinedAnimation;
