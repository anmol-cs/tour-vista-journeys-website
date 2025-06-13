
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Mountain } from 'lucide-react';
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
    <nav className="bg-card/90 backdrop-blur-lg shadow-lg sticky top-0 z-50 border-b-2 border-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-primary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 rotate-12 group-hover:rotate-0">
              <Mountain className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-2xl font-black text-primary tracking-tight">
              AdventureVibes
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`px-6 py-3 rounded-2xl text-sm font-bold transition-all duration-300 transform hover:scale-105 ${
                  isActive(item.path) 
                    ? 'bg-primary text-primary-foreground shadow-lg' 
                    : 'text-primary hover:bg-primary/10 hover:text-primary'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="outline" 
              size="sm" 
              className="rounded-2xl border-2 border-primary/30 text-primary font-bold hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              Help
            </Button>
            <Button 
              size="sm" 
              className="rounded-2xl bg-accent text-accent-foreground font-bold hover:bg-accent/90 fun-button shadow-lg"
            >
              Start Adventure
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="rounded-2xl p-2"
            >
              {isMenuOpen ? <X size={24} className="text-primary" /> : <Menu size={24} className="text-primary" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-6 border-t border-primary/20 animate-fade-in outdoor-decoration">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`px-6 py-4 rounded-2xl text-sm font-bold transition-colors ${
                    isActive(item.path) 
                      ? 'bg-primary text-primary-foreground' 
                      : 'text-primary hover:bg-primary/10'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col space-y-3 pt-4">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="rounded-2xl border-2 border-primary/30 text-primary font-bold justify-start"
                >
                  Help
                </Button>
                <Button 
                  size="sm" 
                  className="rounded-2xl bg-accent text-accent-foreground font-bold"
                >
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
