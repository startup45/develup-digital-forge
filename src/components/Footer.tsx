
import React from "react";
import { Link } from "react-router-dom";
import { 
  Twitter, 
  Facebook, 
  Instagram, 
  Linkedin, 
  Github 
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-develup-darker pt-16 pb-6 border-t border-white/10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1 - Company Info */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4">
              <span className="text-gradient">Develupers</span>
            </h3>
            <p className="text-gray-400 mb-4">
              From Idea to Impact – We Develup. A remote-first tech company delivering innovative solutions for businesses worldwide.
            </p>
            <div className="flex space-x-4">
              <a href="https://twitter.com" className="text-white/60 hover:text-develup-blue transition-colors">
                <Twitter size={18} />
              </a>
              <a href="https://facebook.com" className="text-white/60 hover:text-develup-blue transition-colors">
                <Facebook size={18} />
              </a>
              <a href="https://instagram.com" className="text-white/60 hover:text-develup-blue transition-colors">
                <Instagram size={18} />
              </a>
              <a href="https://linkedin.com" className="text-white/60 hover:text-develup-blue transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="https://github.com" className="text-white/60 hover:text-develup-blue transition-colors">
                <Github size={18} />
              </a>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-400 hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - Services */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services#web" className="text-gray-400 hover:text-white transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link to="/services#app" className="text-gray-400 hover:text-white transition-colors">
                  App Development
                </Link>
              </li>
              <li>
                <Link to="/services#software" className="text-gray-400 hover:text-white transition-colors">
                  Software Development
                </Link>
              </li>
              <li>
                <Link to="/services#cyber" className="text-gray-400 hover:text-white transition-colors">
                  Cybersecurity
                </Link>
              </li>
              <li>
                <Link to="/services#data" className="text-gray-400 hover:text-white transition-colors">
                  Data Analytics
                </Link>
              </li>
              <li>
                <Link to="/services#design" className="text-gray-400 hover:text-white transition-colors">
                  UI/UX Design
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Get in Touch</h3>
            <Link to="/quote" className="inline-block bg-develup-blue hover:bg-develup-blue/80 text-white py-2 px-4 rounded transition-colors mb-4">
              Get a Quote
            </Link>
            <p className="text-gray-400">
              Have questions? Email us at:<br />
              <a href="mailto:contact@develupers.com" className="text-develup-mint hover:underline">
                contact@develupers.com
              </a>
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Develupers. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/terms" className="text-gray-500 text-sm hover:text-gray-300 transition-colors">
              Terms
            </Link>
            <Link to="/privacy" className="text-gray-500 text-sm hover:text-gray-300 transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
