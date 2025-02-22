import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";

const Preloader = ({ onComplete }) => {
  const [animationData, setAnimationData] = useState(null);

  // Function to detect mobile devices
  const isMobile = () => /Mobi|Android/i.test(navigator.userAgent);

  useEffect(() => {
    const animationUrl = isMobile()
      ? "https://cdn.prod.website-files.com/65c4b4da44785bd5a7210c55/6628f6be840a1658d5f47ba9_Kinetic%20Intro%20Mobile.json"
      : "https://cdn.prod.website-files.com/65c4b4da44785bd5a7210c55/66017f7d4ed3638120fdf04d_kinetic_intro.json";

    fetch(animationUrl)
      .then((response) => response.json())
      .then((data) => setAnimationData(data))
      .catch((error) => console.error("Error loading animation:", error));

    const timer = setTimeout(() => {
      onComplete();
    }, 6000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!animationData) {
    return <div className="fixed inset-0 flex items-center justify-center z-50"></div>;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <Lottie animationData={animationData} loop={false} />
    </div>
  );
};

export default Preloader;
