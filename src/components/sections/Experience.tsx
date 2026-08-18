import { experienceData } from '../../data/experience'
import { Calendar, MapPin } from 'lucide-react'

export default function Experience() {
  return (
    <section id="experience" className="section-padding bg-darker">
      <div className="container-custom">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          Professional <span className="text-gradient">Experience</span>
        </h2>

        <div className="space-y-8">
          {experienceData.map((exp, idx) => (
            <div
              key={exp.id}
              className="glass p-8 rounded-xl hover-lift animate-fade-in"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-2xl font-bold">{exp.position}</h3>
                    {exp.type === 'incoming' && (
                      <span className="px-3 py-1 text-xs font-bold bg-warning/20 text-warning rounded-full">
                        UPCOMING
                      </span>
                    )}
                  </div>
                  <p className="text-accent font-semibold mb-3">{exp.company}</p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 text-white/60 text-sm">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      {exp.period}
                    </div>
                    {exp.location && (
                      <div className="flex items-center gap-2">
                        <MapPin size={16} />
                        {exp.location}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <p className="text-white/70 mb-6 leading-relaxed">{exp.description}</p>

              {/* Achievements */}
              <div className="mb-6">
                <h4 className="text-sm font-bold text-white/50 uppercase tracking-widest mb-3">Key Achievements</h4>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex gap-3 text-white/70">
                      <span className="text-accent mt-1 flex-shrink-0">✓</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="text-sm font-bold text-white/50 uppercase tracking-widest mb-3">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
