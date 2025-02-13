import React from "react";

const Views = () =>{
  return(
    <div className=" bg-black flex gap-2 items-center justify-center py-10">
      <div className='space-y-4'>
        <div className='grid grid-cols-4 gap-1 xs:gap-2 md:gap-4'>
          <div className='w-[3rem] h-[3rem] xs:w-[4rem] xs:h-[4rem] md:w-[5rem] md:h-[5rem] lg:w-[7rem] lg:h-[7rem] rounded-[50%] bg-cover bg-center' style={{backgroundImage : `url('/assets/images/663b8c76ed5de6ce6a864df9_Screenshot 2023-11-24 at 10.02 2.png')`}}></div>
          <div className='w-[3rem] h-[3rem] xs:w-[4rem] xs:h-[4rem] md:w-[5rem] md:h-[5rem] lg:w-[7rem] lg:h-[7rem] rounded-[50%] bg-cover bg-center' style={{backgroundImage : `url('/assets/images/6615313498daa01d91f6c11c_BETONB2B-p-1600.png')`}}></div>
          <div className='w-[3rem] h-[3rem] xs:w-[4rem] xs:h-[4rem] md:w-[5rem] md:h-[5rem] lg:w-[7rem] lg:h-[7rem] rounded-[50%] bg-cover bg-center' style={{backgroundImage : `url('/assets/images/661531aebc768deb9b8fdc36_kids-in-space-p-800.png')`}}></div>
          <div className='w-[3rem] h-[3rem] xs:w-[4rem] xs:h-[4rem] md:w-[5rem] md:h-[5rem] lg:w-[7rem] lg:h-[7rem] rounded-[50%]  bg-[#4E4E4E]'></div>
          <div className='w-[3rem] h-[3rem] xs:w-[4rem] xs:h-[4rem] md:w-[5rem] md:h-[5rem] lg:w-[7rem] lg:h-[7rem] rounded-[50%]  bg-white'></div>
          <div className='w-[3rem] h-[3rem] xs:w-[4rem] xs:h-[4rem] md:w-[5rem] md:h-[5rem] lg:w-[7rem] lg:h-[7rem] rounded-[50%]  bg-gray-300'></div>
          <div className='w-[3rem] h-[3rem] xs:w-[4rem] xs:h-[4rem] md:w-[5rem] md:h-[5rem] lg:w-[7rem] lg:h-[7rem] rounded-[50%]  bg-[#4D4D4D]'></div>
          <div className='w-[3rem] h-[3rem] xs:w-[4rem] xs:h-[4rem] md:w-[5rem] md:h-[5rem] lg:w-[7rem] lg:h-[7rem] rounded-[50%]  bg-gray-300'></div>
        
        </div>
        <div className='grid grid-cols-4 gap-1 xs:gap-2 md:gap-4'>
          <div className='w-[3rem] h-[3rem] xs:w-[4rem] xs:h-[4rem] md:w-[5rem] md:h-[5rem] lg:w-[7rem] lg:h-[7rem] rounded-[50%]  bg-[#4D4D4D]'></div>
          <div className='w-[3rem] h-[3rem] xs:w-[4rem] xs:h-[4rem] md:w-[5rem] md:h-[5rem] lg:w-[7rem] lg:h-[7rem] rounded-[50%]  bg-white'></div>
        </div>
        <div className='grid grid-cols-4 gap-1 xs:gap-2 md:gap-4'>
          <div className='w-[3rem] h-[3rem] xs:w-[4rem] xs:h-[4rem] md:w-[5rem] md:h-[5rem] lg:w-[7rem] lg:h-[7rem] rounded-[50%] bg-cover bg-center' style={{backgroundImage : `url('/assets/images/6615269369f6ffa8075f2c55_dell-tech-innovator-at-wrok.png')`}}></div>
          <div className='w-[3rem] h-[3rem] xs:w-[4rem] xs:h-[4rem] md:w-[5rem] md:h-[5rem] lg:w-[7rem] lg:h-[7rem] rounded-[50%] bg-cover bg-center' style={{backgroundImage : `url('/assets/images/661525b96c7d65f427986a57_collabro.io-img.png')`}}></div>
          
        </div>
         
      </div>
      <div className='flex flex-col h-[250px] md:h-[400px] lg:h-[500px] justify-between'>
        <div class="text-[#24CE49] font-semibold text-sm xs:text-xl md:text-2xl lg:text-3xl p-2">
          <p>VIEWS</p>
          <p className='ml-4 xs:ml-8 md:ml-16'>IN A</p>
          <p>SINGLE WEEK</p>
        </div>
        <div class="flex ">
          <span class="flex items-center md:-mb-4 lg:-mb-16 text-[#24CE49] text-[6rem] xs:text-[7rem] md:text-[14rem]  lg:text-[20rem] font-bold -space-x-1 -ml-28 xs:-ml-40 md:-ml-52 lg:-ml-64  h-[200px] xs:h-[220px]  lg:h-[350px] relative">
            1
            <span className='rotate-6 '>M</span>
            <span className='-rotate-12 '>M</span>
          </span>
        </div>
      </div>
    </div>
  )
}
export default Views;
