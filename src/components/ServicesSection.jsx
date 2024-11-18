


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
        <div className="container mx-auto px-4 py-16 pt-32">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Transform your smile with<br />
              veneers, whitening, and implants.
            </h2>
            <p className="text-gray-600 max-w-2xl font-poppins">
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
                    className="w-[18] h-16 mx-auto"
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
  
  export default ServicesSection;