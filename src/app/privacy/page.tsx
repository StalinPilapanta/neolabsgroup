import Link from "next/link";

export default function PrivacyPage() {
  return (
    <>
      {/* Navbar simple */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-border/50">
        <div className="max-w-[980px] mx-auto px-6">
          <div className="flex items-center justify-between h-12">
            <Link href="/" className="text-foreground text-sm font-semibold tracking-tight">
              NoeLabs Group
            </Link>
            <Link href="/" className="text-xs text-muted hover:text-foreground transition-colors">
              ← Volver al inicio
            </Link>
          </div>
        </div>
      </nav>

      <main className="pt-24 pb-20">
        <div className="max-w-[720px] mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Política de Privacidad
          </h1>
          <p className="text-muted text-sm mb-12">
            Última actualización: Agosto 2026
          </p>

          <div className="space-y-10 text-sm leading-relaxed">
            {/* 1 */}
            <section>
              <h2 className="text-xl font-semibold mb-3">1. Información que recopilamos</h2>
              <p className="text-muted mb-3">
                En NoeLabs Group recopilamos información que usted nos proporciona directamente al utilizar nuestros servicios:
              </p>
              <ul className="list-disc list-inside text-muted space-y-2 ml-2">
                <li>Nombre completo y datos de contacto (correo electrónico, teléfono)</li>
                <li>Nombre de la empresa y cargo</li>
                <li>Información proporcionada a través de formularios de contacto</li>
                <li>Datos técnicos: dirección IP, tipo de navegador, sistema operativo</li>
                <li>Datos de uso: páginas visitadas, tiempo de permanencia, interacciones</li>
              </ul>
            </section>

            {/* 2 */}
            <section>
              <h2 className="text-xl font-semibold mb-3">2. Uso de la información</h2>
              <p className="text-muted mb-3">
                Utilizamos la información recopilada para:
              </p>
              <ul className="list-disc list-inside text-muted space-y-2 ml-2">
                <li>Proveer, mantener y mejorar nuestros servicios</li>
                <li>Responder a consultas y solicitudes de contacto</li>
                <li>Enviar comunicaciones relevantes sobre nuestros servicios (con su consentimiento)</li>
                <li>Analizar el uso del sitio para mejorar la experiencia del usuario</li>
                <li>Cumplir con obligaciones legales aplicables</li>
              </ul>
            </section>

            {/* 3 */}
            <section>
              <h2 className="text-xl font-semibold mb-3">3. Compartición de datos</h2>
              <p className="text-muted">
                No vendemos, alquilamos ni compartimos su información personal con terceros con fines comerciales. Podemos compartir información únicamente en los siguientes casos:
              </p>
              <ul className="list-disc list-inside text-muted space-y-2 ml-2 mt-3">
                <li>Con proveedores de servicios que nos asisten en la operación (hosting, analítica)</li>
                <li>Cuando sea requerido por ley o proceso legal</li>
                <li>Para proteger los derechos, propiedad o seguridad de NoeLabs Group</li>
                <li>Con su consentimiento explícito</li>
              </ul>
            </section>

            {/* 4 */}
            <section>
              <h2 className="text-xl font-semibold mb-3">4. Cookies y tecnologías similares</h2>
              <p className="text-muted">
                Utilizamos cookies y tecnologías similares para mejorar su experiencia en nuestro sitio. Estas incluyen:
              </p>
              <ul className="list-disc list-inside text-muted space-y-2 ml-2 mt-3">
                <li><strong className="text-foreground">Cookies esenciales:</strong> necesarias para el funcionamiento del sitio</li>
                <li><strong className="text-foreground">Cookies analíticas:</strong> nos ayudan a entender cómo interactúan los usuarios con el sitio</li>
                <li><strong className="text-foreground">Cookies de preferencias:</strong> recuerdan sus configuraciones y preferencias</li>
              </ul>
              <p className="text-muted mt-3">
                Puede configurar su navegador para rechazar cookies, aunque esto podría afectar la funcionalidad del sitio.
              </p>
            </section>

            {/* 5 */}
            <section>
              <h2 className="text-xl font-semibold mb-3">5. Seguridad de datos</h2>
              <p className="text-muted">
                Implementamos medidas de seguridad técnicas y organizativas para proteger su información personal contra acceso no autorizado, alteración, divulgación o destrucción. Esto incluye cifrado de datos en tránsito y en reposo, controles de acceso y auditorías periódicas de seguridad.
              </p>
            </section>

            {/* 6 */}
            <section>
              <h2 className="text-xl font-semibold mb-3">6. Sus derechos</h2>
              <p className="text-muted mb-3">
                Usted tiene derecho a:
              </p>
              <ul className="list-disc list-inside text-muted space-y-2 ml-2">
                <li>Acceder a sus datos personales que mantenemos</li>
                <li>Solicitar la corrección de datos inexactos</li>
                <li>Solicitar la eliminación de sus datos</li>
                <li>Oponerse al procesamiento de sus datos</li>
                <li>Solicitar la portabilidad de sus datos</li>
                <li>Retirar su consentimiento en cualquier momento</li>
              </ul>
            </section>

            {/* 7 */}
            <section>
              <h2 className="text-xl font-semibold mb-3">7. Retención de datos</h2>
              <p className="text-muted">
                Conservamos su información personal solo durante el tiempo necesario para cumplir con los fines para los que fue recopilada, incluido el cumplimiento de requisitos legales, contables o de reporte.
              </p>
            </section>

            {/* 8 */}
            <section>
              <h2 className="text-xl font-semibold mb-3">8. Transferencias internacionales</h2>
              <p className="text-muted">
                Sus datos pueden ser transferidos y procesados en servidores ubicados fuera de su país de residencia. En tales casos, nos aseguramos de que existan protecciones adecuadas conforme a la legislación aplicable.
              </p>
            </section>

            {/* 9 */}
            <section>
              <h2 className="text-xl font-semibold mb-3">9. Cambios a esta política</h2>
              <p className="text-muted">
                Podemos actualizar esta política periódicamente. Le notificaremos de cualquier cambio material publicando la nueva política en esta página con la fecha de actualización correspondiente.
              </p>
            </section>

            {/* 10 */}
            <section>
              <h2 className="text-xl font-semibold mb-3">10. Contacto</h2>
              <p className="text-muted">
                Si tiene preguntas sobre esta política de privacidad o desea ejercer sus derechos, puede contactarnos en:
              </p>
              <div className="mt-3 glass-card rounded-xl p-5">
                <p className="text-foreground font-medium">NoeLabs Group</p>
                <p className="text-muted mt-1">Email: privacy@noelabsgroup.com</p>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-border/30">
        <div className="max-w-[980px] mx-auto px-6 text-center">
          <p className="text-muted text-xs">
            © {new Date().getFullYear()} NoeLabs Group. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </>
  );
}
