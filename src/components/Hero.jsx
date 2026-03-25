import { Github, Linkedin, Mail, ArrowDown, MapPin, Zap } from 'lucide-react'

export default function Hero({ data }) {
  const { personal } = data

  return (
    <section id="about" className="relative min-h-screen flex items-center pt-16 overflow-hidden grid-bg">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            {/* Available badge */}
            {personal.available && (
              <div className="inline-flex items-center gap-2 bg-surface border border-border rounded-full px-4 py-1.5 mb-8 animate-fade-up">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="font-mono text-xs text-muted">Available for opportunities</span>
              </div>
            )}

            {/* Name */}
            <h1 className="font-display font-extrabold text-4xl md:text-7xl text-paper leading-[0.95] mb-2 animate-fade-up animate-delay-100">
              {personal.name.split(' ').map((word, i) => (
                <span key={i} className={i === 2 ? 'text-accent' : ''}>
                  {word}{' '}
                </span>
              ))}
            </h1>

            {/* Title */}
            <div className="flex items-center gap-3 mb-6 animate-fade-up animate-delay-200">
              <div className="h-px w-8 bg-accent" />
              <p className="font-mono text-sm text-muted tracking-wide">{personal.title} · {personal.subtitle}</p>
            </div>

            {/* Bio */}
            <p className="font-body text-muted text-lg leading-relaxed mb-8 max-w-lg animate-fade-up animate-delay-300">
              {personal.bio}
            </p>

            {/* Location */}
            <div className="flex items-center gap-2 text-muted text-sm mb-8 animate-fade-up animate-delay-300">
              <MapPin size={14} className="text-accent" />
              <span>{personal.location}</span>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 animate-fade-up animate-delay-400">
              <a href="#projects" className="btn-primary">
                <Zap size={15} />
                View Projects
              </a>
              <a href={`mailto:${personal.email}`} className="btn-ghost">
                <Mail size={15} />
                Get in Touch
              </a>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-4 mt-8 animate-fade-up animate-delay-500">
              <a href={personal.github} target="_blank" rel="noreferrer"
                className="text-muted hover:text-accent transition-colors">
                <Github size={20} />
              </a>
              <a href={personal.linkedin} target="_blank" rel="noreferrer"
                className="text-muted hover:text-accent transition-colors">
                <Linkedin size={20} />
              </a>
              <a href={`mailto:${personal.email}`}
                className="text-muted hover:text-accent transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Right – stats card */}
          <div className="animate-fade-up animate-delay-300">
            <div className="relative">
              {/* Main card */}
              <div className="bg-surface border border-border rounded-3xl p-8 glow">
                {/* Terminal header */}
                <div className="flex items-center gap-2 mb-6 pb-4 border-b border-border">
                  <span className="w-3 h-3 rounded-full bg-red-500/70" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <span className="w-3 h-3 rounded-full bg-green-500/70" />
                  <span className="ml-2 font-mono text-xs text-muted">profile.json</span>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {[
                    { label: 'Years Coding', value: '5+' },
                    { label: 'Projects Built', value: '10+' },
                    { label: 'Docker Deployments', value: '6+mo' },
                    { label: 'Education Rank', value: '#1' },
                  ].map((stat) => (
                    <div key={stat.label} className="bg-ink/50 rounded-xl p-4 border border-border/50">
                      <div className="font-display font-bold text-2xl text-accent mb-0.5">{stat.value}</div>
                      <div className="font-mono text-xs text-muted">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Tech stack preview */}
                <div>
                  <p className="font-mono text-xs text-muted mb-3">// core stack</p>
                  <div className="flex flex-wrap gap-2">
                    {['Node.js', 'React', 'Docker', 'TypeScript', 'MongoDB', 'NGINX'].map(tech => (
                      <span key={tech} className="tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 bg-accent text-ink rounded-2xl px-4 py-2 font-display font-bold text-sm shadow-lg shadow-accent/30">
                HND · Rank 1 🏆
              </div>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="flex justify-center mt-16 animate-bounce">
          <a href="#skills" className="text-muted hover:text-accent transition-colors">
            <ArrowDown size={20} />
          </a>
        </div>
      </div>
    </section>
  )
}