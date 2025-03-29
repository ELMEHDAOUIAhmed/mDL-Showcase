import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Code2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showSolutionsDropdown, setShowSolutionsDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'glass-effect py-2' : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <Code2 className="w-8 h-8 text-transparent bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text" />

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="nav-link"
            >
              Home
            </button>
            
            {/* Solutions Dropdown */}
            <div className="relative group">
              <button
                className="nav-link flex items-center gap-1 group"
                onClick={() => setShowSolutionsDropdown(!showSolutionsDropdown)}
              >
                Solutions <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
              </button>
              <div
                className="absolute top-full left-0 mt-2 w-48 glass-effect rounded-lg overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0"
              >
                <Link
                  to="/mdl_holder"
                  className="block px-4 py-2 text-gray-300 hover:bg-blue-500/20 hover:text-white transition-colors"
                >
                  MDL Holder
                </Link>
                <Link
                  to="/mdl_verifier"
                  className="block px-4 py-2 text-gray-300 hover:bg-blue-500/20 hover:text-white transition-colors"
                >
                  MDL Verifier
                </Link>
              </div>
            </div>

            <button
              onClick={() => scrollToSection('apps')}
              className="nav-link"
            >
              Apps
            </button>
            <button
              onClick={() => scrollToSection('tech')}
              className="nav-link"
            >
              Tech
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 hover:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 glass-effect rounded-lg p-4">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('home')}
                className="nav-link"
              >
                Home
              </button>
              <Link
                to="/mdl_holder"
                className="nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                MDL Holder
              </Link>
              <Link
                to="/mdl_verifier"
                className="nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                MDL Verifier
              </Link>
              <button
                onClick={() => scrollToSection('apps')}
                className="nav-link"
              >
                Apps
              </button>
              <button
                onClick={() => scrollToSection('tech')}
                className="nav-link"
              >
                Tech
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;