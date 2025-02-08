import React, { useRef, useState } from "react";

const Advertisement = () => {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <div className="flex w-full min-h-screen text-white">
      {/* Sidebar with lines */}
      <div className="flex flex-col justify-around p-9">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="w-14 h-[5px] mt-10 bg-white"></div>
        ))}
      </div>

      {/* Main Content */}
      <div className="bg-white rounded-md min-h-screen flex flex-col mt-20 w-full text-black overflow-hidden">
        <p className="text-6xl font-bold p-10 w-[90%]">
          YOU MIGHT HAVE TO HIRE AN ASSISTANT TO HANDLE ALL YOUR FAN MAIL.
        </p>
        <div className="ml-36 mb-20 flex items-center justify-between p-5 mt-10">
          <div className="relative w-96">
            <video 
              ref={videoRef}
              autoPlay 
              loop 
              muted={isMuted}
              className="w-full rounded-md h-[600px]  object-cover"
            >
              <source src="https://videos.umault.com/snagit.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            <button 
              onClick={toggleMute} 
              className="absolute top-2 right-2 bg-white/20 p-2 rounded-full"
            >
              {isMuted ? (
                <img 
                  src="/assets/images/6619081cfc6303cff2ab1955_sound mute.svg" 
                  alt="Mute" 
                  className="w-4 h-4" 
                />
              ) : (
                <img 
                  src="/assets/images/6619067dfd76f71c48c45289_sound on.svg" 
                  alt="Unmute" 
                  className="w-4 h-4" 
                />
              )}
            </button>
          </div>
          <p className="w-[30%] text-xl font-semibold">Watch out, when you hire Umault and create your company’s #1 top performing video… you become “the video person” in your company (we know, we’ve seen it happen).</p>
        </div>
      </div>
    </div>
  );
};

export default Advertisement;
