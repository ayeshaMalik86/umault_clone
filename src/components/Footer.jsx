import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col gap-8 bg-black text-white py-10 px-5">
      <div className="flex gap-8">
        <p>HIRE</p>
        <p className="flex items-center">
          <span className="border-[7px] border-blue-800 rounded-full"></span>
          <span className="border-[7px] border-yellow-500 rounded-full mr-2"></span>
          UMAULT
        </p>
      </div>

      <div>
        <h1 className="text-6xl font-bold">ENTERTAIN YOUR AUDIENCE.</h1>
        <h1 className="text-6xl font-bold">SMASH MARKETING EXPECTATIONS.</h1>
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
        <button className="w-full bg-yellow-500 py-11 rounded-full text-black text-5xl font-bold relative overflow-hidden">
          <span className="inline-block">LET'S DO THIS</span>
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
        <div className="flex justify-between">
          <div className="flex flex-col justify-between px-2">
            <div>
              <p className="mb-3 text-[#ffffff80]">PURE GOLD NO SPAM (PINKY PROMISE)</p>
              <h4 className="mb-9 text-xl xs:text-2xl md:text-3xl font-bold text-[#fff]">
                OUR MONTHLY NEWSLETTER
              </h4>
            </div>
            <div className="mb-12">
              <div className="flex items-center border border-gray-400 rounded-sm overflow-hidden w-full max-w-md">
                <input
                  placeholder="Email"
                  className="flex-1 px-4 py-3 bg-black text-gray-300 focus:outline-none"
                  type="email"
                />
                <button className="border-2 border-gray-400 bg-yellow-500 text-black py-3 px-4 hover:bg-yellow-600 rounded-l-none rounded-r-sm transition">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Links Section */}
          <div className="w-1/3 flex flex-wrap">
            <div className="w-[35%]">
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
        <div className="flex justify-between items-center text-[#ffffff80] px-2 text-xs font-semibold mt-8">
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
