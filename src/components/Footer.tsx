
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Heart, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" fill="white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                wanderlust
              </span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              We believe travel should feel like coming home to a place you've never been. 
              Let our local experts show you the magic hiding in plain sight.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors group">
                <Facebook size={18} className="text-gray-300 group-hover:text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-accent transition-colors group">
                <Instagram size={18} className="text-gray-300 group-hover:text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Explore</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors hover:translate-x-1 inline-block">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/activities" className="text-gray-300 hover:text-white transition-colors hover:translate-x-1 inline-block">
                  Adventures
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-300 hover:text-white transition-colors hover:translate-x-1 inline-block">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/properties" className="text-gray-300 hover:text-white transition-colors hover:translate-x-1 inline-block">
                  Stay
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Get in Touch</h4>
            <div className="space-y-4">
              <div className="flex items-center group">
                <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center mr-3 group-hover:bg-primary transition-colors">
                  <Phone size={14} className="text-gray-300 group-hover:text-white" />
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center group">
                <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center mr-3 group-hover:bg-primary transition-colors">
                  <MapPin size={14} className="text-gray-300 group-hover:text-white" />
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors">Downtown Adventure Hub</span>
              </div>
              <p className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                hello@wanderlust.com
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Wanderlust Adventures. Made with ❤️ for explorers.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Support</a>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 left-10 w-24 h-24 bg-gradient-to-br from-accent/10 to-primary/10 rounded-full blur-xl"></div>
    </footer>
  );
};

export default Footer;
