import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/regulamin")({
  head: () => ({
    meta: [
      { title: "Regulamin — AromaCup" },
      { name: "description", content: "Regulamin korzystania ze strony i sklepu AromaCup — warunki sprzedaży, dostawy, zwrotów i reklamacji." },
      { property: "og:title", content: "Regulamin — AromaCup" },
      { property: "og:description", content: "Regulamin AromaCup." },
      { property: "og:url", content: "/regulamin" },
    ],
    links: [{ rel: "canonical", href: "/regulamin" }],
  }),
  component: () => (
    <SiteLayout>
      <article className="mx-auto max-w-3xl px-6 py-16 space-y-4 text-sm leading-relaxed">
        <h1 className="text-4xl md:text-5xl font-semibold mb-6">Regulamin</h1>
        <p className="text-muted-foreground">Obowiązuje od: 6 czerwca 2026 r.</p>

        <h2 className="text-2xl font-semibold mt-8">§1. Postanowienia ogólne</h2>
        <p>Niniejszy regulamin określa zasady korzystania ze strony aromacup.pl oraz zawierania umów sprzedaży produktów oferowanych przez AromaCup Sp. z o.o.</p>

        <h2 className="text-2xl font-semibold mt-8">§2. Zamówienia</h2>
        <p>Zamówienia można składać przez formularz kontaktowy lub e-mailowo. Umowa zostaje zawarta z chwilą potwierdzenia zamówienia przez sprzedawcę.</p>

        <h2 className="text-2xl font-semibold mt-8">§3. Płatności i dostawa</h2>
        <p>Akceptujemy przelewy bankowe i płatności BLIK. Dostawa realizowana jest w ciągu 3–5 dni roboczych na terenie Polski.</p>

        <h2 className="text-2xl font-semibold mt-8">§4. Prawo odstąpienia</h2>
        <p>Konsument ma prawo odstąpić od umowy w terminie 14 dni bez podawania przyczyny, zgodnie z ustawą o prawach konsumenta.</p>

        <h2 className="text-2xl font-semibold mt-8">§5. Reklamacje</h2>
        <p>Reklamacje rozpatrujemy w terminie 14 dni od ich zgłoszenia na adres kontakt@aromacup.pl.</p>

        <h2 className="text-2xl font-semibold mt-8">§6. Postanowienia końcowe</h2>
        <p>W sprawach nieuregulowanych niniejszym regulaminem zastosowanie mają przepisy prawa polskiego.</p>
      </article>
    </SiteLayout>
  ),
});
