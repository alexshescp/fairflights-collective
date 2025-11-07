import React, { useEffect, useRef, useState } from 'react';
import { Calendar, Scale, Send } from 'lucide-react';

interface TimelineEvent {
  title: string;
  date: string;
  description: string;
  status: 'completed' | 'active' | 'upcoming';
}

/**
 * LegalTimeline outlines the coordinated roadmap of the collective claim.
 * The subtle animation draws attention to the next milestone while honouring
 * accessibility requirements by relying on semantic content rather than motion.
 */
const LegalTimeline = () => {
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

    return () => observer.disconnect();
  }, []);

  const events: TimelineEvent[] = [
    {
      title: 'Evidence Consolidation',
      date: 'February – April 2024',
      description:
        'Collecting testimonies, pricing data, and correspondence to demonstrate systemic unfair practices.',
      status: 'completed'
    },
    {
      title: 'Regulatory Complaints Filed',
      date: 'May 2024',
      description:
        'Formal complaints submitted to EU consumer protection bodies and aviation authorities across key hubs.',
      status: 'completed'
    },
    {
      title: 'Class Certification Motion',
      date: 'July 2024',
      description:
        'Lead counsel will request certification in Swiss courts, unlocking broader discovery rights.',
      status: 'active'
    },
    {
      title: 'Settlement Negotiations Window',
      date: 'Autumn 2024',
      description:
        'If the airline opts to negotiate, participants will vote on settlement terms before final approval.',
      status: 'upcoming'
    },
    {
      title: 'Court Hearings',
      date: 'Early 2025',
      description:
        'Should negotiations fail, the case proceeds to hearings with expert testimony on consumer damages.',
      status: 'upcoming'
    }
  ];

  const getStatusStyles = (status: TimelineEvent['status']) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 border-green-200 text-green-700';
      case 'active':
        return 'bg-suit-100 border-suit-200 text-suit-700';
      default:
        return 'bg-justice-50 border-justice-200 text-justice-600';
    }
  };

  return (
    <section
      id="timeline"
      ref={sectionRef}
      className="section bg-justice-50"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center bg-suit-100 text-suit-800 px-4 py-1 rounded-full text-sm font-medium">
            <Calendar size={16} className="mr-2" />
            Legal Roadmap
          </div>
          <h2 className="heading-2">Key Milestones Ahead</h2>
          <p className="subtitle">
            Transparency is essential for trust. Track the progress of the lawsuit and understand when major decisions will be
            made.
          </p>
        </div>

        <ol className="relative border-l border-justice-200 max-w-3xl mx-auto">
          {events.map((event, index) => (
            <li
              key={event.title}
              className={`ml-6 mb-12 last:mb-0 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <span className="absolute -left-3 flex h-6 w-6 items-center justify-center">
                <span className={`h-3 w-3 rounded-full ${event.status === 'completed' ? 'bg-green-500' : event.status === 'active' ? 'bg-suit-500' : 'bg-justice-300'}`}></span>
              </span>
              <div className={`rounded-2xl border p-6 bg-white ${getStatusStyles(event.status)}`}>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                  <h3 className="text-lg font-semibold text-suit-800">{event.title}</h3>
                  <span className="text-sm font-medium text-justice-500">{event.date}</span>
                </div>
                <p className="text-sm text-justice-700">{event.description}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className={`mt-16 max-w-3xl mx-auto card text-center transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
        >
          <div className="flex items-center justify-center mb-4">
            <Scale size={24} className="text-suit-600 mr-2" />
            <span className="font-semibold text-suit-700">Want regular updates?</span>
          </div>
          <p className="text-justice-600 mb-6">
            Subscribe to the litigation briefings and receive monthly summaries of regulatory filings, negotiation outcomes, and
            participant actions.
          </p>
          <a href="#newsletter" className="btn btn-primary inline-flex items-center justify-center">
            <Send size={18} className="mr-2" />
            Get the briefing
          </a>
        </div>
      </div>
    </section>
  );
};

export default LegalTimeline;
