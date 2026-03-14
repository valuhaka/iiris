const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6 max-w-3xl">
        <p className="font-body text-xs text-muted-foreground text-center">
          © {new Date().getFullYear()} Luka Ainias. Kaikki oikeudet pidätetään.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
