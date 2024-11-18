

import React from 'react';


const GoogleReview = () => {
    return (
      <div className="fixed left-6 top-[80%] z-40">
        <div className="relative bg-white rounded-lg shadow-md overflow-hidden w-[250px] h-[90px]"> 
          <div className="absolute top-0 left-0 w-full h-1 bg-green-600"></div>
          
          <div className="p-3">
            <div className="flex items-start gap-3">
              <img src="Group 3.png" alt="Google" className="w-10 h-10 mt-4" /> 
  
              <div className="flex flex-col">
                <span className="text-gray-600 font-medium text-sm">Google Rating</span>
                <div className="flex items-center gap-2">
                  <span className="text-[#F5B401] text-xl font-medium">4.8</span>
                  <div className="flex text-[#F5B401]">
                    {'★★★★'.split('').map((star, i) => (
                      <span key={i} className="text-lg">{star}</span> 
                    ))}
                    <span className="text-lg opacity-50">★</span>
                  </div>
                </div>
                <a href="#" className="text-gray-500 hover:underline mt-1 text-xs">
                  See all our reviews
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  

  export default GoogleReview