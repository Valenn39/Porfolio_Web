import { Briefcase } from 'lucide-react';
import { SectionHeader } from './About';
import { experience } from '../data/portfolio';

export default function Experience() {
  return (
    <section id="experiencia" className="py-24 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <SectionHeader label="Experiencia" title="Experiencia Laboral" />

        <div className="mt-12 space-y-6">
          {experience.map((e) => (
            <div
              key={e.role}
              className="flex gap-5 bg-slate-50 border border-slate-100 rounded-2xl p-6 hover:border-sky-200 hover:shadow-sm transition-all duration-200"
            >
              <div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <Briefcase size={18} className="text-sky-600" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                  <h3 className="text-base font-bold text-slate-900">{e.role}</h3>
                  <span className="text-xs font-semibold bg-sky-50 text-sky-700 px-2.5 py-0.5 rounded-full flex-shrink-0">
                    {e.duration}
                  </span>
                </div>
                <p className="text-sm font-medium text-sky-600 mb-2">{e.company}</p>
                <p className="text-sm text-slate-500 leading-relaxed">{e.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
