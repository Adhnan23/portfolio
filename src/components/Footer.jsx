import { Terminal, Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-accent rounded-md flex items-center justify-center">
            <Terminal size={12} className="text-ink" strokeWidth={2.5} />
          </div>
          <span className="font-display font-bold text-paper text-sm">karots<span className="text-accent">.</span>dev</span>
        </div>
        <p className="font-mono text-xs text-muted flex items-center gap-1.5">
          Built with <Heart size={11} className="text-red-400 fill-red-400" /> using React + Vite + Tailwind
        </p>
        <p className="font-mono text-xs text-muted">
          © {new Date().getFullYear()} A.K.M.S. Adhnan
        </p>
      </div>
    </footer>
  )
}