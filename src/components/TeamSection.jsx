


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
      <div className="relative pb-32 pt-14">
        <div className="absolute top-0 left-0 right-0 h-1/2 bg-black" />
        
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
                <div className="bg-white rounded-lg overflow-hidden mb-4">
                  <div className="aspect-w-3 aspect-h-4">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
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
  

  
  export default TeamSection;