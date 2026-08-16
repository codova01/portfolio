import { useEffect, useState } from 'react'

const NAV = [
  { label: 'Work', href: '#work' },
  { label: 'Skills', href: '#skills' },
  { label: 'Open Source', href: '#open-source' },
  { label: 'Contact', href: '#contact' },
]

const PROJECTS = [
  {
    tag: '01',
    name: 'Campus Compass',
    kicker: 'AI-Powered Society Recommendation Platform · Personal Project',
    desc: 'A database-backed recommendation platform. Owned the schema end-to-end in Supabase/PostgreSQL for profiles, auth, favourites, and feedback, then built the skill-gap analysis and recommendation logic that matches users to the right options.',
    tech: ['Python', 'Streamlit', 'Supabase', 'PostgreSQL'],
    link: 'https://github.com/codova01',
    linkLabel: 'View on GitHub',
  },
  {
    tag: '02',
    name: 'AuraSense',
    kicker: 'Accessibility-Focused Assistive Web App · GDG Hackathon',
    desc: 'A voice-driven, screen-reader-friendly web app built to assist visually impaired users. Built the Node/Express endpoint that forwards images to Azure Computer Vision and speaks the results back, plus a real-time object detection feature.',
    tech: ['JavaScript', 'Node.js', 'Express', 'FastAPI', 'Azure CV', 'Web Speech API'],
    link: 'https://github.com/codova01',
    linkLabel: 'View on GitHub',
  },
  {
    tag: '03',
    name: 'ShikshaFlow',
    kicker: 'Smart Education Management Platform · Hackerwrath\'25',
    desc: 'A university-focused platform tackling inefficiencies in assignments, attendance, and learning analytics. Designed interactive, testable frontend features with a team, aimed at streamlining the student and faculty experience.',
    tech: ['Frontend', 'Team Project'],
    link: '#',
    linkLabel: 'Live Demo',
  },
]

const SKILLS = [
  { group: 'Languages', items: ['Python', 'SQL', 'JavaScript'] },
  { group: 'Databases', items: ['SQL', 'Supabase / PostgreSQL', 'Relational DB Design'] },
  { group: 'Tools & Practices', items: ['Git & GitHub', 'Version Control', 'Debugging', 'REST APIs', 'Web Accessibility'] },
  { group: 'Other', items: ['Streamlit', 'Canva'] },
]

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('[data-reveal]')
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('reveal')
            obs.unobserve(e.target)
          }
        })
      },
      { threshold: 0.15 }
    )
    els.forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [])
}

function SectionLabel({ n, children }) {
  return (
    <div className="flex items-center gap-3 mb-10">
      <span className="font-mono text-xs text-ember tracking-widest">{n}</span>
      <span className="h-px flex-1 max-w-[40px] bg-ember/40" />
      <span className="font-mono text-xs uppercase tracking-[0.3em] text-ash">{children}</span>
    </div>
  )
}

