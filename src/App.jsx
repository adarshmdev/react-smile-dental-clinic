


import React from 'react';
import { Phone, MessageCircleMore } from 'lucide-react';

const Header = () => (
  <header className="fixed top-0 left-0 right-0 bg-white z-50 py-4 px-6 flex justify-between items-center shadow-sm">
    <div className="flex items-center">
      <img src="/logo.svg" alt="Smile Essentials" className="h-12" />
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

const FloatingElements = () => (
  <>
    <div className="fixed left-6 top-1/3 z-40">
      <div className="bg-white p-4 rounded-xl shadow-lg">
        <div className="flex items-center gap-2">
          <img src="Group 3.png" alt="Google" className="w-6" />
          <span className="text-lg font-semibold">4.8</span>
        </div>
        <div className="flex text-yellow-400 text-sm">★★★★★</div>
        <div className="text-xs text-gray-500 mt-1">See all our reviews</div>
      </div>
    </div>
    <div className="fixed right-6 top-1/2 flex flex-col gap-4 z-40">
      <div className="w-12 h-12 rounded-full border-2 border-green-500 flex items-center justify-center">
        <div className="w-6 h-6">
          <img src="/phone-icon.svg" alt="Call" className="w-full h-full" />
        </div>
      </div>
      <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">
        <div className="w-6 h-6">
          <img src="/whatsapp-icon.svg" alt="WhatsApp" className="w-full h-full" />
        </div>
      </div>
    </div>
  </>
);

const HeroBanner = () => (
  <div className="relative pt-20 bg-gradient-to-r from-white to-gray-200">
    <div className="container mx-auto px-6 py-16 flex items-center justify-between">
      <div className="w-1/2">
        <div className="text-5xl font-bold leading-tight">
          Have a shining
        </div>
        <div className="text-5xl font-bold leading-tight">
          smile with our
        </div>
        <div className="text-5xl font-bold leading-tight text-orange-500">
          modern methods!
        </div>
      </div>
      <div className="w-64 bg-gradient-to-r from-gray-100 to-gray-100 rounded-xl py-6 px-3 border-2 border-white">
        <div className="text-orange-500 mb-4">
          <span className="text-xl font-bold">15+</span>
          <span className="text-base font-normal"> Expert Doctors</span>
        </div>
        <div className="flex -space-x-2 mb-4">
          <img
            src="Mask group.png"
            alt="Doctor"
            className="w-10 h-10 rounded-full border-2 border-white"
          />
          <img
            src="Mask group (1).png"
            alt="Doctor"
            className="w-10 h-10 rounded-full border-2 border-white"
          />
          <img
            src="Mask group (2).png"
            alt="Doctor"
            className="w-10 h-10 rounded-full border-2 border-white"
          />
        </div>
        <p className="text-black text-sm leading-tight">
          <span className="block font-light">We take meticulous care of</span>
          <span className="block font-light">your dental needs</span>
          <span className="block font-light">
            to ensure a healthy, lasting smile.
          </span>
        </p>
      </div>
    </div>
  </div>
);

const StatsBanner = () => (
  <div className="relative">
    <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-black" />
    <div className="container mx-auto px-6 relative">
      <div className="bg-white rounded-xl p-8 shadow-lg">
        <div className="grid grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-orange-500 text-3xl font-bold flex items-center justify-center gap-2">
              <img src="/tooth-icon.svg" alt="" className="w-8 h-8" />
              20+ Yrs
            </div>
            <div className="text-gray-600">Dental Care</div>
          </div>
          <div className="text-center">
            <div className="text-orange-500 text-3xl font-bold flex items-center justify-center gap-2">
              <img src="/review-icon.svg" alt="" className="w-8 h-8" />
              2200+
            </div>
            <div className="text-gray-600">Google Reviews</div>
          </div>
          <div className="text-center">
            <div className="text-orange-500 text-3xl font-bold flex items-center justify-center gap-2">
              <img src="/patients-icon.svg" alt="" className="w-8 h-8" />
              50K+
            </div>
            <div className="text-gray-600">Happy Patients</div>
          </div>
          <div className="text-center">
            <div className="text-orange-500 text-3xl font-bold flex items-center justify-center gap-2">
              <img src="/dentist-icon.svg" alt="" className="w-8 h-8" />
              15+
            </div>
            <div className="text-gray-600">Dentists</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);



const ServicesSection = () => {
  const services = [
    {
      icon: '_Layer_.png',
      title: 'Orthodontics'
    },
    {
      icon: 'Layer_1.png',
      title: 'General\nDentistry'
    },
    {
      icon: 'Group.png',
      title: 'Cosmetic\nDentistry'
    },
    {
      icon: 'Objects.png',
      title: 'Teeth\nWhitening'
    },
    {
      icon: 'Layer_1 (1).png',
      title: 'Gum\nTreatment'
    },
    {
      icon: 'puruanstock_82.png',
      title: 'Root Canal\nTreatment'
    },
    {
      icon: 'Layer_1 (2).png',
      title: 'Crowns and\nBridges'
    },
    {
      icon: 'Layer_1 (3).png',
      title: 'Jaw Joint\nDisorder'
    },
    {
      icon: '_Ã²Ã¥ÃªÃ±Ã².png',
      title: 'Children\'s\nDentistry'
    }
  ];

  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Transform your smile with<br />
            veneers, whitening, and implants.
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experience comprehensive dental care with our range of specialized services,
            delivered by experienced professionals in a comfortable environment.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
  {services.map((service, index) => (
    <div
      key={index}
      className="bg-orange-50/80 p-8 rounded-lg text-center hover:bg-orange-50 transition-colors duration-300"
    >
      <div className="mb-4">
        <img
          src={service.icon}
          alt={service.title}
          className="w-[18] h-16 mx-auto" // Increase size of the icons
        />
      </div>
      <h3 className="font-semibold text-gray-900 whitespace-pre-line text-sm">
        {service.title}
      </h3>
    </div>
  ))}
</div>

      </div>
    </div>
  );
};


