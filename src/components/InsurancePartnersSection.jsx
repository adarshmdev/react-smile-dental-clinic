


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
  
export default InsurancePartnersSection  