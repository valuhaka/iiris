import FadeIn from "./FadeIn";
import { Mail, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-card">
      <div className="container mx-auto px-6 max-w-3xl">
        <FadeIn>
          <h2 className="font-display text-3xl font-semibold text-foreground mb-8">Contact</h2>
          <p className="font-body text-muted-foreground leading-relaxed mb-10 max-w-xl">
            For clinical inquiries, research collaboration, or speaking engagements, 
            please reach out via email. I aim to respond within two working days.
          </p>

          <div className="space-y-4">
            <a
              href="mailto:e.voss@uva.nl"
              className="flex items-center gap-3 font-body text-sm text-foreground hover:text-primary transition-colors duration-300"
            >
              <Mail className="w-4 h-4 text-accent" />
              e.voss@uva.nl
            </a>
            <div className="flex items-center gap-3 font-body text-sm text-muted-foreground">
              <MapPin className="w-4 h-4 text-accent" />
              Department of Clinical Psychology, University of Amsterdam
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <a
              href="#"
              className="inline-block px-6 py-3 border border-accent text-accent font-body text-sm font-medium rounded-sm hover:bg-accent hover:text-primary-foreground transition-colors duration-300"
            >
              Download Full CV (PDF)
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Contact;
