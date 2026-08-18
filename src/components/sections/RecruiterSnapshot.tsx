import { Code, Database, Zap, GitBranch, Brain, CheckCircle } from 'lucide-react'

const SnapshotCard = ({ icon: Icon, title, description }: any) => {
  return (
    <div className="glass p-6 rounded-xl hover-lift group">
      <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/30 transition-smooth">
        <Icon className="text-accent" size={24} />
      </div>
      <h3 className="font-bold text-lg mb-2">{title}</h3>
      <p className="text-white/60 text-sm leading-relaxed">{description}</p>
    </div>
  )
}

export default function RecruiterSnapshot() {
  const snapshots = [
    {
      icon: Code,
      title: 'Python & SQL',
      description: 'Used for ETL pipelines, data processing, analytics and backend API development.'
    },
    {
      icon: Database,
      title: 'Data Analytics',
      description: 'Pandas, NumPy, Power BI dashboards, and exploratory data analysis on production datasets.'
    },
    {
      icon: Zap,
      title: 'REST APIs',
      description: 'Django and Flask backend development, REST API design, and API testing with Postman.'
    },
    {
      icon: GitBranch,
      title: 'Backend Development',
      description: 'PostgreSQL, SQLite, database design, and production-level fintech applications.'
    },
    {
      icon: Brain,
      title: 'GenAI QA',
      description: 'LLM testing, hallucination detection, safety testing, and agent behavior validation.'
    },
    {
      icon: CheckCircle,
      title: 'Analytical Problem Solving',
      description: 'Evidence-based thinking, data validation, defect analysis, and systematic testing.'
    }
  ]

  return (
    <section id="recruiter-snapshot" className="section-padding bg-darker">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why <span className="text-gradient">Akash?</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            A quick overview of core strengths and relevant experience for QA engineering roles.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {snapshots.map((snapshot, idx) => (
            <div key={idx} className="animate-fade-in" style={{ animationDelay: `${idx * 0.1}s` }}>
              <SnapshotCard {...snapshot} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
