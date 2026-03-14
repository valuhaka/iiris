import FadeIn from "./FadeIn";

const publications = [
  {
    year: "2026",
    citation:
      'Martikainen, S., Karhunen, O., <strong>Mankki, I.</strong>, Gergov, V., Berg, P., Venäläinen, S., Rissanen, E., Lammintakanen, J., Heinonen, E., Lehtinen, A., Pöntinen, J., Asikainen, H., Katajavuori, N., Linnaranta, O., Räisänen, M., Salminen, S. T., & Lahti, J. (2026). Interventions for Students’ Well-Being at the University of Helsinki (INSIGHT): Protocol and Preliminary Descriptive Results for a Quasi-Experimental Controlled Trial of a Social Identity Intervention and Two Active Comparators. <em>JMIR Research Protocols</em>, <em>15</em>, https://doi.org/10.2196/79319.',
  },
];

const Research = () => {
  return (
    <section id="research" className="py-24 bg-card">
      <div className="container mx-auto px-6 max-w-3xl">
        <FadeIn>
          <h2 className="font-display text-3xl font-semibold text-foreground mb-4">
            Tutkimus & julkaisut
          </h2>
        </FadeIn>

        <div className="space-y-0">
          {publications.map((pub, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <div className="py-8 border-t border-border flex gap-6">
                <span className="text-xs font-body font-medium tracking-widest text-accent shrink-0 pt-1">
                  {pub.year}
                </span>
                <p
                  className="font-body text-sm text-muted-foreground leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: pub.citation }}
                />
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Research;
