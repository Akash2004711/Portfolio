import { skillsData } from '../../data/skills'

export default function SkillsSection() {
  return (
    <section id="skills" className="section-padding bg-darker">
      <div className="container-custom">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          Technical <span className="text-gradient">Skills</span>
        </h2>
        <p className="text-white/60 text-center max-w-2xl mx-auto mb-16">
          Organized by category rather than subjective percentages. Listed skills represent hands-on experience or active focus.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((skillGroup, idx) => (
            <div
              key={skillGroup.category}
              className="glass p-8 rounded-xl hover-lift animate-fade-in"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <h3 className="text-xl font-bold mb-6 text-gradient">{skillGroup.category}</h3>
              <div className="flex flex-wrap gap-3">
                {skillGroup.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-white/5 text-white/80 rounded-lg text-sm hover:bg-white/10 transition-smooth hover-lift"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="mt-16 glass p-8 rounded-xl max-w-2xl mx-auto">
          <h4 className="font-bold mb-4">How to Read This</h4>
          <p className="text-white/70 leading-relaxed">
            Skills listed here represent actual experience or current focus areas. Rather than using subjective percentage scales, 
            I've organized skills by category and context. <span className="text-accent">QA & Testing</span> skills marked as 
            "<span className="text-accent">focus areas</span>" reflect my active pursuit of GenAI QA expertise, supported by portfolio projects and learning.
          </p>
        </div>
      </div>
    </section>
  )
}
