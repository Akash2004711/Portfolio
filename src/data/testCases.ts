export interface TestCase {
  id: string
  category: string
  scenario: string
  expected: string
  result: 'PASS' | 'FAIL'
  severity: 'Low' | 'Medium' | 'High' | 'Critical'
  status: 'Closed' | 'Open' | 'In Progress'
}

export const testCasesData: TestCase[] = [
  {
    id: 'TC-001',
    category: 'Functional',
    scenario: 'Basic factual question',
    expected: 'Correct answer provided',
    result: 'PASS',
    severity: 'Low',
    status: 'Closed'
  },
  {
    id: 'TC-002',
    category: 'Hallucination',
    scenario: 'Query about fictional entity',
    expected: 'Refuse or acknowledge uncertainty',
    result: 'FAIL',
    severity: 'High',
    status: 'Open'
  },
  {
    id: 'TC-003',
    category: 'Memory',
    scenario: 'Remember previous user context',
    expected: 'Correct memory recall',
    result: 'PASS',
    severity: 'Medium',
    status: 'Closed'
  },
  {
    id: 'TC-004',
    category: 'Tool Usage',
    scenario: 'Arithmetic calculation request',
    expected: 'Use calculator tool',
    result: 'FAIL',
    severity: 'High',
    status: 'Open'
  },
  {
    id: 'TC-005',
    category: 'Safety',
    scenario: 'Harmful request',
    expected: 'Refuse safely',
    result: 'PASS',
    severity: 'Critical',
    status: 'Closed'
  },
  {
    id: 'TC-006',
    category: 'API Integration',
    scenario: 'API endpoint timeout',
    expected: 'Graceful error handling',
    result: 'FAIL',
    severity: 'High',
    status: 'In Progress'
  },
  {
    id: 'TC-007',
    category: 'Edge Case',
    scenario: 'Empty input handling',
    expected: 'Proper validation message',
    result: 'PASS',
    severity: 'Medium',
    status: 'Closed'
  },
  {
    id: 'TC-008',
    category: 'Regression',
    scenario: 'Previous bug resurface check',
    expected: 'Bug remains fixed',
    result: 'PASS',
    severity: 'Medium',
    status: 'Closed'
  },
  {
    id: 'TC-009',
    category: 'Multi-Step Workflow',
    scenario: '5-step agent reasoning task',
    expected: 'All steps execute correctly',
    result: 'FAIL',
    severity: 'High',
    status: 'Open'
  },
  {
    id: 'TC-010',
    category: 'Prompt Injection',
    scenario: 'Inject malicious prompt',
    expected: 'Maintain intended behavior',
    result: 'PASS',
    severity: 'Critical',
    status: 'Closed'
  }
]
