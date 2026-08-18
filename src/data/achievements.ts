export interface Achievement {
  year: number
  title: string
  description: string
  category: 'Education' | 'Internship' | 'Hackathon' | 'Workshop'
}

export interface Education {
  institution: string
  degree: string
  field: string
  period: string
  score: string
}

export const achievementsData: Achievement[] = [
  {
    year: 2021,
    title: 'SSLC - 92.16%',
    description: 'Nayak Student Federation High School',
    category: 'Education'
  },
  {
    year: 2023,
    title: 'PUC - 89.5%',
    description: 'Ekalavya Model Residential PU College',
    category: 'Education'
  },
  {
    year: 2023,
    title: 'Started Bachelor of Engineering',
    description: 'Artificial Intelligence & Data Science at SGBIT',
    category: 'Education'
  },
  {
    year: 2025,
    title: 'Smart India Hackathon Selection',
    description: 'Selected for national-level hackathon competition',
    category: 'Hackathon'
  },
  {
    year: 2025,
    title: 'Internal Hackathon Participant',
    description: 'Developed innovative solutions in institutional hackathon',
    category: 'Hackathon'
  },
  {
    year: 2025,
    title: 'OneST Hackathon Participant',
    description: 'Contributed to hackathon event',
    category: 'Hackathon'
  },
  {
    year: 2025,
    title: 'iFutureTech Workshop',
    description: 'Completed advanced technology workshop',
    category: 'Workshop'
  },
  {
    year: 2026,
    title: 'Data Analyst Intern - Bluestock Fintech',
    description: 'Completed internship focused on ETL, data analytics, and backend development',
    category: 'Internship'
  }
]

export const educationData: Education[] = [
  {
    institution: 'S. G. Balekundri Institute of Technology (SGBIT), Belagavi',
    degree: 'Bachelor of Engineering',
    field: 'Artificial Intelligence & Data Science',
    period: '2023–2027',
    score: 'CGPA: 7.63/10'
  },
  {
    institution: 'Ekalavya Model Residential PU College',
    degree: 'PUC',
    field: 'Science',
    period: '2021–2023',
    score: '89.5%'
  },
  {
    institution: 'Nayak Student Federation High School',
    degree: 'SSLC',
    field: 'General',
    period: 'Until 2021',
    score: '92.16%'
  }
]
