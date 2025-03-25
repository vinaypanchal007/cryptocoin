import { useState } from "react";
import { Menu, X } from "lucide-react";
import { FaGlobeAmericas } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
        <Link to="/" className="text-xl font-bold text-blue-600">coinbase</Link>
        <div className="hidden md:flex space-x-6">
          <Link 
            to="/Cryptocurrencies"
            className="relative text-gray-700 hover:text-blue-600 transition 
                      after:content-[''] after:absolute after:left-0 after:bottom-[-4px] 
                      after:w-full after:h-[2px] after:bg-blue-600 after:scale-x-0 
                      hover:after:scale-x-100 after:transition-transform after:duration-300"
          >
            Cryptocurrencies
          </Link>
          <Link 
            to="/News"
            className="relative text-gray-700 hover:text-blue-600 transition 
                      after:content-[''] after:absolute after:left-0 after:bottom-[-4px] 
                      after:w-full after:h-[2px] after:bg-blue-600 after:scale-x-0 
                      hover:after:scale-x-100 after:transition-transform after:duration-300"
          >
            News
          </Link>
          <Link 
            to="/Learn" 
            className="relative text-gray-700 hover:text-blue-600 transition 
                      after:content-[''] after:absolute after:left-0 after:bottom-[-4px] 
                      after:w-full after:h-[2px] after:bg-blue-600 after:scale-x-0 
                      hover:after:scale-x-100 after:transition-transform after:duration-300"
          >
            Learn
          </Link>
          <Link
            to="/Individuals" 
            className="relative text-gray-700 hover:text-blue-600 transition 
                      after:content-[''] after:absolute after:left-0 after:bottom-[-4px] 
                      after:w-full after:h-[2px] after:bg-blue-600 after:scale-x-0 
                      hover:after:scale-x-100 after:transition-transform after:duration-300"
          >
            Individuals
          </Link>
          <Link 
            to="/Businesses" 
            className="relative text-gray-700 hover:text-blue-600 transition 
                      after:content-[''] after:absolute after:left-0 after:bottom-[-4px] 
                      after:w-full after:h-[2px] after:bg-blue-600 after:scale-x-0 
                      hover:after:scale-x-100 after:transition-transform after:duration-300"
          >
            Businesses
          </Link>
          <Link 
            to="/Developers" 
            className="relative text-gray-700 hover:text-blue-600 transition 
                      after:content-[''] after:absolute after:left-0 after:bottom-[-4px] 
                      after:w-full after:h-[2px] after:bg-blue-600 after:scale-x-0 
                      hover:after:scale-x-100 after:transition-transform after:duration-300"
          >
            Developers
          </Link>
          <Link 
            to="/Company"
            className="relative text-gray-700 hover:text-blue-600 transition 
                      after:content-[''] after:absolute after:left-0 after:bottom-[-4px] 
                      after:w-full after:h-[2px] after:bg-blue-600 after:scale-x-0 
                      hover:after:scale-x-100 after:transition-transform after:duration-300"
          >
            Company
          </Link>
        </div>
        
        <div className="hidden md:flex space-x-2">
          <button className="px-3 text-gray-700 bg-gray-100 rounded-full hover:bg-gray-200"><FaGlobeAmericas /></button>
          <button className="px-4 py-2 text-gray-700 bg-gray-100 rounded-full hover:bg-gray-200">Sign in</button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-800">Sign up</button>
        </div>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <Link to="/Cryptocurrencies" className="block py-2 px-4 text-gray-700 hover:bg-gray-100">Cryptocurrencies</Link>
          <Link to="/Learn" href="#" className="block py-2 px-4 text-gray-700 hover:bg-gray-100">Learn</Link>
          <Link to="/Individuals" href="#" className="block py-2 px-4 text-gray-700 hover:bg-gray-100">Individuals</Link>
          <Link to="/Businesses" className="block py-2 px-4 text-gray-700 hover:bg-gray-100">Businesses</Link>
          <Link to="/Developers" className="block py-2 px-4 text-gray-700 hover:bg-gray-100">Developers</Link>
          <Link to="/Company" className="block py-2 px-4 text-gray-700 hover:bg-gray-100">Company</Link>
          <div className="flex flex-col space-y-2 p-4">
            <button className="py-2 text-gray-700 border rounded-lg hover:bg-gray-100">Sign in</button>
            <button className="py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Sign up</button>
          </div>
        </div>
      )}
    </nav>
  );
}
