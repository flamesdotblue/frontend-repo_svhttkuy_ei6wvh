import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Interactive Dashboard',
    description: 'Data-rich dashboard with charts, filters, and real-time updates.',
    tech: ['React', 'Recharts', 'Tailwind'],
    image: 'https://images.unsplash.com/photo-1694271862070-87539006c439?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxJbnRlcmFjdGl2ZSUyMERhc2hib2FyZHxlbnwwfDB8fHwxNzYxNDkzODQ4fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    live: 'https://example.com',
    repo: 'https://github.com/',
  },
  {
    title: 'E-commerce Store',
    description: 'Full‑stack storefront with cart, checkout, and admin tools.',
    tech: ['Next.js', 'Stripe', 'Prisma'],
    image: 'https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?q=80&w=1200&auto=format&fit=crop',
    live: 'https://example.com',
    repo: 'https://github.com/',
  },
  {
    title: 'Realtime Chat',
    description: 'WebSocket powered chat with rooms and presence.',
    tech: ['Node', 'Socket.IO', 'Redis'],
    image: 'https://images.unsplash.com/photo-1526378722484-bd91ca387e72?q=80&w=1200&auto=format&fit=crop',
    live: 'https://example.com',
    repo: 'https://github.com/',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-3xl font-bold">Projects</h2>
          <p className="text-sm text-muted-foreground">Hover cards for more details</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, idx) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="group overflow-hidden rounded-xl border border-border bg-card hover:shadow-lg transition-shadow"
            >
              <div className="aspect-video overflow-hidden">
                <img src={p.image} alt={p.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5 space-y-3">
                <h3 className="font-semibold text-lg">{p.title}</h3>
                <p className="text-sm text-muted-foreground">{p.description}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span key={t} className="px-2 py-0.5 rounded-full bg-muted text-xs">{t}</span>
                  ))}
                </div>
                <div className="pt-2 flex items-center gap-3">
                  <a href={p.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-sm hover:underline">
                    Live <ExternalLink size={16} />
                  </a>
                  <a href={p.repo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-sm hover:underline">
                    Code <Github size={16} />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
