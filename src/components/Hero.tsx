import { Mail, Phone, Github, ChevronDown } from 'lucide-react';
import { profile } from '../data/portfolio';

export default function Hero() {
  return (
    <section
      id="inicio"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-br from-slate-50 via-sky-50 to-slate-100 relative"
    >
      <div className="max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-sky-100 text-sky-700 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
          Disponible para trabajar
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
          {profile.name}
        </h1>

        <p className="text-xl md:text-2xl font-medium text-sky-600 mb-6">
          Programador &amp; Desarrollador de Software
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <a
            href={`mailto:${profile.email}`}
            className="flex items-center gap-2 bg-sky-600 text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-sky-700 transition-colors shadow-sm"
          >
            <Mail size={16} />
            {profile.email}
          </a>
          <a
            href={`tel:${profile.phone}`}
            className="flex items-center gap-2 bg-white text-slate-700 border border-slate-200 px-5 py-2.5 rounded-lg text-sm font-semibold hover:border-sky-400 hover:text-sky-600 transition-colors shadow-sm"
          >
            <Phone size={16} />
            {profile.phone}
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-slate-800 text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-slate-700 transition-colors shadow-sm"
          >
            <Github size={16} />
            GitHub
          </a>
        </div>

        <a
          href="#sobre-mi"
          className="inline-flex flex-col items-center gap-1 text-slate-400 hover:text-sky-500 transition-colors animate-bounce"
        >
          <span className="text-xs uppercase tracking-widest">Ver más</span>
          <ChevronDown size={18} />
        </a>
      </div>
    </section>
  );
}
