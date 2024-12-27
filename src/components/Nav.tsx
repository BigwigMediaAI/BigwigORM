import { useState, useEffect } from 'react';

function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const features = [
    { name: "Analyze Review Sentiment with AI", id: "feature1" },
    { name: "Craft Ideal Review Responses with AI", id: "feature2" },
    { name: "Translate Reviews and Replies Effortlessly", id: "feature3" },
    { name: "Stay Updated with Instant Review Alerts", id: "feature4" },
    { name: "Identify and Handle Fake Reviews", id: "feature5" },
    { name: "Streamline Responses with Pre-Written Templates", id: "feature6" },
    { name: "Automate Your Review Responses", id: "feature7" },
    { name: "Track and Analyze Reputation Trends", id: "feature8" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScrollToSection = (id:any) => {
    const section = document.getElementById(id);
    if (section) {
      const yOffset = -70; // Adjust this value for the desired offset
      const yPosition = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: yPosition, behavior: "smooth" });
    }
    setIsDropdownOpen(false); // Close dropdown after clicking
    setIsOpen(false)
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-colors duration-300 mb-10 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white'
      }`}
    >
      <div className="flex items-center justify-between p-4 md:px-10 relative">
        <button className="flex items-center space-x-1 ml-5" onClick={() => handleScrollToSection('home')}>
        <span className="text-red-500 text-3xl font-bold">B</span>
        <span className="text-blue-500 text-3xl font-bold">i</span>
        <span className="text-yellow-500 text-3xl font-bold">g</span>
        <span className="text-green-500 text-3xl font-bold">w</span>
        <span className="text-purple-500 text-3xl font-bold">i</span>
        <span className="text-pink-500 text-3xl font-bold">g</span>
        <span className="text-teal-500 text-3xl font-bold">ORM</span>
        </button>

        <button
          className="md:hidden text-gray-600 hover:text-black focus:outline-none z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>

        <div className="hidden md:flex gap-8 space-x-6 text-gray-600">
          <button onClick={() => handleScrollToSection('home')} className="hover:text-black font-bold">
            Home
          </button>
          <div
  className="relative"
  onMouseEnter={() => setIsDropdownOpen(true)}
  onMouseLeave={() => setIsDropdownOpen(false)}
>
  {/* Features Button with Dropdown Icon */}
  <button className="hover:text-black flex items-center font-bold">
    Features
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      className="w-4 h-4 ml-1 transition-transform duration-200"
      style={{
        transform: isDropdownOpen ? "rotate(180deg)" : "rotate(0deg)",
      }}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19 9l-7 7-7-7"
      />
    </svg>
  </button>

  {/* Dropdown Menu */}
  {isDropdownOpen && (
    <div className="absolute left-[-100px] bg-white shadow-lg rounded-lg p-4 grid grid-cols-3 gap-4 w-[600px] h-[300px] z-50">
      {features.map((feature, index) => (
        <button
          key={index}
          onClick={() => handleScrollToSection(feature.id)}
          className="text-gray-600 hover:text-black text-sm font-bold"
        >
          {feature.name}
        </button>
      ))}
    </div>
  )}
</div>
          <button onClick={() => handleScrollToSection('about')} className="hover:text-black font-bold">
            About Us
          </button>
          
          <button onClick={() => handleScrollToSection('Blog')} className="hover:text-black font-bold">
            Blog
          </button>
          <button
            onClick={() => window.open('/team', '_blank')}
            className="hover:text-black font-bold"
          >
            Team
          </button>
        </div>
        

        <div className="md:block hidden">
          <button
            onClick={() => handleScrollToSection('faq')}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded focus:outline-none"
          >
            FAQ
          </button>
        </div>
      </div>

      {/* Overlay for Darkening/Blur Effect */}
    {isOpen && (
      <div className="fixed inset-0 top-20 right-0 bg-black bg-opacity-70 z-40" /> // z-40 ensures overlay is behind the dropdown
    )}

      {isOpen && (
        <div className="absolute top-14 right-0 bg-white shadow-lg rounded-md p-4 flex flex-col space-y-4 z-50 h-[30vh] w-full max-w-md">
          <button onClick={() => handleScrollToSection('home')} className="hover:text-black">
            Home
          </button>
          <button onClick={() => handleScrollToSection('features')} className="hover:text-black">
            Features
          </button>
          <button onClick={() => handleScrollToSection('about')} className="hover:text-black">
            About Us
          </button>
          {/* <button onClick={() => handleScrollToSection('pricing')} className="hover:text-black">
            Pricing
          </button> */}
          <button
            onClick={() => window.open('/team', '_blank')}
            className="hover:text-black"
          >
            Team
          </button>

          <button
            onClick={() => handleScrollToSection('faq')}
            className="w-1/2 mx-auto block text-center bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg focus:outline-none text-lg sm:text-xl shadow-md"
          >
            FAQ
          </button>
        </div>
      )}
    </nav>
  );
}

export default Nav;
