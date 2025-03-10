import React from 'react';
import { motion } from 'framer-motion';

const circleSizes = "w-[3rem] h-[3rem] xs:w-[4rem] xs:h-[4rem] md:w-[5rem] md:h-[5rem] lg:w-[7rem] lg:h-[7rem] rounded-full";
const images = [
  { type: 'image', url: '/assets/images/663b8dbac6b4fd881033e7f6_660c80a17c3fdc7ccb999e68_DeloitteXNVIDIA-p-1080-p-800.jpg' },
  { type: 'image', url: '/assets/images/663b8c76ed5de6ce6a864df9_Screenshot 2023-11-24 at 10.02 2.png' },
  { type: 'image', url: '/assets/images/6615313498daa01d91f6c11c_BETONB2B-p-800.png' },
  { type: 'image',  url: '/assets/images/661531aebc768deb9b8fdc36_kids-in-space-p-800.png' },
  { type: 'color', color: 'bg-[#4D4D4D]' },
  { type: 'color', color: 'bg-white' },
  { type: 'color', color: 'bg-white' },
  { type: 'color', color: 'bg-[#4D4D4D]' },  
];

const PerformingVideo = () => {
  return (
    <div className='flex flex-col justify-center items-center text-white lg:mt-28 p-6 lg:mb-20'>
      <motion.div
        className='flex items-end gap-10 md:gap-20'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className='grid grid-cols-4 gap-1 xs:gap-2 md:gap-4'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          {images.map((item, index) => (
            <motion.div
              key={index}
              className={`${circleSizes} ${item.type === 'color' ? item.color : 'bg-cover bg-center'}`}
              style={item.type === 'image' ? { backgroundImage: `url(${item.url})` } : {}}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 + index * 0.1 }} // Delay for staggered fade-in
            ></motion.div>
          ))}
        </motion.div>
        <motion.p
          className='text-[#FFB701] text-sm sm:text-2xl font-semibold'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          PERFORMING VIDEOS
        </motion.p>
      </motion.div>

      <motion.div
        className='text-[#FFB701] text-[6rem] xs:text-[7rem] md:text-[12rem]  lg:text-[18rem] font-bold h-[150px] xs:h-[220px]  lg:h-[350px] lg:-mt-24'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <p>#1 TOP</p>
      </motion.div>
    </div>
  );
};

export default PerformingVideo;
