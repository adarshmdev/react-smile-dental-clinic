


import React from 'react';
import { Phone, MessageCircleMore } from 'lucide-react';
import { useState, useEffect

 } from 'react';

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


const AutoSlider = () => {
  const services = [
    "General Dentistry",
    "Cosmetic Dentistry",
    "Teeth Whitening",
    "Gum Treatment",
    "Root Canal Treatment"
  ];

  // Duplicate the array to create a seamless infinite scroll effect
  const duplicatedServices = [...services, ...services];
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const slideAnimation = setInterval(() => {
      setPosition((prevPosition) => {
        // Reset position when reaching the end of original items
        if (prevPosition <= -50 * services.length) {
          return 0;
        }
        return prevPosition - 0.5; // Adjust speed by changing this value
      });
    }, 20); // Adjust interval for smoother/faster animation

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
        {/* Your other services content can go here */}
        <AutoSlider />
        {/* Other content */}
      </div>
    </section>
  );
};



const TestimonialsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const testimonials = [
    {
      image: "Frame 1321315036 (1).png",
      heading: "500+ Happy clients said to us they are satisfied",
      reviews: [
        {
          name: "Jang Wonyoung",
          country: "Korea",
          content: "We value your feedback and are committed to providing exceptional service to all our clients. If you have any concerns or questions",
          avatar: "Ellipse 6.png"
        },
        {
          name: "Jennie Kim",
          country: "USA",
          content: "Our priority, and we appreciate the opportunity to address any issues and ensure your complete satisfaction.",
          avatar: "Ellipse 7.png"
        }
      ]
    },
    {
      image: "Frame 1321315036 (1).png",
      heading: "Our clients love what we do for them",
      reviews: [
        {
          name: "Lisa Park",
          country: "Korea",
          content: "The service exceeded my expectations. The staff was professional and caring throughout my treatment.",
          avatar: "Ellipse 6.png"
        },
        {
          name: "John Smith",
          country: "USA",
          content: "I've never felt more comfortable at a dental clinic. The team is amazing and the results are outstanding.",
          avatar: "Ellipse 7.png"
        }
      ]
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-[#F37D27] w-full py-16 relative overflow-hidden">
      <div className="container mx-auto px-4 relative">
        <div className="transition-all duration-500 transform">
          <div className="flex flex-col lg:flex-row items-start gap-8 relative">
            {/* Left Section */}
            <div className="w-full lg:w-2/5">
              <div className="relative rounded-lg overflow-hidden">
                <img 
                  src={testimonials[currentSlide].image}
                  alt="Dental clinic" 
                  className="w-full h-[400px] object-cover rounded-lg"
                />
              </div>
            </div>
  
            {/* Right Section */}
            <div className="w-full lg:w-3/5 text-white pt-8">
              <h2 className="text-4xl lg:text-5xl font-bold mb-16 leading-tight">
                {testimonials[currentSlide].heading}
              </h2>
            </div>
  
            {/* Review Cards */}
            <div 
              className="absolute bottom-0 w-full lg:w-[85%] flex gap-6 justify-center translate-x-64 translate-y-12"
            >
              {testimonials[currentSlide].reviews.map((review, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-2xl p-8 text-gray-800 shadow-lg w-[390px] h-[240px] relative"
                >
                  <div className="text-[#F37D27] text-4xl font-serif absolute -top-4 left-4"></div>
                  <p className="text-gray-600 text-sm mt-2 min-h-[80px]">
                    {review.content}
                  </p>
                  <div className="flex items-center gap-3 mt-6">
                    <img 
                      src={review.avatar}
                      alt={review.name}
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <h4 className="font-medium text-sm">{review.name}</h4>
                      <p className="text-gray-500 text-xs">{review.country}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
  
          {/* Centered Slider Dots */}
          <div className="flex gap-3 justify-center mt-32">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentSlide === index 
                    ? 'bg-white w-8' 
                    : 'bg-white/40 w-2'
                }`}
              />
            ))}
          </div>
        </div>
  
        {/* Contact Buttons */}
        <div className="fixed right-6 z-40 space-y-4">
          <div className="w-12 h-12 rounded-full border-2 border-green-500 flex items-center justify-center bg-white">
            <Phone className="w-6 h-6 text-green-500" />
          </div>
          <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">
            <img src="/whatsapp-icon.svg" alt="WhatsApp" className="w-6 h-6" />
          </div>
        </div>
      </div>
    </section>
  );
  
}  



const InsurancePartnersSection = () => {
  const partners = [
    { id: 1, name: "SAICO", image: "Frame 1321314963.png" },
    { id: 2, name: "Nextcare", image: "Frame 1321314967.png" },
    { id: 3, name: "Neuron", image: "Frame 1321314968.png" },
    { id: 4, name: "NGI", image: "Frame 1321314969.png" },
    { id: 5, name: "NAS", image: "Frame 1321314970.png" },
    { id: 6, name: "MSH", image: "Frame 1321314971.png" },
    { id: 7, name: "Mednet", image: "Frame 1321314974.png" },
    { id: 8, name: "Almadallah", image: "Frame 1321314975.png" },
    { id: 9, name: "Sukoon", image: "Frame 1321314976.png" }
  ];

  return (
    <section className="py-16">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Insurance Partners</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Conveniently pay for your dental treatments with your insurance.
            We accept major insurance providers.
          </p>
        </div>

        <div className="flex flex-wrap justify-center">
          <div className="flex flex-wrap w-full justify-center mb-0 [&>img]:m-0">
            {partners.slice(0, 6).map((partner) => (
              <img
                key={partner.id}
                src={partner.image}
                alt={`${partner.name} logo`}
                className="h-[80px] object-contain"
              />
            ))}
          </div>
          <div className="flex w-full [&>img]:m-0">
            <div className="w-[37.33%]"></div>
            <div className="flex">
              {partners.slice(6).map((partner) => (
                <img
                  key={partner.id}
                  src={partner.image}
                  alt={`${partner.name} logo`}
                  className="h-[80px] object-contain"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};



const BlogCard = ({ image, title, description }) => (
  <div className="overflow-hidden">
    <div className="h-48 overflow-hidden">
      <img src={image} alt={title} className="w-full h-full object-cover" />
    </div>
    <div className="pt-6">
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600 mb-4 text-sm">{description}</p>
      <button className="text-gray-800 font-medium hover:text-gray-600 transition-colors duration-300 border-b border-gray-800">
        READ MORE
      </button>
    </div>
  </div>
);

const LatestBlogs = () => {
  const blogs = [
    {
      image: "Frame 1321315104.png",
      title: "Lorem Ipsum available, but the majority have suffered",
      description: "Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even"
    },
    {
      image: "Frame 1321315104 (1).png",
      title: "Lorem Ipsum available, but the majority have suffered",
      description: "Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even"
    },
    {
      image: "Frame 1321315104 (2).png",
      title: "Lorem Ipsum available, but the majority have suffered",
      description: "Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even"
    },
    {
      image: "Frame 1321315104 (3).png",
      title: "Lorem Ipsum available, but the majority have suffered",
      description: "Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-orange-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">See Our Latest Blogs!</h2>
          <button className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600 transition-colors duration-300">
            View All
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogs.map((blog, index) => (
            <BlogCard key={index} {...blog} />
          ))}
        </div>
      </div>
    </section>
  );
};



const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqData = [
    {
      question: "How often should I visit the dentist?",
      answer: "We recommend visiting the dentist at least twice a year for routine check-ups and cleanings. However, your specific needs may require more frequent visits."
    },
    {
      question: "What can I expect during my first visit?",
      answer: "During your first visit, we'll review your medical history, perform a comprehensive oral examination, take necessary X-rays, and create a personalized treatment plan."
    },
    {
      question: "How can I prepare for my dental appointment?",
      answer: "Brush and floss before your appointment, bring your insurance information and medical history, and arrive 15 minutes early to complete any necessary paperwork."
    },
    {
      question: "What should I do in case of a dental emergency?",
      answer: "Contact our emergency dental line immediately. In the meantime, rinse with warm water, apply a cold compress for swelling, and preserve any broken tooth pieces."
    }
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">FAQs</h1>
      
      <div className="space-y-4">
        {faqData.map((item, index) => (
          <div
            key={index}
            className={`rounded-lg transition-all duration-300 ${
              openIndex === index 
                ? 'bg-orange-50 border-transparent' 
                : 'bg-white border border-gray-200'
            }`}
          >
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full flex items-center justify-between p-6 text-left"
            >
              <span className="text-lg font-medium text-gray-900">
                {item.question}
              </span>
              <div
                className={`inline-flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 ${
                  openIndex === index
                    ? 'bg-orange-500 text-white'
                    : 'bg-gray-900 text-white'
                }`}
              >
                <span className="inline-block leading-none" style={{ marginTop: '-2px' }}>
                  {openIndex === index ? '−' : '+'}
                </span>
              </div>
            </button>
            
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'max-h-40' : 'max-h-0'
              }`}
            >
              <p className="px-6 pb-6 text-gray-600">
                {item.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
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
      <SlidingServicesSection />
      <TestimonialsSection />
      <InsurancePartnersSection />
      <LatestBlogs />
      <FAQAccordion />
    </div>
  );
};

export default App;