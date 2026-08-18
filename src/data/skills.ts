export interface Skill {
  category: string
  skills: string[]
}

export const skillsData: Skill[] = [
  {
    category: 'Programming',
    skills: ['Python', 'JavaScript', 'SQL', 'HTML5', 'CSS3', 'C/C++', 'Scala']
  },
  {
    category: 'Backend',
    skills: ['Django', 'Flask', 'REST APIs', 'Node.js Basics']
  },
  {
    category: 'Data & Analytics',
    skills: ['Pandas', 'NumPy', 'Power BI', 'Tableau', 'EDA', 'Data Visualization', 'ETL']
  },
  {
    category: 'Databases',
    skills: ['PostgreSQL', 'SQLite', 'SQL', 'Database Design']
  },
  {
    category: 'QA & Testing',
    skills: [
      'Manual Testing',
      'Test Case Design',
      'Defect Reporting',
      'API Testing',
      'Postman',
      'Python Automation',
      'LLM Testing',
      'Hallucination Testing',
      'Safety Testing'
    ]
  },
  {
    category: 'Tools & Platforms',
    skills: ['Git', 'GitHub', 'VS Code', 'Jupyter Notebook', 'Postman']
  }
]
