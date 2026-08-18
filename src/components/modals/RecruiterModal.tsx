import { X } from 'lucide-react'

interface RecruiterModalProps {
  onClose: () => void
}

export default function RecruiterModal({ onClose }: RecruiterModalProps) {
  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="glass rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 flex justify-between items-center p-6 border-b border-white/10 bg-darker">
          <h2 className="text-3xl font-bold">Recruiter View</h2>
          <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-lg transition-smooth">
            <X size={24} />
          </button>
        </div>

        <div className="p-6 space-y-8">
          {/* Candidate Overview */}
          <div>
            <h3 className="text-xl font-bold text-accent mb-4">Candidate Overview</h3>
            <div className="glass p-6 rounded-lg space-y-3">
              <div className="flex justify-between">
                <span className="text-white/70">Name</span>
                <span className="font-semibold">Akash Nittur</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/70">Phone</span>
                <span className="font-semibold">+91 9113571934</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/70">Email</span>
                <span className="font-semibold">akashnittur143@gmail.com</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/70">Target Role</span>
                <span className="font-semibold text-accent">QA Intern / GenAI QA</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/70">Education</span>
                <span className="font-semibold">B.E. AI & Data Science (2023-2027)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/70">CGPA</span>
                <span className="font-semibold">7.63/10</span>
              </div>
            </div>
          </div>

          {/* Core Strengths */}
          <div>
            <h3 className="text-xl font-bold text-accent mb-4">Core Strengths</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                'Python Programming',
                'SQL & Databases',
                'API Development & Testing',
                'Data Analytics',
                'Backend Engineering',
                'GenAI QA Focus'
              ].map((strength) => (
                <div key={strength} className="glass p-4 rounded-lg flex items-center gap-3">
                  <span className="text-accent font-bold">✓</span>
                  <span>{strength}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Relevant Experience */}
          <div>
            <h3 className="text-xl font-bold text-accent mb-4">Relevant Experience</h3>
            <div className="space-y-4">
              <div className="glass p-4 rounded-lg">
                <p className="font-bold mb-2">Data Analyst Intern – Bluestock Fintech</p>
                <p className="text-white/70 text-sm mb-3">April 2026 – June 2026 | Remote</p>
                <ul className="space-y-1 text-white/70 text-sm">
                  <li>• ETL pipelines, Python, SQL, data validation</li>
                  <li>• Processed 46K+ NAV records, 32K investor transactions</li>
                  <li>• Built REST APIs, designed databases, Power BI dashboards</li>
                  <li>• Demonstrated: analytical thinking, QA mindset, backend knowledge</li>
                </ul>
              </div>
              <div className="glass p-4 rounded-lg">
                <p className="font-bold mb-2">Incoming: Bold Analytics Data Analyst</p>
                <p className="text-white/70 text-sm mb-3">August 25 – October 25, 2026 | Remote</p>
                <p className="text-white/70 text-sm">Data cleaning, transformation, SQL, Python, Power BI, Tableau</p>
              </div>
            </div>
          </div>

          {/* Featured QA Project */}
          <div>
            <h3 className="text-xl font-bold text-accent mb-4">Featured QA Project</h3>
            <div className="glass p-6 rounded-lg border-l-4 border-accent">
              <p className="font-bold mb-2 text-lg">AgentGuard — GenAI Agent QA & Testing Platform</p>
              <p className="text-white/70 text-sm mb-4">
                Experimental platform demonstrating comprehensive QA testing for AI agents, LLM responses, and workflows.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-xs font-bold text-white/50 uppercase mb-2">Test Categories</p>
                  <ul className="space-y-1 text-white/70 text-sm">
                    <li>• Hallucination Testing</li>
                    <li>• Safety Testing</li>
                    <li>• Memory Testing</li>
                    <li>• Tool-Use Validation</li>
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-bold text-white/50 uppercase mb-2">Tech Stack</p>
                  <ul className="space-y-1 text-white/70 text-sm">
                    <li>• React, TypeScript, FastAPI</li>
                    <li>• Python, pytest, SQLite</li>
                    <li>• API Testing, REST APIs</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Interview Topics */}
          <div>
            <h3 className="text-xl font-bold text-accent mb-4">Suggested Interview Topics</h3>
            <div className="glass p-6 rounded-lg">
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  'QA Fundamentals & SDLC',
                  'API Testing & Postman',
                  'Python Programming',
                  'LLM Testing & Hallucinations',
                  'Defect Analysis & Bug Tracking',
                  'Test Case Design',
                  'Data Validation (from background)',
                  'Backend/API Understanding'
                ].map((topic) => (
                  <div key={topic} className="flex items-center gap-2">
                    <span className="text-accent">→</span>
                    <span className="text-white/70">{topic}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Assessment */}
          <div>
            <h3 className="text-xl font-bold text-accent mb-4">Quick Assessment</h3>
            <div className="glass p-6 rounded-lg space-y-3">
              <div className="flex justify-between items-center">
                <span>Technical Foundation</span>
                <span className="text-success">✓ Strong</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Analytical Thinking</span>
                <span className="text-success">✓ Demonstrated</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Python Capability</span>
                <span className="text-success">✓ Proficient</span>
              </div>
              <div className="flex justify-between items-center">
                <span>QA Knowledge</span>
                <span className="text-accent">● Growing (Portfolio)</span>
              </div>
              <div className="flex justify-between items-center">
                <span>GenAI Focus</span>
                <span className="text-accent">● Strong Interest (Specialized Projects)</span>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="glass p-6 rounded-lg border-t border-white/10 mt-6">
            <p className="text-white/70 mb-4 leading-relaxed">
              <span className="font-bold">Assessment:</span> Akash shows strong technical foundation in Python, data, and backend engineering. 
              His focused GenAI QA portfolio demonstrates genuine interest in the space. Ready for hands-on QA intern role with mentoring support.
            </p>
            <button onClick={onClose} className="w-full btn-primary">
              Continue to Full Portfolio
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
