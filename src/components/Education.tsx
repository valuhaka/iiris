import FadeIn from "./FadeIn";

const education = [
  {
    period: "2022 – Present",
    degree: "PhD in Clinical Psychology",
    institution: "University of Amsterdam",
    detail: "Doctoral research on neurobiological mechanisms of trauma processing. Supervisors: Prof. A. de Jongh & Prof. M. Olff.",
  },
  {
    period: "2015 – 2017",
    degree: "MSc Clinical Psychology (cum laude)",
    institution: "Radboud University Nijmegen",
    detail: "Thesis: Predictors of treatment response in EMDR therapy for PTSD.",
  },
  {
    period: "2012 – 2015",
    degree: "BSc Psychology",
    institution: "University of Groningen",
    detail: "Minor in Neuroscience. Honours programme in Research Methods.",
  },
];

const Education = () => {
  return (
    <section id="education" className="py-24">
      <div className="container mx-auto px-6 max-w-3xl">
        <FadeIn>
          <h2 className="font-display text-3xl font-semibold text-foreground mb-12">Education</h2>
        </FadeIn>

        <div className="space-y-0">
          {education.map((ed, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="py-8 border-t border-border">
                <p className="text-xs font-body font-medium tracking-widest uppercase text-accent mb-2">
                  {ed.period}
                </p>
                <h3 className="font-display text-xl font-semibold text-foreground mb-1">
                  {ed.degree}
                </h3>
                <p className="font-body text-sm font-medium text-primary mb-3">{ed.institution}</p>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {ed.detail}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
