import React, { useState, useEffect } from "react";
import Lottie from "react-lottie-player";

const animationUrls = [
  "https://cdn.prod.website-files.com/65c4b4da44785bd5a7210c55/65f052ed1f445b7cd63679eb_easteregg_anim_01.json",
  "https://cdn.prod.website-files.com/65c4b4da44785bd5a7210c55/65f053056850193a113de505_easteregg_anim_02.json",
  "https://cdn.prod.website-files.com/65c4b4da44785bd5a7210c55/65f05312645e9d2415f40dd8_easteregg_anim_03.json",
  "https://cdn.prod.website-files.com/65c4b4da44785bd5a7210c55/65f0531e75f09196f63e8ad8_easteregg_anim_04.json"
];

const ButtonStack = () => {
  const [animations, setAnimations] = useState([]);
  const [playStates, setPlayStates] = useState({});
  const [progress, setProgress] = useState({});

  useEffect(() => {
    console.log("ButtonStack re-rendered"); 
    const fetchAnimations = async () => {
      try {
        const responses = await Promise.all(animationUrls.map(url => fetch(url)));
        const jsonData = await Promise.all(responses.map(res => res.json()));
        setAnimations(jsonData);
      } catch (error) {
        console.error("Error fetching animations:", error);
      }
    };

    fetchAnimations();
  }, []);

  const handleMouseEnter = (index) => {
    setPlayStates((prev) => ({ ...prev, [index]: true }));
    setProgress((prev) => ({ ...prev, [index]: 0 })); // Reset progress to restart animation
  };

  const handleMouseLeave = (index) => {
    setPlayStates((prev) => ({ ...prev, [index]: false }));
  };

  return (
    <div className="w-full flex flex-col items-center mt-20 sm:mt-24 md:mt-32 lg:mt-44">
      {animations.length > 0 ? (
        animations.map((data, index) => (
          <div
            key={`lottie-${index}`}  
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
            className="p-2 -mt-16 sm:-mt-20 md:-mt-28 lg:-mt-40"
          >
            <Lottie
              animationData={data}
              loop={false}
              play={playStates[index] || false}
              goTo={progress[index] || 0} // Ensures the animation restarts on hover
            />
          </div>
        ))
      ) : (
        <p>Loading animations...</p>
      )}
    </div>
  );
};

export default React.memo(ButtonStack);
