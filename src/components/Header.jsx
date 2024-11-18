import React from 'react';


const Header = () => (
    <header className="fixed top-0 left-0 right-0 bg-white z-50 py-4 px-6 flex justify-between items-center shadow-sm font-atyp-display">
      <div className="flex items-center">
        <img src="Layer_1 (4).png" alt="Smile Essentials" className="h-12" />
      </div>
      <nav className="hidden md:flex items-center space-x-4">
        <a href="#" className="text-orange-500">Home</a>
        <span className="w-1.5 h-1.5 bg-black rounded-full"></span>
        <a href="#" className="text-gray-800 hover:text-orange-500">About Us</a>
        <span className="w-1.5 h-1.5 bg-black rounded-full"></span>
        <a href="#" className="text-gray-800 hover:text-orange-500">Services</a>
        <span className="w-1.5 h-1.5 bg-black rounded-full"></span>
        <a href="#" className="text-gray-800 hover:text-orange-500">Gallery</a>
        <span className="w-1.5 h-1.5 bg-black rounded-full"></span>
        <a href="#" className="text-gray-800 hover:text-orange-500">Promotions</a>
        <span className="w-1.5 h-1.5 bg-black rounded-full"></span>
        <a href="#" className="text-gray-800 hover:text-orange-500">Blogs</a>
        <span className="w-1.5 h-1.5 bg-black rounded-full"></span>
        <a href="#" className="text-gray-800 hover:text-orange-500">Contact Us</a>
      </nav>
      <button className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600">
        Appointment
      </button>
    </header>
  );
  

  export default Header;