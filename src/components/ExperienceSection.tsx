import { Briefcase, Calendar, MapPin } from "lucide-react";

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-muted-foreground tracking-widest uppercase text-sm mb-4">
              Professional Journey
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground">
              Experience
            </h2>
          </div>

          {/* Experience Card */}
          <div className="bg-background border border-border p-8 md:p-12">
            <div className="flex flex-col md:flex-row md:items-start gap-6 mb-8">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-primary/10 flex items-center justify-center">
                  <Briefcase className="w-8 h-8 text-primary" />
                </div>
              </div>
              <div className="flex-grow">
                <h3 className="font-serif text-2xl md:text-3xl font-medium text-foreground mb-2">
                  Frontend Web Development Intern
                </h3>
                <p className="text-primary text-lg mb-4">
                  Nykaa Fashion & Beauty
                </p>
                <div className="flex flex-wrap gap-4 text-muted-foreground text-sm">
                  <span className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    Jun 2025 – Jul 2025
                  </span>
                  <span className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    Gurugram
                  </span>
                </div>
              </div>
            </div>

            <ul className="space-y-4 text-muted-foreground">
              <li className="flex items-start gap-4">
                <span className="w-1.5 h-1.5 bg-primary mt-2.5 flex-shrink-0" />
                <span>
                  Enhanced UI/UX elements of Nykaa's web platform with responsive 
                  design improvements using HTML, CSS, and JavaScript.
                </span>
              </li>
              <li className="flex items-start gap-4">
                <span className="w-1.5 h-1.5 bg-primary mt-2.5 flex-shrink-0" />
                <span>
                  Collaborated with product and design teams to align technical 
                  execution with branding and usability standards.
                </span>
              </li>
              <li className="flex items-start gap-4">
                <span className="w-1.5 h-1.5 bg-primary mt-2.5 flex-shrink-0" />
                <span>
                  Worked with Git-based version control, code reviews, and agile 
                  workflows to deliver assigned tasks.
                </span>
              </li>
              <li className="flex items-start gap-4">
                <span className="w-1.5 h-1.5 bg-primary mt-2.5 flex-shrink-0" />
                <span>
                  Strengthened communication and problem-solving skills by balancing 
                  technical development with management expectations.
                </span>
              </li>
            </ul>

            {/* Tech Stack */}
            <div className="mt-8 pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground mb-4">Technologies Used</p>
              <div className="flex flex-wrap gap-2">
                {["HTML", "CSS", "JavaScript", "Firebase", "Chart.js", "Figma"].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-primary/5 text-primary text-sm border border-primary/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
