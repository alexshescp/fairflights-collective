import React, { useMemo, useState } from 'react';
import { CheckCircle2, Info } from 'lucide-react';
import { useI18n } from '@/lib/i18n';

interface EvidenceItem {
  id: string;
  label: string;
  description: string;
}

/**
 * EvidenceChecklist offers an interactive preparation step before users fill in
 * the participation form. Travellers can track which documentation they have
 * ready and immediately understand why it matters for the legal team.
 */
const EvidenceChecklist = () => {
  const { translations } = useI18n();
  const checklist = translations.evidenceChecklist;
  const items = useMemo<EvidenceItem[]>(() => checklist.items, [checklist.items]);

  const [selected, setSelected] = useState<Record<string, boolean>>({});

  const toggleItem = (id: string) => {
    setSelected(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const completedCount = useMemo(
    () => Object.values(selected).filter(Boolean).length,
    [selected]
  );

  return (
    <section id="evidence" className="section bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-suit-100 text-suit-800 px-4 py-1 rounded-full text-sm font-medium">
              <Info size={16} className="mr-2" />
              {checklist.badge}
            </div>
            <h2 className="heading-2">{checklist.title}</h2>
            <p className="subtitle">{checklist.description}</p>
          </div>

          <div className="bg-justice-50 border border-justice-100 rounded-2xl p-8">
            <div className="grid gap-6 md:grid-cols-2">
              {items.map(item => {
                const isChecked = Boolean(selected[item.id]);
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => toggleItem(item.id)}
                    className={`text-left p-5 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-suit-400 focus:ring-offset-2 ${
                      isChecked ? 'bg-white shadow-md border border-suit-200' : 'bg-white/60 border border-transparent hover:bg-white'
                    }`}
                  >
                    <div className="flex items-start">
                      <CheckCircle2
                        size={24}
                        className={`mr-3 mt-0.5 ${isChecked ? 'text-suit-500' : 'text-justice-400'}`}
                      />
                      <div>
                        <p className="font-semibold text-suit-700">{item.label}</p>
                        <p className="text-sm text-justice-600 mt-1">{item.description}</p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="mt-8 text-center">
              <p className="text-sm font-medium text-suit-700">
                {checklist.progressTemplate
                  .replace('{{completed}}', completedCount.toString())
                  .replace('{{total}}', items.length.toString())}
              </p>
              <p className="text-xs text-justice-500 mt-2">{checklist.helper}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EvidenceChecklist;
