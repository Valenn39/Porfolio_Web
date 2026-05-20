import { User, Briefcase, GraduationCap } from 'lucide-react';
import { profile } from '../data/portfolio';

const stats = [
  { icon: GraduationCap, value: 'Lic.', label: 'Desarrollo de Software (en curso)' },
  { icon: Briefcase, value: '1+', label: 'Año de pasantía profesional' },
  { icon: User, value: '3', label: 'Proyectos desarrollados' },
];

export default function About() {
  return (
    <section id="sobre-mi" className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <SectionHeader label="Sobre mí" title="Perfil Profesional" />

        <div className="grid md:grid-cols-2 gap-12 items-center mt-12">
          <div>
            <p className="text-slate-600 text-base leading-relaxed mb-6">
              {profile.summary}
            </p>
            <p className="text-slate-600 text-base leading-relaxed">
              Mi foco principal está en crear interfaces de usuario que sean tanto funcionales como
              visualmente atractivas. Me apasiona resolver problemas reales a través del software y
              siempre busco involucrarme en todas las capas del stack.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {stats.map(({ icon: Icon, value, label }) => (
              <div
                key={label}
                className="flex items-center gap-5 bg-slate-50 rounded-xl p-5 border border-slate-100"
              >
                <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon size={22} className="text-sky-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-slate-900">{value}</p>
                  <p className="text-sm text-slate-500">{label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function SectionHeader({ label, title }: { label: string; title: string }) {
  return (
    <div className="text-center">
      <span className="text-xs font-semibold uppercase tracking-widest text-sky-600 bg-sky-50 px-3 py-1 rounded-full">
        {label}
      </span>
      <h2 className="mt-3 text-3xl md:text-4xl font-bold text-slate-900">{title}</h2>
      <div className="mt-4 w-12 h-1 bg-sky-500 rounded-full mx-auto" />
    </div>
  );
}
