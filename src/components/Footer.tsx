export default function Footer() {
  return (
    <footer className="py-8 border-t border-border/30">
      <div className="max-w-[980px] mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted text-xs">
            © {new Date().getFullYear()} NeoLabs Group. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-6">
            <a href="/privacy" className="text-muted text-xs hover:text-foreground transition-colors">
              Privacidad
            </a>
            <a href="#" className="text-muted text-xs hover:text-foreground transition-colors">
              Términos
            </a>
            <a href="#" className="text-muted text-xs hover:text-foreground transition-colors">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
