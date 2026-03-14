import FadeIn from "./FadeIn";

const publications = [
  {
    year: "2025",
    citation:
      'Voss, E., de Jongh, A., & van der Kolk, B. (2025). Neural correlates of trauma reprocessing in EMDR: A longitudinal fMRI study. <em>Journal of Traumatic Stress</em>, <em>38</em>(2), 145–162.',
  },
  {
    year: "2024",
    citation:
      'Voss, E., & Arntz, A. (2024). Schema therapy for complex PTSD: A randomized controlled trial comparing individual and group formats. <em>Behaviour Research and Therapy</em>, <em>174</em>, 104487.',
  },
  {
    year: "2023",
    citation:
      'Voss, E., Lindauer, R. J. L., & Olff, M. (2023). Adverse childhood experiences and adult emotion regulation: A systematic review and meta-analysis. <em>Clinical Psychology Review</em>, <em>101</em>, 102264.',
  },
  {
    year: "2022",
    citation:
      'Voss, E., & de Jongh, A. (2022). The role of dissociation in treatment outcomes for PTSD: Implications for clinical practice. <em>European Journal of Psychotraumatology</em>, <em>13</em>(1), 2058562.',
  },
];

const Research = () => {
  return (
    <section id="research" className="py-24 bg-card">
      <div className="container mx-auto px-6 max-w-3xl">
        <FadeIn>
          <h2 className="font-display text-3xl font-semibold text-foreground mb-4">
            Research & Publications
          </h2>
          <p className="font-body text-muted-foreground mb-12 leading-relaxed">
            Selected peer-reviewed publications. Full publication list available upon request.
          </p>
        </FadeIn>

        <div className="space-y-0">
          {publications.map((pub, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <div className="py-6 border-t border-border flex gap-6">
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
