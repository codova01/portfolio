import { useEffect, useState } from 'react'
import GradientWaves from './components/GradientWaves'
import CursorGlow from './components/CursorGlow'


const NAV = [
  { label: 'Work', href: '#work' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

const PROJECTS = [
  {
    tag: '01',
    name: 'Campus Compass',
    kicker: 'AI-Powered Society Recommendation Platform · Personal Project',
    desc: 'A database-backed recommendation platform. Owned the schema end-to-end in Supabase/PostgreSQL for profiles, auth, favourites, and feedback, then built the skill-gap analysis and recommendation logic that matches users to the right options.',
    tech: ['Python', 'Streamlit', 'Supabase', 'PostgreSQL'],
    live: ' https://campus-compass.streamlit.app/',
    github: 'https://github.com/muskansspace/campus-compass',
  },
  {
    tag: '02',
    name: 'ShikshaFlow',
    kicker: 'Smart Education Management Platform · Hackerwrath\'25',
    desc: 'A university-focused platform tackling inefficiencies in assignments, attendance, and learning analytics. Designed interactive, testable frontend features with a team, aimed at streamlining the student and faculty experience.',
    tech: ['Frontend', 'Team Project'],
    live: 'https://shikshaflow.vercel.app/',
    github: null,
  },
  {
    tag: '03',
    name: 'AuraSense',
    kicker: 'Accessibility-Focused Assistive Web App · GDG Hackathon',
    desc: 'A voice-driven, screen-reader-friendly web app built to assist visually impaired users. Built the Node/Express endpoint that forwards images to Azure Computer Vision and speaks the results back, plus a real-time object detection feature.',
    tech: ['JavaScript', 'Node.js', 'Express', 'FastAPI', 'Azure CV', 'Web Speech API'],
    live: null,
    github: 'https://github.com/techwithbuddy/AuraSense',
  },
]

const SKILLS = [
  { group: 'Languages', items: ['Python', 'C++', 'JavaScript'] },
  { group: 'Backend & Databases', items: ['SQL / PostgreSQL', 'Supabase', 'REST APIs', 'Relational DB Design'] },
  { group: 'Tools & Practices', items: ['Git & GitHub', 'Version Control', 'Debugging', 'Web Accessibility'] },
  { group: 'Frameworks & Platforms', items: ['Streamlit', 'Node.js', 'Express.js', 'FastAPI'] },
]

const EXPERIENCE = [
  {
    title: "Campus Ambassador · E-Cell IIT Bombay",
    kicker: 'CAMPUS AMBASSADOR · 2026',
    desc: 'Representing E-Cell IIT Bombay on campus, engaging with student communities and helping promote entrepreneurship and innovation initiatives.',
  },
  {
    title: "GSSoC'26",
    kicker: 'GIRLSCRIPT SUMMER OF CODE · 2026',
    desc: 'Participating in an open-source program focused on collaborative development, contributing to real-world repositories while building experience with Git, GitHub, and community-driven workflows.',
  },
  {
    title: 'Open Source Connect · 2026',
    kicker: 'OPEN SOURCE CONTRIBUTOR · 2026',
    desc: 'Contributing to open-source projects through Open Source Connect India and gaining hands-on experience with collaborative development and real-world codebases.',
  },
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

function GithubIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" {...props}>
      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.09 3.29 9.4 7.86 10.93.58.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.68 0-1.25.45-2.28 1.19-3.08-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.76.12 3.05.74.8 1.19 1.83 1.19 3.08 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.14 0 1.55-.01 2.79-.01 3.17 0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12c0-6.27-5.23-11.5-11.5-11.5z" />
    </svg>
  )
}

function LinkedinIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" {...props}>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45z" />
    </svg>
  )
}

function MediumIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" {...props}>
      <path d="M13.54 12a6.8 6.8 0 1 1-13.6 0 6.8 6.8 0 0 1 13.6 0zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.38-2.88-3.38-6.42s1.51-6.42 3.38-6.42c1.87 0 3.38 2.87 3.38 6.42zM24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.57-1.19-5.75s.53-5.75 1.19-5.75c.66 0 1.19 2.57 1.19 5.75z" />
    </svg>
  )
}

