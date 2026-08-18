export interface Project {
  id: string
  title: string
  subtitle: string
  description: string
  technologies: string[]
  featured?: boolean
  type: 'featured' | 'general'
  metrics?: { label: string; value: string }[]
  link?: string
  github?: string
}

export const projectsData: Project[] = [
  {
    id: 'agentguard',
    title: 'AgentGuard',
    subtitle: 'GenAI Agent QA & Testing Platform',
    description: 'An experimental QA platform for testing AI agents, LLM responses and multi-step workflows. Demonstrates comprehensive testing strategies for generative AI including hallucination detection, safety testing, memory validation, and tool-use verification.',
    technologies: ['React', 'TypeScript', 'Python', 'FastAPI', 'SQLite', 'pytest', 'Postman', 'REST APIs'],
    featured: true,
    type: 'featured',
    metrics: [
      { label: 'Test Categories', value: '8+' },
      { label: 'Test Cases', value: '50+' },
      { label: 'Automation', value: 'pytest' },
      { label: 'Coverage', value: 'Comprehensive' }
    ]
  },
  {
    id: 'financial-analytics',
    title: 'Financial Analytics Dashboard',
    subtitle: 'Data-Driven Financial Intelligence System',
    description: 'End-to-end financial analytics platform processing large-scale investment data. Built during Bluestock Fintech internship, demonstrating data validation, ETL pipeline design, and backend API development.',
    technologies: ['Python', 'SQL', 'Power BI', 'PostgreSQL', 'Django REST API', 'Pandas'],
    featured: true,
    type: 'featured',
    metrics: [
      { label: 'NAV Records', value: '46K+' },
      { label: 'Transactions', value: '32K+' },
      { label: 'Pipeline', value: 'Automated' },
      { label: 'Backend', value: 'REST API' }
    ]
  },
  {
    id: 'quiz-app',
    title: 'General Knowledge Quiz Application',
    subtitle: 'Interactive Quiz with Real-time Validation',
    description: 'Dynamic quiz application demonstrating real-time score tracking, timer management, and answer validation. Useful for understanding test scenarios including boundary testing, UI responsiveness, and input validation.',
    technologies: ['HTML5', 'CSS3', 'JavaScript'],
    type: 'general',
    metrics: [
      { label: 'Questions', value: '10' },
      { label: 'Timer', value: '60s' },
      { label: 'Responsive', value: 'Yes' },
      { label: 'Validation', value: 'Real-time' }
    ]
  },
  {
    id: 'todo-app',
    title: 'To-Do List Web Application',
    subtitle: 'Full-featured Task Management System',
    description: 'Complete task management application with CRUD operations, persistent storage, and search functionality. Demonstrates data persistence, state management, and comprehensive test scenarios.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Local Storage'],
    type: 'general',
    metrics: [
      { label: 'Features', value: 'CRUD' },
      { label: 'Storage', value: 'Persistent' },
      { label: 'Search', value: 'Supported' },
      { label: 'Responsive', value: 'Yes' }
    ]
  }
]
