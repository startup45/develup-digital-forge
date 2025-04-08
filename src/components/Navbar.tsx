
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-develup-darker/80 backdrop-blur-md py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold flex items-center">
          <span className="text-gradient">Develupers</span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-white/80 hover:text-white transition-colors">
            Home
          </Link>
          <Link to="/services" className="text-white/80 hover:text-white transition-colors">
            Services
          </Link>
          <Link to="/careers" className="text-white/80 hover:text-white transition-colors">
            Careers
          </Link>
          <Link to="/about" className="text-white/80 hover:text-white transition-colors">
            About Us
          </Link>
          <Link to="/contact" className="text-white/80 hover:text-white transition-colors">
            Contact
          </Link>
          <Button className="bg-develup-blue hover:bg-develup-blue/80 text-white">
            Get a Quote
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed top-[72px] left-0 w-full h-screen bg-develup-darker z-40 flex flex-col">
          <div className="container mx-auto py-8 flex flex-col space-y-6">
            <Link 
              to="/" 
              className="text-white text-xl py-2" 
              onClick={toggleMobileMenu}
            >
              Home
            </Link>
            <Link 
              to="/services" 
              className="text-white text-xl py-2" 
              onClick={toggleMobileMenu}
            >
              Services
            </Link>
            <Link 
              to="/careers" 
              className="text-white text-xl py-2" 
              onClick={toggleMobileMenu}
            >
              Careers
            </Link>
            <Link 
              to="/about" 
              className="text-white text-xl py-2" 
              onClick={toggleMobileMenu}
            >
              About Us
            </Link>
            <Link 
              to="/contact" 
              className="text-white text-xl py-2" 
              onClick={toggleMobileMenu}
            >
              Contact
            </Link>
            <Button className="bg-develup-blue hover:bg-develup-blue/80 text-white w-full mt-4">
              Get a Quote
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
