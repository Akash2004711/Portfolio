import { Mail, Phone, GitBranch, Globe, MessageSquare } from 'lucide-react'
import { useState } from 'react'

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'akashnittur143@gmail.com',
      href: 'mailto:akashnittur143@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 9113571934',
      href: 'tel:+919113571934'
    },
    {
      icon: GitBranch,
      label: 'GitHub',
      value: 'github.com/akashnittur',
      href: '#'
    },
    {
      icon: Globe,
      label: 'LinkedIn',
      value: 'linkedin.com/in/akashnittur',
      href: '#'
    }
  ]

  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          Let's <span className="text-gradient">Connect</span>
        </h2>
        <p className="text-white/60 text-center max-w-2xl mx-auto mb-16">
          Interested in AI QA, software testing, data engineering, backend development, or intelligent systems? 
          I'd be happy to discuss opportunities, ideas, or just connect.
        </p>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Contact Methods */}
          <div>
            <h3 className="text-2xl font-bold mb-8">Quick Contact</h3>
            <div className="space-y-4">
              {contactMethods.map((method, idx) => {
                const Icon = method.icon
                return (
                  <a
                    key={idx}
                    href={method.href}
                    className="glass p-6 rounded-xl hover-lift flex items-start gap-4 transition-smooth"
                  >
                    <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="text-accent" size={24} />
                    </div>
                    <div>
                      <p className="text-white/60 text-sm">{method.label}</p>
                      <p className="font-semibold text-white">{method.value}</p>
                    </div>
                  </a>
                )
              })}
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-bold mb-8">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full glass px-4 py-3 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-accent/50"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full glass px-4 py-3 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-accent/50"
                required
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full glass px-4 py-3 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-accent/50 resize-none"
                required
              />
              <button
                type="submit"
                className="w-full btn-primary flex items-center justify-center gap-2"
              >
                <MessageSquare size={18} />
                Send Message
              </button>
              {submitted && (
                <p className="text-success text-sm text-center">Message sent! I'll get back to you soon.</p>
              )}
            </form>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 glass p-8 rounded-xl text-center border-t-2 border-accent/20">
          <h3 className="text-3xl font-bold mb-4">Let's build reliable intelligent systems.</h3>
          <p className="text-white/70 mb-6 max-w-2xl mx-auto">
            Whether you're looking for a QA engineer, backend developer, data analyst, or someone passionate about 
            generative AI quality—let's have a conversation.
          </p>
          <button className="btn-primary inline-flex items-center gap-2">
            Schedule a Chat
            <MessageSquare size={18} />
          </button>
        </div>
      </div>
    </section>
  )
}
