import { useState } from 'react'
import { Menu, X, GitBranch, Globe } from 'lucide-react'

interface NavbarProps {
  onRecruiterClick: () => void
}

export default function Navbar({ onRecruiterClick }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'GenAI QA', href: '#genai-qa' },
    { label: 'Skills', href: '#skills' },
    { label: 'Resume', href: '#resume' },
    { label: 'Contact', href: '#contact' }
  ]

  const scrollToSection = (href: string) => {
    const id = href.replace('#', '')
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  return (
    <nav className="fixed top-0 w-full glass border-b border-white/10 z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent to-accent-purple flex items-center justify-center">
              <span className="text-white font-bold text-lg"><img src='https://drive.google.com/file/d/1a8gyS9Wdyas5ndJRRCRrVQHvtx4cv9Va/view?usp=sharing'/></span>
            </div>
            <span className="font-bold text-lg hidden sm:inline">Akash Nittur</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="px-3 py-2 text-sm text-white/70 hover:text-white transition-smooth hover:bg-white/5 rounded-lg"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={onRecruiterClick}
              className="hidden sm:block px-4 py-2 text-sm bg-accent/20 text-accent rounded-lg hover:bg-accent/30 transition-smooth font-medium"
            >
              Recruiter View
            </button>
            
            <a
              href="#contact"
              className="hidden sm:flex p-2 hover:bg-white/5 rounded-lg transition-smooth"
              title="GitHub"
            >
              <GitBranch size={20} />
            </a>
            
            <a
              href="#contact"
              className="hidden sm:flex p-2 hover:bg-white/5 rounded-lg transition-smooth"
              title="LinkedIn"
            >
              <Globe size={20} />
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 hover:bg-white/5 rounded-lg transition-smooth"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden pb-4 border-t border-white/10 mt-4">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="px-3 py-2 text-sm text-white/70 hover:text-white transition-smooth hover:bg-white/5 rounded-lg text-left"
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={onRecruiterClick}
                className="px-3 py-2 text-sm bg-accent/20 text-accent rounded-lg hover:bg-accent/30 transition-smooth font-medium text-left mt-2"
              >
                Recruiter View
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
