import FadeIn from "./FadeIn";
import portrait from "@/assets/portrait.jpeg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center pt-20 pb-16">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="grid md:grid-cols-5 gap-12 md:gap-16 items-center">
          <FadeIn direction="left" className="md:col-span-2">
            <div className="aspect-[4/5] max-w-sm mx-auto md:mx-0 overflow-hidden rounded-sm">
              <img
                src={portrait}
                alt="Iiris Ainias, psykologi"
                className="w-full h-full object-cover"
              />
            </div>
          </FadeIn>

          <FadeIn delay={0.2} className="md:col-span-3">
            <p className="text-sm font-body font-medium tracking-widest uppercase text-accent mb-4">
              Psykologi · Väitöskirjatutkija
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight mb-6">
              Iiris Ainias
            </h1>
            <p className="font-body text-lg text-muted-foreground leading-relaxed max-w-xl mb-8">
            Erikoisalaani ovat lähisuhteet ja neuropsykiatria. Olen erityisen kiinnostunut ratkaisukeskeisistä hoitomenetelmistä. Kliinisen työn lisäksi kirjoitan väitöskirjaa nuorten yksinäisyyden hoidosta Helsingin yliopiston <a href="https://stnimagine.fi">IMAGINE-hankkeessa</a>.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-block px-6 py-3 bg-primary text-primary-foreground font-body text-sm font-medium rounded-sm hover:opacity-90 transition-opacity duration-300"
              >
                Yhteystiedot
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Hero;
