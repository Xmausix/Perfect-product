import { Link, Outlet } from "@tanstack/react-router";
import type { ReactNode } from "react";

export function SiteLayout({ children }: { children?: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <header className="border-b border-border bg-background/80 backdrop-blur sticky top-0 z-40">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link to="/" className="font-display text-xl font-semibold tracking-tight">
            AromaCup
          </Link>
          <ul className="flex items-center gap-6 text-sm">
            <li><Link to="/" className="hover:text-primary transition-colors">Strona główna</Link></li>
            <li><Link to="/o-nas" className="hover:text-primary transition-colors">O nas</Link></li>
            <li><Link to="/kontakt" className="hover:text-primary transition-colors">Kontakt</Link></li>
          </ul>
        </nav>
      </header>
      <main className="flex-1">{children ?? <Outlet />}</main>
      <footer className="border-t border-border bg-secondary/40 mt-16">
        <div className="mx-auto max-w-6xl px-6 py-12 grid gap-8 md:grid-cols-3 text-sm">
          <div>
            <h3 className="font-display text-lg mb-3">AromaCup</h3>
            <p className="text-muted-foreground">
              Ręcznie wykonywane kubki ceramiczne dla miłośników kawy i herbaty.
            </p>
          </div>
          <div>
            <h3 className="font-display text-lg mb-3">Informacje</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><Link to="/o-nas" className="hover:text-primary">O nas</Link></li>
              <li><Link to="/kontakt" className="hover:text-primary">Kontakt</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-display text-lg mb-3">Dokumenty</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><Link to="/polityka-prywatnosci" className="hover:text-primary">Polityka prywatności</Link></li>
              <li><Link to="/regulamin" className="hover:text-primary">Regulamin</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border py-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} AromaCup. Wszystkie prawa zastrzeżone.
        </div>
      </footer>
    </div>
  );
}
