import { Code2, Monitor, Server, Database, Container, Wrench, Layers, Sparkles, Cpu } from 'lucide-react'

const ICON_MAP = {
  Code2, Monitor, Server, Database, Container, Wrench, Layers, Sparkles, Cpu
}

const CATEGORY_COLORS = {
  Languages: 'from-yellow-500/20 to-transparent border-yellow-500/20',
  Frontend: 'from-blue-500/20 to-transparent border-blue-500/20',
  Backend: 'from-green-500/20 to-transparent border-green-500/20',
  Database: 'from-purple-500/20 to-transparent border-purple-500/20',
  'ORM & Data Layer': 'from-teal-500/20 to-transparent border-teal-500/20',
  'DevOps & Infrastructure': 'from-orange-500/20 to-transparent border-orange-500/20',
  Tools: 'from-pink-500/20 to-transparent border-pink-500/20',
  'AI & Emerging Tech': 'from-indigo-500/20 to-transparent border-indigo-500/20',
  'Other / Misc': 'from-gray-500/20 to-transparent border-gray-500/20'
}

const ICON_COLORS = {
  Languages: 'text-yellow-400',
  Frontend: 'text-blue-400',
  Backend: 'text-green-400',
  Database: 'text-purple-400',
  'ORM & Data Layer': 'text-teal-400',
  'DevOps & Infrastructure': 'text-orange-400',
  Tools: 'text-pink-400',
  'AI & Emerging Tech': 'text-indigo-400',
  'Other / Misc': 'text-gray-400'
}

export default function Skills({ skills }) {
  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <p className="section-label">// what I work with</p>
          <h2 className="section-title">Technical <span className="text-accent">Skills</span></h2>
        </div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((skill) => {
            const Icon = ICON_MAP[skill.icon] || Code2
            const color = CATEGORY_COLORS[skill.category] || 'from-accent/10 to-transparent border-accent/20'
            const iconColor = ICON_COLORS[skill.category] || 'text-accent'

            return (
              <div
                key={skill.category}
                className={`relative overflow-hidden rounded-2xl border bg-gradient-to-br ${color} p-6 hover:-translate-y-1 transition-all duration-300 group`}
              >
                {/* Icon */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-9 h-9 rounded-lg bg-ink/50 flex items-center justify-center">
                    <Icon size={18} className={iconColor} />
                  </div>
                  <h3 className="font-display font-semibold text-paper text-sm">{skill.category}</h3>
                </div>

                {/* Items */}
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="font-mono text-xs px-2.5 py-1 rounded-md bg-ink/60 text-paper/80 border border-white/5 group-hover:border-white/10 transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* Ticker */}
        <div className="mt-16 overflow-hidden border-y border-border py-4 -mx-6 px-6">
          <div className="ticker-track gap-8">
            {['Node.js', 'React', 'Docker', 'TypeScript', 'MongoDB', 'NGINX', 'GraphQL', 'Express.js', 'Tailwind CSS', 'JWT', 'Linux', 'MySQL',
              'Node.js', 'React', 'Docker', 'TypeScript', 'MongoDB', 'NGINX', 'GraphQL', 'Express.js', 'Tailwind CSS', 'JWT', 'Linux', 'MySQL']
              .map((item, i) => (
              <span key={i} className="font-mono text-sm text-muted whitespace-nowrap flex items-center gap-8">
                {item}
                <span className="text-accent/30 text-lg">·</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}