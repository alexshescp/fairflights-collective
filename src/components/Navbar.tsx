
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-3 glass shadow-sm' : 'py-5 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center">
            <span className="text-2xl font-bold text-suit-800">FairFlights</span>
            <span className="ml-1 text-sm font-medium text-suit-600">Collective</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#why-join" className="text-justice-800 hover:text-suit-600 transition-colors">
              Why Join
            </a>
            <a href="#compensation" className="text-justice-800 hover:text-suit-600 transition-colors">
              Compensation
            </a>
            <a href="#how-it-works" className="text-justice-800 hover:text-suit-600 transition-colors">
              How It Works
            </a>
            <a href="#faq" className="text-justice-800 hover:text-suit-600 transition-colors">
              FAQ
            </a>
            <a 
              href="#join-form" 
              className="btn btn-primary animate-pulse"
            >
              Join Now
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-justice-800 focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 glass shadow-md animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a 
              href="#why-join" 
              className="text-justice-800 px-4 py-2 rounded-lg hover:bg-white/50 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Why Join
            </a>
            <a 
              href="#compensation" 
              className="text-justice-800 px-4 py-2 rounded-lg hover:bg-white/50 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Compensation
            </a>
            <a 
              href="#how-it-works" 
              className="text-justice-800 px-4 py-2 rounded-lg hover:bg-white/50 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              How It Works
            </a>
            <a 
              href="#faq" 
              className="text-justice-800 px-4 py-2 rounded-lg hover:bg-white/50 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              FAQ
            </a>
            <a 
              href="#join-form" 
              className="btn btn-primary text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Join Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
