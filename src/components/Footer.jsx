import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div className="flex flex-col gap-8 bg-black text-white py-10 px-5">
      <div className="flex gap-8">
        <p>HIRE</p>
        <p className="flex items-center">
          <span className="border-[7px] border-blue-800 rounded-full"></span>
          <span className="border-[7px] border-[#FFB701] rounded-full mr-2"></span>
          UMAULT
        </p>
      </div>

      <div className="text-4xl sm:text-6xl font-bold">
        <h1>ENTERTAIN YOUR AUDIENCE.SMASH MARKETING EXPECTATIONS.</h1>
      </div>

      <div className="flex gap-4">
        <input
          placeholder="NAME"
          className="w-1/3 aspect-square border border-gray-500 rounded-full bg-black text-center text-white hover:border-blue-800 outline-none"
          type="text"
        />
        <input
          placeholder="EMAIL"
          className="w-1/3 aspect-square border border-gray-500 rounded-full bg-black text-center text-white hover:border-blue-800 outline-none"
          type="text"
        />
        <input
          placeholder="MESSAGE"
          className="w-1/3 aspect-square border border-gray-500 rounded-full bg-black text-center text-white hover:border-blue-800 outline-none"
          type="text"
        />
      </div>

      <div>
        <button className="w-full bg-[#FFB701] py-6 md:py-11 rounded-full text-black text-2xl md:text-5xl font-bold relative overflow-hidden">
          <motion.span
            className="inline-block"
            initial={{ scale: 0.8 }}
            whileHover={{
              scale: 1.2,
              transition: { type: "spring", stiffness: 300, damping: 10 },
            }}
          >
            LET'S DO THIS
          </motion.span>
        </button>
        <p className="p-5 pl-12 flex gap-1 items-center font-semibold">
          I agree with{" "}
          <a href="/" className="text-lg underline">
            Umault's privacy policy
          </a>
        </p>
      </div>

      {/* Newsletter Section */}
      <div className="bg-black text-white pt-24 px-2 pb-8">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="flex flex-col justify-between px-2">
            <div>
              <p className="mb-3 text-[#ffffff80]">PURE GOLD NO SPAM (PINKY PROMISE)</p>
              <h4 className="mb-9 text-xl xs:text-2xl md:text-3xl font-bold text-[#fff]">
                OUR MONTHLY NEWSLETTER
              </h4>
            </div>
            <div className="flex mb-5 border border-gray-100 rounded-lg">
              <input placeholder="Email" className="px-2 py-2 bg-black border border-[#5D5E5F] rounded-lg"></input>
              <button className="bg-[#FFB701] px-2 py-2 rounded-lg border-2 border-[#5D5E5F] text-black">Subcribe</button>
            </div>
          </div>

          {/* Links Section */}
           <div className="md:w-1/3 flex">
            <div className="w-[100%] md:w-[35%]">
              <div className="flex items-center gap-2 mb-12 hover:text-gray-400">
                <span className="border-[7px] border-white rounded-full"></span>
                <a href="/" data-discover="true">About</a>
              </div>
              <div className="flex items-center gap-2 mb-12 hover:text-gray-400">
                <span className="border-[7px] border-white rounded-full"></span>
                <a href="/" data-discover="true">Client work</a>
              </div>
              <div className="flex items-center gap-2 mb-12 hover:text-gray-400">
                <span className="border-[7px] border-white rounded-full"></span>
                <a href="/" data-discover="true">Umault's ads</a>
              </div>
            </div>
            <div className="w-[35%]">
              <div className="flex items-center gap-2 mb-12 hover:text-gray-400">
                <span className="border-[7px] border-white rounded-full"></span>
                <a href="/" data-discover="true">Podcast</a>
              </div>
              <div className="flex items-center gap-2 mb-12 hover:text-gray-400">
                <span className="border-[7px] border-white rounded-full"></span>
                <a href="/" data-discover="true">Privacy Policy</a>
              </div>
              <div className="flex items-center gap-2 mb-12 hover:text-gray-400">
                <span className="border-[7px] border-white rounded-full"></span>
                <a href="/" data-discover="true">Insights</a>
              </div>
            </div>
          </div> 
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-[#ffffff80] px-2 text-xs font-semibold mt-8">
          <div>MADE WITH LOVE AND PIZZA IN CHICAGO</div>
          <div>DESIGNED AND BUILT WITH 💜 BY REFOKUS</div>
          <div className="flex gap-6">
          <a className="hover:text-gray-300" href="/">
              <img src="assets/images/6613c2289de74e33cb4ffe8a_prime_twitter.svg" alt="twitter"/>
            </a>
            <a className="hover:text-gray-300" href="/">
              <img src="assets/images/6613c304870fb02135c08d41_mingcute_youtube-fill.svg" alt="youtube"/>
            </a>
            <a className="hover:text-gray-300" href="/">
              <img src="assets/images/6613c3210fb8d6d03e60f957_Frame 216.svg" alt="instagram"/>
            </a>
            <a className="hover:text-gray-300" href="/">
              <img src="assets/images/6613c38087bbd9a414337500_mdi_linkedin.svg" alt="linkedIn"/>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
