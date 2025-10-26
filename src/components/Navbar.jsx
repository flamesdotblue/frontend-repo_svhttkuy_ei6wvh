import { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, Github, Linkedin, Twitter } from 'lucide-react';

export default function Navbar({ theme, onToggleTheme }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setOpen(false);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const NavLink = ({ href, label }) => (
    <a
      href={href}
      className="px-3 py-2 rounded-md text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/70 dark:hover:bg-slate-800/60 transition-colors"
      onClick={() => setOpen(false)}
    >
      {label}
    </a>
  );

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/70 dark:bg-slate-950/60 border-b border-slate-200/60 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="font-semibold tracking-tight text-xl">
            <span className="bg-gradient-to-r from-teal-500 to-indigo-500 bg-clip-text text-transparent">DevPortfolio</span>
          </a>
          <nav className="hidden md:flex items-center gap-1">
            <NavLink href="#projects" label="Projects" />
            <NavLink href="#contact" label="Contact" />
            <button
              aria-label="Toggle theme"
              onClick={onToggleTheme}
              className="ml-2 inline-flex items-center gap-2 px-3 py-2 rounded-md border border-slate-200 dark:border-slate-800 hover:bg-slate-100/70 dark:hover:bg-slate-800/60 text-slate-700 dark:text-slate-300"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
              <span className="hidden sm:inline text-sm">{theme === 'dark' ? 'Light' : 'Dark'}</span>
            </button>
          </nav>
          <div className="md:hidden flex items-center gap-2">
            <button
              aria-label="Toggle theme"
              onClick={onToggleTheme}
              className="inline-flex items-center p-2 rounded-md border border-slate-200 dark:border-slate-800 hover:bg-slate-100/70 dark:hover:bg-slate-800/60 text-slate-700 dark:text-slate-300"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              aria-label="Open menu"
              onClick={() => setOpen((v) => !v)}
              className="inline-flex items-center p-2 rounded-md border border-slate-200 dark:border-slate-800 hover:bg-slate-100/70 dark:hover:bg-slate-800/60 text-slate-700 dark:text-slate-300"
            >
              {open ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {open && (
          <div className="md:hidden pb-3 flex flex-col gap-2">
            <NavLink href="#projects" label="Projects" />
            <NavLink href="#contact" label="Contact" />
            <div className="flex items-center gap-3 px-1 pt-2 border-t border-slate-200 dark:border-slate-800">
              <a aria-label="GitHub" className="p-2 rounded-md hover:bg-slate-100/70 dark:hover:bg-slate-800/60" href="https://github.com/" target="_blank" rel="noreferrer"><Github size={18} /></a>
              <a aria-label="LinkedIn" className="p-2 rounded-md hover:bg-slate-100/70 dark:hover:bg-slate-800/60" href="https://linkedin.com/" target="_blank" rel="noreferrer"><Linkedin size={18} /></a>
              <a aria-label="Twitter" className="p-2 rounded-md hover:bg-slate-100/70 dark:hover:bg-slate-800/60" href="https://twitter.com/" target="_blank" rel="noreferrer"><Twitter size={18} /></a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
