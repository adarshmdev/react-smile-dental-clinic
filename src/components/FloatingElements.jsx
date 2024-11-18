
import GoogleReview from "./GoogleReview";


const FloatingElements = () => {
    const handleCall = () => {
      window.location.href = 'tel:+1234567890'; 
    };
  
    const handleWhatsApp = () => {
      window.open('https://wa.me/1234567890', '_blank');
    };
  
    return (
      <>
        <GoogleReview />
        <div className="fixed right-6 top-1/2 translate-y-16 flex flex-col -space-y-10 z-40">
          <button
            onClick={handleCall}
            className="flex items-center justify-center"
            aria-label="Call us"
          >
            <img 
              src="Frame 1321314940.png" 
              alt="Call" 
              className="w-28 h-28 object-contain"
            />
          </button>
          <button
            onClick={handleWhatsApp}
            className="flex items-center justify-center"
            aria-label="Contact us on WhatsApp"
          >
            <img 
              src="Frame 1321314939.png" 
              alt="WhatsApp" 
              className="w-28 h-28 object-contain"
            />
          </button>
        </div>
      </>
    );
  };


  export default FloatingElements;