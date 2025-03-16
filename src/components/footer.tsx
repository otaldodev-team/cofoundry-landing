import { Rocket } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container px-4 py-8 md:px-6 md:py-12 lg:px-16">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Rocket className="h-6 w-6" />
              <span className="font-heading text-xl font-bold">CoFoundry</span>
            </Link>
            <p className="text-muted-foreground text-base">
              Conecte-se a profissionais para construir sua startup
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Plataforma</h3>
            <ul className="space-y-2 text-base">
              <li>
                <Link
                  href="/projetos"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Projetos
                </Link>
              </li>
              <li>
                <Link
                  href="/profissionais"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Profissionais
                </Link>
              </li>
              <li>
                <Link
                  href="/como-funciona"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Como funciona
                </Link>
              </li>
              <li>
                <Link
                  href="/changelog"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Changelog
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Empresa</h3>
            <ul className="space-y-2 text-base">
              <li>
                <Link
                  href="/sobre"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Sobre
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Legal</h3>
            <ul className="space-y-2 text-base">
              <li>
                <Link
                  href="/legal/politica-de-privacidade"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Política de privacidade
                </Link>
              </li>
              <li>
                <Link
                  href="/legal/termos-de-uso"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Termos de uso
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-muted-foreground mt-8 border-t pt-8 text-center text-base">
          © {new Date().getFullYear()} CoFoundry. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
