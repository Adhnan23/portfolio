import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react'

export default function Contact({ personal }) {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="section-label justify-center flex">// let's connect</p>
          <h2 className="section-title">Get In <span className="text-accent">Touch</span></h2>
          <p className="font-body text-muted max-w-lg mx-auto mt-4">
            I'm currently open to new opportunities. Whether you have a project, a question, or just want to say hello — my inbox is always open.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Contact info */}
          <div className="space-y-4">
            {[
              { icon: Mail, label: 'Email', value: personal.email, href: `mailto:${personal.email}` },
              { icon: Phone, label: 'Phone', value: personal.phone, href: `tel:${personal.phone}` },
              { icon: MapPin, label: 'Location', value: personal.location, href: null },
            ].map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href || undefined}
                className={`flex items-center gap-4 card ${href ? 'hover:border-accent/30 cursor-pointer' : 'cursor-default'}`}
              >
                <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center shrink-0">
                  <Icon size={16} className="text-accent" />
                </div>
                <div>
                  <p className="font-mono text-xs text-muted mb-0.5">{label}</p>
                  <p className="font-body text-paper text-sm">{value}</p>
                </div>
              </a>
            ))}

            {/* Socials */}
            <div className="flex items-center gap-3 pt-2">
              <a href={personal.github} target="_blank" rel="noreferrer" className="btn-ghost gap-2 flex-1 justify-center">
                <Github size={16} />
                GitHub
              </a>
              <a href={personal.linkedin} target="_blank" rel="noreferrer" className="btn-ghost gap-2 flex-1 justify-center">
                <Linkedin size={16} />
                LinkedIn
              </a>
            </div>
          </div>

          {/* Quick message form */}
          <div className="card">
            <h3 className="font-display font-semibold text-paper mb-6">Send a Message</h3>
            <form
              onSubmit={(e) => {
                e.preventDefault()
                const form = e.target
                const subject = encodeURIComponent('Portfolio Inquiry')
                const body = encodeURIComponent(`Name: ${form.name.value}\n\nMessage:\n${form.message.value}`)
                window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`
              }}
              className="space-y-4"
            >
              <div>
                <label className="font-mono text-xs text-muted block mb-2">Your Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="John Doe"
                  className="w-full bg-ink border border-border rounded-xl px-4 py-3 text-paper text-sm font-body placeholder:text-muted/40 focus:outline-none focus:border-accent/50 transition-colors"
                />
              </div>
              <div>
                <label className="font-mono text-xs text-muted block mb-2">Message</label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="What's on your mind?"
                  className="w-full bg-ink border border-border rounded-xl px-4 py-3 text-paper text-sm font-body placeholder:text-muted/40 focus:outline-none focus:border-accent/50 transition-colors resize-none"
                />
              </div>
              <button type="submit" className="btn-primary w-full justify-center">
                <Send size={15} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}