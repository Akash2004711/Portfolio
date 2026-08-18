import { Code } from 'lucide-react'

export default function APITestingSection() {
  const pipelineSteps = [
    { label: 'POST Request', icon: '📤' },
    { label: 'Validation', icon: '✓' },
    { label: 'Execution', icon: '⚡' },
    { label: 'Evaluation', icon: '🔍' },
    { label: 'Response', icon: '📥' },
    { label: 'Report', icon: '📊' }
  ]

  return (
    <section className="section-padding">
      <div className="container-custom">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          API Testing & <span className="text-gradient">Backend</span>
        </h2>
        <p className="text-white/60 text-center max-w-2xl mx-auto mb-12">
          Comprehensive API testing strategies for REST endpoints, backend validation, and integration testing.
        </p>

        {/* Tech Stack */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {[
            { title: 'REST APIs', desc: 'HTTP methods, status codes, request/response validation' },
            { title: 'Backend Frameworks', desc: 'Django, Flask, FastAPI, Node.js' },
            { title: 'Testing Tools', desc: 'Postman, pytest, unittest, integration testing' }
          ].map((item, idx) => (
            <div key={idx} className="glass p-6 rounded-xl hover-lift">
              <p className="font-bold text-lg mb-2">{item.title}</p>
              <p className="text-white/60 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* API Pipeline */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">API Test Execution Pipeline</h3>
          <div className="glass p-8 rounded-xl mb-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              {pipelineSteps.map((step, idx) => (
                <div key={idx} className="flex flex-col items-center gap-2">
                  <div className="w-16 h-16 glass rounded-lg flex items-center justify-center text-2xl hover-lift">
                    {step.icon}
                  </div>
                  <p className="text-xs text-center font-semibold text-white/70">{step.label}</p>
                  {idx < pipelineSteps.length - 1 && (
                    <div className="hidden md:block w-8 h-0.5 bg-gradient-to-r from-accent to-transparent ml-4" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Example Response */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-6 text-center">Example API Response</h3>
          <div className="glass p-6 rounded-xl mb-6">
            <div className="flex items-center gap-2 mb-4">
              <Code size={20} className="text-accent" />
              <span className="text-sm font-mono text-accent">POST /api/tests/execute</span>
            </div>
            <pre className="text-white/70 text-sm overflow-x-auto">
{`{
  "test_id": "TC-001",
  "status": "PASS",
  "score": 92,
  "hallucination_risk": "LOW",
  "execution_time_ms": 1240,
  "test_category": "Functional",
  "evidence": {
    "input": "What is 2 + 2?",
    "expected": "4",
    "actual": "The sum of 2 and 2 is 4",
    "confidence": 0.98
  },
  "metadata": {
    "model": "GPT-4",
    "temperature": 0.7,
    "timestamp": "2026-08-18T10:30:00Z"
  }
}`}
            </pre>
          </div>

          {/* Key Testing Areas */}
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'Status Code Validation', items: ['200 OK', '201 Created', '400 Bad Request', '500 Internal Server Error'] },
              { title: 'Response Validation', items: ['JSON schema validation', 'Required fields present', 'Type validation', 'Data format checks'] },
              { title: 'Error Handling', items: ['Graceful error messages', 'Proper HTTP status codes', 'Error details included', 'Retry-ability'] },
              { title: 'Performance Testing', items: ['Response time < 2s', 'Throughput validation', 'Concurrent requests', 'Load testing'] }
            ].map((area, idx) => (
              <div key={idx} className="glass p-6 rounded-xl">
                <p className="font-bold mb-3">{area.title}</p>
                <ul className="space-y-2">
                  {area.items.map((item, i) => (
                    <li key={i} className="flex gap-2 text-white/70 text-sm">
                      <span className="text-accent">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
