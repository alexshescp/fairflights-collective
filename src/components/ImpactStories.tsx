import React, { useMemo, useState } from 'react';
import { Quote, Users, Sparkles } from 'lucide-react';

/**
 * ImpactStories shares anonymised passenger testimonials that emphasise the
 * collective power of the lawsuit. The component highlights one story at a time
 * and allows visitors to explore further examples without overwhelming them
 * with text-heavy content.
 */
const ImpactStories = () => {
  // Memoise the stories array to avoid re-creating it on every render.
  const stories = useMemo(
    () => [
      {
        passenger: 'Parent of two from Geneva',
        summary:
          '"Our family tickets doubled in price overnight during the school holidays. Joining the collective is the first time we felt heard."',
        outcome:
          'After submitting evidence of price discrimination, this family was invited to contribute to the legal brief on unfair targeting.'
      },
      {
        passenger: 'Small business owner from Lisbon',
        summary:
          '"Swiss Airlines cancelled my connecting flight and kept the surcharge. I lost a client meeting and hundreds of euros."',
        outcome:
          'The legal team helped structure the financial loss statement that now strengthens the damages claim for international passengers.'
      },
      {
        passenger: 'Student traveller from Berlin',
        summary:
          '"Customer support told me there were no alternatives, but seats were still available online at triple the cost."',
        outcome:
          'Their screenshots now form part of the evidence package demonstrating systematic misinformation across channels.'
      }
    ],
    []
  );

  const [activeStoryIndex, setActiveStoryIndex] = useState(0);
  const activeStory = stories[activeStoryIndex];

  return (
    <section id="impact-stories" className="section bg-gradient-to-b from-white to-justice-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-start gap-12">
          <div className="lg:w-2/5 space-y-6">
            <div className="inline-flex items-center bg-suit-100 text-suit-800 px-4 py-1 rounded-full text-sm font-medium">
              <Users size={16} className="mr-2" />
              Community Voices
            </div>
            <h2 className="heading-2">Real Travellers, Real Impact</h2>
            <p className="subtitle">
              Every experience strengthens the collective case. Explore how participants across Europe are helping expose the
              airline&apos;s unfair practices and broaden the scope of the claim.
            </p>
            <div className="grid grid-cols-1 gap-4">
              {stories.map((story, index) => (
                <button
                  key={story.passenger}
                  type="button"
                  onClick={() => setActiveStoryIndex(index)}
                  className={`text-left p-4 rounded-xl border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-suit-400 focus:ring-offset-2 ${
                    activeStoryIndex === index
                      ? 'border-suit-500 bg-white shadow-md'
                      : 'border-justice-200 bg-white/60 hover:border-suit-300'
                  }`}
                >
                  <p className="font-semibold text-suit-700">{story.passenger}</p>
                  <p className="text-sm text-justice-600 mt-1">{story.summary.replace(/"/g, '')}</p>
                </button>
              ))}
            </div>
          </div>

          <div className="lg:w-3/5 card relative overflow-hidden">
            <Quote size={64} className="absolute -top-6 -left-2 text-suit-100" />
            <div className="relative z-10">
              <p className="text-lg text-justice-700 italic" aria-live="polite">
                {activeStory.summary}
              </p>
              <div className="mt-6 p-5 bg-justice-50 rounded-xl border border-justice-100 flex items-start">
                <Sparkles size={24} className="text-suit-500 mr-3 mt-1" />
                <div>
                  <h3 className="font-semibold text-suit-700">How this story helps the case</h3>
                  <p className="text-justice-600 mt-2">{activeStory.outcome}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactStories;
