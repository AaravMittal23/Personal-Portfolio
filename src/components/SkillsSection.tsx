import { Trophy, Award, Users } from "lucide-react";

const skills = {
  languages: ["Python", "HTML", "CSS", "JavaScript", "C", "C++ (OOPs)"],
  software: ["AutoCAD", "Blender", "Krita", "Cursor", "Figma", "Git"],
  soft: ["Analytical Skills", "Problem-Solving", "Communication", "Time Management"],
};

const achievements = [
  {
    icon: Trophy,
    title: "1st Place - AutoCAD Design Competition",
    description:
      "Secured first place in an intra-college AutoCAD design competition by showcasing original product concepts, highlighting a strong blend of technical skill and creative thinking.",
  },
  {
    icon: Award,
    title: "Professional 3D Modeling",
    description:
      "Designed and developed professional-grade 3D models for an industrial hinges manufacturer, enhancing proficiency in CAD-based product visualization.",
  },
  {
    icon: Users,
    title: "Aaruush Techno-Fest Member",
    description:
      "Member of Aaruush, the techno-fest management body of SRM IST; contributed to on-campus outreach and ticket sales for event promotions.",
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-muted-foreground tracking-widest uppercase text-sm mb-4">
              Expertise & Accomplishments
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground">
              Skills & Achievements
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Skills */}
            <div className="space-y-8">
              <div>
                <h3 className="font-serif text-2xl font-medium text-foreground mb-6">
                  Technical Skills
                </h3>

                <div className="space-y-6">
                  <div>
                    <p className="text-sm text-muted-foreground mb-3 uppercase tracking-wide">
                      Languages
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {skills.languages.map((skill) => (
                        <span
                          key={skill}
                          className="px-4 py-2 bg-background border border-border text-foreground text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="text-sm text-muted-foreground mb-3 uppercase tracking-wide">
                      Software & Technologies
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {skills.software.map((skill) => (
                        <span
                          key={skill}
                          className="px-4 py-2 bg-background border border-border text-foreground text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="text-sm text-muted-foreground mb-3 uppercase tracking-wide">
                      Soft Skills
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {skills.soft.map((skill) => (
                        <span
                          key={skill}
                          className="px-4 py-2 bg-background border border-border text-foreground text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Achievements */}
            <div>
              <h3 className="font-serif text-2xl font-medium text-foreground mb-6">
                Achievements
              </h3>

              <div className="space-y-6">
                {achievements.map((achievement) => (
                  <div
                    key={achievement.title}
                    className="bg-background border border-border p-6 flex gap-4"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary/10 flex items-center justify-center">
                        <achievement.icon className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-2">
                        {achievement.title}
                      </h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
