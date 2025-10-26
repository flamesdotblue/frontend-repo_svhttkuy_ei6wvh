import { useMemo } from 'react';
import { ArrowRight, Download } from 'lucide-react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  // Minimal inline PDF ("Hello, I'm Your Name") base64. Works for preview/download.
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
    <section id="home" className="relative">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center px-4 pt-10 md:pt-16">
        <div className="order-2 md:order-1">
          <p className="text-sm tracking-widest uppercase text-primary font-medium">Web Developer</p>
          <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold leading-tight">
            Front‑End & Full‑Stack Developer
          </h1>
          <p className="mt-4 text-muted-foreground">
            I craft modern, accessible, and performant web experiences. I love turning complex ideas into delightful products.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#projects" className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-primary text-primary-foreground hover:opacity-90 transition">
              View Projects <ArrowRight size={18} />
            </a>
            <button onClick={handleDownload} className="inline-flex items-center gap-2 px-5 py-3 rounded-md border border-border hover:bg-muted">
              <Download size={18} /> Download Resume
            </button>
            <button onClick={handlePreview} className="inline-flex items-center gap-2 px-5 py-3 rounded-md hover:bg-muted border border-border">
              Preview Resume
            </button>
          </div>
          <div className="mt-8 flex flex-wrap gap-2 text-sm text-muted-foreground">
            <span className="px-2 py-1 rounded-full bg-muted">React</span>
            <span className="px-2 py-1 rounded-full bg-muted">TypeScript</span>
            <span className="px-2 py-1 rounded-full bg-muted">Node.js</span>
            <span className="px-2 py-1 rounded-full bg-muted">Tailwind CSS</span>
          </div>
        </div>
        <div className="h-[340px] sm:h-[420px] md:h-[520px] rounded-xl overflow-hidden border border-border relative order-1 md:order-2">
          <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-background/20" />
        </div>
      </div>
    </section>
  );
}
