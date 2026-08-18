import { educationData } from '../../data/achievements'
import { Award, Calendar, MapPin } from 'lucide-react'

export default function EducationSection() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          <span className="text-gradient">Education</span>
        </h2>

        <div className="max-w-3xl mx-auto space-y-8">
          {educationData.map((edu, idx) => (
            <div
              key={idx}
              className="glass p-8 rounded-xl hover-lift animate-fade-in"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 glass rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="text-accent" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold">{edu.degree}</h3>
                  <p className="text-accent font-semibold">{edu.field}</p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3 text-white/70">
                  <MapPin size={18} className="text-accent/50" />
                  <span>{edu.institution}</span>
                </div>
                <div className="flex items-center gap-3 text-white/70">
                  <Calendar size={18} className="text-accent/50" />
                  <span>{edu.period}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm font-semibold">
                    {edu.score}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="mt-12 glass p-6 rounded-xl border-l-4 border-accent max-w-3xl mx-auto">
          <p className="text-white/70">
            <span className="font-semibold text-accent">Current Status:</span> Actively pursuing B.E. Artificial Intelligence & Data Science. 
            Graduation expected in 2027. Parallel focus on building GenAI QA expertise through portfolio projects and continuous learning.
          </p>
        </div>
      </div>
    </section>
  )
}
