import { useState } from 'react'
import { defectsData } from '../../data/defects'
import { X } from 'lucide-react'

interface DefectViewProps {
  defectId: string
  onClose: () => void
}

const DefectModal = ({ defectId, onClose }: DefectViewProps) => {
  const defect = defectsData.find(d => d.id === defectId)
  if (!defect) return null

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="glass rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 flex justify-between items-center p-6 border-b border-white/10">
          <h3 className="text-2xl font-bold">{defect.id}</h3>
          <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-lg transition-smooth">
            <X size={24} />
          </button>
        </div>

        <div className="p-6 space-y-6">
          <div>
            <p className="text-xl font-bold mb-2">{defect.title}</p>
            <div className="flex gap-3 flex-wrap">
              <span className={`text-xs font-bold px-3 py-1 rounded ${
                defect.severity === 'Critical' ? 'bg-error/20 text-error' :
                defect.severity === 'High' ? 'bg-warning/20 text-warning' :
                defect.severity === 'Medium' ? 'bg-accent/20 text-accent' :
                'bg-success/20 text-success'
              }`}>
                Severity: {defect.severity}
              </span>
              <span className="bg-accent/20 text-accent text-xs font-bold px-3 py-1 rounded">
                Priority: {defect.priority}
              </span>
            </div>
          </div>

          <div className="space-y-4">
            <div className="glass p-4 rounded-lg">
              <p className="text-xs font-bold text-white/50 uppercase tracking-widest mb-2">Steps to Reproduce</p>
              <ol className="space-y-2 text-white/70">
                {defect.stepsToReproduce.map((step, idx) => (
                  <li key={idx} className="flex gap-3">
                    <span className="text-accent font-bold flex-shrink-0">{idx + 1}.</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="glass p-4 rounded-lg border-l-4 border-success">
                <p className="text-xs font-bold text-white/50 uppercase tracking-widest mb-2">Expected Result</p>
                <p className="text-white/70">{defect.expectedResult}</p>
              </div>
              <div className="glass p-4 rounded-lg border-l-4 border-error">
                <p className="text-xs font-bold text-white/50 uppercase tracking-widest mb-2">Actual Result</p>
                <p className="text-white/70">{defect.actualResult}</p>
              </div>
            </div>

            <div className="glass p-4 rounded-lg">
              <p className="text-xs font-bold text-white/50 uppercase tracking-widest mb-2">Environment</p>
              <p className="text-white/70">{defect.environment}</p>
            </div>

            <div className="glass p-4 rounded-lg border-l-4 border-accent-purple">
              <p className="text-xs font-bold text-white/50 uppercase tracking-widest mb-2">Suggested Fix</p>
              <p className="text-white/70">{defect.suggestedFix}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const DefectCard = ({ defect, onView }: { defect: any; onView: (id: string) => void }) => {
  return (
    <div className="glass p-4 rounded-lg hover-lift cursor-pointer" onClick={() => onView(defect.id)}>
      <div className="flex items-start justify-between gap-3 mb-3">
        <span className="font-bold text-accent text-sm">{defect.id}</span>
        <span className={`text-xs font-bold px-2 py-1 rounded ${
          defect.severity === 'Critical' ? 'bg-error/20 text-error' :
          defect.severity === 'High' ? 'bg-warning/20 text-warning' :
          defect.severity === 'Medium' ? 'bg-accent/20 text-accent' :
          'bg-success/20 text-success'
        }`}>
          {defect.severity}
        </span>
      </div>
      <p className="font-semibold text-sm mb-3 line-clamp-2">{defect.title}</p>
      <div className="flex items-center justify-between">
        <span className="text-xs text-white/50">TC: {defect.testCase}</span>
        <span className={`text-xs font-bold px-2 py-1 rounded ${
          defect.priority === 'P1' ? 'bg-error/20 text-error' :
          defect.priority === 'P2' ? 'bg-warning/20 text-warning' :
          'bg-accent/20 text-accent'
        }`}>
          {defect.priority}
        </span>
      </div>
    </div>
  )
}

const DefectColumn = ({ status, defects, onView }: { status: string; defects: any[]; onView: (id: string) => void }) => {
  const statusDefects = defects.filter(d => d.status === status)

  return (
    <div className="glass rounded-lg p-6 h-fit min-h-96">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-bold text-lg">{status}</h3>
        <span className="bg-accent/20 text-accent text-xs font-bold px-2 py-1 rounded">
          {statusDefects.length}
        </span>
      </div>
      <div className="space-y-3">
        {statusDefects.map(defect => (
          <DefectCard key={defect.id} defect={defect} onView={onView} />
        ))}
      </div>
    </div>
  )
}

export default function DefectBoard() {
  const [selectedDefect, setSelectedDefect] = useState<string | null>(null)
  const statuses = ['Open', 'In Progress', 'Retest', 'Closed']

  return (
    <section className="section-padding bg-darker">
      <div className="container-custom">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          QA Defect <span className="text-gradient">Tracker</span>
        </h2>
        <p className="text-white/60 text-center max-w-2xl mx-auto mb-12">
          Kanban-style defect board showing issues across the testing lifecycle. Click any defect to view details.
        </p>

        {/* Defect Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {statuses.map(status => (
            <div key={status} className="glass p-6 rounded-xl text-center">
              <p className="text-2xl font-bold text-accent">
                {defectsData.filter(d => d.status === status).length}
              </p>
              <p className="text-white/60 text-sm mt-2">{status}</p>
            </div>
          ))}
        </div>

        {/* Kanban Board */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {statuses.map(status => (
            <DefectColumn
              key={status}
              status={status}
              defects={defectsData}
              onView={setSelectedDefect}
            />
          ))}
        </div>

        {selectedDefect && (
          <DefectModal defectId={selectedDefect} onClose={() => setSelectedDefect(null)} />
        )}
      </div>
    </section>
  )
}
