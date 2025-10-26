import { useMemo } from 'react';
import { ArrowRight, Download } from 'lucide-react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  // Minimal inline PDF for demo; replace with your own later
  const resumeDataUrl = useMemo(() => {
    const base64 =
      'JVBERi0xLjQKJcTl8uXrp/Og0MTGCjEgMCBvYmoKPDwvVHlwZS9DYXRhbG9nL1BhZ2VzIDIgMCBSPj4KZW5kb2JqCjIgMCBvYmoKPDwvVHlwZS9QYWdlcy9Db3VudCAxL0tpZHMgWzMgMCBSXT4+CmVuZG9iagozIDAgb2JqCjw8L1R5cGUvUGFnZS9NZWRpYUJveCBbMCAwIDU5NSA4NDJdL1BhcmVudCAyIDAgUi9Db250ZW50cyA0IDAgUi9SZXNvdXJjZXMgNSAwIFI+PgplbmRvYmoKNCAwIG9iago8PC9MZW5ndGggOTc+PnN0cmVhbQpCBTAgdGYKMTAwIDc1MCBUZAooSGVsbG8sIEknbSBEZXZlbG9wZXIhKSBUagoxMDAgNzEwIFRkCihSZXN1bWUgc25hcHNob3Q6IGV4cGVyaWVuY2UsIHNraWxscywgYW5kIHByb2plY3RzLikgVGoKRVQKZW5kc3RyZWFtCmVuZG9iago1IDAgb2JqCjw8L1Byb2NTZXQgWy9QREYvVGV4dF0vRm9udCA8PC9GMSA2IDAgUj4+Pj4KZW5kb2JqCjYgMCBvYmoKPDwvVHlwZS9Gb250L1N1YnR5cGUvVHlwZTEvTmFtZS9GMS9CYXNlRm9udC9IZWx2ZXRpY2E+PgplbmRvYmoKeHJlZgowIDcKMDAwMDAwMDAwMCA2NTUzNSBmIAowMDAwMDAwMDc4IDAwMDAwIG4gCjAwMDAwMDAxNDUgMDAwMDAgbiAKMDAwMDAwMDI1OSAwMDAwMCBuIAowMDAwMDAwNDA1IDAwMDAwIG4gCjAwMDAwMDA1NTAgMDAwMDAgbiAKdHJhaWxlcgo8PC9TaXplIDcvUm9vdCAxIDAgUi9JRCBbPEQzRjkwNURFQTFENjQwODI2RjA2MzVBQjQ2RjNBMDRCPl08PC9JbmZvIDcgMCBSPj4+CnN0YXJ0eHJlZgo2OTgKJSVFT0Y=';
    return `data:application/pdf;base64,${base64}`;
  }, []);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumeDataUrl;
    link.download = 'Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePreview = () => {
    window.open(resumeDataUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="home" className="relative min-h-[70vh] md:min-h-[80vh] flex items-center">
      {/* Spline as full-width cover background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 via-white/40 to-white/10 dark:from-slate-950/85 dark:via-slate-950/50 dark:to-slate-950/30" />
      </div>

      <div className="relative z-10 w-full">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center px-4 py-16">
          <div className="backdrop-blur-[2px]">
            <p className="text-xs tracking-widest uppercase font-semibold text-teal-600 dark:text-teal-300">Fintech • E‑commerce • Modern UI</p>
            <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold leading-tight text-slate-900 dark:text-white">
              Building delightful digital products
            </h1>
            <p className="mt-4 text-slate-600 dark:text-slate-300">
              I craft modern, accessible, and performant web experiences. I love turning complex ideas into delightful products.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#projects" className="inline-flex items-center gap-2 px-5 py-3 rounded-md text-white bg-gradient-to-r from-teal-500 to-indigo-500 shadow-sm hover:opacity-95 transition">
                View Projects <ArrowRight size={18} />
              </a>
              <button onClick={handleDownload} className="inline-flex items-center gap-2 px-5 py-3 rounded-md border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 text-slate-800 dark:text-slate-200 hover:bg-white/90 dark:hover:bg-slate-900">
                <Download size={18} /> Download Resume
              </button>
              <button onClick={handlePreview} className="inline-flex items-center gap-2 px-5 py-3 rounded-md border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 text-slate-800 dark:text-slate-200 hover:bg-white/90 dark:hover:bg-slate-900">
                Preview Resume
              </button>
            </div>
            <div className="mt-8 flex flex-wrap gap-2 text-sm text-slate-600 dark:text-slate-300">
              <span className="px-2 py-1 rounded-full bg-teal-100 text-teal-700 dark:bg-teal-900/40 dark:text-teal-300">React</span>
              <span className="px-2 py-1 rounded-full bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300">TypeScript</span>
              <span className="px-2 py-1 rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300">Node.js</span>
              <span className="px-2 py-1 rounded-full bg-sky-100 text-sky-700 dark:bg-sky-900/40 dark:text-sky-300">Tailwind</span>
            </div>
          </div>
          <div className="hidden md:block" />
        </div>
      </div>
    </section>
  );
}
