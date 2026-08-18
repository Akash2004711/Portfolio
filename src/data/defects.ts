export interface Defect {
  id: string
  title: string
  severity: 'Low' | 'Medium' | 'High' | 'Critical'
  priority: 'P4' | 'P3' | 'P2' | 'P1'
  category: string
  status: 'Open' | 'In Progress' | 'Retest' | 'Closed'
  testCase: string
  stepsToReproduce: string[]
  expectedResult: string
  actualResult: string
  environment: string
  suggestedFix: string
}

export const defectsData: Defect[] = [
  {
    id: 'BUG-001',
    title: 'Agent fabricates information for unknown entities',
    severity: 'High',
    priority: 'P1',
    category: 'Hallucination',
    status: 'Open',
    testCase: 'TC-002',
    stepsToReproduce: [
      'Launch the QA agent',
      'Input query: "Tell me about the CEO of Fictitious Corp"',
      'Observe agent response'
    ],
    expectedResult: 'Agent should refuse and acknowledge uncertainty',
    actualResult: 'Agent confidently provides fabricated CEO name and background',
    environment: 'Production',
    suggestedFix: 'Implement confidence threshold check and uncertainty detection'
  },
  {
    id: 'BUG-002',
    title: 'Tool selection fails for arithmetic operations',
    severity: 'High',
    priority: 'P1',
    category: 'Tool Usage',
    status: 'Open',
    testCase: 'TC-004',
    stepsToReproduce: [
      'Input math problem: "Calculate 456 × 789"',
      'Agent should select calculator tool',
      'Observe tool usage'
    ],
    expectedResult: 'Calculator tool should be invoked',
    actualResult: 'Agent attempts to calculate manually with errors',
    environment: 'Staging',
    suggestedFix: 'Enhance tool selection logic and arithmetic constraint detection'
  },
  {
    id: 'BUG-003',
    title: 'Multi-step workflow halts at step 3',
    severity: 'High',
    priority: 'P1',
    category: 'Multi-Step Workflow',
    status: 'In Progress',
    testCase: 'TC-009',
    stepsToReproduce: [
      'Execute 5-step workflow',
      'Monitor execution',
      'Check step completion'
    ],
    expectedResult: 'All 5 steps complete successfully',
    actualResult: 'Workflow halts after step 3 with timeout',
    environment: 'Staging',
    suggestedFix: 'Increase timeout threshold and implement step recovery logic'
  },
  {
    id: 'BUG-004',
    title: 'API response timeout under load',
    severity: 'High',
    priority: 'P2',
    category: 'API Integration',
    status: 'In Progress',
    testCase: 'TC-006',
    stepsToReproduce: [
      'Send 50+ concurrent API requests',
      'Monitor response times',
      'Check error rates'
    ],
    expectedResult: 'All requests complete within 2 seconds',
    actualResult: 'Requests timeout after 10 seconds with 5xx errors',
    environment: 'Load Test',
    suggestedFix: 'Implement connection pooling and query optimization'
  },
  {
    id: 'BUG-005',
    title: 'Context memory not persisting across sessions',
    severity: 'Medium',
    priority: 'P2',
    category: 'Memory',
    status: 'Closed',
    testCase: 'TC-003',
    stepsToReproduce: [
      'Establish context in first interaction',
      'End session',
      'Start new session with same user',
      'Query for previous context'
    ],
    expectedResult: 'Previous context should be available',
    actualResult: 'Context correctly persisted (Issue resolved)',
    environment: 'Staging',
    suggestedFix: 'Database persistence was already implemented'
  }
]
