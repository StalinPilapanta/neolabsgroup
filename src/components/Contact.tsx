export default function Contact() {
  return (
    <section id="contact" className="py-32 border-t border-border/30">
      <div className="max-w-[980px] mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          ¿Listo para <span className="gradient-text">automatizar</span>?
        </h2>
        <p className="text-muted text-lg max-w-[500px] mx-auto mb-12">
          Hablemos de cómo podemos transformar tu operación con inteligencia artificial.
        </p>

        <div className="max-w-[480px] mx-auto">
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Tu nombre"
              className="w-full px-5 py-3 bg-card-bg border border-border rounded-xl text-foreground text-sm placeholder:text-muted/60 focus:outline-none focus:border-accent transition-colors"
            />
            <input
              type="email"
              placeholder="correo@empresa.com"
              className="w-full px-5 py-3 bg-card-bg border border-border rounded-xl text-foreground text-sm placeholder:text-muted/60 focus:outline-none focus:border-accent transition-colors"
            />
            <textarea
              placeholder="Cuéntanos sobre tu proyecto..."
              rows={4}
              className="w-full px-5 py-3 bg-card-bg border border-border rounded-xl text-foreground text-sm placeholder:text-muted/60 focus:outline-none focus:border-accent transition-colors resize-none"
            />
            <button
              type="submit"
              className="w-full px-7 py-3 bg-accent hover:bg-accent-hover text-white text-sm font-medium rounded-full transition-all duration-300 mt-2"
            >
              Enviar mensaje
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
