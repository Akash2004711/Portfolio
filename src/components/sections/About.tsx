import { ArrowDown } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            From Data & Backend Engineering<br />
            to <span className="text-gradient">GenAI Quality</span>
          </h2>

          <p className="text-white/70 text-lg leading-relaxed mb-12">
            My journey in software engineering began with a focus on data analytics, Python, SQL, databases, 
            and backend APIs. I worked with large-scale financial datasets, built ETL pipelines, designed 
            databases, and developed production APIs. Now I'm applying the same analytical mindset and 
            systematic thinking to software quality and GenAI testing.
          </p>

          {/* Data to QA Pipeline */}
          <div className="mb-16">
            <p className="text-center text-white/50 uppercase tracking-widest text-sm mb-8">The Connection</p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-0 md:gap-2">
              {['Data Quality', 'API Reliability', 'Software Testing', 'AI Validation', 'Quality Metrics'].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="glass px-4 py-3 rounded-lg min-w-fit text-center">
                    <p className="font-bold text-accent text-sm">{item}</p>
                  </div>
                  {idx < 4 && <ArrowDown size={20} className="text-accent/50 md:hidden" />}
                  {idx < 4 && <div className="hidden md:block text-accent/50">→</div>}
                </div>
              ))}
            </div>
          </div>

          {/* Key Insight */}
          <div className="glass p-8 rounded-xl border-l-4 border-accent">
            <p className="text-white/80 leading-relaxed mb-4">
              <span className="font-bold text-accent">The Core Insight:</span> Whether validating data quality 
              in a pipeline or evaluating AI agent responses, the principles are the same—systematic testing, 
              rigorous validation, defect detection, and measurable quality metrics.
            </p>
            <p className="text-white/60 text-sm">
              LLM outputs are non-deterministic and context-dependent. Unlike traditional software testing, 
              GenAI QA requires behavioral criteria, hallucination detection, safety guardrails, and multi-step 
              workflow validation rather than exact string matching alone.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
