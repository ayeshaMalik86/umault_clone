import React from "react";

const Navbar = () => {
  const navLinks = [
    { href: "#portfolio", label: "Portfolio" },
    { href: "#about", label: "About" },
    { href: "#insights", label: "Insights" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-3">
        <div className="flex gap-2 bg-[#5D5E5F] rounded-md p-1">
          <p className="font-extrabold rounded-md bg-white p-3 text-3xl">ümault</p>
          <div className="flex gap-2 items-center font-semibold">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-black rounded-md bg-white py-6 px-2 text-xs"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

         <div className="bg-[#5D5E5F] p-1 rounded-md">  
        <button className="bg-[#FFB701] text-black font-semibold px-2 py-5 rounded-md">
          Let's do this
        </button>
        </div> 
      </div>
    </nav>
  );
};

export default Navbar;