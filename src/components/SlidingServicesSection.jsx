import { useState, useEffect} from 'react';

const AutoSlider = () => {
    const services = [
      "General Dentistry",
      "Cosmetic Dentistry",
      "Teeth Whitening",
      "Gum Treatment",
      "Root Canal Treatment"
    ];
  
    const duplicatedServices = [...services, ...services];
    const [position, setPosition] = useState(0);
  
    useEffect(() => {
      const slideAnimation = setInterval(() => {
        setPosition((prevPosition) => {
          if (prevPosition <= -50 * services.length) {
            return 0;
          }
          return prevPosition - 0.5; 
        });
      }, 20); 
  
      return () => clearInterval(slideAnimation);
    }, [services.length]);
  
    return (
      <div className="w-full overflow-hidden bg-white py-16">
        <div 
          className="flex whitespace-nowrap"
          style={{
            transform: `translateX(${position}px)`,
            transition: 'transform 0.02s linear'
          }}
        >
          {duplicatedServices.map((service, index) => (
            <div key={index} className="flex items-center">
              <span className="text-xl md:text-2xl font-medium text-gray-800 px-4">
                {service}
              </span>
              <img
                src="/Star 5.png"
                alt="Star separator"
                className="w-6 h-6 object-contain mx-4"
              />
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  const SlidingServicesSection = () => {
    return (
      <section className="w-full bg-white">
        <div className="max-w-7xl mx-auto">
          <AutoSlider />
        </div>
      </section>
    );
  };
  

  export default SlidingServicesSection
  