import { projectsData } from '../../data/projects'

const ProjectCard = ({ project }: { project: any }) => {
  return (
    <div className="glass rounded-xl overflow-hidden hover-lift group">
      {/* Header */}
      <div className="h-2 bg-gradient-to-r from-accent to-accent-purple" />
      
      <div className="p-8">
        <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
        <p className="text-accent font-semibold text-sm mb-4">{project.subtitle}</p>
        
        <p className="text-white/70 mb-6 leading-relaxed">{project.description}</p>

        {/* Metrics */}
        {project.metrics && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 py-4 border-y border-white/10">
            {project.metrics.map((metric: any) => (
              <div key={metric.label} className="text-center">
                <p className="text-xl md:text-2xl font-bold text-accent">{metric.value}</p>
                <p className="text-xs text-white/50 uppercase tracking-widest mt-1">{metric.label}</p>
              </div>
            ))}
          </div>
        )}

        {/* Technologies */}
        <div className="mb-6">
          <p className="text-xs font-bold text-white/50 uppercase tracking-widest mb-3">Tech Stack</p>
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 5).map((tech: string) => (
              <span key={tech} className="px-3 py-1 bg-white/5 text-white/60 text-xs rounded-full">
                {tech}
              </span>
            ))}
            {project.technologies.length > 5 && (
              <span className="px-3 py-1 bg-white/5 text-white/60 text-xs rounded-full">
                +{project.technologies.length - 5} more
              </span>
            )}
          </div>
        </div>

        {/* CTA */}

      </div>
    </div>
  )
}

export default function FeaturedProjects() {
  const featured = projectsData.filter(p => p.featured)
  const general = projectsData.filter(p => !p.featured)

  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          Featured <span className="text-gradient">Projects</span>
        </h2>
        <p className="text-white/60 text-center max-w-2xl mx-auto mb-16">
          Selection of projects demonstrating Python, data analytics, APIs, backend development, and GenAI QA capabilities.
        </p>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featured.map((project, idx) => (
            <div key={project.id} className="animate-fade-in" style={{ animationDelay: `${idx * 0.2}s` }}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="my-16">
          <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </div>

        {/* General Projects */}
        <h3 className="text-2xl font-bold mb-8">Other <span className="text-gradient">Projects</span></h3>
        <div className="grid md:grid-cols-2 gap-6">
          {general.map((project, idx) => (
            <div key={project.id} className="animate-fade-in" style={{ animationDelay: `${idx * 0.1}s` }}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
