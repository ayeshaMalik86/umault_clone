import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Spectacular from "./Spectacular";  
import RevenueIncrease from "./RevenueIncrease"; 
import Views from "./Views";
import PerformingVideo from "./PerformingVideo";

gsap.registerPlugin(ScrollTrigger);

export const ServicesSection = () => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const updateAnimation = () => {
      const isMobile = window.innerWidth < 768;
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());

      const panels = gsap.utils.toArray(".service-panel");

      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          start: "top top",
          end: () => `+=${containerRef.current.offsetWidth * (isMobile ? 1 : 3)}`,
          scrub: 1,
        },
      });
    };

    updateAnimation();
    window.addEventListener("resize", updateAnimation);

    return () => {
      window.removeEventListener("resize", updateAnimation);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="service-section"
      className="overflow-hidden h-screen pointer-events-auto relative bg-black"
      style={{ pointerEvents: 'auto', zIndex: 1 }}
    >
      <div ref={containerRef} className="flex relative z-10">
        <div className="service-panel min-w-[100vw] h-screen flex items-center justify-center relative">
          <Spectacular />
        </div>
        <div className="service-panel min-w-[100vw] h-screen flex items-center justify-center relative">
          <RevenueIncrease />
        </div>
        <div className="service-panel min-w-[100vw] h-screen flex items-center justify-center relative">
          <Views />
        </div>
        <div className="service-panel min-w-[100vw] h-screen flex items-center justify-center relative">
          <PerformingVideo />
        </div>
      </div>
    </section>
  );
};
