import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const AnimatedText = () => {
  const text =
    "Watch out, when you hire Umault and create your company’s #1 top performing video… you become “the video person” in your company (we know, we’ve seen it happen).";
  const words = text.split(" ");

  const [visibleWords, setVisibleWords] = useState(0);
  const textContainerRef = useRef(null);
  const lastScrollY = useRef(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          hasAnimated.current = true;
          setVisibleWords(0);
        }
      },
      { threshold: 0.5 }
    );

    if (textContainerRef.current) {
      observer.observe(textContainerRef.current);
    }

    return () => {
      if (textContainerRef.current) {
        observer.unobserve(textContainerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!hasAnimated.current) return;
      const currentScrollY = window.scrollY;
      const scrollDifference = Math.abs(currentScrollY - lastScrollY.current);

      if (textContainerRef.current) {
        const { top } = textContainerRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (top < windowHeight && top > -windowHeight / 2) {
          if (scrollDifference > 10) {
            if (currentScrollY > lastScrollY.current) {
              setVisibleWords((prev) => Math.min(prev + 1, words.length));
            } else {
              setVisibleWords((prev) => Math.max(prev - 1, 0));
            }
          }
        }
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <p ref={textContainerRef} className="lg:w-[30%] mt-5 text-2xl md:text-lg font-mona font-semibold flex flex-wrap gap-1">
      {words.map((word, index) => (
        <motion.span
          key={index}
          initial={{ color: "#FBFBFB" }} 
          animate={index < visibleWords ? { color: "black" } : { color: "#A0A0A0" }} 
          transition={{ duration: 0.1 }}
          className="inline-block"
        >
          {word}
        </motion.span>
      ))}
    </p>
  );
};

export default AnimatedText;
