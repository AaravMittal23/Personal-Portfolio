import { ArrowDown, Mail, Linkedin, Phone } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/85" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Greeting */}
          <p className="text-muted-foreground tracking-widest uppercase text-sm mb-6 animate-fade-in">
            Welcome to my portfolio
          </p>

          {/* Name */}
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium text-foreground mb-6 animate-fade-in-up">
            Aarav Mittal
          </h1>

          {/* Title */}
          <p className="text-xl md:text-2xl text-primary font-light mb-8 animate-fade-in-up animation-delay-200">
            Frontend Developer & Computer Science Student
          </p>

          {/* Description */}
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in-up animation-delay-400">
            First-year Computer Science student at SRM Institute of Science and Technology 
            with hands-on experience in web development, hackathons, and independent projects.
          </p>

          {/* Contact Links */}
          <div className="flex items-center justify-center gap-6 mb-16 animate-fade-in-up animation-delay-600">
            <a
              href="mailto:aaravmittal.2307@gmail.com"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span className="hidden sm:inline">Email</span>
            </a>
            <a
              href="https://linkedin.com/in/aaravmittal"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Linkedin className="w-5 h-5" />
              <span className="hidden sm:inline">LinkedIn</span>
            </a>
            <a
              href="tel:+918800852822"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span className="hidden sm:inline">+91-8800852822</span>
            </a>
          </div>

          {/* Scroll Indicator */}
          <button
            onClick={() => scrollToSection("experience")}
            className="animate-bounce text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Scroll to experience"
          >
            <ArrowDown className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
