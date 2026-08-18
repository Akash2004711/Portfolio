import { Code } from 'lucide-react'

export default function PythonAutomation() {
  const benefits = [
    'Reduce repetitive manual validation',
    'Provide repeatable regression checks',
    'Enable continuous integration testing',
    'Accelerate test execution',
    'Improve test coverage systematically'
  ]

  return (
    <section className="section-padding bg-darker">
      <div className="container-custom">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          <span className="text-gradient">Python</span> Test Automation
        </h2>
        <p className="text-white/60 text-center max-w-2xl mx-auto mb-12">
          Automating QA workflows with Python, pytest, and best practices in test automation.
        </p>

        {/* Code Example */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="glass rounded-xl overflow-hidden">
            <div className="bg-darker p-4 border-b border-white/10 flex items-center gap-2">
              <Code size={20} className="text-accent" />
              <span className="text-sm font-mono text-accent">test_api_automation.py</span>
            </div>
            <pre className="p-6 text-white/80 text-sm overflow-x-auto font-mono">
{`import pytest
from httpx import AsyncClient
from api.client import APIClient

@pytest.fixture
def client():
    return APIClient(base_url="http://localhost:8000")

@pytest.mark.asyncio
async def test_create_test_case():
    """Test case creation endpoint"""
    async with AsyncClient() as client:
        response = await client.post(
            "/api/tests/create",
            json={
                "name": "Hallucination Test",
                "category": "Safety",
                "severity": "High"
            }
        )
    
    assert response.status_code == 201
    assert response.json()["test_id"].startswith("TC-")

@pytest.mark.asyncio
async def test_hallucination_detection():
    """Test AI agent hallucination detection"""
    test_data = {
        "prompt": "Tell me about CEO of Fictitious Corp",
        "expected": "Uncertain response",
        "model": "gpt-4"
    }
    
    result = await evaluate_agent(test_data)
    
    assert result["hallucination_risk"] in ["LOW", "MEDIUM", "HIGH"]
    assert result["confidence"] <= 0.7  # Low confidence for unknown entity
    
@pytest.mark.asyncio
async def test_api_timeout_handling():
    """Test graceful handling of API timeouts"""
    with pytest.raises(TimeoutError):
        await client.post(
            "/api/slow-endpoint",
            timeout=1.0
        )`}
            </pre>
          </div>
        </div>

        {/* Automation Benefits */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Automation Benefits</h3>
            <ul className="space-y-4">
              {benefits.map((benefit, idx) => (
                <li key={idx} className="flex gap-3">
                  <span className="text-accent font-bold flex-shrink-0">✓</span>
                  <span className="text-white/70">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="glass p-6 rounded-xl h-fit">
            <h4 className="font-bold mb-4">Testing Framework Stack</h4>
            <div className="space-y-3">
              {[
                { name: 'pytest', desc: 'Unit and integration testing' },
                { name: 'unittest', desc: 'Python standard library testing' },
                { name: 'httpx', desc: 'Async HTTP client for API testing' },
                { name: 'requests', desc: 'Simple HTTP library' },
                { name: 'pytest-asyncio', desc: 'Async test support' }
              ].map((framework, idx) => (
                <div key={idx} className="pb-3 border-b border-white/10 last:border-0">
                  <p className="font-semibold text-accent">{framework.name}</p>
                  <p className="text-white/60 text-sm">{framework.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Key Principles */}
        <div className="bg-accent/5 border border-accent/20 rounded-xl p-8">
          <h3 className="text-xl font-bold mb-4 text-accent">Automation Mindset</h3>
          <p className="text-white/70 leading-relaxed">
            Effective test automation isn't about writing the most code—it's about identifying the right tests to automate. 
            Focus on <span className="text-accent font-semibold">high-value, repetitive tests</span> that need to run frequently 
            (regression tests), complex validation logic, and edge cases that are tedious to test manually. Maintain clear test 
            structure, use descriptive names, and keep tests independent and idempotent so they can run reliably in any order.
          </p>
        </div>
      </div>
    </section>
  )
}
