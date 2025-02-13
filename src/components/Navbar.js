import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "#portfolio", label: "Portfolio", icon: "/assets/images/65dddd9f94fe66a19eea5c7b_burger.webp" },
    { href: "#about", label: "About" },
    { href: "#insights", label: "Insights" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-[100%] z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-3">
        <div className="flex gap-2 bg-[#5D5E5F] rounded-md p-1">
          <p className="font-extrabold rounded-md bg-white p-3 text-3xl">ümault</p>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex gap-2 items-center font-semibold">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-black rounded-md bg-white py-6 px-2 text-xs flex items-center gap-1"
              >
                {link.label}
                {link.icon && <img src={link.icon} alt="Menu Icon" className="w-4 h-4" />}
              </a>
            ))}
          </div>
        </div>

        {/* Desktop Button */}
        <div className="hidden md:block bg-[#5D5E5F] p-1 rounded-md">  
          <button className="bg-[#FFB701] text-black font-semibold px-2 py-5 rounded-md">
            Let's do this
          </button>
        </div> 

        {/* Mobile Menu Button */}
        <div className="md:hidden bg-[#5D5E5F] py-2 px-1 rounded-md">
          <button className="bg-[#FFB701] text-black font-semibold p-4 rounded-md" onClick={() => setIsOpen(!isOpen)}>
            <img 
              src="/assets/images/65dddd9f94fe66a19eea5c7b_burger.webp" 
              alt="Menu Icon" 
              className="w-4 h-4"
            />
          </button>
        </div>
      </div>
      
      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md rounded-md p-2 absolute top-16 right-4 w-40">
          {navLinks.map((link) => (
            <a 
              key={link.href} 
              href={link.href} 
              className="block text-black py-2 px-4 rounded-md hover:bg-gray-200"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <button 
            className="w-full bg-[#FFB701] text-black font-semibold py-2 px-4 rounded-md mt-2"
            onClick={() => setIsOpen(false)}
          >
            Let's do this
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
