import React, { useState, useRef } from "react";

const videos = {
  PacBio: "https://videos.umault.com/973_-_pacbio_-_vega_launch_final_110124%20(1080p).mp4",
  Matomo: "https://videos.umault.com/Matomo-Googleheimer.mp4",
  DellTechnologies: "https://videos.umault.com/dell-connectedPC.mp4",
  PremiumBeat: "https://videos.umault.com/premiumbeat.mp4",
};

const HeroSection = () => {
  const [videoSrc, setVideoSrc] = useState(videos.PacBio);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="relative  w-full h-screen bg-gray-900 text-white overflow-hidden">
      {/* Background Video */}
      <video 
        ref={videoRef}
        key={videoSrc} 
        autoPlay 
        loop 
        muted={isMuted} 
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={videoSrc} type="video/mp4" />
      </video>
 
      <div className="absolute top-24 left-48 text-3xl font-semibold leading-[28px]">
        <span className="block">BOLD CREATIVE</span>
        <span className="block ml-32">THAT SHATTERS</span>
        <span className="block ml-14">MARKETING FORMULAS</span>
      </div>

      <div className="absolute right-56 top-80 space-y-4 text-lg font-semibold">
        {Object.keys(videos).map((key) => (
          <div 
            key={key} 
            className={`relative flex items-center cursor-pointer border-b-2 border-transparent hover:border-white transition-opacity ${videoSrc === videos[key] ? 'border-white' : 'opacity-70'}`}
            onClick={() => setVideoSrc(videos[key])}
          >
            <span className="text-3xl color-white">{key}</span>
            {videoSrc === videos[key] && (
              <button 
                onClick={toggleMute} 
                className="absolute left-[-35px] bg-white/20 rounded-full p-1"
              >
                {isMuted ? (
                  <img src="/assets/images/6619081cfc6303cff2ab1955_sound mute.svg" alt="Mute" className="w-4 h-4" />
                ) : (
                  <img src="/assets/images/6619067dfd76f71c48c45289_sound on.svg" alt="Unmute" className="w-4 h-4" />
                )}
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
