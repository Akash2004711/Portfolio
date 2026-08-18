export interface Experience {
  id: string
  company: string
  position: string
  period: string
  location?: string
  type: 'completed' | 'incoming'
  description: string
  achievements: string[]
  technologies: string[]
}

export const experienceData: Experience[] = [
  {
    id: 'bluestock',
    company: 'Bluestock Fintech Pvt. Ltd.',
    position: 'Data Analyst Intern',
    period: 'April 2026 – June 2026',
    location: 'Remote',
    type: 'completed',
    description: 'Developed end-to-end data solutions for fintech operations, including ETL pipelines, financial analytics, and backend APIs.',
    achievements: [
      'Built end-to-end ETL pipelines using Python and SQL',
      'Processed 46,000+ NAV records and 32,000 investor transactions',
      'Developed interactive Power BI dashboards for financial reporting',
      'Designed normalized PostgreSQL and SQLite databases',
      'Performed Exploratory Data Analysis and financial risk analysis',
      'Built backend REST APIs using Django',
      'Worked on production-level FinTech projects'
    ],
    technologies: ['Python', 'SQL', 'Power BI', 'PostgreSQL', 'SQLite', 'Django', 'ETL', 'Git']
  },
  {
    id: 'bold-analytics',
    company: 'Bold Analytics',
    position: 'Data Analyst Intern',
    period: 'August 25, 2026 – October 25, 2026',
    location: 'Remote',
    type: 'incoming',
    description: 'Focused on data cleaning, processing, transformation, and analysis using modern analytics tools.',
    achievements: [
      'Data cleaning and data quality assurance',
      'Data processing and transformation workflows',
      'Data analysis using SQL, Excel and Python',
      'Data visualization using Power BI and Tableau',
      'Structured and unstructured data handling',
      'Analytical problem solving'
    ],
    technologies: ['Python', 'SQL', 'Excel', 'Power BI', 'Tableau']
  }
]
