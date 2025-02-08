import React from 'react';

const ButtonStack = () => {
  return (
    <div className="px-5 space-y-4 py-20">
      <button className="w-full bg-blue-600 py-11 rounded-full text-black text-5xl font-semibold relative overflow-hidden">
        GET ATTENTION
      </button>
      <button className="w-full bg-yellow-500 py-11 rounded-full text-black text-5xl font-semibold relative overflow-hidden">
        HARNESS HUMOR
      </button>
      <button className="w-full bg-red-500 py-11 rounded-full text-black text-5xl font-semibold relative overflow-hidden">
        INSPIRE ENGAGEMENT
      </button>
      <button className="w-full bg-green-600 py-11 rounded-full text-black text-5xl font-semibold relative overflow-hidden">
        GENERATE EXCITEMENT
      </button>
    </div>
  );
};

export default ButtonStack;
