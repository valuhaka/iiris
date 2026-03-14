import FadeIn from "./FadeIn";
import { Mail, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6 max-w-3xl">
        <FadeIn>
          <h2 className="font-display text-3xl font-semibold text-foreground mb-8">Yhteystiedot</h2>
          <p className="font-body text-muted-foreground leading-relaxed mb-10 max-w-xl">
            Jos olet kiinnostunut vastaanotostani tai tutkimuksestani, ota yhteyttä sähköpostitse. Pyrin vastaamaan mahdollisimman ripeästi.
          </p>

          <div className="space-y-4">
            <a
              href="mailto:iiris.ainias@helsinki.fi"
              className="flex items-center gap-3 font-body text-sm text-foreground hover:text-primary transition-colors duration-300"
            >
              <Mail className="w-4 h-4 text-accent" />
              iiris.ainias@helsinki.fi
            </a>
            <div className="flex items-center gap-3 font-body text-sm text-muted-foreground">
              <MapPin className="w-4 h-4 text-accent" />
              Psykologian osasto
              <br></br>Haartmaninkatu 8
              <br></br>PL 63
              <br></br>00014 Helsingin yliopisto
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <a
              href="/cv_iiris_ainias_14_3_2026.pdf"
              download
              className="inline-block px-6 py-3 border border-accent text-accent font-body text-sm font-medium rounded-sm hover:bg-accent hover:text-primary-foreground transition-colors duration-300"
            >
              Lataa koko CV (PDF)
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Contact;
