import { Code2 } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 py-8 px-6 text-center">
      <div className="flex items-center justify-center gap-2 text-slate-500 text-sm">
        <Code2 size={14} className="text-sky-700" />
        <span>
          Hecho con React &mdash; Valentin Tiraboschi ; {new Date().getFullYear()}
        </span>
      </div>
    </footer>
  );
}
