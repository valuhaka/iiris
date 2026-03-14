import FadeIn from "./FadeIn";

const experiences = [
  {
    period: "2021 – Present",
    title: "Clinical Psychologist",
    org: "Amsterdam Center for Trauma & Resilience",
    description:
      "Providing individual and group psychotherapy for adults with PTSD, complex trauma, and anxiety disorders. Supervising psychology interns and contributing to the development of trauma-informed care protocols.",
  },
  {
    period: "2019 – 2021",
    title: "Clinical Psychologist",
    org: "GGZ inGeest, Amsterdam",
    description:
      "Conducted psychological assessments and delivered evidence-based treatment (CBT, EMDR) within multidisciplinary teams. Specialized caseload in mood and anxiety disorders.",
  },
  {
    period: "2017 – 2019",
    title: "Psychology Intern (GZ-Psycholoog in opleiding)",
    org: "Radboud University Medical Center, Nijmegen",
    description:
      "Completed supervised clinical placements in adult outpatient psychiatry and neuropsychological assessment. Co-facilitated group therapy for patients with personality disorders.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-6 max-w-3xl">
        <FadeIn>
          <h2 className="font-display text-3xl font-semibold text-foreground mb-12">
            Clinical Experience
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
