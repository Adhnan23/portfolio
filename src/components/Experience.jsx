import { Briefcase, GraduationCap, MapPin, Calendar, Award } from 'lucide-react'

function ExperienceCard({ exp }) {
  return (
    <div className="relative pl-8 pb-10 last:pb-0">
      {/* Timeline line */}
      <div className="absolute left-0 top-2 bottom-0 w-px bg-border" />
      {/* Dot */}
      <div className={`absolute left-[-5px] top-2 w-2.5 h-2.5 rounded-full border-2 ${
        exp.current ? 'bg-accent border-accent' : 'bg-surface border-border'
      }`} />

      <div className="card ml-4 hover:-translate-y-0.5">
        <div className="flex items-start justify-between flex-wrap gap-2 mb-3">
          <div>
            <h3 className="font-display font-bold text-paper text-lg">{exp.role}</h3>
            <p className="font-mono text-sm text-accent">{exp.company}</p>
          </div>
          {exp.current && (
            <span className="inline-flex items-center gap-1 bg-green-500/10 text-green-400 text-xs font-mono px-2.5 py-1 rounded-full border border-green-500/20">
              <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
              Active
            </span>
          )}
        </div>

        <div className="flex flex-wrap gap-4 mb-4 text-xs text-muted font-mono">
          <span className="flex items-center gap-1.5"><MapPin size={11} />{exp.location}</span>
          <span className="flex items-center gap-1.5"><Calendar size={11} />{exp.period}</span>
        </div>

        <ul className="space-y-2">
          {exp.points.map((point, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-muted/80 font-body">
              <span className="text-accent mt-1.5 shrink-0">▸</span>
              {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

function EducationCard({ edu }) {
  return (
    <div className="card hover:-translate-y-0.5">
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center shrink-0 mt-0.5">
          <GraduationCap size={18} className="text-accent" />
        </div>
        <div>
          <h3 className="font-display font-semibold text-paper text-base leading-tight mb-1">{edu.degree}</h3>
          <p className="font-mono text-xs text-accent mb-2">{edu.institution}</p>
          <div className="flex items-center gap-3 text-xs text-muted font-mono">
            <span className="flex items-center gap-1"><Calendar size={10} />{edu.year}</span>
            <span className="flex items-center gap-1 text-yellow-400"><Award size={10} />{edu.result}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Experience({ experience, education }) {
  return (
    <section id="experience" className="py-24 relative bg-surface/30">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <p className="section-label">// where I've worked</p>
          <h2 className="section-title">Experience & <span className="text-accent">Education</span></h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Experience */}
          <div>
            <div className="flex items-center gap-2 mb-8">
              <Briefcase size={16} className="text-accent" />
              <h3 className="font-display font-semibold text-paper">Work History</h3>
            </div>
            {experience.map((exp, i) => (
              <ExperienceCard key={i} exp={exp} />
            ))}
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-2 mb-8">
              <GraduationCap size={16} className="text-accent" />
              <h3 className="font-display font-semibold text-paper">Education</h3>
            </div>
            <div className="space-y-4">
              {education.map((edu, i) => (
                <EducationCard key={i} edu={edu} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}