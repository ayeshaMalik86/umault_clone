import React from "react";

const RevenueIncrease = () => {
  return (
    <div className=" bg-black flex gap-10 items-center justify-center">
      {/* Circle Grid */}
      <div className="grid grid-cols-4 gap-4">
        <style jsx>{`
          .circle {
            width: 7rem;
            height: 7rem; 
            border-radius: 50%;
          }
        `}</style>

        {/* First Row */}
        <div className="circle bg-cover bg-center" style={{ backgroundImage: "url('/assets/images/661531aebc768deb9b8fdc36_kids-in-space-p-500.png')" }}></div>
        <div className="circle bg-[#4D4D4D]"></div>
        <div className="circle bg-white"></div>
        <div className="circle bg-white"></div>

        {/* Second Row */}
        <div className="circle bg-[#4D4D4D]"></div>
        <div className="circle bg-gray-300"></div>
        <div className="circle bg-cover bg-center" style={{ backgroundImage: "url('assets/images/6615269369f6ffa8075f2c55_dell-tech-innovator-at-wrok.png')" }}></div>
        <div className="circle bg-cover bg-center" style={{ backgroundImage: "url('assets/images/661525b96c7d65f427986a57_collabro.io-img.png')" }}></div>

        {/* Third Row */}
        <div className="circle bg-[#4D4D4D]"></div>
        <div className="circle bg-gray-300"></div>
        <div className="col-span-2 row-span-2 bg-cover bg-center w-full h-full" style={{ backgroundImage: "url('/assets/images/65f9b0a42766dfb27cd05202_Frame 145.svg')" }}></div>

        {/* Fourth Row */}
        <div className="circle bg-cover bg-center" style={{ backgroundImage: "url('assets/images/6615269369f6ffa8075f2c55_dell-tech-innovator-at-wrok.png')" }}></div>
        <div className="circle bg-cover bg-center" style={{ backgroundImage: "url('assets/images/661525b96c7d65f427986a57_collabro.io-img.png')" }}></div>
      </div>

      <div className="flex flex-col h-[500px]">
        {/* Text Section */}
        <div className="text-[#3055FF] font-semibold text-3xl">
          <p>REVENUE</p>
          <p>INCREASE</p>
          <p>BY</p>
        </div>

        {/* Percentage */}
        <div className="flex">
          <span className="text-[#3055FF] text-[25rem] font-bold">700</span>
        </div>
      </div>
    </div>
  );
};

export default RevenueIncrease;