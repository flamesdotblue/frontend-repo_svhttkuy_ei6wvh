import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSkills from './components/AboutSkills';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    if (stored) setTheme(stored);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));

  return (
    <div className="scroll-smooth min-h-screen bg-background text-foreground">
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main className="space-y-8 md:space-y-16">
        <Hero />
        <Projects />
        <AboutSkills />
        <Contact />
      </main>
      <footer className="border-t border-border mt-12">
        <div className="max-w-6xl mx-auto px-4 py-8 text-sm flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
          <p className="text-muted-foreground">Built with React • Tailwind • Spline</p>
        </div>
      </footer>
    </div>
  );
}
