import { SectionHeader } from './About';
import { skills } from '../data/portfolio';
import { Globe, Wrench, Brain } from 'lucide-react';

const techGroups = [
  { label: 'Lenguajes', items: skills.languages },
  { label: 'Frontend', items: skills.frontend },
  { label: 'Backend', items: skills.backend },
  { label: 'Herramientas', items: skills.tools },
];

const tagColors: Record<string, string> = {
  Python: 'bg-blue-50 text-blue-700 border-blue-100',
  Java: 'bg-orange-50 text-orange-700 border-orange-100',
  C: 'bg-slate-100 text-slate-700 border-slate-200',
  JavaScript: 'bg-yellow-50 text-yellow-700 border-yellow-100',
  TypeScript: 'bg-sky-50 text-sky-700 border-sky-100',
  HTML: 'bg-red-50 text-red-600 border-red-100',
  CSS: 'bg-blue-50 text-blue-600 border-blue-100',
  React: 'bg-cyan-50 text-cyan-700 border-cyan-100',
  NodeJs: 'bg-green-50 text-green-700 border-green-100',
  Git: 'bg-orange-50 text-orange-600 border-orange-100',
  GitHub: 'bg-slate-100 text-slate-800 border-slate-200',
  Windows: 'bg-sky-50 text-sky-600 border-sky-100',
  Linux: 'bg-amber-50 text-amber-700 border-amber-100',
  'Office Suite': 'bg-emerald-50 text-emerald-700 border-emerald-100',
};

function Tag({ label }: { label: string }) {
  const color = tagColors[label] || 'bg-slate-100 text-slate-700 border-slate-200';
  return (
    <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full border ${color}`}>
      {label}
    </span>
  );
}

export default function Skills() {
  return (
    <section id="habilidades" className="py-24 px-6 bg-slate-50">
      <div className="max-w-5xl mx-auto">
        <SectionHeader label="Habilidades" title="Stack Técnico" />

        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
            <h3 className="text-base font-bold text-slate-800 mb-6">Tecnologías</h3>
            <div className="space-y-5">
              {techGroups.map((g) => (
                <div key={g.label}>
                  <p className="text-xs uppercase tracking-widest text-slate-400 mb-2">{g.label}</p>
                  <div className="flex flex-wrap gap-2">
                    {g.items.map((item) => (
                      <Tag key={item} label={item} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm flex-1">
              <div className="flex items-center gap-3 mb-5">
                <Globe size={18} className="text-sky-500" />
                <h3 className="text-base font-bold text-slate-800">Idiomas</h3>
              </div>
              <div className="space-y-3">
                {skills.spoken.map(({ lang, level }) => (
                  <div key={lang} className="flex items-center justify-between">
                    <span className="text-sm text-slate-700 font-medium">{lang}</span>
                    <span className="text-xs bg-slate-100 text-slate-500 px-3 py-0.5 rounded-full">
                      {level}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm flex-1">
              <div className="flex items-center gap-3 mb-4">
                <Brain size={18} className="text-sky-500" />
                <h3 className="text-base font-bold text-slate-800">Inteligencia Artificial</h3>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">{skills.ai}</p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm flex-1">
              <div className="flex items-center gap-3 mb-4">
                <Wrench size={18} className="text-sky-500" />
                <h3 className="text-base font-bold text-slate-800">Hardware</h3>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Reparación, limpieza y armado de equipos de computación. Instalación de sistemas
                operativos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
