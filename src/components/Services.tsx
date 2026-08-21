const services = [
  {
    title: "Chatbots Inteligentes",
    description:
      "Asistentes conversacionales potenciados con AI que entienden contexto, resuelven dudas y escalan tu atención al cliente 24/7.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 10h.01M12 10h.01M16 10h.01" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Automatización",
    description:
      "Flujos de trabajo inteligentes que eliminan tareas repetitivas, reducen errores y liberan a tu equipo para lo que importa.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83" strokeLinecap="round" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    title: "Análisis de Datos",
    description:
      "Convierte datos crudos en insights accionables. Dashboards, predicciones y reportes que impulsan decisiones inteligentes.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 3v18h18" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7 16l4-6 4 4 5-8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Infraestructura AI",
    description:
      "Arquitectura cloud escalable, pipelines de ML y despliegue de modelos optimizados para tu operación. Robusta y confiable.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="3" width="20" height="6" rx="1" />
        <rect x="2" y="15" width="20" height="6" rx="1" />
        <path d="M6 6h.01M6 18h.01M12 9v6" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="py-32">
      <div className="max-w-[980px] mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Soluciones que <span className="gradient-text">impulsan</span> tu negocio.
          </h2>
          <p className="text-muted text-lg max-w-[600px] mx-auto">
            Tecnología de vanguardia aplicada a problemas reales. Sin complejidad innecesaria.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl p-8 hover:border-accent/50 transition-all duration-300 group"
            >
              <div className="text-accent mb-5 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
