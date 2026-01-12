import { ExternalLink, Calendar, Code2 } from "lucide-react";

const projects = [
  {
    title: "Spend Sense",
    subtitle: "Personal Finance Tracker",
    date: "April 2025",
    type: "Hackathon Project",
    description:
      "A lightweight budgeting application to help students track daily expenses, categorize spending, and set personal financial goals.",
    highlights: [
      "Built frontend using HTML, CSS, and JavaScript with responsive design",
      "Utilized Flask (Python) for backend operations and routing",
      "Gained experience in project ideation, wireframing, and rapid prototyping",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "Flask", "Firebase", "Chart.js", "Figma"],
    link: null,
  },
  {
    title: "HealthVault",
    subtitle: "AI Enabled Health Records Organizer",
    date: "March 2025 – Present",
    type: "Independent Project",
    description:
      "A mobile-first application using Flutter and Firebase to help users securely store and access health records, prescriptions, and medical reports.",
    highlights: [
      "Building with Flutter and Firebase for cross-device accessibility",
      "Planning AI integration for anomaly detection and health insights",
      "Aiming to build a comprehensive health ecosystem with predictive healthcare",
    ],
    technologies: ["Flutter", "Dart", "Firebase", "Figma", "Python", "TensorFlow"],
    link: null,
  },
  {
    title: "The Pure Poppers",
    subtitle: "E-commerce Platform",
    date: "July 2024",
    type: "Freelance Project",
    description:
      "A responsive e-commerce platform for a home-based confectionery business, showcasing unique snack offerings with an intuitive user interface.",
    highlights: [
      "Developed responsive design ensuring cross-device compatibility",
      "Integrated Razorpay for secure payment processing",
      "Collaborated closely with client to align with brand identity",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "Hostinger", "Razorpay API"],
    link: "https://thepurepoppers.com",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-muted-foreground tracking-widest uppercase text-sm mb-4">
              Featured Work
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground">
              Projects
            </h2>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <article
                key={project.title}
                className="group bg-card border border-border p-8 flex flex-col h-full hover:border-primary/30 transition-colors"
              >
                {/* Header */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                    <Calendar className="w-4 h-4" />
                    <span>{project.date}</span>
                    <span className="mx-2">•</span>
                    <span>{project.type}</span>
                  </div>
                  <h3 className="font-serif text-2xl font-medium text-foreground mb-1">
                    {project.title}
                  </h3>
                  <p className="text-primary text-sm">{project.subtitle}</p>
                </div>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-2 mb-6 flex-grow">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <Code2 className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                {/* Technologies */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-primary/5 text-primary text-xs border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-1 text-muted-foreground text-xs">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Link */}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors text-sm font-medium mt-auto"
                  >
                    Visit Website
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
