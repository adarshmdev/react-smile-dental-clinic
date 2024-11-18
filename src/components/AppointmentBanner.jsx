import React from 'react';

const AppointmentBanner = () => {
  return (
    <div className="relative w-full bg-orange-500 py-16 overflow-hidden">
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.15) 1px, transparent 1px),
                           linear-gradient(to bottom, rgba(255, 255, 255, 0.15) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
          transform: "perspective(1000px) rotateX(45deg)",
          transformOrigin: "center top",
          opacity: 0.5
        }}
      />
      
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between relative">
          <div className="md:w-1/2 z-10">
            <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Book an Appointment With Your Doctor NOW!
            </h2>
            <p className="text-white text-base sm:text-lg mb-8">
              Conveniently pay for your dental treatments with your insurance.
              <br className="hidden sm:block" />
              We accept major insurance providers.
            </p>
            <button className="bg-black hover:bg-gray-800 text-white px-6 sm:px-8 py-3 rounded transition-colors duration-200">
              Book Now
            </button>
          </div>
          
          <div className="md:w-1/2 relative h-64 sm:h-80 md:h-96 mt-8 md:-mt-32 w-full">
            <img
              src="young-man-using-phone-while-standing-against-white-background-removebg-preview 1.png"
              alt="Medical professional"
              className="absolute right-0 h-full w-auto object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;