import { ExternalLink, Github, FolderOpen } from 'lucide-react';
import { SectionHeader } from './About';
import { projects } from '../data/portfolio';

export default function Projects() {
  return (
    <section id="proyectos" className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <SectionHeader label="Proyectos" title="Trabajos Realizados" />

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group bg-slate-50 border border-slate-100 rounded-2xl p-6 flex flex-col hover:shadow-md hover:border-sky-200 transition-all duration-200"
            >
              <div className="w-10 h-10 bg-sky-100 rounded-lg flex items-center justify-center mb-5">
                <FolderOpen size={18} className="text-sky-600" />
              </div>

              <h3 className="text-base font-bold text-slate-900 leading-snug mb-1">{p.title}</h3>
              <p className="text-xs font-semibold text-sky-600 mb-3">{p.subtitle}</p>
              <p className="text-sm text-slate-500 leading-relaxed flex-1">{p.description}</p>

              <div className="flex flex-wrap gap-2 mt-5">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs bg-white border border-slate-200 text-slate-600 px-2.5 py-0.5 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {p.github && (
                <div className="flex gap-3 mt-5 pt-4 border-t border-slate-100">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-sky-600 transition-colors"
                  >
                    <Github size={14} />
                    Código
                  </a>
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-sky-600 transition-colors"
                  >
                    <ExternalLink size={14} />
                    Demo
                  </a>
                </div>
              )}
            </article>
          ))}
        </div>

        <p className="text-center text-sm text-slate-400 mt-8">
          Los repositorios de GitHub se pueden agregar directamente en{' '}
          <code className="text-sky-600 text-xs bg-sky-50 px-1.5 py-0.5 rounded">
            src/data/portfolio.ts
          </code>
        </p>
      </div>
    </section>
  );
}
