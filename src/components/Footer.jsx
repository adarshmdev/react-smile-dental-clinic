


const Footer = () => {
    return (
      <>
        <div className="h-16" />
        
        <footer className="bg-black text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div>
                <div className="mb-6">
                  <img 
                    src="/Layer_1 (5).png" 
                    alt="Smile Essentials Dental Clinic" 
                    className="h-10"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-4">Get In Touch</h3>
                <div className="space-y-2 text-sm">
                  <p className="font-medium">Contact Number</p>
                  <div className="flex items-center space-x-2 mb-2">
                    <p>+971 4 2979464</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <p>+971 56 4848613</p>
                  </div>
                  <p className="font-medium mt-3">Email</p>
                  <p>info@smiledentaldubai.com</p>
                </div>
                <div className="flex space-x-4 mt-4">
                  <a href="#" className="hover:opacity-80 transition-opacity">
                    <img src="/_Facebook.png" alt="Facebook" className="w-5 h-5" />
                  </a>
                  <a href="#" className="hover:opacity-80 transition-opacity">
                    <img src="/_Instagram.png" alt="Instagram" className="w-5 h-5" />
                  </a>
                  <a href="#" className="hover:opacity-80 transition-opacity">
                    <img src="/_Linkedin.png" alt="LinkedIn" className="w-5 h-5" />
                  </a>
                  <a href="#" className="hover:opacity-80 transition-opacity">
                    <img src="/_WhatsApp.png" alt="WhatsApp" className="w-5 h-5" />
                  </a>
                  <a href="tel:+97142979464" className="hover:opacity-80 transition-opacity">
                    <img src="/calling.png" alt="Call" className="w-5 h-5" />
                  </a>
                </div>
              </div>
  
              <div>
                <div className="mb-6 h-10" />
                <h3 className="text-xl font-semibold mb-4">Our Address</h3>
                <div className="text-sm space-y-2">
                  <p>Room No: 314 Al Attar Shopping Mall</p>
                  <p>Next to Karama Center,Al Karama,</p>
                  <p>P.O.Box: 125706, Dubai, UAE</p>
                </div>
                <div className="mt-4">
                  <h4 className="text-lg font-semibold mb-3">Location Map</h4>
                  <div className="rounded-lg overflow-hidden">
                    <img 
                      src="/Frame 1321314987.png"
                      alt="Location Map"
                      className="w-full h-32 object-cover"
                    />
                  </div>
                </div>
              </div>
  
              <div>
                <div className="mb-6 h-10" />
                <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="#" className="hover:text-orange-400 transition-colors">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-orange-400 transition-colors">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-orange-400 transition-colors">
                      Services
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-orange-400 transition-colors">
                      Gallery
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-orange-400 transition-colors">
                      Blogs
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-orange-400 transition-colors">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
  
              <div>
                <div className="mb-6 h-10" />
                <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="#" className="hover:text-orange-400 transition-colors">
                      Children's Dentistry
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-orange-400 transition-colors">
                      General Dentistry
                    </a>
                  </li>
                </ul>
                <div className="mt-6">
                  <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                  <div className="text-sm">
                    <div className="flex items-center space-x-2">
                      <svg 
                        className="w-4 h-4 text-orange-400" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" 
                        />
                      </svg>
                      <span>Open all 7 days</span>
                    </div>
                    <p className="mt-1">9:00 AM to 9:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-800">
            <div className="container mx-auto px-4 py-4">
              <p className="text-xs text-gray-400 text-center">
                ©copyright all reserved by Smile Essentials - Powered by Hoztox Technologies
              </p>
            </div>
          </div>
        </footer>
      </>
    );
  };
  export default Footer