import { useEffect, useState } from "react";

function Nav2() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full mx-auto z-50 transition-colors duration-300  ${
        isScrolled ? "bg-black shadow-md shadow-gray-400" : "bg-black"
      }`}
    >
      <div className="flex items-center md:w-11/12 justify-between p-4 md:px-16 relative ">
        <div className="flex items-center space-x-1 ml-5">
          <a href="/">
            <span className="text-red-500 text-3xl font-bold">B</span>
            <span className="text-blue-500 text-3xl font-bold">i</span>
            <span className="text-yellow-500 text-3xl font-bold">g</span>
            <span className="text-green-500 text-3xl font-bold">w</span>
            <span className="text-purple-500 text-3xl font-bold">i</span>
            <span className="text-pink-500 text-3xl font-bold">g</span>
            <span className="text-teal-500 text-3xl font-bold">ORM</span>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Nav2;
