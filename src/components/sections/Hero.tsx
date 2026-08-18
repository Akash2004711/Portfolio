import { ArrowRight, Download } from 'lucide-react'

const QAFlowVisualization = () => {
  const nodes = [
    { label: 'Input', icon: '📝' },
    { label: 'AI Agent', icon: '🤖' },
    { label: 'Reasoning', icon: '🧠' },
    { label: 'Tools', icon: '🔧' },
    { label: 'Execution', icon: '⚡' },
    { label: 'Evaluation', icon: '✓' },
    { label: 'Result', icon: '📊' }
  ]

  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-1">
      {nodes.map((node, idx) => (
        <div key={idx} className="flex items-center gap-2">
          <div className="glass px-4 py-3 rounded-lg hover-lift min-w-fit">
            <div className="text-2xl mb-1">{node.icon}</div>
            <div className="text-xs font-medium text-white/70">{node.label}</div>
          </div>
          {idx < nodes.length - 1 && (
            <ArrowRight size={20} className="text-accent/50 hidden md:block" />
          )}
        </div>
      ))}
    </div>
  )
}

export default function Hero() {
  return (
    <section className="min-h-screen pt-20 pb-20 flex items-center justify-center relative overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-grid opacity-10" />
      
      {/* Gradient orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-accent-purple/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-8">
        <div className="text-center animate-fade-in">
          {/* Badge */}
          <div className="inline-block mb-6">
            <span className="status-badge bg-accent/20 text-accent">
              🚀 AI & Data Science Engineer
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Building Reliable{' '}
            <span className="text-gradient">AI Systems</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-white/60 max-w-3xl mx-auto mb-8">
            Artificial Intelligence & Data Science undergraduate focused on building, testing, and improving intelligent software systems through Python, data analytics, backend engineering, API testing, and GenAI QA.
          </p>

          {/* Tech tags */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {['Python', 'API Testing', 'LLM Testing', 'Test Design', 'Data', 'Quality'].map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 glass text-sm text-white/70 rounded-full hover-lift"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Availability indicator */}
          <div className="mb-12 inline-block">
            <span className="px-4 py-2 glass text-sm text-success/80 rounded-full">
              ✓ Open to QA / GenAI QA / Software Engineering Opportunities
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a href="#projects" className="btn-primary inline-flex items-center justify-center gap-2">
              Explore My Work
              <ArrowRight size={18} />
            </a>
            <a href="#genai-qa" className="btn-secondary inline-flex items-center justify-center gap-2">
              View GenAI QA Project
            </a>
            <button className="btn-tertiary inline-flex items-center justify-center gap-2">
              <Download size={18} />
              Download Resume
            </button>
          </div>
        </div>

        {/* QA Flow Visualization */}
        <div className="mt-20 animate-slide-up">
          <div className="mb-8 text-center">
            <p className="text-white/50 text-sm uppercase tracking-widest">How QA Works</p>
          </div>
          <QAFlowVisualization />
        </div>
      </div>
    </section>
  )
}
