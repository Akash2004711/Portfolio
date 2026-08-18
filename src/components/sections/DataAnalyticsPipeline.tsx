import { ArrowRight } from 'lucide-react'

interface PipelineStage {
  label: string
  icon: string
  description: string
  tools: string[]
}

const pipelineStages: PipelineStage[] = [
  {
    label: 'Raw Data',
    icon: '📦',
    description: 'Unprocessed data from various sources',
    tools: ['SQL', 'APIs', 'CSV files', 'Databases']
  },
  {
    label: 'Cleaning',
    icon: '🧹',
    description: 'Handle missing values, duplicates, outliers',
    tools: ['Pandas', 'NumPy', 'Python']
  },
  {
    label: 'Transformation',
    icon: '🔄',
    description: 'Reshape, aggregate, and normalize data',
    tools: ['SQL', 'Pandas', 'ETL']
  },
  {
    label: 'Validation',
    icon: '✓',
    description: 'Ensure data quality and integrity',
    tools: ['SQL checks', 'Data profiling', 'Validation scripts']
  },
  {
    label: 'Analysis',
    icon: '📊',
    description: 'Exploratory analysis and insights',
    tools: ['Pandas', 'NumPy', 'Statistical tests']
  },
  {
    label: 'Visualization',
    icon: '📈',
    description: 'Create dashboards and reports',
    tools: ['Power BI', 'Tableau', 'Python plots']
  },
  {
    label: 'Decision',
    icon: '🎯',
    description: 'Drive business decisions',
    tools: ['Insights', 'Recommendations', 'Actions']
  }
]

const qaAnalogousStages = [
  {
    label: 'Input',
    icon: '📝',
    description: 'Test prompts and scenarios',
    analog: 'Raw Data'
  },
  {
    label: 'Execution',
    icon: '⚡',
    description: 'Run AI agent with input',
    analog: 'Cleaning'
  },
  {
    label: 'Validation',
    icon: '✓',
    description: 'Check response quality and accuracy',
    analog: 'Validation'
  },
  {
    label: 'Defect Detection',
    icon: '🐛',
    description: 'Identify hallucinations, errors, safety issues',
    analog: 'Cleaning'
  },
  {
    label: 'Metrics',
    icon: '📊',
    description: 'Calculate quality scores and KPIs',
    analog: 'Analysis'
  },
  {
    label: 'Decision',
    icon: '🎯',
    description: 'Pass/Fail, prioritize fixes, release decisions',
    analog: 'Decision'
  }
]

export default function DataAnalyticsPipeline() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          Data Analytics <span className="text-gradient">Pipeline</span>
        </h2>
        <p className="text-white/60 text-center max-w-2xl mx-auto mb-12">
          From raw data to actionable insights—and how these principles transfer to QA workflows.
        </p>

        {/* Data Pipeline */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Analytics Data Pipeline</h3>
          <div className="glass p-8 rounded-xl">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 overflow-x-auto pb-4">
              {pipelineStages.map((stage, idx) => (
                <div key={idx} className="flex items-center gap-3 flex-shrink-0">
                  <div className="text-center">
                    <div className="text-4xl mb-2">{stage.icon}</div>
                    <p className="font-bold text-sm mb-1">{stage.label}</p>
                    <p className="text-xs text-white/50 max-w-32">{stage.description}</p>
                    <div className="flex flex-wrap gap-1 justify-center mt-2">
                      {stage.tools.slice(0, 2).map((tool, i) => (
                        <span key={i} className="text-xs bg-accent/10 text-accent px-2 py-0.5 rounded">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                  {idx < pipelineStages.length - 1 && (
                    <ArrowRight className="text-accent/50 hidden md:block flex-shrink-0" size={20} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Parallel Pipeline - QA */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-8 text-center">How It Applies to <span className="text-gradient">QA Testing</span></h3>
          <div className="glass p-8 rounded-xl">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 overflow-x-auto pb-4">
              {qaAnalogousStages.map((stage, idx) => (
                <div key={idx} className="flex items-center gap-3 flex-shrink-0">
                  <div className="text-center">
                    <div className="text-4xl mb-2">{stage.icon}</div>
                    <p className="font-bold text-sm mb-1">{stage.label}</p>
                    <p className="text-xs text-white/50 max-w-32">{stage.description}</p>
                    <p className="text-xs text-accent/70 mt-2">
                      cf. {stage.analog}
                    </p>
                  </div>
                  {idx < qaAnalogousStages.length - 1 && (
                    <ArrowRight className="text-accent-purple/50 hidden md:block flex-shrink-0" size={20} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Key Insight */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="glass p-8 rounded-xl border-l-4 border-accent">
            <h4 className="font-bold mb-4">Data Analytics Foundation</h4>
            <p className="text-white/70 leading-relaxed mb-4">
              My experience with ETL pipelines, data validation, and quality checks directly transfers to QA. 
              Both disciplines require:
            </p>
            <ul className="space-y-2">
              {[
                'Systematic validation workflows',
                'Defect detection and categorization',
                'Measurable quality metrics',
                'Documentation and traceability',
                'Continuous monitoring for failures'
              ].map((item, idx) => (
                <li key={idx} className="flex gap-2 text-white/70">
                  <span className="text-accent">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="glass p-8 rounded-xl border-l-4 border-accent-purple">
            <h4 className="font-bold mb-4">QA Testing Application</h4>
            <p className="text-white/70 leading-relaxed mb-4">
              These analytic principles scale to GenAI QA:
            </p>
            <ul className="space-y-2">
              {[
                'Test data preparation (quality matters)',
                'Hallucination detection (data anomaly detection)',
                'Multi-step validation (pipeline integrity)',
                'Defect categorization (root cause analysis)',
                'QA metrics & dashboards (decision-making)'
              ].map((item, idx) => (
                <li key={idx} className="flex gap-2 text-white/70">
                  <span className="text-accent-purple">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
