import { createFileRoute, Link } from "@tanstack/react-router";
import heroImage from "@/assets/aromacup-hero.jpg";
import { SiteLayout } from "@/components/SiteLayout";
import { AdSlot } from "@/components/AdSlot";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AromaCup — Ręcznie robione kubki ceramiczne do kawy" },
      { name: "description", content: "Odkryj AromaCup — ręcznie wykonywane ceramiczne kubki, które utrzymują temperaturę i aromat Twojej kawy dłużej. Wykonane z naturalnej gliny." },
      { property: "og:title", content: "AromaCup — Ręcznie robione kubki ceramiczne" },
      { property: "og:description", content: "Ręcznie wykonywane ceramiczne kubki do kawy i herbaty." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Product",
        name: "AromaCup",
        description: "Ręcznie wykonywany ceramiczny kubek do kawy o pojemności 350 ml. Dostępny wyłącznie w sprzedaży stacjonarnej w Bolesławcu.",
        brand: { "@type": "Brand", name: "AromaCup" },
      }),
    }],
  }),
  component: Index,
});

function Index() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-6xl px-6 pt-16 pb-20 grid gap-12 md:grid-cols-2 md:items-center">
        <div>
          <span className="inline-block text-xs uppercase tracking-widest text-primary font-medium mb-4">
            Edycja limitowana 2026
          </span>
          <h1 className="text-5xl md:text-6xl font-semibold leading-[1.05] mb-6">
            Kubek, który robi różnicę z każdym łykiem.
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-lg">
            AromaCup to ręcznie toczona ceramika z naturalnej gliny. Gruba ścianka utrzymuje
            temperaturę kawy do 40 minut, a porowate wnętrze podkreśla aromat ulubionych ziaren.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#produkt" className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 transition">
              Zobacz produkt
            </a>
            <Link to="/o-nas" className="inline-flex items-center justify-center rounded-md border border-border px-6 py-3 text-sm font-medium hover:bg-accent transition">
              Poznaj historię
            </Link>
          </div>
        </div>
        <div className="relative">
          <img
            src={heroImage}
            alt="Ręcznie wykonany ceramiczny kubek AromaCup w kolorze terakota z parującą kawą"
            width={1920}
            height={1080}
            className="rounded-2xl shadow-2xl w-full h-auto"
          />
        </div>
      </section>

      <section id="produkt" className="mx-auto max-w-6xl px-6 py-20 border-t border-border">
        <div className="grid gap-12 md:grid-cols-3">
          {[
            { t: "Naturalna glina", d: "Pozyskiwana lokalnie, wypalana w 1240°C dla maksymalnej trwałości." },
            { t: "Utrzymuje ciepło", d: "Gruba ścianka 6 mm utrzymuje temperaturę napoju nawet do 40 minut." },
            { t: "Każdy egzemplarz unikalny", d: "Toczone ręcznie w naszej pracowni w Bolesławcu — żadne dwa nie są identyczne." },
          ].map((f) => (
            <div key={f.t} className="p-6 rounded-xl bg-card border border-border">
              <h3 className="text-xl font-semibold mb-2">{f.t}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{f.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 border-t border-border">
        <h2 className="text-3xl md:text-4xl font-semibold mb-10">Specyfikacja</h2>
        <dl className="grid gap-6 md:grid-cols-2 text-sm">
          {[
            ["Materiał", "Ceramika kamionkowa, glazura spożywcza"],
            ["Pojemność", "350 ml"],
            ["Wymiary", "Ø 9 cm × wys. 10 cm"],
            ["Waga", "ok. 380 g"],
            ["Mycie", "Bezpieczne w zmywarce"],
            ["Mikrofalówka", "Tak"],
          ].map(([k, v]) => (
            <div key={k} className="flex justify-between border-b border-border pb-3">
              <dt className="text-muted-foreground">{k}</dt>
              <dd className="font-medium">{v}</dd>
            </div>
          ))}
        </dl>
      </section>

      <div className="mx-auto max-w-3xl px-6 py-8">
        <AdSlot slot="1234567890" />
      </div>

      <section className="mx-auto max-w-3xl px-6 py-20 border-t border-border text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">Dostępne wyłącznie w sprzedaży stacjonarnej.</h2>
        <p className="text-muted-foreground mb-8">
          Zapraszamy do naszej pracowni w Bolesławcu — każdy egzemplarz wybierasz osobiście.
          Nie prowadzimy wysyłki ani sklepu internetowego.
        </p>
        <Link to="/kontakt" className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 transition">
          Zobacz adres i mapę dojazdu
        </Link>
      </section>
    </SiteLayout>
  );
}
