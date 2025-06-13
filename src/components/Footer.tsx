
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Mountain, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground relative overflow-hidden outdoor-decoration">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-12 h-12 bg-accent rounded-3xl flex items-center justify-center rotate-12">
                <Mountain className="w-6 h-6 text-accent-foreground" />
              </div>
              <span className="text-3xl font-black text-primary-foreground">
                AdventureVibes
              </span>
            </div>
            <p className="text-primary-foreground/80 mb-8 max-w-md leading-relaxed text-lg font-medium">
              We're all about showing you the coolest, wildest, and most amazing spots around! 
              Our local adventure guides know all the secret places that'll blow your mind.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-12 h-12 bg-primary-foreground/10 rounded-2xl flex items-center justify-center hover:bg-accent transition-colors group">
                <Facebook size={20} className="text-primary-foreground/70 group-hover:text-accent-foreground" />
              </a>
              <a href="#" className="w-12 h-12 bg-primary-foreground/10 rounded-2xl flex items-center justify-center hover:bg-accent transition-colors group">
                <Instagram size={20} className="text-primary-foreground/70 group-hover:text-accent-foreground" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-black mb-8 text-primary-foreground">Quick Links</h4>
            <ul className="space-y-4">
              <li>
                <Link to="/" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors hover:translate-x-2 inline-block font-medium">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/activities" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors hover:translate-x-2 inline-block font-medium">
                  Adventures
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors hover:translate-x-2 inline-block font-medium">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/properties" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors hover:translate-x-2 inline-block font-medium">
                  Stay
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-black mb-8 text-primary-foreground">Let's Connect!</h4>
            <div className="space-y-6">
              <div className="flex items-center group">
                <div className="w-10 h-10 bg-primary-foreground/10 rounded-2xl flex items-center justify-center mr-4 group-hover:bg-accent transition-colors">
                  <Phone size={16} className="text-primary-foreground/70 group-hover:text-accent-foreground" />
                </div>
                <span className="text-primary-foreground/70 group-hover:text-primary-foreground transition-colors font-medium">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center group">
                <div className="w-10 h-10 bg-primary-foreground/10 rounded-2xl flex items-center justify-center mr-4 group-hover:bg-accent transition-colors">
                  <MapPin size={16} className="text-primary-foreground/70 group-hover:text-accent-foreground" />
                </div>
                <span className="text-primary-foreground/70 group-hover:text-primary-foreground transition-colors font-medium">Adventure HQ Downtown</span>
              </div>
              <p className="text-primary-foreground/70 hover:text-primary-foreground transition-colors cursor-pointer font-medium">
                hello@adventurevibes.com
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-16 pt-12 flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-foreground/60 font-medium">
            © 2024 AdventureVibes. Made with 🏔️ for wild souls.
          </p>
          <div className="flex space-x-8 mt-6 md:mt-0">
            <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground font-medium transition-colors">Privacy</a>
            <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground font-medium transition-colors">Terms</a>
            <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground font-medium transition-colors">Support</a>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-accent/20 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-10 left-10 w-24 h-24 bg-accent/10 rounded-full blur-xl animate-bounce-gentle"></div>
    </footer>
  );
};

export default Footer;
