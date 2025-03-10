import React, { useRef, useState, useEffect } from "react";
import { motion} from "framer-motion"; 

const RegisterPage = () => {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);
  const [hoveredCoin, setHoveredCoin] = useState(null);
  const [coinPositions, setCoinPositions] = useState([]);

  const lineAnimation = {
    hidden: { opacity: 0, y: 20 }, // Hidden position (start below and invisible)
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }, // Visible position (animate to original)
  };

  const textAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } },
  };

  useEffect(() => {
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

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  const coinImages = [
    "/assets/images/65f0512ae06a265d1947a051_Group 95.svg",
    "/assets/images/65f0512ae06a265d1947a051_Group 95.svg",
    "/assets/images/65f05245e142beb635a6af5c_Group 96.svg",
    "/assets/images/65f05245e142beb635a6af5c_Group 96.svg",
    "/assets/images/65f0521d112b6bc5e88d132c_Group 93.svg",
    "/assets/images/65f0521d112b6bc5e88d132c_Group 93.svg",
  ];

  return (
    <div className="flex w-full min-h-screen text-white">
      {/* Sidebar with lines */}
      <div className="flex flex-col justify-around p-3 md:p-9">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="w-10 md:w-14 h-[5px] mt-10 bg-white"
            initial="hidden"
            whileInView="visible"
            variants={lineAnimation}
            viewport={{ once: false, amount: 0.5 }} 
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="bg-white rounded-md min-h-screen flex flex-col mt-20 w-full text-black overflow-hidden">
        <div className="flex flex-col md:flex-row justify-between items-center md:w-full max-w-6xl">
          <div className="text-xl md:text-2xl lg:text-3xl mt-44 w-full md:h-full font-bold relative">
            {/* Floating Coins */}
            {coinPositions.map((pos, i) => (
              <img
                key={i}
                src={hoveredCoin === i ? "/assets/images/6626161a2bac8c4b41c76094_u-coin.svg" : coinImages[i]}
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

          {/* Video Container */}
          <div className="relative mr-5">
            <motion.p
              className="text-3xl md:text-5xl font-bold max-w-lg p-5 text-center md:text-left mt-5 md:mt-0"
              initial="hidden"
              whileInView="visible"
              variants={textAnimation}
              viewport={{ once: false, amount: 0.5 }}
            >
              YOU <br /> DESERVE <br /> BETTER <br /> THAN <br /> A BORING <br /> CORPORATE <br /> VIDEO
            </motion.p>

            {/* Video Wrapper */}
            <motion.div className="relative w-64 md:w-80 lg:w-96"
             initial="hidden"
             whileInView="visible"
             variants={textAnimation}
             viewport={{ once: false, amount: 0.5 }}
            >
              <video ref={videoRef} autoPlay loop muted={isMuted} className="w-full rounded-md">
                <source src="https://videos.umault.com/umault-trapped%20in%20a%20corporate%20video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Mute Button Positioned Inside Video */}
              <button onClick={toggleMute} className="absolute top-2 right-2 bg-white/20 p-2 rounded-full">
                {isMuted ? (
                  <img src="/assets/images/6619081cfc6303cff2ab1955_sound mute.svg" alt="Mute" className="w-4 h-4" />
                ) : (
                  <img src="/assets/images/6619067dfd76f71c48c45289_sound on.svg" alt="Unmute" className="w-4 h-4" />
                )}
              </button>
            </motion.div>
          </div>
        </div>

        <div className="mt-32 flex flex-col md:text-center mb-8">
          <motion.p
            className="font-bold text-xl md:text-3xl mb-8"
            initial="hidden"
            whileInView="visible"
            variants={textAnimation}
            viewport={{ once: false, amount: 0.5 }}
          >
            MAKE YOUR AUDIENCE SAY
          </motion.p>
          <motion.h1
            className="inline-block p-2 text-5xl md:text-8xl font-bold"
            initial="hidden"
            whileInView="visible"
            variants={textAnimation}
            viewport={{ once: false, amount: 0.5 }}
          >
            “I DIDN'T REALIZE I WAS WATCHING AN AD... I JUST
            <div className="inline-flex relative"
            initial="hidden"
            whileInView="visible"
            variants={textAnimation}
            viewport={{ once: false, amount: 0.5 }}
            >
              <video autoPlay loop playsInline muted={isMuted} className="inline-flex h-20 mx-2 rounded-sm">
                <source src="https://videos.umault.com/umault-dont%20make%20a%20normal%20video.mp4" type="video/mp4" />
                Your browser does not support HTML5 videos.
              </video>
              <button onClick={toggleMute} className="absolute top-2 right-2 bg-white/20 p-2 rounded-full">
                {isMuted ? (
                  <img src="/assets/images/6619081cfc6303cff2ab1955_sound mute.svg" alt="Mute" className="w-4 h-4" />
                ) : (
                  <img src="/assets/images/6619067dfd76f71c48c45289_sound on.svg" alt="Unmute" className="w-4 h-4" />
                )}
              </button>
            </div>
            WANTED TO KEEP WATCHING”
          </motion.h1>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
