import { CheckCircle } from 'lucide-react'

interface Mapping {
  requirement: string
  evidence: string
  icon: string
}

const mappings: Mapping[] = [
  { requirement: 'Generative AI / LLMs', evidence: 'AgentGuard, GenAI QA Lab', icon: '🤖' },
  { requirement: 'QA Principles & SDLC', evidence: 'Test Case Explorer, QA Documentation', icon: '✓' },
  { requirement: 'Python Programming', evidence: 'ETL Pipelines, API Development, Test Automation', icon: '🐍' },
  { requirement: 'Bug Tracking & Defect Analysis', evidence: 'QA Defect Tracker Kanban Board', icon: '🐛' },
  { requirement: 'API Testing', evidence: 'REST API Projects, Postman, Backend Development', icon: '🔌' },
  { requirement: 'Analytical Thinking', evidence: 'Financial Analytics Project, Data Science Background', icon: '🧠' },
  { requirement: 'Edge Case Testing', evidence: 'GenAI QA Lab - Edge Case Card', icon: '🔪' },
  { requirement: 'Hallucination Testing', evidence: 'AgentGuard Core Feature, GenAI QA Lab', icon: '🎭' },
  { requirement: 'Memory Testing', evidence: 'GenAI QA Lab - Memory Testing Card', icon: '💾' },
  { requirement: 'Tool Selection & Usage', evidence: 'AgentGuard - Tool-Use Testing, GenAI QA Lab', icon: '🔧' },
  { requirement: 'Multi-Step Workflow Testing', evidence: 'AgentGuard Workflows, GenAI QA Lab', icon: '⛓️' },
  { requirement: 'QA Documentation & Reports', evidence: 'Test Cases, Defect Reports, QA Metrics', icon: '📄' }
]

const MappingRow = ({ mapping }: { mapping: Mapping }) => {
  return (
    <div className="glass p-6 rounded-xl hover-lift">
      <div className="flex items-start gap-4">
        <span className="text-2xl flex-shrink-0">{mapping.icon}</span>
        <div className="flex-1 min-w-0">
          <p className="font-bold mb-2">{mapping.requirement}</p>
          <p className="text-accent text-sm">→ {mapping.evidence}</p>
        </div>
        <CheckCircle className="text-success flex-shrink-0 mt-1" size={20} />
      </div>
    </div>
  )
}

export default function JobMatchSection() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          How My Skills Map to <span className="text-gradient">Impact Analytics QA</span>
        </h2>
        <p className="text-white/60 text-center max-w-2xl mx-auto mb-12">
          Portfolio evidence for the Impact Analytics QA Intern role requirements and testing capabilities.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {mappings.map((mapping) => (
            <MappingRow key={mapping.requirement} mapping={mapping} />
          ))}
        </div>

        {/* Summary */}
        <div className="glass p-8 rounded-xl border-l-4 border-accent-purple">
          <h3 className="text-2xl font-bold mb-4">Why This Mapping Matters</h3>
          <p className="text-white/70 leading-relaxed mb-4">
            This portfolio is specifically designed to demonstrate that I have the foundation to excel as a QA engineer. 
            My experience with Python, APIs, data validation, and analytical thinking transfers directly to software quality. 
            The <span className="text-accent">GenAI QA focus</span> shows I've thought deeply about how quality assurance evolves 
            when software becomes non-deterministic, context-dependent, and powered by large language models.
          </p>
          <p className="text-white/70 leading-relaxed">
            I'm not claiming to be an expert QA engineer with years of production experience. Instead, I'm demonstrating 
            <span className="text-accent-purple"> systematic thinking, hands-on project experience, analytical rigor, and 
            genuine interest in building reliable intelligent systems</span>—exactly what you look for in a strong QA intern.
          </p>
        </div>
      </div>
    </section>
  )
}
