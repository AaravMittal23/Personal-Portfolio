import { Mail, Phone, MapPin, Linkedin, ArrowUpRight } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-muted-foreground tracking-widest uppercase text-sm mb-4">
              Get In Touch
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground mb-6">
              Let's Connect
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              I'm always open to discussing new opportunities, creative ideas, 
              or collaborations. Feel free to reach out!
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <a
              href="mailto:aaravmittal.2307@gmail.com"
              className="group bg-card border border-border p-8 flex items-center gap-6 hover:border-primary/30 transition-colors"
            >
              <div className="w-14 h-14 bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-grow">
                <p className="text-sm text-muted-foreground mb-1">Email</p>
                <p className="text-foreground font-medium">aaravmittal.2307@gmail.com</p>
              </div>
              <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
            </a>

            <a
              href="tel:+918800852822"
              className="group bg-card border border-border p-8 flex items-center gap-6 hover:border-primary/30 transition-colors"
            >
              <div className="w-14 h-14 bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-grow">
                <p className="text-sm text-muted-foreground mb-1">Phone</p>
                <p className="text-foreground font-medium">+91-8800852822</p>
              </div>
              <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
            </a>

            <a
              href="https://linkedin.com/in/aaravmittal"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-card border border-border p-8 flex items-center gap-6 hover:border-primary/30 transition-colors"
            >
              <div className="w-14 h-14 bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Linkedin className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-grow">
                <p className="text-sm text-muted-foreground mb-1">LinkedIn</p>
                <p className="text-foreground font-medium">linkedin.com/in/aaravmittal</p>
              </div>
              <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
            </a>

            <div className="bg-card border border-border p-8 flex items-center gap-6">
              <div className="w-14 h-14 bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-grow">
                <p className="text-sm text-muted-foreground mb-1">Location</p>
                <p className="text-foreground font-medium">Gurgaon, Haryana, India</p>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="text-center bg-card border border-border p-8">
            <p className="text-sm text-muted-foreground mb-2 uppercase tracking-wide">
              Currently Pursuing
            </p>
            <h3 className="font-serif text-xl font-medium text-foreground mb-2">
              B.Tech in Computer Science
            </h3>
            <p className="text-primary mb-2">
              SRM Institute of Science and Technology, Chennai-KTR
            </p>
            <p className="text-muted-foreground text-sm">
              2024 - 2028 | CGPA: 8.73 (till 2nd semester)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
