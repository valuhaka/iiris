import FadeIn from "./FadeIn";

const education = [
  {
    ajanjakso: "2025–",
    tutkinto: "Psykologian tohtori",
    instituutio: "Helsingin yliopisto",
    tutkielma: "??????",
    ohjaaja: "prof. Jari Lahti",
  },
  {
    ajanjakso: "2023–2026",
    tutkinto: "Psykologian maisteri, laillistettu psykologi",
    instituutio: "Helsingin yliopisto",
    tutkielma: "??????",
    ohjaaja: "prof. Jari Lahti",
  },
  {
    ajanjakso: "2019–2023",
    tutkinto: "Psykologian kandidaatti",
    instituutio: "Helsingin yliopisto",
    sivuaine: "genetiikka",
    tutkielma: "Mere exposure -efekti: ärsyketyyppien ja yksilöllisten erojen vaikutus esteettisiin mieltymyksiin",
    arvosana: "5",
    ohjaaja: "prof. Markus Jokela",
  },
];

const Education = () => {
  return (
    <section id="education" className="py-24 bg-card">
      <div className="container mx-auto px-6 max-w-3xl">
        <FadeIn>
          <h2 className="font-display text-3xl font-semibold text-foreground mb-12">Koulutus</h2>
        </FadeIn>

        <div className="space-y-0">
          {education.map((ed, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="py-8 border-t border-border">
                <p className="text-xs font-body font-medium tracking-widest uppercase text-accent mb-2">
                  {ed.ajanjakso}
                </p>
                <h3 className="font-display text-xl font-semibold text-foreground mb-1">
                  {ed.tutkinto}
                <p className="font-body text-sm font-medium text-primary mb-3">{ed.instituutio}</p>
                </h3>
                {ed.sivuaine && (
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    Sivuaine: {ed.sivuaine}
                  </p>
                )}
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  Tutkielma: <em>{ed.tutkielma}</em>
                </p>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  Ohjaaja: {ed.ohjaaja}
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
