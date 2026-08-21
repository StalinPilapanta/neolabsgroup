export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-12 overflow-hidden">
      {/* Background gradient orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/5 blur-[120px] pointer-events-none" />

      <div className="relative max-w-[980px] mx-auto px-6 text-center">
        <p className="text-accent text-sm font-medium tracking-wide uppercase mb-4 animate-fade-in-up">
          Intelligent Automation
        </p>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05] mb-6 animate-fade-in-up-delay-1">
          <span className="gradient-text">Automatiza.</span>
          <br />
          <span className="text-foreground">Simplifica.</span>
          <br />
          <span className="text-foreground">Escala.</span>
        </h1>

        <p className="text-muted text-lg md:text-xl max-w-[600px] mx-auto mb-10 animate-fade-in-up-delay-2">
          Soluciones de inteligencia artificial que transforman la complejidad de tu negocio en procesos simples y eficientes.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up-delay-3">
          <a
            href="#contact"
            className="inline-flex items-center px-7 py-3 bg-accent hover:bg-accent-hover text-white text-sm font-medium rounded-full transition-all duration-300"
          >
            Comenzar ahora
          </a>
          <a
            href="#services"
            className="inline-flex items-center px-7 py-3 text-accent text-sm font-medium hover:underline transition-all duration-300"
          >
            Explorar servicios →
          </a>
        </div>
      </div>
    </section>
  );
}
