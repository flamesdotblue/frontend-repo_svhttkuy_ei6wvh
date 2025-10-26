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
      className="px-3 py-2 rounded-md text-sm font-medium hover:text-primary hover:bg-muted transition-colors"
      onClick={() => setOpen(false)}
    >
      {label}
    </a>
  );

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b border-border">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="font-semibold tracking-tight text-xl">
            <span className="text-primary">{`<`}</span> DevPortfolio <span className="text-primary">{`/>`}</span>
          </a>
          <nav className="hidden md:flex items-center gap-1">
            <NavLink href="#projects" label="Projects" />
            <NavLink href="#about" label="About" />
            <NavLink href="#contact" label="Contact" />
            <button
              aria-label="Toggle theme"
              onClick={onToggleTheme}
              className="ml-2 inline-flex items-center gap-2 px-3 py-2 rounded-md border border-border hover:bg-muted"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
              <span className="hidden sm:inline text-sm">{theme === 'dark' ? 'Light' : 'Dark'}</span>
            </button>
          </nav>
          <div className="md:hidden flex items-center gap-2">
            <button
              aria-label="Toggle theme"
              onClick={onToggleTheme}
              className="inline-flex items-center p-2 rounded-md border border-border hover:bg-muted"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              aria-label="Open menu"
              onClick={() => setOpen((v) => !v)}
              className="inline-flex items-center p-2 rounded-md border border-border hover:bg-muted"
            >
              {open ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {open && (
          <div className="md:hidden pb-3 flex flex-col gap-2">
            <NavLink href="#projects" label="Projects" />
            <NavLink href="#about" label="About" />
            <NavLink href="#contact" label="Contact" />
            <div className="flex items-center gap-3 px-1 pt-2 border-t border-border">
              <a aria-label="GitHub" className="p-2 rounded-md hover:bg-muted" href="https://github.com/" target="_blank" rel="noreferrer"><Github size={18} /></a>
              <a aria-label="LinkedIn" className="p-2 rounded-md hover:bg-muted" href="https://linkedin.com/" target="_blank" rel="noreferrer"><Linkedin size={18} /></a>
              <a aria-label="Twitter" className="p-2 rounded-md hover:bg-muted" href="https://twitter.com/" target="_blank" rel="noreferrer"><Twitter size={18} /></a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
