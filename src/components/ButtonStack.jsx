import React from 'react';

const ButtonStack = () => {
  return (
    <div className="px-5 space-y-4 py-20">
      <button className="w-full bg-blue-600 py-6 md:py-11 rounded-full text-black text-2xl md:text-5xl font-semibold relative overflow-hidden group">
        GET ATTENTION
        <style>
          {`
            .group:hover {
              animation: wiggle 0.5s ease-in-out infinite;
            }
            @keyframes wiggle {
              0% {
                transform: translateY(0);
              }
              25% {
                transform: translateY(-10px);
              }
              50% {
                transform: translateY(0);
              }
              75% {
                transform: translateY(10px);
              }
              100% {
                transform: translateY(0);
              }
            }
          `}
        </style>
      </button>
      <button className="w-full bg-yellow-500 py-6 md:py-11 rounded-full text-black text-2xl md:text-5xl font-semibold relative overflow-hidden group">
        HARNESS HUMOR
        <style>
          {`
            .group:hover {
              animation: wiggle 0.5s ease-in-out infinite;
            }
          `}
        </style>
      </button>
      <button className="w-full bg-red-500 py-6 md:py-11 rounded-full text-black text-2xl md:text-5xl font-semibold relative overflow-hidden group">
        INSPIRE ENGAGEMENT
        <style>
          {`
            .group:hover {
              animation: wiggle 0.5s ease-in-out infinite;
            }
          `}
        </style>
      </button>
      <button className="w-full bg-green-600 py-6 md:py-11 rounded-full text-black text-2xl md:text-5xl font-semibold relative overflow-hidden group">
        GENERATE EXCITEMENT
        <style>
          {`
            .group:hover {
              animation: wiggle 0.5s ease-in-out infinite;
            }
          `}
        </style>
      </button>
    </div>
  );
};

export default ButtonStack;
