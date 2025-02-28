
import React, { useEffect, useState } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background pattern */}
      <div 
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%239C92AC' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        }}
      ></div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 py-16 md:py-24">
        <div className="max-w-5xl mx-auto">
          {/* Tag */}
          <div 
            className={`inline-block bg-suit-100 text-suit-800 px-4 py-1 rounded-full text-sm font-medium mb-6 transition-all duration-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Class-Action Lawsuit
          </div>

          {/* Heading */}
          <h1 
            className={`heading-1 mb-6 bg-gradient-to-r from-justice-950 to-suit-800 bg-clip-text text-transparent transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Join the Lawsuit Against Swiss Airlines
          </h1>

          {/* Subheading */}
          <p 
            className={`subtitle max-w-3xl mb-8 transition-all duration-700 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Swiss Airlines may have violated consumer rights through discriminatory pricing, 
            misinformation, and unfair practices. Together, we can hold them accountable and 
            seek compensation for affected passengers.
          </p>

          {/* CTA Buttons */}
          <div 
            className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <a 
              href="#join-form" 
              className="btn btn-primary text-center"
            >
              Join the Lawsuit
            </a>
            <a 
              href="#how-it-works" 
              className="btn btn-ghost text-center border border-justice-200"
            >
              Learn How It Works
            </a>
          </div>

          {/* Key Points */}
          <div 
            className={`grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 transition-all duration-700 delay-900 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <div className="glass rounded-xl p-6 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
              <div className="text-lg font-semibold mb-2 text-suit-700">Discrimination</div>
              <p className="text-justice-600 text-sm">Discriminatory pricing during school holidays, targeting families with children.</p>
            </div>
            
            <div className="glass rounded-xl p-6 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
              <div className="text-lg font-semibold mb-2 text-suit-700">Misinformation</div>
              <p className="text-justice-600 text-sm">False information provided through customer support channels.</p>
            </div>
            
            <div className="glass rounded-xl p-6 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
              <div className="text-lg font-semibold mb-2 text-suit-700">Unlawful Practices</div>
              <p className="text-justice-600 text-sm">Denial of boarding and selling overpriced tickets while keeping service conditions unchanged.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;
