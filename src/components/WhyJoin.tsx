
import React, { useEffect, useRef, useState } from 'react';
import { Check, ShieldCheck, LucideShield, Users, DollarSign } from 'lucide-react';

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

  const benefits = [
    {
      icon: DollarSign,
      title: "Secure Compensation",
      description: "Get financial compensation for the inconvenience and losses you suffered.",
      delay: "delay-100"
    },
    {
      icon: ShieldCheck,
      title: "Push for Policy Changes",
      description: "Help create systematic changes in the airline industry to prevent future unfair practices.",
      delay: "delay-200"
    },
    {
      icon: Users,
      title: "Strength in Numbers",
      description: "Join forces with other affected passengers to amplify your voice and legal standing.",
      delay: "delay-300"
    }
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
            Benefits
          </div>
          <h2 className={`heading-2 mb-4 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            Why Join the Class-Action Lawsuit?
          </h2>
          <p className={`subtitle transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            Swiss Airlines operates in an oligopolistic market, often engaging in unfair practices that harm passengers. 
            By joining forces, we can make a real difference.
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
                Estimated Compensation
              </div>
              <h3 className="heading-3 mb-6">What You Could Receive</h3>
              <p className="text-justice-600 mb-8">
                The potential compensation per participant varies based on your specific situation and the extent of 
                damages you experienced. Here's what you might expect:
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-suit-100 flex items-center justify-center mr-4 mt-0.5">
                    <Check size={16} className="text-suit-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">€500</h4>
                    <p className="text-sm text-justice-600">
                      Base compensation if you were a passenger with Swiss Airlines within the past two years and experienced any of the mentioned issues.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-suit-100 flex items-center justify-center mr-4 mt-0.5">
                    <Check size={16} className="text-suit-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Up to €10,000</h4>
                    <p className="text-sm text-justice-600">
                      Higher compensation is possible if you've already had a direct dispute with the airline, with documented evidence of the unfair practices.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className={`bg-justice-50 rounded-xl p-8 transition-all duration-700 delay-500 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}>
              <h3 className="text-xl font-semibold mb-4">Key Facts About Your Claim</h3>
              
              <div className="space-y-4">
                <div className="flex items-start bg-white p-4 rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-suit-600 mr-4">1</div>
                  <div>
                    <h4 className="font-medium">Two-Year Window</h4>
                    <p className="text-sm text-justice-600">
                      If you flew with Swiss Airlines in the past two years, you may be eligible.
                    </p>
                  </div>
                </div>

                <div className="flex items-start bg-white p-4 rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-suit-600 mr-4">2</div>
                  <div>
                    <h4 className="font-medium">No Upfront Costs</h4>
                    <p className="text-sm text-justice-600">
                      Joining the lawsuit is free - legal fees are only paid if compensation is secured.
                    </p>
                  </div>
                </div>

                <div className="flex items-start bg-white p-4 rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-suit-600 mr-4">3</div>
                  <div>
                    <h4 className="font-medium">Evidence Helps</h4>
                    <p className="text-sm text-justice-600">
                      While not required, any evidence of unfair treatment strengthens your claim.
                    </p>
                  </div>
                </div>

                <div className="flex items-start bg-white p-4 rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-suit-600 mr-4">4</div>
                  <div>
                    <h4 className="font-medium">Group Power</h4>
                    <p className="text-sm text-justice-600">
                      A class-action approach increases the chances of a favorable outcome for all.
                    </p>
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

export default WhyJoin;
