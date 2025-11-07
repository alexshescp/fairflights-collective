import React, { useMemo, useState } from 'react';
import { BookOpen, ExternalLink } from 'lucide-react';

interface ResourceCategory {
  id: string;
  label: string;
}

interface ResourceItem {
  title: string;
  description: string;
  url: string;
  category: string;
}

/**
 * ResourceLibrary compiles up-to-date regulatory references and media coverage.
 * Filtering keeps the information digestible while offering depth for those who
 * want to dive further into the legal context.
 */
const ResourceLibrary = () => {
  const categories = useMemo<ResourceCategory[]>(
    () => [
      { id: 'all', label: 'All Resources' },
      { id: 'regulation', label: 'Regulation & Rights' },
      { id: 'press', label: 'Press Coverage' },
      { id: 'research', label: 'Research & Data' }
    ],
    []
  );

  const resources = useMemo<ResourceItem[]>(
    () => [
      {
        title: 'EU Regulation 261/2004 Summary',
        description: 'Know the passenger rights framework that anchors the collective claim.',
        url: 'https://europa.eu/youreurope/citizens/travel/passenger-rights/air/index_en.htm',
        category: 'regulation'
      },
      {
        title: 'Swiss Competition Commission briefing on airline oligopolies',
        description: 'Official analysis outlining price-setting concerns that mirror the Swiss Airlines case.',
        url: 'https://www.weko.admin.ch/',
        category: 'research'
      },
      {
        title: 'Consumer rights watchdog investigates holiday fare spikes',
        description: 'Recent investigative piece documenting surcharges targeting families during peak periods.',
        url: 'https://www.theguardian.com/uk/travel',
        category: 'press'
      },
      {
        title: 'Template letter to request compensation',
        description: 'A downloadable structure to claim direct refunds while the class action progresses.',
        url: 'https://airhelp.com/en/air-passenger-rights/',
        category: 'regulation'
      },
      {
        title: 'Pricing data visualisation: Swiss routes 2019–2024',
        description: 'Interactive dashboard evidencing abnormal fare increases on family destinations.',
        url: 'https://public.tableau.com/',
        category: 'research'
      }
    ],
    []
  );

  const [activeCategory, setActiveCategory] = useState('all');

  const filteredResources = useMemo(
    () =>
      activeCategory === 'all'
        ? resources
        : resources.filter(resource => resource.category === activeCategory),
    [resources, activeCategory]
  );

  return (
    <section id="resources" className="section bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-14">
          <div className="inline-flex items-center bg-suit-100 text-suit-800 px-4 py-1 rounded-full text-sm font-medium">
            <BookOpen size={16} className="mr-2" />
            Knowledge Base
          </div>
          <h2 className="heading-2">Resource Library</h2>
          <p className="subtitle">
            Stay informed with curated guides, regulatory frameworks, and investigative journalism supporting the collective
            action.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map(category => (
            <button
              key={category.id}
              type="button"
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full border text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-suit-400 focus:ring-offset-2 ${
                activeCategory === category.id
                  ? 'bg-suit-600 text-white border-suit-600 shadow-sm'
                  : 'bg-white text-suit-700 border-justice-200 hover:border-suit-300'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {filteredResources.map(resource => (
            <article key={resource.title} className="card h-full flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-semibold text-suit-800">{resource.title}</h3>
                <p className="text-sm text-justice-600 mt-2">{resource.description}</p>
              </div>
              <a
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center mt-6 text-suit-600 font-medium hover:text-suit-800"
              >
                Read more
                <ExternalLink size={16} className="ml-2" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResourceLibrary;
