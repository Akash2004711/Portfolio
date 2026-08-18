import { useState, useMemo } from 'react'
import { testCasesData } from '../../data/testCases'
import { Search } from 'lucide-react'

interface Filters {
  category: string
  severity: string
  result: string
}

export default function TestCaseExplorer() {
  const [searchTerm, setSearchTerm] = useState('')
  const [filters, setFilters] = useState<Filters>({
    category: '',
    severity: '',
    result: ''
  })

  const categories = [...new Set(testCasesData.map(tc => tc.category))]
  const severities = ['Low', 'Medium', 'High', 'Critical']
  const results = ['PASS', 'FAIL']

  const filteredTestCases = useMemo(() => {
    return testCasesData.filter(tc => {
      const matchesSearch =
        tc.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tc.scenario.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tc.expected.toLowerCase().includes(searchTerm.toLowerCase())

      const matchesCategory = !filters.category || tc.category === filters.category
      const matchesSeverity = !filters.severity || tc.severity === filters.severity
      const matchesResult = !filters.result || tc.result === filters.result

      return matchesSearch && matchesCategory && matchesSeverity && matchesResult
    })
  }, [searchTerm, filters])

  const passCount = filteredTestCases.filter(tc => tc.result === 'PASS').length
  const failCount = filteredTestCases.filter(tc => tc.result === 'FAIL').length
  const passRate = filteredTestCases.length > 0 ? Math.round((passCount / filteredTestCases.length) * 100) : 0

  return (
    <section className="section-padding">
      <div className="container-custom">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          Test Case <span className="text-gradient">Explorer</span>
        </h2>
        <p className="text-white/60 text-center max-w-2xl mx-auto mb-12">
          Browse and filter test cases from the GenAI QA testing framework. Search by ID, scenario, or result.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="glass p-6 rounded-xl text-center">
            <p className="text-3xl font-bold text-accent">{filteredTestCases.length}</p>
            <p className="text-white/60 text-sm mt-2">Total Tests</p>
          </div>
          <div className="glass p-6 rounded-xl text-center">
            <p className="text-3xl font-bold text-success">{passCount}</p>
            <p className="text-white/60 text-sm mt-2">Passed</p>
          </div>
          <div className="glass p-6 rounded-xl text-center">
            <p className="text-3xl font-bold text-error">{failCount}</p>
            <p className="text-white/60 text-sm mt-2">Failed</p>
          </div>
          <div className="glass p-6 rounded-xl text-center">
            <p className="text-3xl font-bold text-accent">{passRate}%</p>
            <p className="text-white/60 text-sm mt-2">Pass Rate</p>
          </div>
        </div>

        {/* Search & Filters */}
        <div className="mb-8 space-y-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/40" size={20} />
            <input
              type="text"
              placeholder="Search by ID, scenario, or result..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 glass rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-accent/50"
            />
          </div>

          {/* Filters */}
          <div className="grid md:grid-cols-3 gap-4">
            <select
              value={filters.category}
              onChange={(e) => setFilters({ ...filters, category: e.target.value })}
              className="glass px-4 py-3 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-accent/50"
            >
              <option value="">All Categories</option>
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>

            <select
              value={filters.severity}
              onChange={(e) => setFilters({ ...filters, severity: e.target.value })}
              className="glass px-4 py-3 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-accent/50"
            >
              <option value="">All Severities</option>
              {severities.map(sev => (
                <option key={sev} value={sev}>{sev}</option>
              ))}
            </select>

            <select
              value={filters.result}
              onChange={(e) => setFilters({ ...filters, result: e.target.value })}
              className="glass px-4 py-3 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-accent/50"
            >
              <option value="">All Results</option>
              {results.map(res => (
                <option key={res} value={res}>{res}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Test Cases Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left px-4 py-4 text-white/70 font-semibold text-sm">ID</th>
                <th className="text-left px-4 py-4 text-white/70 font-semibold text-sm">Category</th>
                <th className="text-left px-4 py-4 text-white/70 font-semibold text-sm">Scenario</th>
                <th className="text-left px-4 py-4 text-white/70 font-semibold text-sm">Severity</th>
                <th className="text-left px-4 py-4 text-white/70 font-semibold text-sm">Result</th>
                <th className="text-left px-4 py-4 text-white/70 font-semibold text-sm">Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredTestCases.map((tc) => (
                <tr
                  key={tc.id}
                  className="border-b border-white/5 hover:bg-white/5 transition-smooth"
                >
                  <td className="px-4 py-4 text-accent font-mono text-sm">{tc.id}</td>
                  <td className="px-4 py-4 text-white/70 text-sm">{tc.category}</td>
                  <td className="px-4 py-4 text-white/70 text-sm max-w-xs truncate">{tc.scenario}</td>
                  <td className="px-4 py-4">
                    <span className={`text-xs font-semibold px-2 py-1 rounded ${
                      tc.severity === 'Critical' ? 'bg-error/20 text-error' :
                      tc.severity === 'High' ? 'bg-warning/20 text-warning' :
                      tc.severity === 'Medium' ? 'bg-accent/20 text-accent' :
                      'bg-success/20 text-success'
                    }`}>
                      {tc.severity}
                    </span>
                  </td>
                  <td className="px-4 py-4">
                    <span className={`text-xs font-semibold px-2 py-1 rounded ${
                      tc.result === 'PASS' ? 'bg-success/20 text-success' : 'bg-error/20 text-error'
                    }`}>
                      {tc.result}
                    </span>
                  </td>
                  <td className="px-4 py-4">
                    <span className={`text-xs font-semibold px-2 py-1 rounded ${
                      tc.status === 'Closed' ? 'bg-success/20 text-success' :
                      tc.status === 'Open' ? 'bg-error/20 text-error' :
                      'bg-accent/20 text-accent'
                    }`}>
                      {tc.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredTestCases.length === 0 && (
          <div className="text-center py-12">
            <p className="text-white/60">No test cases match your filters. Try adjusting your search.</p>
          </div>
        )}
      </div>
    </section>
  )
}
