import FadeIn from "./FadeIn";

const About = () => {
  return (
    <section id="about" className="py-24 bg-card">
      <div className="container mx-auto px-6 max-w-3xl">
        <FadeIn>
          <h2 className="font-display text-3xl font-semibold text-foreground mb-8">About</h2>
          <div className="space-y-5 font-body text-muted-foreground leading-relaxed">
            <p>
              I am a licensed clinical psychologist with over six years of experience in individual 
              and group psychotherapy, specializing in anxiety disorders, complex trauma, and 
              emotion regulation. My clinical approach integrates evidence-based modalities—primarily 
              CBT, EMDR, and schema therapy—within a culturally sensitive framework.
            </p>
            <p>
              Alongside my clinical work, I am pursuing a PhD at the University of Amsterdam's 
              Department of Clinical Psychology, where my doctoral research investigates the 
              neurobiological underpinnings of trauma processing in adults with adverse childhood 
              experiences. My work has been published in peer-reviewed journals including 
              <em className="text-foreground"> Journal of Traumatic Stress</em> and 
              <em className="text-foreground"> Behaviour Research and Therapy</em>.
            </p>
            <p>
              I believe deeply that rigorous research and compassionate clinical practice are not 
              separate endeavors but parts of a unified commitment to understanding and alleviating 
              human suffering.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default About;
