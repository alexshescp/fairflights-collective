
import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-justice-950 text-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-white">FairFlights</span>
              <span className="ml-1 text-sm font-medium text-justice-400">Collective</span>
            </div>
            <p className="text-justice-300 text-sm max-w-xs">
              A public legal initiative aimed at protecting consumer rights and challenging unfair airline practices.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-justice-300">
              <li>
                <a href="#why-join" className="hover:text-white transition-colors">Why Join</a>
              </li>
              <li>
                <a href="#compensation" className="hover:text-white transition-colors">Compensation</a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
              </li>
              <li>
                <a href="#join-form" className="hover:text-white transition-colors">Join Now</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Legal Information</h4>
            <ul className="space-y-2 text-justice-300">
              <li>
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Legal Disclaimer</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-justice-300">
              <li>Email: info@fairflights.org</li>
              <li>Phone: +41 22 123 4567</li>
              <li>Address: Zurich, Switzerland</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-justice-800 text-justice-400 text-sm flex flex-col md:flex-row justify-between items-center">
          <p>© {year} FairFlights Collective. All rights reserved.</p>
          <p className="mt-4 md:mt-0">
            This is not a government-affiliated website. FairFlights Collective is a legal advocacy group.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