export default function App() {
  const [open, setOpen] = useState(false)
  useReveal()

  return (
    <div className="min-h-screen bg-void font-body relative">
      <CursorGlow />
      
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
<section
  id="top"
  className="relative min-h-screen pt-40 pb-32 px-6 md:px-10 bg-ember-radial overflow-hidden"
>
  {/* Gradient Waves Background */}
  <div className="absolute inset-0 z-0">
    <GradientWaves
      horizonColor="#0b0503"
      waveColor="#7c2d12"
      crestColor="#f97316"
      speed={0.4}
      amplitude={3.1}
      waveScale={0.8}
      waveRatio={0.9}
      swell={29.5}
      turbulence={17.5}
      tilt={1.11}
      zoom={1.0}
      height={6.9}
      fogDepth={15}
      detail="medium"
      brightness={1.15}
      opacity={0.7}
      mouseInteraction={true}
      parallaxStrength={0.55}
      grain={true}
      grainIntensity={0.05}
    />
  </div>

  {/* Existing orange glow */}
  <div className="hero-glow absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-ember/20 blur-[140px] rounded-full pointer-events-none z-[1]" />

  {/* Existing hero content */}
  <div className="max-w-6xl mx-auto relative z-10">
    <p
      className="font-mono text-xs uppercase tracking-[0.3em] text-amber mb-6"
      data-reveal
    >
      CS Undergraduate · Amritsar, Punjab
    </p>

    <h1
      className="font-display font-bold text-[15vw] md:text-[7.5rem] leading-[0.9] tracking-tight text-bone mb-8"
      data-reveal
    >
      NAVYA
    </h1>

    <p
      className="font-display text-2xl md:text-4xl text-gradient font-medium max-w-3xl mb-8 leading-tight"
      data-reveal
    >
      Building Systems. Solving Problems.
    </p>

    <p
      className="text-ash text-base md:text-lg max-w-2xl mb-10 leading-relaxed"
      data-reveal
    >
      Sophomore Computer Science Engineering student building software and web
      applications, with a focus on backend systems, databases, and problem
      solving. Currently exploring open source and building things that solve
      real problems.
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
      {/* MOVING STATS STRIP */}
<section className="border-y border-white/5 overflow-hidden py-8">
  <div className="marquee">
    <div className="marquee-track">

      {/* First set */}
      <div className="marquee-item">
        <span className="stat-value">3</span>
        <span className="stat-label">Shipped Projects</span>
      </div>

      <span className="marquee-dot">✦</span>

      <div className="marquee-item">
        <span className="stat-value">GSSoC'26</span>
        <span className="stat-label">Open Source Contributor</span>
      </div>

      <span className="marquee-dot">✦</span>

      <div className="marquee-item">
        <span className="stat-value">B.Tech CSE</span>
        <span className="stat-label">Guru Nanak Dev University</span>
      </div>

      <span className="marquee-dot">✦</span>

      <div className="marquee-item">
        <span className="stat-value">Backend & Web APIs</span>
        <span className="stat-label">Databases · Applications</span>
      </div>

      <span className="marquee-dot">✦</span>


      {/* Duplicate set — makes the loop seamless */}
      <div className="marquee-item">
        <span className="stat-value">3</span>
        <span className="stat-label">Shipped Projects</span>
      </div>

      <span className="marquee-dot">✦</span>

      <div className="marquee-item">
        <span className="stat-value">GSSoC'26</span>
        <span className="stat-label">Open Source Contributor</span>
      </div>

      <span className="marquee-dot">✦</span>

      <div className="marquee-item">
        <span className="stat-value">B.Tech CSE</span>
        <span className="stat-label">Guru Nanak Dev University</span>
      </div>

      <span className="marquee-dot">✦</span>

      <div className="marquee-item">
        <span className="stat-value">Backend & Web APIs</span>
        <span className="stat-label">Databases · Applications</span>
      </div>

      <span className="marquee-dot">✦</span>

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
                <div className="flex flex-wrap gap-4">
                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noreferrer"
                      className="font-mono text-xs uppercase tracking-widest text-amber inline-flex items-center gap-2 hover:gap-3 transition-all"
                    >
                      Live Build <span>↗</span>
                    </a>
                  )}
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      className="font-mono text-xs uppercase tracking-widest text-ash hover:text-amber inline-flex items-center gap-2 hover:gap-3 transition-all"
                    >
                      View Code <span>↗</span>
                    </a>
                  )}
                </div>
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

      {/* EXPERIENCE & COMMUNITY */}
      <section id="experience" className="py-28 px-6 md:px-10 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div data-reveal>
            <SectionLabel n="03">Experience & Community</SectionLabel>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {EXPERIENCE.map((e) => (
              <div key={e.title} className="card-glow rounded-2xl p-7 flex flex-col" data-reveal>
                <h3 className="font-display text-xl font-semibold text-bone mb-1">{e.title}</h3>
                <p className="font-mono text-[11px] uppercase tracking-wide text-amber/80 mb-4">
                  {e.kicker}
                </p>
                <p className="text-ash text-sm leading-relaxed flex-1">{e.desc}</p>
              </div>
            ))}
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
            I’m always looking for the next problem worth solving.
            If you’re building something ambitious and looking for someone curious, driven, and ready to learn, let’s talk.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <a
              href="mailto:navyaumat@gmail.com"
              className="bg-ember text-void font-mono text-xs uppercase tracking-widest px-7 py-3.5 rounded-full font-medium hover:bg-amber transition-colors"
            >
              navyaumat@gmail.com
            </a>
          </div>
          <div className="flex flex-col items-center gap-6">
            <div className="flex justify-center items-center gap-8 font-mono text-xs uppercase tracking-widest text-ash">
              <a
                href="https://github.com/codova01"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="hover:text-amber transition-colors"
              >
                <GithubIcon />
              </a>
              <a
                href="https://linkedin.com/in/navyaumat"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="hover:text-amber transition-colors"
              >
                <LinkedinIcon />
              </a>
              <a
                href="https://medium.com/@navyaau2006"
                target="_blank"
                rel="noreferrer"
                aria-label="Medium"
                className="hover:text-amber transition-colors"
              >
                <MediumIcon />
              </a>
            </div>
            <span className="font-mono text-xs uppercase tracking-widest text-ash">Amritsar, Punjab</span>
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
