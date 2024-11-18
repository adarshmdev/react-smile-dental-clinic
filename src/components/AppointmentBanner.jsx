// import React from 'react';


// const AppointmentBanner = () => {
//     return (
//       <div className="relative w-full bg-orange-500 py-16 overflow-visible mt-48">
//         <div 
//           className="absolute inset-0"
//           style={{
//             backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.15) 1px, transparent 1px),
//                              linear-gradient(to bottom, rgba(255, 255, 255, 0.15) 1px, transparent 1px)`,
//             backgroundSize: "40px 40px",
//             transform: "perspective(1000px) rotateX(60deg) scale(2)",
//             transformOrigin: "50% 0%",
//             backfaceVisibility: "hidden",
//             pointerEvents: "none"
//           }}
//         />
  
//         <div className="container mx-auto px-6">
//           <div className="flex flex-col md:flex-row items-center justify-between relative">
//             <div className="md:w-1/2 z-10">
//               <h2 className="text-white text-4xl md:text-5xl font-bold mb-4 leading-tight">
//                 Book an Appointment With Your Doctor NOW!
//               </h2>
//               <p className="text-white text-lg mb-8">
//                 Conveniently pay for your dental treatments with your insurance.
//                 <br />
//                 We accept major insurance providers.
//               </p>
//               <button className="bg-black hover:bg-gray-800 text-white px-8 py-3 rounded">
//                 Book Now
//               </button>
//             </div>
  
//             <div className="md:w-1/2 relative h-96 -mt-32">
//               <img
//                 src="young-man-using-phone-while-standing-against-white-background-removebg-preview 1.png"
//                 alt="Medical professional"
//                 className="absolute right-0 h-[460px] w-auto object-contain"
//                 style={{
//                   top: "-3%",
//                 }}
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   };
  
  
// export default AppointmentBanner  

import React from 'react';

const AppointmentBanner = () => {
  return (
    <div className="relative w-full mt-48">
      <div className="relative w-full bg-orange-500 py-16 overflow-hidden">
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.15) 1px, transparent 1px), 
                             linear-gradient(to bottom, rgba(255, 255, 255, 0.15) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
            transform: "perspective(1000px) rotateX(60deg) scale(2)",
            transformOrigin: "50% 0%",
            maskImage: "linear-gradient(to bottom, black, black)",
            WebkitMaskImage: "linear-gradient(to bottom, black, black)"
          }}
        />
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between relative">
            <div className="md:w-1/2 z-10">
              <h2 className="text-white text-4xl md:text-5xl font-bold mb-4 leading-tight">
                Book an Appointment With Your Doctor NOW!
              </h2>
              <p className="text-white text-lg mb-8">
                Conveniently pay for your dental treatments with your insurance.
                <br />
                We accept major insurance providers.
              </p>
              <button className="bg-black hover:bg-gray-800 text-white px-8 py-3 rounded">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute right-0 top-0 md:w-1/2 h-96 -mt-32">
        <img
          src="young-man-using-phone-while-standing-against-white-background-removebg-preview 1.png"
          alt="Medical professional"
          className="absolute right-0 h-[460px] w-auto object-contain"
          style={{ top: "11.5%" }}
        />
      </div>
    </div>
  );
};

export default AppointmentBanner;