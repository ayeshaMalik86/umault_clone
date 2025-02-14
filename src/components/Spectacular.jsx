import React, {useState, useEffect } from "react";

const Spectacular = () => {
  const [hoveredCoin, setHoveredCoin] = useState(null);
  const [coinPositions, setCoinPositions] = useState([]);

  useEffect(() => {
    // Generate and store random positions once
    const positions = Array(6)
      .fill()
      .map(() => ({
        top: `${Math.random() * 80}%`,
        left: `${Math.random() * 80}%`,
        duration: Math.random() * 8 + 5,
        delay: Math.random() * 3,
      }));
    setCoinPositions(positions);
  }, []);

  return (
    <div className="flex w-full  text-white">
      {/* Sidebar with lines */}
      <div className="flex flex-col justify-around p-3 md:p-9">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="w-10 md:w-14 h-[5px] mt-10 bg-white"></div>
        ))}
      </div>

      {/* Main Content */}
      <div className="bg-white flex flex-col w-full text-black overflow-hidden relative p-10">
        <div className="text-4xl md:text-7xl lg:8xl font-bold relative leading-snug">

          <p>THE</p>
          <p>RESULTS</p>
          <p>CAN BE</p>
          <p>PRETTY</p>
          <p>SPECTACULAR.</p>


        {/* Floating Coins */}
        {coinPositions.map((pos, i) => (
          <img
            key={i}
            src="/assets/images/6626161a2bac8c4b41c76094_u-coin.svg"
            alt="coin"
            className={`absolute w-14 h-14 coin-animation ${hoveredCoin === i ? "paused" : ""}`}
            style={{
              top: pos.top,
              left: pos.left,
              animationDuration: `${pos.duration}s`,
              animationDelay: `${pos.delay}s`,
            }}
            onMouseEnter={() => setHoveredCoin(i)}
            onMouseLeave={() => setHoveredCoin(null)}
          />
        ))}
      </div>
      </div>
    </div>
  );
};

export default Spectacular;