const TeamSection = () => {
  const teamMembers = [
    {
      name: "Dr. Jhon Paul",
      role: "General Dentist",
      image: "Frame 1321315036.png"
    },
    {
      name: "Dr. Khaled Abul",
      role: "Children's Dentist",
      image: "Frame 1321315037.png"
    },
    {
      name: "Dr. Marwan Serhal",
      role: "Children's Dentist",
      image: "Frame 1321315038.png"
    },
    {
      name: "Dr. Chinchu Mathew",
      role: "Children's Dentist",
      image: "Frame 1321315039.png"
    }
  ];

  return (
    <div className="relative pb-32">
      {/* Background split - now black on top, white on bottom */}
      <div className="absolute top-0 left-0 right-0 h-1/2 bg-slate-900" />
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-3">Meet Our Team</h2>
          <p className="text-gray-400 text-sm max-w-2xl mx-auto">
            Lorem ipsum available, but the majority have suffered alteration in some form,
            by injected humour, or randomised words which don't look even
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col">
              {/* Image Card */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md mb-4">
                <div className="aspect-w-3 aspect-h-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              {/* Doctor Details - Outside Card */}
              <div className="text-center">
                <h3 className="text-lg font-semibold text-slate-900 mb-1">{member.name}</h3>
                <p className="text-gray-600 text-sm">{member.role}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-md font-medium">
            View All Team
          </button>
        </div>
      </div>
    </div>
  );
};




const OfferCard = ({ title, price, features, imageSrc }) => {
  return (
    <div className="bg-white rounded-3xl p-6 flex flex-col items-center text-center max-w-md mx-auto shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] hover:shadow-[0_2px_15px_-3px_rgba(0,0,0,0.1),0_10px_20px_-2px_rgba(0,0,0,0.06)] transition-shadow duration-300 relative h-[800px]">
      {/* Image section - fixed height */}
      <div className="w-full h-[200px] mb-6">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>

      {/* Title section - fixed height */}
      <div className="h-[80px] flex items-center justify-center">
        <h3 className="text-2xl font-medium">
          {title}
        </h3>
      </div>

      {/* Price section - fixed height */}
      <div className="h-[100px] flex items-center justify-center">
        <div className="text-5xl font-bold text-orange-500">
          {price} <span className="text-orange-500">AED</span>
        </div>
      </div>

      {/* Features section - fixed height with scrolling if needed */}
      <div className="w-full h-[300px] overflow-y-auto">
        {features.map((feature, index) => (
          <div key={index}>
            <p className="text-gray-500 py-4">{feature}</p>
            <div className="border-b border-gray-200"></div>
          </div>
        ))}
      </div>

      {/* Button section - fixed at bottom */}
      <div className="w-full absolute bottom-6 left-0 px-6">
        <button className="w-full bg-gray-900 text-white py-3 px-6 rounded-xl font-medium hover:bg-gray-800 transition-colors">
          MAKE AN APPOINTMENT
        </button>
      </div>
    </div>
  );
};

const MonthlyOffersSection = () => {
  const offers = [
    {
      title: "Cleaning Polishing, Teeth Whitening and Comprehensive Consultation",
      price: "599",
      imageSrc: "Frame 1321315061.png",
      features: [
        "Flash Tooth Whitening System for 1 Hour",
        "Deep Cleaning and Polishing",
        "Full Mouth Treatment Plan Included"
      ]
    },
    {
      title: "Orthodontic Braces",
      price: "2499",
      imageSrc: "Frame 1321315061 (1).png",
      features: [
        "American Association of Orthodontist Member",
        "Align Your Complete Teeth in 6-12 Months",
        "Complimentary Teeth Cleaning During Orthodontic Treatment"
      ]
    },
    {
      title: "Premium Quality Hollywood Smile 20 Teeth",
      price: "14000",
      imageSrc: "Frame 1321315061 (2).png",
      features: [
        "German Quality Super Thin Veneers",
        "Painless and Delivered in 5 Days in 2 Sessions",
        "German Trained Cosmetic Dentist Who Delivered More than 2000 Smiles"
      ]
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Exclusive Monthly Dental Offers
          </h2>
          <p className="text-gray-600">
            Unlock your smile's potential with our exclusive dental offers for this month
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offers.map((offer, index) => (
            <OfferCard key={index} {...offer} />
          ))}
        </div>
      </div>
    </section>
  );
};



const App = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <FloatingElements />
      <HeroBanner />
      <StatsBanner />
      <ServicesSection />
      <TeamSection />
      <MonthlyOffersSection />
    </div>
  );
};

export default App;