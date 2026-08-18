import { GitBranch, Globe, Mail, Heart } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="glass border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent to-accent-purple flex items-center justify-center">
                <span className="text-white font-bold text-lg">AN</span>
              </div>
              <span className="font-bold text-lg">Akash Nittur</span>
            </div>
            <p className="text-white/60 mb-6 leading-relaxed">
              AI & Data Science • Data • Backend • GenAI QA
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-3 glass hover:bg-white/10 rounded-lg transition-smooth">
                <GitBranch size={20} />
              </a>
              <a href="#" className="p-3 glass hover:bg-white/10 rounded-lg transition-smooth">
                <Globe size={20} />
              </a>
              <a href="mailto:akashnittur143@gmail.com" className="p-3 glass hover:bg-white/10 rounded-lg transition-smooth">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Quick Navigation</h4>
            <ul className="space-y-3 text-white/60">
              {[
                { label: 'About', href: '#about' },
                { label: 'Experience', href: '#experience' },
                { label: 'Projects', href: '#projects' },
                { label: 'Skills', href: '#skills' },
                { label: 'Contact', href: '#contact' }
              ].map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-white transition-smooth">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-12" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-white/60 text-sm flex items-center gap-2">
            Built with <Heart size={16} className="text-accent" /> and React
          </p>
          <p className="text-white/60 text-sm">
            © {currentYear} Akash Nittur. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
