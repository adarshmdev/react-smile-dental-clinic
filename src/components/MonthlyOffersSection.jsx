


const OfferCard = ({ title, price, features, imageSrc }) => {
    return (
      <div className="bg-white rounded-3xl p-6 flex flex-col items-center text-center max-w-md mx-auto shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] hover:shadow-[0_2px_15px_-3px_rgba(0,0,0,0.1),0_10px_20px_-2px_rgba(0,0,0,0.06)] transition-shadow duration-300 relative h-[800px]">
        <div className="w-full h-[200px] mb-6">
          <img
            src={imageSrc}
            alt={title}
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
  
        <div className="h-[80px] flex items-center justify-center">
          <h3 className="text-2xl font-medium">
            {title}
          </h3>
        </div>
  
        <div className="h-[100px] flex items-center justify-center">
          <div className="text-5xl font-bold text-orange-500">
            {price} <span className="text-orange-500">AED</span>
          </div>
        </div>
  
        <div className="w-full h-[300px] overflow-y-auto">
          {features.map((feature, index) => (
            <div key={index}>
              <p className="text-gray-500 py-4">{feature}</p>
              <div className="border-b border-gray-200"></div>
            </div>
          ))}
        </div>
  
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
          <div className="mb-12 flex items-center justify-between">
            <div className="flex flex-col text-left">
              <h2 className="text-4xl font-bold">
                Exclusive
              </h2>
              <h2 className="text-4xl font-bold">
                Monthly Dental Offers
              </h2>
            </div>
  
            <div className="flex flex-col text-right max-w-xl">
              <p className="text-gray-600">
                Unlock your smile's potential with our exclusive
              </p>
              <p className="text-gray-600">
                dental offers for this month
              </p>
            </div>
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
  

  export default MonthlyOffersSection