import { useState } from "react";
import { MapPin, Search, User, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-white shadow-sm py-3 px-4 md:px-8 relative z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Left Section - Logo + Links */}
        <div className="flex items-center space-x-6 md:space-x-10">
          <Link to="/" className="flex items-center">
            <Logo />
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6 lg:space-x-8">
            <Link
              to="/explore-land"
              className="text-sm font-medium hover:text-green-600 transition-colors"
            >
              Explore Land
            </Link>
            <Link
              to="/search-by-state"
              className="text-sm font-medium hover:text-green-600 transition-colors"
            >
              Search By State
            </Link>
            <Link
              to="/find-agent"
              className="text-sm font-medium hover:text-green-600 transition-colors"
            >
              Find An Agent
            </Link>
            <Link
              to="/activities"
              className="text-sm font-medium hover:text-green-600 transition-colors"
            >
              Activities
            </Link>
          </div>
        </div>

        {/* Right Section - Search + Buttons */}
        <div className="flex items-center space-x-3">
          {/* Search Bar (hidden on small screens) */}
          <div className="hidden lg:flex items-center bg-gray-100 rounded-full px-3 py-1">
            <Search className="w-4 h-4 text-gray-500" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent outline-none px-2 py-1 text-sm text-gray-700"
            />
          </div>

          {/* Desktop Buttons */}
          <Link
            to="/add-listing"
            className="hidden md:block bg-green-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-green-700 transition-colors"
          >
            Add Listing
          </Link>
          <Link
            to="/login"
            className="hidden md:block border border-gray-300 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-50 transition-colors"
          >
            Sign In
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-600"
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg z-40 py-4 px-4 border-t border-gray-100 animate-slide-down">
          <div className="flex flex-col space-y-3">
            <Link
              to="/explore-land"
              className="text-sm font-medium py-2 hover:text-green-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Explore Land
            </Link>
            <Link
              to="/search-by-state"
              className="text-sm font-medium py-2 hover:text-green-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Search By State
            </Link>
            <Link
              to="/find-agent"
              className="text-sm font-medium py-2 hover:text-green-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Find An Agent
            </Link>
            <Link
              to="/activities"
              className="text-sm font-medium py-2 hover:text-green-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Activities
            </Link>

            {/* Search (Mobile) */}
            <div className="flex items-center bg-gray-100 rounded-md px-3 py-2 mt-2">
              <Search className="w-4 h-4 text-gray-500" />
              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent outline-none px-2 text-sm text-gray-700 w-full"
              />
            </div>

            {/* Auth Actions */}
            <div className="pt-3 border-t border-gray-200">
              <Link
                to="/login"
                className="block w-full text-center border border-gray-300 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-50 transition-colors mb-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign In
              </Link>
              <Link
                to="/add-listing"
                className="block w-full text-center bg-green-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-green-700 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Add Listing
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
