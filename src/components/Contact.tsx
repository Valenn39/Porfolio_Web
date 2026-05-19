import { Mail, Phone, Github, Send } from 'lucide-react';
import { SectionHeader } from './About';
import { profile } from '../data/portfolio';

const contactItems = [
  {
    icon: Mail,
    label: 'Correo electrónico',
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    icon: Phone,
    label: 'Teléfono',
    value: profile.phone,
    href: `tel:${profile.phone}`,
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/ValentinTiraboschi',
    href: profile.github,
  },
];

export default function Contact() {
  return (
    <section id="contacto" className="py-24 px-6 bg-slate-900">
      <div className="max-w-4xl mx-auto">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-sky-400 bg-sky-900/40 px-3 py-1 rounded-full">
            Contacto
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white">Hablemos</h2>
          <div className="mt-4 w-12 h-1 bg-sky-500 rounded-full mx-auto" />
          <p className="mt-6 text-slate-400 max-w-lg mx-auto text-base">
            Estoy disponible para proyectos freelance, pasantías o posiciones de tiempo completo.
            No dudes en escribirme.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {contactItems.map(({ icon: Icon, label, value, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="group bg-slate-800 border border-slate-700 rounded-2xl p-6 flex flex-col items-center text-center hover:border-sky-500 hover:bg-slate-700 transition-all duration-200"
            >
              <div className="w-12 h-12 bg-sky-600/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-sky-600/30 transition-colors">
                <Icon size={20} className="text-sky-400" />
              </div>
              <p className="text-xs text-slate-400 uppercase tracking-widest mb-1">{label}</p>
              <p className="text-sm font-semibold text-white break-all">{value}</p>
            </a>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 bg-sky-600 text-white px-8 py-3.5 rounded-xl text-sm font-semibold hover:bg-sky-500 transition-colors shadow-lg shadow-sky-900/30"
          >
            <Send size={16} />
            Enviar mensaje
          </a>
        </div>
      </div>
    </section>
  );
}
