
import React, { useEffect, useRef, useState } from 'react';
import { Check, ShieldCheck, Users, DollarSign } from 'lucide-react';
import { useI18n } from '@/lib/i18n';

const WhyJoin = () => {
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
  const whyJoin = translations.whyJoin;
  const benefits = [
    { icon: DollarSign, ...whyJoin.benefits[0], delay: 'delay-100' },
    { icon: ShieldCheck, ...whyJoin.benefits[1], delay: 'delay-200' },
    { icon: Users, ...whyJoin.benefits[2], delay: 'delay-300' }
  ];

  return (
    <section 
      id="why-join" 
      ref={sectionRef}
      className="section bg-justice-50 relative overflow-hidden"
    >
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-suit-300 filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-suit-200 filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className={`inline-block bg-suit-100 text-suit-800 px-4 py-1 rounded-full text-sm font-medium mb-4 transition-all duration-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            {whyJoin.badge}
          </div>
          <h2 className={`heading-2 mb-4 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            {whyJoin.title}
          </h2>
          <p className={`subtitle transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            {whyJoin.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className={`card card-hover transition-all duration-700 ${benefit.delay} ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-suit-100 text-suit-700 mb-6">
                  <benefit.icon size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-justice-600">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div id="compensation" className="mt-24 bg-white rounded-2xl shadow-sm border border-justice-100 p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className={`transition-all duration-700 delay-400 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}>
              <div className="inline-block bg-suit-100 text-suit-800 px-4 py-1 rounded-full text-sm font-medium mb-4">
                {whyJoin.compensation.badge}
              </div>
              <h3 className="heading-3 mb-6">{whyJoin.compensation.title}</h3>
              <p className="text-justice-600 mb-8">{whyJoin.compensation.description}</p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-suit-100 flex items-center justify-center mr-4 mt-0.5">
                    <Check size={16} className="text-suit-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">{whyJoin.compensation.items[0].amount}</h4>
                    <p className="text-sm text-justice-600">{whyJoin.compensation.items[0].description}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-suit-100 flex items-center justify-center mr-4 mt-0.5">
                    <Check size={16} className="text-suit-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">{whyJoin.compensation.items[1].amount}</h4>
                    <p className="text-sm text-justice-600">{whyJoin.compensation.items[1].description}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className={`bg-justice-50 rounded-xl p-8 transition-all duration-700 delay-500 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}>
              <h3 className="text-xl font-semibold mb-4">{whyJoin.compensation.factsTitle}</h3>

              <div className="space-y-4">
                {whyJoin.compensation.facts.map((fact, index) => (
                  <div key={fact.title} className="flex items-start bg-white p-4 rounded-lg shadow-sm">
                    <div className="text-3xl font-bold text-suit-600 mr-4">{index + 1}</div>
                    <div>
                      <h4 className="font-medium">{fact.title}</h4>
                      <p className="text-sm text-justice-600">{fact.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyJoin;
