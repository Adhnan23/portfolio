import { useState } from 'react'
import { Github, ExternalLink, Star, ChevronRight } from 'lucide-react'

function ProjectCard({ project, featured }) {
  return (
    <div className={`card group hover:-translate-y-1 ${featured ? 'lg:col-span-2' : ''}`}>
      {/* Top row */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-2">
          {project.featured && (
            <span className="inline-flex items-center gap-1 bg-accent/10 text-accent text-xs font-mono px-2 py-0.5 rounded-md border border-accent/20">
              <Star size={10} /> Featured
            </span>
          )}
          <span className="font-mono text-xs text-muted">{project.year}</span>
        </div>
        <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          {project.github && (
            <a href={project.github} target="_blank" rel="noreferrer"
              className="text-muted hover:text-accent transition-colors p-1.5 rounded-lg hover:bg-border">
              <Github size={15} />
            </a>
          )}
          {project.live && (
            <a href={project.live} target="_blank" rel="noreferrer"
              className="text-muted hover:text-accent transition-colors p-1.5 rounded-lg hover:bg-border">
              <ExternalLink size={15} />
            </a>
          )}
        </div>
      </div>

      {/* Title */}
      <h3 className="font-display font-bold text-xl text-paper mb-1 group-hover:text-accent transition-colors">
        {project.title}
      </h3>
      <p className="font-mono text-xs text-muted mb-3">{project.subtitle}</p>

      {/* Description */}
      <p className="font-body text-sm text-muted/80 leading-relaxed mb-5">
        {project.description}
      </p>

      {/* Highlights */}
      {project.highlights && project.highlights.length > 0 && (
        <ul className="mb-5 space-y-1.5">
          {project.highlights.map((h, i) => (
            <li key={i} className="flex items-start gap-2 text-xs font-body text-muted/70">
              <ChevronRight size={12} className="text-accent mt-0.5 shrink-0" />
              {h}
            </li>
          ))}
        </ul>
      )}

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5">
        {project.tags.map(tag => (
          <span key={tag} className="tag">{tag}</span>
        ))}
      </div>
    </div>
  )
}

export default function Projects({ projects, personal }) {
  const [showAll, setShowAll] = useState(false)
  const featured = projects.filter(p => p.featured)
  const rest = projects.filter(p => !p.featured)
  const visible = showAll ? rest : rest.slice(0, 2)

  return (
    <section id="projects" className="py-24 relative">
      {/* Subtle divider glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent to-accent/30" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16 flex items-end justify-between flex-wrap gap-4">
          <div>
            <p className="section-label">// things I've built</p>
            <h2 className="section-title">Selected <span className="text-accent">Projects</span></h2>
          </div>
          <a href={personal.github} target="_blank" rel="noreferrer" className="btn-ghost">
            <Github size={15} />
            GitHub Profile
          </a>
        </div>

        {/* Featured projects */}
        <div className="grid lg:grid-cols-2 gap-5 mb-5">
          {featured.map(p => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>

        {/* Other projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {visible.map(p => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>

        {/* Show more */}
        {rest.length > 2 && (
          <div className="flex justify-center mt-10">
            <button
              onClick={() => setShowAll(!showAll)}
              className="btn-ghost"
            >
              {showAll ? 'Show Less' : `Show ${rest.length - 2} More`}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}