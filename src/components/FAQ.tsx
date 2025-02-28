
import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
  delay: string;
  isVisible: boolean;
}

const FAQItem = ({ question, answer, isOpen, onClick, delay, isVisible }: FAQItemProps) => {
  return (
    <div 
      className={`border-b border-justice-200 py-6 transition-all duration-700 ${delay} ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
    >
      <button
        onClick={onClick}
        className="flex w-full justify-between items-center text-left focus:outline-none"
      >
        <h3 className="text-lg font-medium">{question}</h3>
        <div className="flex-shrink-0 ml-4">
          {isOpen ? (
            <ChevronUp className="h-5 w-5 text-suit-600" />
          ) : (
            <ChevronDown className="h-5 w-5 text-justice-600" />
          )}
        </div>
      </button>
      <div 
        className={`mt-3 text-justice-600 overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p>{answer}</p>
      </div>
    </div>
  );
};

const FAQ = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

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

  const faqs = [
    {
      question: "Who is eligible to join the class-action lawsuit?",
      answer: "Anyone who flew with Swiss Airlines within the past two years and experienced any form of discrimination, misinformation, unlawful denial of boarding, or was subject to overpriced tickets while receiving reduced service quality is eligible to join.",
      delay: "delay-100"
    },
    {
      question: "Is there a fee to join the lawsuit?",
      answer: "No, there is no upfront fee to join the lawsuit. Legal fees will only be collected if the case is successful, as a percentage of the compensation awarded.",
      delay: "delay-200"
    },
    {
      question: "How long will the legal process take?",
      answer: "Class-action lawsuits typically take between 1-3 years to resolve. We will keep all participants informed of significant developments throughout the process.",
      delay: "delay-300"
    },
    {
      question: "What kind of evidence do I need to provide?",
      answer: "While any evidence strengthens your claim, it's not mandatory to have documentation. Your booking information, travel dates, and description of the issues faced are sufficient to start. If you have emails, screenshots, or other evidence, you'll be able to upload these later in the process.",
      delay: "delay-400"
    },
    {
      question: "Can I join if I'm not a resident of Switzerland?",
      answer: "Yes, the lawsuit is open to all passengers of Swiss Airlines regardless of nationality or residence. International laws governing air travel allow for claims across borders.",
      delay: "delay-500"
    },
    {
      question: "What happens after I submit my information?",
      answer: "After submitting your information and verifying your email, you'll receive updates about the lawsuit's progress. Our legal team may contact you for additional information if needed. You'll be notified of any settlements or court decisions.",
      delay: "delay-600"
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section 
      id="faq" 
      ref={sectionRef}
      className="section bg-justice-50"
    >
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className={`inline-block bg-suit-100 text-suit-800 px-4 py-1 rounded-full text-sm font-medium mb-4 transition-all duration-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            Questions & Answers
          </div>
          <h2 className={`heading-2 mb-4 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            Frequently Asked Questions
          </h2>
          <p className={`subtitle transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            Find answers to common questions about joining the class-action lawsuit against Swiss Airlines.
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-sm p-6 md:p-8">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => toggleFAQ(index)}
              delay={faq.delay}
              isVisible={isVisible}
            />
          ))}
        </div>

        <div className={`mt-12 text-center transition-all duration-700 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <p className="text-justice-600 mb-4">
            Don't see your question here? Contact us directly:
          </p>
          <a 
            href="mailto:info@fairflights.org" 
            className="text-suit-600 font-medium hover:text-suit-800 transition-colors"
          >
            info@fairflights.org
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
