import React, { useEffect, useRef, useState } from "react";
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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkViewport = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkViewport();
    window.addEventListener('resize', checkViewport);
    return () => window.removeEventListener('resize', checkViewport);
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const panels = gsap.utils.toArray(".service-panel");

    const tl = gsap.to(panels, {
      xPercent: -100 * (panels.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        pin: true,
        start: "top top",
        end: () => `+=${containerRef.current.offsetWidth * (isMobile ? 1 : 3)}`, // Adjust scroll length based on screen size
        scrub: 1,
        snap: {
          snapTo: 1 / (panels.length - 1),
          duration: { min: 0.2, max: 0.3 },
          ease: "power2.inOut",
          inertia: false
        },
        onEnter: () => {
          gsap.set(panels, { xPercent: 0 });
        }
      },
    });

    return () => {
      tl.kill();
    };
  }, [isMobile]); // Re-run the effect when isMobile changes

  return (
    <section
      ref={sectionRef}
      id="service-section"
      className="overflow-hidden h-screen pointer-events-auto relative bg-black"
      style={{
        pointerEvents: 'auto',
        zIndex: 1
      }}
    >
      <div ref={containerRef} className="flex relative z-10">
        <div className="service-panel min-w-[100vw] h-screen flex items-center justify-center relative" data-panel="1">
          <Spectacular />
        </div>
        
        <div className="service-panel min-w-[100vw] h-screen flex items-center justify-center relative" data-panel="2">
          <RevenueIncrease />
        </div>

        <div className="service-panel min-w-[100vw] h-screen flex items-center justify-center relative" data-panel="3">
          <Views />
        </div>

        <div className="service-panel min-w-[100vw] h-screen flex items-center justify-center relative" data-panel="4">
          <PerformingVideo />
        </div>
      </div>
    </section>
  );
};
