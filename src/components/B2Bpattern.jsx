import React from "react";

const B2Bpattern = () => {
  return (
    <div className="flex  text-white">
      {/* Sidebar with lines */}
      <div className="flex flex-col justify-around p-3 md:p-9">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="w-10 md:w-14 h-[5px] mt-10 bg-white"></div>
        ))}
      </div>

      {/* Main Content */}
      <div className="bg-white flex flex-col w-full text-black overflow-hidden relative p-10">
      <div className="text-3xl font-semibold text-center h-screen pt-[20%]">
        THE BORING B2B VIDEO PATTERN
        </div>
      </div>
    </div>
  );
};

export default B2Bpattern;
