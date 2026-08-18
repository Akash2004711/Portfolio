import { achievementsData } from '../../data/achievements'

export default function AchievementsTimeline() {
  return (
    <section className="section-padding bg-darker">
      <div className="container-custom">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          Career <span className="text-gradient">Timeline</span>
        </h2>
        <p className="text-white/60 text-center max-w-2xl mx-auto mb-16">
          Key milestones and achievements in education and professional development.
        </p>

        <div className="max-w-3xl mx-auto">
          {achievementsData.map((achievement, idx) => (
            <div key={idx} className="flex gap-6 mb-8 animate-fade-in" style={{ animationDelay: `${idx * 0.1}s` }}>
              {/* Timeline line and dot */}
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 rounded-full bg-gradient-to-r from-accent to-accent-purple" />
                {idx < achievementsData.length - 1 && (
                  <div className="w-1 h-20 bg-gradient-to-b from-accent/50 to-transparent mt-2" />
                )}
              </div>

              {/* Content */}
              <div className="glass p-6 rounded-xl hover-lift flex-1 mb-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-bold text-accent uppercase tracking-widest mb-2">
                      {achievement.year}
                    </p>
                    <p className="text-xl font-bold mb-2">{achievement.title}</p>
                    <p className="text-white/70">{achievement.description}</p>
                  </div>
                  <span className={`text-xs font-bold px-3 py-1 rounded-full flex-shrink-0 ${
                    achievement.category === 'Education' ? 'bg-accent/20 text-accent' :
                    achievement.category === 'Internship' ? 'bg-success/20 text-success' :
                    achievement.category === 'Hackathon' ? 'bg-accent-purple/20 text-accent-purple' :
                    'bg-warning/20 text-warning'
                  }`}>
                    {achievement.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
