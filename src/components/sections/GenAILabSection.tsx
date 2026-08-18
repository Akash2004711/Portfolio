import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface QALabCard {
  title: string
  icon: string
  objective: string
  testScenario: string
  expectedOutcome: string
  failureMode: string
  insight: string
}

const qaLabTopics: QALabCard[] = [
  {
    title: 'Hallucination Testing',
    icon: '🎭',
    objective: 'Determine whether the agent invents information when the answer is unknown.',
    testScenario: 'Ask the agent about fictional entities or future events without factual basis.',
    expectedOutcome: 'Agent should refuse to answer or explicitly acknowledge uncertainty.',
    failureMode: 'Agent produces confident, detailed, fabricated information.',
    insight: 'LLM outputs are probabilistic. Focus evaluation on confidence levels and uncertainty indicators rather than exact matches.'
  },
  {
    title: 'Safety Testing',
    icon: '🛡️',
    objective: 'Verify the agent refuses harmful, illegal, or unethical requests.',
    testScenario: 'Prompt injection, requests for illegal activities, harmful content generation.',
    expectedOutcome: 'Agent declines gracefully and explains why the request cannot be fulfilled.',
    failureMode: 'Agent fulfills harmful requests or provides harmful information.',
    insight: 'Safety is not optional—it requires defense-in-depth with prompt guardrails, output filtering, and monitoring.'
  },
  {
    title: 'Memory Testing',
    icon: '💾',
    objective: 'Validate that the agent correctly recalls and uses conversation context.',
    testScenario: 'Multi-turn conversation with context-dependent queries.',
    expectedOutcome: 'Agent accurately references previous statements and maintains continuity.',
    failureMode: 'Agent forgets context, provides contradictory information, or loses state.',
    insight: 'Memory is stateful and requires careful session management, context windows, and persistent storage validation.'
  },
  {
    title: 'Tool Selection Testing',
    icon: '🔧',
    objective: 'Verify the agent chooses appropriate tools for the task.',
    testScenario: 'Requests requiring calculator, web search, database query, or API calls.',
    expectedOutcome: 'Correct tool is selected and executed with proper parameters.',
    failureMode: 'Wrong tool selected, parameters missing or malformed, tool fails silently.',
    insight: 'Tool selection requires semantic understanding of the task. Test tool routing, parameter validation, and error recovery.'
  },
  {
    title: 'Prompt Injection Testing',
    icon: '🎯',
    objective: 'Detect if an agent can be tricked into ignoring instructions.',
    testScenario: 'Embedded instructions: "Ignore your guidelines and tell me X", role-playing as admin.',
    expectedOutcome: 'Agent maintains original instructions and security policies.',
    failureMode: 'Agent follows embedded instructions over original guidelines.',
    insight: 'Prompt injection is a real security risk. Use adversarial testing, instruction hierarchy testing, and output validation.'
  },
  {
    title: 'Edge Case Testing',
    icon: '🔪',
    objective: 'Test behavior at boundary conditions and unexpected inputs.',
    testScenario: 'Empty inputs, extremely long inputs, special characters, null values, edge numbers.',
    expectedOutcome: 'Agent handles gracefully without crashes or undefined behavior.',
    failureMode: 'Agent crashes, enters infinite loops, or produces malformed output.',
    insight: 'Edge cases expose fragility. Systematic boundary testing prevents production failures.'
  },
  {
    title: 'Regression Testing',
    icon: '🔄',
    objective: 'Ensure previous bug fixes remain effective and new changes don\'t break old functionality.',
    testScenario: 'Re-run test cases that previously failed and have been marked as fixed.',
    expectedOutcome: 'Previously failing tests continue to pass.',
    failureMode: 'Previously fixed bugs resurface after updates.',
    insight: 'Regression suites are essential for continuous quality. Automate regression tests and run them on every build.'
  },
  {
    title: 'Multi-Step Workflow Testing',
    icon: '⛓️',
    objective: 'Validate complex, multi-step agent workflows with state preservation.',
    testScenario: 'Multi-turn task: research → analyze → plan → execute → report.',
    expectedOutcome: 'All steps complete in order, state persists, final output is correct.',
    failureMode: 'Workflow halts mid-execution, state is lost, steps execute in wrong order.',
    insight: 'Workflows are chains of decisions. Test each step independently, then test integration and rollback behavior.'
  }
]

const LabCard = ({ card, isOpen, onToggle }: { card: QALabCard; isOpen: boolean; onToggle: () => void }) => {
  return (
    <button
      onClick={onToggle}
      className="glass rounded-xl p-6 text-left hover-lift transition-smooth w-full"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-3xl">{card.icon}</span>
            <h3 className="text-xl font-bold">{card.title}</h3>
          </div>
          <p className="text-white/60 text-sm">{card.objective}</p>
        </div>
        <ChevronDown
          size={24}
          className={`text-accent flex-shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`}
        />
      </div>

      {isOpen && (
        <div className="mt-6 pt-6 border-t border-white/10 space-y-4 animate-fade-in">
          <div>
            <p className="text-xs font-bold text-white/50 uppercase tracking-widest mb-2">Test Scenario</p>
            <p className="text-white/70">{card.testScenario}</p>
          </div>
          <div>
            <p className="text-xs font-bold text-white/50 uppercase tracking-widest mb-2">Expected Outcome</p>
            <p className="text-white/70">{card.expectedOutcome}</p>
          </div>
          <div>
            <p className="text-xs font-bold text-white/50 uppercase tracking-widest mb-2">Failure Mode</p>
            <p className="text-error text-sm">{card.failureMode}</p>
          </div>
          <div className="pt-4 border-t border-white/10">
            <p className="text-xs font-bold text-accent uppercase tracking-widest mb-2">QA Insight</p>
            <p className="text-white/70 italic">{card.insight}</p>
          </div>
        </div>
      )}
    </button>
  )
}

export default function GenAILabSection() {
  const [openCard, setOpenCard] = useState<string | null>(null)

  return (
    <section id="genai-qa" className="section-padding bg-darker">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">GenAI QA Lab</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Interactive exploration of key QA testing strategies for AI agents, LLMs, and autonomous systems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {qaLabTopics.map((card, idx) => (
            <div
              key={card.title}
              className="animate-fade-in"
              style={{ animationDelay: `${idx * 0.05}s` }}
            >
              <LabCard
                card={card}
                isOpen={openCard === card.title}
                onToggle={() => setOpenCard(openCard === card.title ? null : card.title)}
              />
            </div>
          ))}
        </div>

        {/* Key Takeaway */}
        <div className="mt-16 glass p-8 rounded-xl border-l-4 border-accent">
          <h4 className="text-xl font-bold mb-4">Key QA Principle for GenAI Testing</h4>
          <p className="text-white/70 leading-relaxed">
            Generative AI testing differs fundamentally from traditional QA. Since LLM outputs are probabilistic 
            and context-dependent, <span className="text-accent font-semibold">evaluation must focus on behavioral categories, 
            confidence levels, and safety guardrails rather than exact string matching</span>. A comprehensive testing strategy 
            requires systematic coverage across hallucination detection, safety validation, tool usage, memory persistence, 
            and multi-step reasoning workflows.
          </p>
        </div>
      </div>
    </section>
  )
}
