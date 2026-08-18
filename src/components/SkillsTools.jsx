import "./SkillsTools.css";

const SKILLS = [
  "Python",
  "C++",
  "JavaScript",
  "SQL / PostgreSQL",
  "Supabase",
  "REST APIs",
  "Relational DB Design",
  "Git & GitHub",
  "Version Control",
  "Debugging",
  "Web Accessibility",
  "Streamlit",
  "Node.js",
  "Express.js",
  "FastAPI",
];

export default function SkillsTools() {
  return (
    <section className="skills-wrap">
      <div className="skills-grid">
        {SKILLS.map((skill, i) => (
          <div
            key={skill}
            className="skill-card"
            style={{ animationDelay: `${0.1 + i * 0.06}s` }}
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
