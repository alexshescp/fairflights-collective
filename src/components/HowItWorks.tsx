
import React, { useEffect, useRef, useState, useMemo } from 'react';
import { ClipboardCheck, AlertCircle, Lock, Mail, Cookie, ArrowRight } from 'lucide-react';
import { useI18n } from '@/lib/i18n';

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

  const { translations } = useI18n();
  const howItWorks = translations.howItWorks;
  const steps = useMemo(
    () =>
      howItWorks.steps.map((step, index) => ({
        icon: [ClipboardCheck, AlertCircle, Lock, Mail, Cookie][index],
        title: step.title,
        description: step.description,
        delay: `delay-${(index + 1) * 100}`
      })),
    [howItWorks.steps]
  );

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
            {howItWorks.badge}
          </div>
          <h2 className={`heading-2 mb-4 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            {howItWorks.title}
          </h2>
          <p className={`subtitle transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            {howItWorks.description}
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
              {howItWorks.cta}
              <ArrowRight size={18} className="ml-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
