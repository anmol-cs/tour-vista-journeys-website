
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Explore', path: '/' },
    { name: 'Adventures', path: '/activities' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Stay', path: '/properties' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <Heart className="w-4 h-4 text-white" fill="white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              wanderlust
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  isActive(item.path) 
                    ? 'bg-gray-100 text-gray-900' 
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-3">
            <Button variant="ghost" size="sm" className="rounded-full">
              Help
            </Button>
            <Button size="sm" className="rounded-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90">
              Start Adventure
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="rounded-full"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100 animate-fade-in">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                    isActive(item.path) ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="ghost" size="sm" className="rounded-full justify-start">
                  Help
                </Button>
                <Button size="sm" className="rounded-full bg-gradient-to-r from-primary to-accent">
                  Start Adventure
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
