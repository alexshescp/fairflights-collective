
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useI18n } from '@/lib/i18n';
import { Language } from '@/lib/translations';

// The navbar anchors to key sections for quick access on both desktop and mobile.
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { translations, availableLanguages, language, setLanguage } = useI18n();

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
            <span className="text-2xl font-bold text-suit-800">{translations.common.brand.primary}</span>
            <span className="ml-1 text-sm font-medium text-suit-600">{translations.common.brand.secondary}</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <a href="#impact-stories" className="text-justice-800 hover:text-suit-600 transition-colors">
              {translations.navbar.impact}
            </a>
            <a href="#why-join" className="text-justice-800 hover:text-suit-600 transition-colors">
              {translations.navbar.whyJoin}
            </a>
            <a href="#how-it-works" className="text-justice-800 hover:text-suit-600 transition-colors">
              {translations.navbar.process}
            </a>
            <a href="#evidence" className="text-justice-800 hover:text-suit-600 transition-colors">
              {translations.navbar.evidence}
            </a>
            <a href="#timeline" className="text-justice-800 hover:text-suit-600 transition-colors">
              {translations.navbar.timeline}
            </a>
            <a href="#resources" className="text-justice-800 hover:text-suit-600 transition-colors">
              {translations.navbar.resources}
            </a>
            <a href="#faq" className="text-justice-800 hover:text-suit-600 transition-colors">
              {translations.navbar.faq}
            </a>
            <a href="#join-form" className="btn btn-primary animate-pulse">
              {translations.navbar.join}
            </a>
            <label className="flex items-center space-x-2 text-sm text-justice-600">
              <span>{translations.navbar.languageLabel}</span>
              <select
                value={language}
                onChange={event => setLanguage(event.target.value as Language)}
                className="border border-justice-200 rounded-lg px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-suit-400"
              >
                {availableLanguages.map(option => (
                  <option key={option.code} value={option.code}>
                    {option.nativeLabel}
                  </option>
                ))}
              </select>
            </label>
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
              href="#impact-stories"
              className="text-justice-800 px-4 py-2 rounded-lg hover:bg-white/50 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {translations.navbar.impact}
            </a>
            <a
              href="#why-join"
              className="text-justice-800 px-4 py-2 rounded-lg hover:bg-white/50 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {translations.navbar.whyJoin}
            </a>
            <a
              href="#how-it-works"
              className="text-justice-800 px-4 py-2 rounded-lg hover:bg-white/50 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {translations.navbar.process}
            </a>
            <a
              href="#evidence"
              className="text-justice-800 px-4 py-2 rounded-lg hover:bg-white/50 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {translations.navbar.evidence}
            </a>
            <a
              href="#timeline"
              className="text-justice-800 px-4 py-2 rounded-lg hover:bg-white/50 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {translations.navbar.timeline}
            </a>
            <a
              href="#resources"
              className="text-justice-800 px-4 py-2 rounded-lg hover:bg-white/50 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {translations.navbar.resources}
            </a>
            <a
              href="#faq"
              className="text-justice-800 px-4 py-2 rounded-lg hover:bg-white/50 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {translations.navbar.faq}
            </a>
            <a
              href="#join-form"
              className="btn btn-primary text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              {translations.navbar.join}
            </a>
            <div className="flex flex-col space-y-2">
              <span className="text-xs font-medium text-justice-500">{translations.navbar.languageLabel}</span>
              <select
                value={language}
                onChange={event => {
                  setLanguage(event.target.value as Language);
                  setMobileMenuOpen(false);
                }}
                className="border border-justice-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-suit-400"
              >
                {availableLanguages.map(option => (
                  <option key={option.code} value={option.code}>
                    {option.nativeLabel}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