export default function App() {
  const [open, setOpen] = useState(false)
  useReveal()

  return (
    <div className="min-h-screen bg-void font-body relative">
      <div className="grain" />

      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-40 backdrop-blur-md bg-void/60 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          <a href="#top" className="font-display font-semibold tracking-tight text-bone">
            navya<span className="text-ember">.</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 font-mono text-xs uppercase tracking-widest text-ash">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} className="hover:text-amber transition-colors">
                {n.label}
              </a>
            ))}
          </nav>
          <a
            href="mailto:navyaumat@gmail.com"
            className="hidden md:inline-block text-xs font-mono uppercase tracking-widest border border-ember/40 text-amber px-4 py-2 rounded-full hover:bg-ember hover:text-void transition-colors"
          >
            Say Hello
          </a>
          <button
            className="md:hidden text-bone"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? '✕' : '☰'}
          </button>
        </div>
        {open && (
          <div className="md:hidden flex flex-col gap-4 px-6 pb-6 font-mono text-sm uppercase tracking-widest text-ash">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="hover:text-amber">
                {n.label}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="top" className="relative pt-40 pb-32 px-6 md:px-10 bg-ember-radial">
        <div className="hero-glow absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-ember/20 blur-[140px] rounded-full pointer-events-none" />
        <div className="max-w-6xl mx-auto relative">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-amber mb-6" data-reveal>
            CS Undergraduate · Amritsar, Punjab
          </p>
          <h1
            className="font-display font-bold text-[15vw] md:text-[7.5rem] leading-[0.9] tracking-tight text-bone mb-8"
            data-reveal
          >
            NAVYA
          </h1>
          <p className="font-display text-2xl md:text-4xl text-gradient font-medium max-w-3xl mb-8 leading-tight" data-reveal>
            Building From First Principles, Shipping Real Products.
          </p>
          <p className="text-ash text-base md:text-lg max-w-2xl mb-10 leading-relaxed" data-reveal>
            Sophomore Computer Science Engineering student building Python and web
            applications — from a database-backed recommendation platform to an
            accessibility-focused assistive web app. Comfortable with SQL, clean
            testable code, and debugging real codebases. Active open-source
            contributor with a fast learning curve.
          </p>
          <div className="flex flex-wrap gap-4" data-reveal>
            <a
              href="#work"
              className="bg-ember text-void font-mono text-xs uppercase tracking-widest px-6 py-3 rounded-full font-medium hover:bg-amber transition-colors"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="border border-white/15 text-bone font-mono text-xs uppercase tracking-widest px-6 py-3 rounded-full hover:border-amber hover:text-amber transition-colors"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT / SUMMARY STRIP */}
      <section className="border-y border-white/5 py-10 px-6 md:px-10" data-reveal>
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 font-mono text-xs uppercase tracking-widest text-ash">
          <div>
            <p className="text-amber text-2xl font-display normal-case tracking-tight mb-1">3</p>
            Shipped Projects
          </div>
          <div>
            <p className="text-amber text-2xl font-display normal-case tracking-tight mb-1">GSSoC'26</p>
            Open Source Contributor
          </div>
          <div>
            <p className="text-amber text-2xl font-display normal-case tracking-tight mb-1">B.Tech CSE</p>
            Guru Nanak Dev University
          </div>
          <div>
            <p className="text-amber text-2xl font-display normal-case tracking-tight mb-1">Python</p>
            & Full-Stack Focus
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="work" className="py-28 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <div data-reveal>
            <SectionLabel n="01">Selected Work</SectionLabel>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {PROJECTS.map((p) => (
              <div key={p.name} className="card-glow rounded-2xl p-7 flex flex-col" data-reveal>
                <span className="font-mono text-xs text-ember mb-6">{p.tag}</span>
                <h3 className="font-display text-2xl font-semibold text-bone mb-1">{p.name}</h3>
                <p className="font-mono text-[11px] uppercase tracking-wide text-amber/80 mb-4">
                  {p.kicker}
                </p>
                <p className="text-ash text-sm leading-relaxed mb-6 flex-1">{p.desc}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-mono uppercase tracking-wide px-2.5 py-1 rounded-full border border-white/10 text-ash"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono text-xs uppercase tracking-widest text-amber inline-flex items-center gap-2 hover:gap-3 transition-all"
                >
                  {p.linkLabel} <span>→</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="py-28 px-6 md:px-10 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div data-reveal>
            <SectionLabel n="02">Skills & Tools</SectionLabel>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {SKILLS.map((s) => (
              <div key={s.group} className="card-glow rounded-2xl p-6" data-reveal>
                <h4 className="font-mono text-xs uppercase tracking-widest text-amber mb-4">
                  {s.group}
                </h4>
                <ul className="space-y-2">
                  {s.items.map((i) => (
                    <li key={i} className="text-bone text-sm">
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OPEN SOURCE */}
      <section id="open-source" className="py-28 px-6 md:px-10 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div data-reveal>
            <SectionLabel n="03">Open Source</SectionLabel>
          </div>
          <div className="card-glow rounded-2xl p-8 md:p-10 grid md:grid-cols-[1fr_auto] gap-8 items-center" data-reveal>
            <div>
              <h3 className="font-display text-2xl font-semibold text-bone mb-2">
                GSSoC'26 Contributor & Mentee
              </h3>
              <p className="font-mono text-[11px] uppercase tracking-wide text-amber/80 mb-4">
                GirlScript Summer of Code
              </p>
              <p className="text-ash text-sm leading-relaxed max-w-2xl">
                Actively contributing to open-source repositories — creating pull
                requests, resolving issues, and fixing bugs to improve code quality.
                Applying Git and GitHub version control in a practical, collaborative
                workflow alongside maintainers, gaining hands-on experience with
                real-world development practices.
              </p>
            </div>
            <a
              href="https://github.com/codova01"
              target="_blank"
              rel="noreferrer"
              className="bg-ember text-void font-mono text-xs uppercase tracking-widest px-6 py-3 rounded-full font-medium hover:bg-amber transition-colors whitespace-nowrap text-center"
            >
              GitHub Profile
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-32 px-6 md:px-10 border-t border-white/5 relative overflow-hidden">
        <div className="hero-glow absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-ember/15 blur-[140px] rounded-full pointer-events-none" />
        <div className="max-w-6xl mx-auto relative text-center" data-reveal>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-amber mb-6">
            04 · Let's Talk
          </p>
          <h2 className="font-display font-bold text-5xl md:text-7xl text-bone mb-8 tracking-tight">
            Let's Build <span className="text-gradient">Something Real.</span>
          </h2>
          <p className="text-ash max-w-xl mx-auto mb-10">
            Looking for a Software Developer role where I can bring a fast learning
            curve and a problem-solving mindset. Reach out — I reply fast.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <a
              href="mailto:navyaumat@gmail.com"
              className="bg-ember text-void font-mono text-xs uppercase tracking-widest px-7 py-3.5 rounded-full font-medium hover:bg-amber transition-colors"
            >
              navyaumat@gmail.com
            </a>
          </div>
          <div className="flex justify-center gap-8 font-mono text-xs uppercase tracking-widest text-ash">
            <a href="https://github.com/codova01" target="_blank" rel="noreferrer" className="hover:text-amber transition-colors">
              GitHub
            </a>
            <a href="https://linkedin.com/in/navyaumat" target="_blank" rel="noreferrer" className="hover:text-amber transition-colors">
              LinkedIn
            </a>
            <span>Amritsar, Punjab</span>
          </div>
        </div>
      </section>

      <footer className="py-8 px-6 md:px-10 border-t border-white/5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2 font-mono text-[11px] text-ash">
          <span>© {new Date().getFullYear()} Navya. Built with React & Tailwind.</span>
          <span>Designed for the developer role, not the algorithm.</span>
        </div>
      </footer>
    </div>
  )
}
