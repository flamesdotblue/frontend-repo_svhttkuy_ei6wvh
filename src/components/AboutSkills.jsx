import { Code, Layout, Server, Wrench } from 'lucide-react';
import { motion } from 'framer-motion';

const skills = {
  'Front-end': ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS'],
  'Back-end': ['Node.js', 'Express', 'FastAPI', 'MongoDB', 'PostgreSQL'],
  Tools: ['Git', 'GitHub', 'Vite', 'Jest', 'Docker'],
};

export default function AboutSkills() {
  return (
    <section id="about" className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h2 className="text-3xl font-bold">About Me</h2>
            <p className="text-muted-foreground">
              I’m a developer focused on building accessible, inclusive products with excellent user experiences. I enjoy working across the stack and collaborating with cross‑functional teams.
            </p>
            <div className="grid grid-cols-3 gap-4">
              <div className="p-4 rounded-lg border border-border bg-card">
                <Layout className="text-primary" />
                <p className="mt-2 text-sm font-medium">UI/UX Oriented</p>
              </div>
              <div className="p-4 rounded-lg border border-border bg-card">
                <Server className="text-primary" />
                <p className="mt-2 text-sm font-medium">API Driven</p>
              </div>
              <div className="p-4 rounded-lg border border-border bg-card">
                <Wrench className="text-primary" />
                <p className="mt-2 text-sm font-medium">Tooling & DX</p>
              </div>
            </div>
          </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-5"
        >
          <h3 className="text-xl font-semibold flex items-center gap-2"><Code className="text-primary" /> Skills</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {Object.entries(skills).map(([cat, items]) => (
              <div key={cat} className="p-5 rounded-lg border border-border bg-card">
                <p className="font-medium mb-3">{cat}</p>
                <div className="flex flex-wrap gap-2">
                  {items.map((s) => (
                    <span key={s} className="px-2 py-1 rounded-full bg-muted text-sm">{s}</span>
                  ))}
                </div>
                <div className="mt-4 h-2 w-full rounded bg-muted overflow-hidden">
                  <div className="h-full bg-primary/80" style={{ width: `${60 + Math.random() * 35}%` }} />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
        </div>
      </div>
    </section>
  );
}
