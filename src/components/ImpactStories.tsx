import React, { useState, useMemo } from 'react';
import { Quote, Users, Sparkles } from 'lucide-react';
import { useI18n } from '@/lib/i18n';

/**
 * ImpactStories shares anonymised passenger testimonials that emphasise the
 * collective power of the lawsuit. The component highlights one story at a time
 * and allows visitors to explore further examples without overwhelming them
 * with text-heavy content.
 */
const ImpactStories = () => {
  // Memoise the stories array to avoid re-creating it on every render.
  const { translations } = useI18n();
  const impactStories = translations.impactStories;
  const stories = useMemo(() => impactStories.stories, [impactStories.stories]);
  const [activeStoryIndex, setActiveStoryIndex] = useState(0);
  const activeStory = stories[activeStoryIndex];

  return (
    <section id="impact-stories" className="section bg-gradient-to-b from-white to-justice-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-start gap-12">
          <div className="lg:w-2/5 space-y-6">
            <div className="inline-flex items-center bg-suit-100 text-suit-800 px-4 py-1 rounded-full text-sm font-medium">
              <Users size={16} className="mr-2" />
              {impactStories.badge}
            </div>
            <h2 className="heading-2">{impactStories.title}</h2>
            <p className="subtitle">{impactStories.description}</p>
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
                  <h3 className="font-semibold text-suit-700">{impactStories.highlightTitle}</h3>
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
