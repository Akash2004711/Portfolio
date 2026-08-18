import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/sections/Hero'
import RecruiterSnapshot from './components/sections/RecruiterSnapshot'
import About from './components/sections/About'
import Experience from './components/sections/Experience'
import FeaturedProjects from './components/sections/FeaturedProjects'
import GenAILabSection from './components/sections/GenAILabSection'
import TestCaseExplorer from './components/sections/TestCaseExplorer'
import DefectBoard from './components/sections/DefectBoard'
import APITestingSection from './components/sections/APITestingSection'
import PythonAutomation from './components/sections/PythonAutomation'
import DataAnalyticsPipeline from './components/sections/DataAnalyticsPipeline'
import InteractiveQADemo from './components/sections/InteractiveQADemo'
import SkillsSection from './components/sections/SkillsSection'
import JobMatchSection from './components/sections/JobMatchSection'
import AchievementsTimeline from './components/sections/AchievementsTimeline'
import EducationSection from './components/sections/EducationSection'
import ResumeSection from './components/sections/ResumeSection'
import ContactSection from './components/sections/ContactSection'
import Footer from './components/Footer'
import RecruiterModal from './components/modals/RecruiterModal'

function App() {
  const [showRecruiterView, setShowRecruiterView] = useState(false)

  return (
    <div className="min-h-screen bg-dark">
      <Navbar onRecruiterClick={() => setShowRecruiterView(true)} />
      
      {showRecruiterView && (
        <RecruiterModal onClose={() => setShowRecruiterView(false)} />
      )}

      <main>
        <Hero />
        <RecruiterSnapshot />
        <About />
        <Experience />
        <FeaturedProjects />
        <GenAILabSection />
        <TestCaseExplorer />
        <DefectBoard />
        <InteractiveQADemo />
        <APITestingSection />
        <PythonAutomation />
        <DataAnalyticsPipeline />
        <SkillsSection />
        <JobMatchSection />
        <AchievementsTimeline />
        <EducationSection />
        <ResumeSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  )
}

export default App
