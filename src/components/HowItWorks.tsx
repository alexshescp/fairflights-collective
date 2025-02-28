
import React, { useEffect, useRef, useState } from 'react';
import { 
  ClipboardCheck, 
  AlertCircle, 
  Lock, 
  Mail, 
  Cookie,
  ArrowRight
} from 'lucide-react';

const HowItWorks = () => {
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

  const steps = [
    {
      icon: ClipboardCheck,
      title: "Fill Out the Participation Form",
      description: "Provide basic details about your travel experience with Swiss Airlines.",
      delay: "delay-100"
    },
    {
      icon: AlertCircle,
      title: "Indicate If You Were Directly Affected",
      description: "If applicable, additional fields will appear requesting specific incident details.",
      delay: "delay-200"
    },
    {
      icon: Lock,
      title: "Consent to Data Processing",
      description: "Agree to the use of personal data for legal action purposes only.",
      delay: "delay-300"
    },
    {
      icon: Mail,
      title: "Email Verification",
      description: "Confirm your participation via a verification code sent to your email.",
      delay: "delay-400"
    },
    {
      icon: Cookie,
      title: "Cookie Notice",
      description: "A notification regarding cookie usage will appear before registration is complete.",
      delay: "delay-500"
    }
  ];

  return (
    <section 
      id="how-it-works" 
      ref={sectionRef}
      className="section bg-white relative"
    >
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className={`inline-block bg-suit-100 text-suit-800 px-4 py-1 rounded-full text-sm font-medium mb-4 transition-all duration-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            Process
          </div>
          <h2 className={`heading-2 mb-4 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            How It Works
          </h2>
          <p className={`subtitle transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            Joining the class-action lawsuit is a straightforward process. Follow these steps to 
            become part of our collective effort against unfair airline practices.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute left-8 top-10 bottom-10 w-0.5 bg-suit-200 hidden md:block"></div>
            
            {/* Steps */}
            {steps.map((step, index) => (
              <div 
                key={index}
                className={`flex flex-col md:flex-row items-start mb-12 last:mb-0 transition-all duration-700 ${step.delay} ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-suit-100 flex items-center justify-center text-suit-700 mb-4 md:mb-0 md:mr-6 z-10">
                  <step.icon size={28} />
                </div>
                <div className="md:pt-2">
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-justice-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className={`mt-16 text-center transition-all duration-700 delay-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <a 
              href="#join-form" 
              className="inline-flex items-center btn btn-primary"
            >
              Start the Process Now
              <ArrowRight size={18} className="ml-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
