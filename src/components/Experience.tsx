import FadeIn from "./FadeIn";

const experiences = [
  {
    period: "2025",
    title: "Neuropsykologiharjoittelija",
    org: "HUS-neuropsykiatria, Pasila",
    description:
      "Hoidin ???????.",
  },
  {
    period: "2021 – 2025",
    title: "Tutkimusassistentti",
    org: "Helsingin yliopisto",
    description:
      "Tutkin ????????.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-6 max-w-3xl">
        <FadeIn>
          <h2 className="font-display text-3xl font-semibold text-foreground mb-12">
            Työkokemus
          </h2>
        </FadeIn>

        <div className="space-y-0">
          {experiences.map((exp, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="py-8 border-t border-border">
                <p className="text-xs font-body font-medium tracking-widest uppercase text-accent mb-2">
                  {exp.period}
                </p>
                <h3 className="font-display text-xl font-semibold text-foreground mb-1">
                  {exp.title}
                </h3>
                <p className="font-body text-sm font-medium text-primary mb-3">{exp.org}</p>
                <p className="font-body text-muted-foreground leading-relaxed text-sm">
                  {exp.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
