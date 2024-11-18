import { useState, useEffect} from 'react';
import { Phone } from 'lucide-react';



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
              <div className="w-full lg:w-2/5">
                <div className="relative rounded-lg overflow-hidden">
                  <img 
                    src={testimonials[currentSlide].image}
                    alt="Dental clinic" 
                    className="w-full h-[400px] object-cover rounded-lg"
                  />
                </div>
              </div>
    
              <div className="w-full lg:w-3/5 text-white pt-8">
                <h2 className="text-4xl lg:text-5xl font-bold mb-16 leading-tight">
                  {testimonials[currentSlide].heading}
                </h2>
              </div>
    
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
  
export default TestimonialsSection  