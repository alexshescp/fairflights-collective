
import React, { useEffect, useRef, useState } from 'react';
import { ShieldCheck } from 'lucide-react';

const WhoWeAre = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="section bg-suit-900 text-white relative overflow-hidden"
    >
      {/* Background pattern */}
      <div 
        className="absolute inset-0 z-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}>
            <div className="inline-flex items-center space-x-2 bg-white/10 px-4 py-1 rounded-full text-white text-sm font-medium mb-6">
              <ShieldCheck size={16} />
              <span>Public Legal Initiative</span>
            </div>
            <h2 className="heading-2 mb-6 text-white">Who We Are</h2>
            <p className="text-suit-100 mb-6 text-lg">
              The FairFlights Collective represents a public legal initiative aimed at protecting 
              consumer rights and challenging unfair airline practices. We believe that even large 
              corporations must be held accountable when they violate consumer rights.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="bg-white/10 p-4 rounded-lg">
                <h3 className="font-semibold text-white mb-2">Our Mission</h3>
                <p className="text-suit-200">
                  To advocate for fair treatment of airline passengers and establish precedents that 
                  discourage discriminatory and deceptive practices in the industry.
                </p>
              </div>
              
              <div className="bg-white/10 p-4 rounded-lg">
                <h3 className="font-semibold text-white mb-2">Our Legal Approach</h3>
                <p className="text-suit-200">
                  We work with experienced consumer rights attorneys specialized in aviation law to 
                  build strong class-action cases that benefit all affected passengers.
                </p>
              </div>
            </div>
            
            <a 
              href="#join-form" 
              className="inline-block bg-white text-suit-800 hover:bg-suit-100 px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Join Our Collective Effort
            </a>
          </div>
          
          <div className={`transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
            <div className="glass-dark rounded-2xl overflow-hidden">
              <div className="p-8">
                <h3 className="text-xl font-bold mb-6 text-white text-center">Our Track Record</h3>
                
                <div className="space-y-6">
                  <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left">
                    <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mb-4 sm:mb-0 sm:mr-4 flex-shrink-0">
                      <span className="text-2xl font-bold text-white">93%</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Success Rate</h4>
                      <p className="text-suit-200 text-sm">
                        Our previous class-action cases have resulted in favorable outcomes for participants.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left">
                    <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mb-4 sm:mb-0 sm:mr-4 flex-shrink-0">
                      <span className="text-2xl font-bold text-white">€5M+</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Compensation Secured</h4>
                      <p className="text-suit-200 text-sm">
                        Total amount recovered for consumers in similar legal actions against airlines.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left">
                    <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mb-4 sm:mb-0 sm:mr-4 flex-shrink-0">
                      <span className="text-2xl font-bold text-white">12K+</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Participants Represented</h4>
                      <p className="text-suit-200 text-sm">
                        Number of consumers we've helped in previous class-action lawsuits.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-suit-800 p-8">
                <blockquote className="italic text-suit-100 mb-4">
                  "The collective's legal team was extremely professional and effective. 
                  They secured compensation for me when the airline refused to acknowledge their mistake."
                </blockquote>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-suit-600 rounded-full flex items-center justify-center text-white font-medium mr-3">
                    MS
                  </div>
                  <div>
                    <p className="font-medium text-white">Martin S.</p>
                    <p className="text-suit-300 text-sm">Previous class-action participant</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
