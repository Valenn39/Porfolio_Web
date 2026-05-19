import { GraduationCap } from 'lucide-react';
import { SectionHeader } from './About';
import { education } from '../data/portfolio';

export default function Education() {
  return (
    <section id="educacion" className="py-24 px-6 bg-slate-50">
      <div className="max-w-3xl mx-auto">
        <SectionHeader label="Educación" title="Formación Académica" />

        <div className="mt-12 relative">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-slate-200" />

          <div className="space-y-8">
            {education.map((e) => (
              <div key={e.title} className="flex gap-6 relative">
                <div className="w-12 h-12 bg-white border-2 border-sky-200 rounded-full flex items-center justify-center flex-shrink-0 z-10 shadow-sm">
                  <GraduationCap size={18} className="text-sky-600" />
                </div>
                <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 flex-1">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h3 className="text-base font-bold text-slate-900 leading-snug">{e.title}</h3>
                    <span
                      className={`text-xs font-semibold px-2.5 py-0.5 rounded-full flex-shrink-0 ${
                        e.status === 'En curso'
                          ? 'bg-emerald-50 text-emerald-700'
                          : 'bg-sky-50 text-sky-700'
                      }`}
                    >
                      {e.status}
                    </span>
                  </div>
                  <p className="text-sm text-slate-500">{e.institution}</p>
                  <span className="inline-block mt-3 text-xs text-slate-400 font-medium bg-slate-50 border border-slate-100 px-2.5 py-0.5 rounded-full">
                    {e.year}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
