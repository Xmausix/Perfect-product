import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title: "Kontakt — AromaCup" },
      { name: "description", content: "Skontaktuj się z pracownią AromaCup — adres, e-mail i telefon. Odpowiadamy w ciągu 24 godzin." },
      { property: "og:title", content: "Kontakt — AromaCup" },
      { property: "og:description", content: "Dane kontaktowe AromaCup." },
      { property: "og:url", content: "/kontakt" },
    ],
    links: [{ rel: "canonical", href: "/kontakt" }],
  }),
  component: () => (
    <SiteLayout>
      <section className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-semibold mb-6">Kontakt i sprzedaż stacjonarna</h1>
        <p className="text-muted-foreground mb-10 max-w-2xl">
          Kubki AromaCup są dostępne <strong>wyłącznie w sprzedaży stacjonarnej</strong> w naszej
          pracowni w Bolesławcu. Nie prowadzimy wysyłki ani sklepu internetowego — chcemy, abyś
          mógł dotknąć i wybrać swój egzemplarz osobiście.
        </p>

        <div className="grid gap-6 md:grid-cols-2 mb-10">
          <div className="rounded-xl border border-border bg-card p-6">
            <h2 className="font-display text-xl mb-3">Dane kontaktowe</h2>
            <ul className="space-y-2 text-sm">
              <li><span className="text-muted-foreground">E-mail:</span> kontakt@aromacup.pl</li>
              <li><span className="text-muted-foreground">Telefon:</span> +48 600 000 000</li>
              <li><span className="text-muted-foreground">Godziny otwarcia:</span> Pn–Pt 9:00–17:00, Sob 10:00–14:00</li>
            </ul>
          </div>
          <div className="rounded-xl border border-border bg-card p-6">
            <h2 className="font-display text-xl mb-3">Adres pracowni</h2>
            <address className="not-italic text-sm leading-relaxed">
              AromaCup Sp. z o.o.<br />
              ul. Garncarska 12<br />
              59-700 Bolesławiec<br />
              Polska<br />
              <span className="text-muted-foreground">NIP: 000-000-00-00</span>
            </address>
          </div>
        </div>

        <h2 className="font-display text-2xl mb-4">Jak do nas trafić</h2>
        <div className="rounded-xl overflow-hidden border border-border shadow-sm">
          <iframe
            title="Mapa lokalizacji AromaCup — Bolesławiec, ul. Garncarska 12"
            src="https://www.google.com/maps?q=Garncarska+12,+Bolesławiec&output=embed"
            width="100%"
            height="420"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            style={{ border: 0, display: "block" }}
          />
        </div>
        <p className="text-sm text-muted-foreground mt-3">
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=Garncarska+12,+Bolesławiec"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            Wyznacz trasę w Google Maps →
          </a>
        </p>
      </section>
    </SiteLayout>
  ),
});
