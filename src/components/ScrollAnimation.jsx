import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import RegisterPage from "./RegisterPage";
import RevenueIncrease from "./RevenueIncrease";

const sections = [RegisterPage, RevenueIncrease];

export default function ScrollAnimation() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="h-[200vh] flex flex-col items-center justify-start pt-20 space-y-10">
      {sections.map((Section, index) => {
        const offset = (scrollY / window.innerHeight - index) * 300;
        return (
          <motion.div
            key={index}
            initial={{ x: "100vw", opacity: 0 }}
            animate={{ x: offset, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="w-full min-h-screen flex items-center justify-center"
          >
            <Section />
          </motion.div>
        );
      })}
    </div>
  );
}
