const stats = [
  { value: "99.9%", label: "Uptime garantizado" },
  { value: "3x", label: "Más rápido que procesos manuales" },
  { value: "24/7", label: "Operación continua" },
  { value: "50%", label: "Reducción de costos operativos" },
];

export default function About() {
  return (
    <section id="about" className="py-32 border-t border-border/30">
      <div className="max-w-[980px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left - Text */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Construimos el futuro.
              <br />
              <span className="text-muted">Hoy.</span>
            </h2>
            <p className="text-muted text-base leading-relaxed mb-6">
              En NeoLabs Group combinamos ingeniería de software de alto nivel con inteligencia artificial para crear soluciones que realmente transforman operaciones empresariales.
            </p>
            <p className="text-muted text-base leading-relaxed">
              No vendemos promesas. Entregamos sistemas que funcionan, escalan y generan resultados medibles desde el primer día.
            </p>
          </div>

          {/* Right - Stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="glass-card rounded-2xl p-6 text-center">
                <div className="text-3xl md:text-4xl font-bold text-accent mb-2">
                  {stat.value}
                </div>
                <p className="text-muted text-xs">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
