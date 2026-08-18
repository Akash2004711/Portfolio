import { Download, Eye } from 'lucide-react'

export default function ResumeSection() {
  return (
    <section id="resume" className="section-padding bg-darker">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Want the complete <span className="text-gradient">profile?</span>
          </h2>
          <p className="text-white/60 mb-12">
            Download or view my comprehensive resume with detailed project descriptions, skills matrix, and achievements.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary inline-flex items-center justify-center gap-2">
              <Download size={20} />
              Download Resume (PDF)
            </button>
            <button className="btn-secondary inline-flex items-center justify-center gap-2">
              <Eye size={20} />
              View Resume Online
            </button>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {[
              { label: 'Pages', value: '2' },
              { label: 'Format', value: 'PDF + Web' },
              { label: 'Last Updated', value: 'Aug 2026' }
            ].map((item, idx) => (
              <div key={idx} className="glass p-6 rounded-xl">
                <p className="text-white/60 text-sm uppercase tracking-widest mb-2">{item.label}</p>
                <p className="text-2xl font-bold text-gradient">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
