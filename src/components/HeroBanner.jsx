


const HeroBanner = () => (
    <div className="relative pt-28 pb-64 bg-gradient-to-r from-white to-gray-200 h-[600px]"> 
      <div className="container mx-auto px-6 py-16 flex items-center justify-between h-full">
        <div className="w-1/2 z-10 relative"> 
          <div className="text-6xl font-bold leading-tight">
            Have a shining
          </div>
          <div className="text-6xl font-bold leading-tight">
            smile with our
          </div>
          <div className="text-6xl font-bold leading-tight text-orange-500">
            modern methods!
          </div>
        </div>
        <img
          src="/young-caucasian-blonde-female-closing-her-eyes-crossing-fingers-with-hope-anticipating-important-news-beautiful-woman-with-hopeful-expression-gesturing-with-fingers-showing-white-teeth 2.png"
          alt="Woman smiling"
          className="w-3/4 h-auto object-contain absolute right-0 top-[64%] -translate-y-1/2"
        />
        <div className="w-56 bg-gradient-to-r from-gray-100 to-gray-300 rounded-xl py-4 px-3 border-2 border-white relative z-10 mt-[-30px]"> {/* Moved up */}
          <div className="text-orange-500 mb-3">
            <span className="text-xl font-bold">15+</span>
            <span className="text-base font-atyp-display"> Expert Doctors</span>
          </div>
          <div className="flex space-x-3 mb-3"> 
            <img
              src="Mask group.png"
              alt="Doctor"
              className="w-12 h-12 rounded-full" 
            />
            <img
              src="Mask group (1).png"
              alt="Doctor"
              className="w-12 h-12 rounded-full" 
            />
            <img
              src="Mask group (2).png"
              alt="Doctor"
              className="w-12 h-12 rounded-full"  
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

  export default HeroBanner