
import React, { useEffect, useRef, useState } from 'react';
import { ShieldCheck } from 'lucide-react';
import { useI18n } from '@/lib/i18n';

const WhoWeAre = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const { translations } = useI18n();
  const whoWeAre = translations.whoWeAre;

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
              <span>{whoWeAre.badge}</span>
            </div>
            <h2 className="heading-2 mb-6 text-white">{whoWeAre.title}</h2>
            <p className="text-suit-100 mb-6 text-lg">{whoWeAre.description}</p>

            <div className="space-y-4 mb-8">
              <div className="bg-white/10 p-4 rounded-lg">
                <h3 className="font-semibold text-white mb-2">{whoWeAre.missionTitle}</h3>
                <p className="text-suit-200">{whoWeAre.missionDescription}</p>
              </div>

              <div className="bg-white/10 p-4 rounded-lg">
                <h3 className="font-semibold text-white mb-2">{whoWeAre.approachTitle}</h3>
                <p className="text-suit-200">{whoWeAre.approachDescription}</p>
              </div>
            </div>

            <a
              href="#join-form"
              className="inline-block bg-white text-suit-800 hover:bg-suit-100 px-6 py-3 rounded-lg font-medium transition-colors"
            >
              {whoWeAre.cta}
            </a>
          </div>

          <div className={`transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
            <div className="glass-dark rounded-2xl overflow-hidden">
              <div className="p-8">
                <h3 className="text-xl font-bold mb-6 text-white text-center">Our Track Record</h3>

                <div className="space-y-6">
                  {whoWeAre.stats.map(stat => (
                    <div key={stat.title} className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left">
                      <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mb-4 sm:mb-0 sm:mr-4 flex-shrink-0">
                        <span className="text-2xl font-bold text-white">{stat.value}</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">{stat.title}</h4>
                        <p className="text-suit-200 text-sm">{stat.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-suit-800 p-8">
                <blockquote className="italic text-suit-100 mb-4">{whoWeAre.quote}</blockquote>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-suit-600 rounded-full flex items-center justify-center text-white font-medium mr-3">
                    {whoWeAre.quoteAuthor
                      .split(' ')
                      .map(part => part[0] || '')
                      .join('')
                      .slice(0, 2)
                      .toUpperCase()}
                  </div>
                  <div>
                    <p className="font-medium text-white">{whoWeAre.quoteAuthor}</p>
                    <p className="text-suit-300 text-sm">{whoWeAre.quoteRole}</p>
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
