import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/polityka-prywatnosci")({
  head: () => ({
    meta: [
      { title: "Polityka prywatności — AromaCup" },
      { name: "description", content: "Polityka prywatności serwisu AromaCup — informacje o przetwarzaniu danych osobowych, plikach cookies oraz reklamach Google AdSense." },
      { property: "og:title", content: "Polityka prywatności — AromaCup" },
      { property: "og:description", content: "Polityka prywatności AromaCup." },
      { property: "og:url", content: "/polityka-prywatnosci" },
    ],
    links: [{ rel: "canonical", href: "/polityka-prywatnosci" }],
  }),
  component: () => (
    <SiteLayout>
      <article className="mx-auto max-w-3xl px-6 py-16 space-y-4 text-sm leading-relaxed">
        <h1 className="text-4xl md:text-5xl font-semibold mb-6">Polityka prywatności</h1>
        <p className="text-muted-foreground">Ostatnia aktualizacja: 6 czerwca 2026 r.</p>

        <h2 className="text-2xl font-semibold mt-8">1. Administrator danych</h2>
        <p>Administratorem danych osobowych jest AromaCup Sp. z o.o., ul. Garncarska 12, 59-700 Bolesławiec. Kontakt: kontakt@aromacup.pl.</p>

        <h2 className="text-2xl font-semibold mt-8">2. Jakie dane zbieramy</h2>
        <p>Zbieramy dane podawane w formularzu kontaktowym (imię, e-mail, treść wiadomości) oraz dane techniczne (adres IP, typ przeglądarki, źródło wejścia) gromadzone automatycznie.</p>

        <h2 className="text-2xl font-semibold mt-8">3. Cele przetwarzania</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>obsługa zapytań i zamówień,</li>
          <li>analiza ruchu na stronie i poprawa jakości serwisu,</li>
          <li>wyświetlanie spersonalizowanych reklam (zob. pkt 6),</li>
          <li>wypełnianie obowiązków prawnych.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8">4. Podstawa prawna</h2>
        <p>Dane przetwarzamy na podstawie art. 6 ust. 1 lit. a, b i f RODO — odpowiednio zgody, wykonania umowy oraz prawnie uzasadnionego interesu administratora.</p>

        <h2 className="text-2xl font-semibold mt-8">5. Pliki cookies</h2>
        <p>Strona korzysta z plików cookies w celu zapewnienia prawidłowego działania, analizy ruchu (Google Analytics) oraz personalizacji treści reklamowych. Możesz w każdej chwili zmienić ustawienia plików cookies w swojej przeglądarce.</p>

        <h2 className="text-2xl font-semibold mt-8">6. Reklamy Google AdSense</h2>
        <p>Serwis korzysta z usług Google AdSense w celu wyświetlania reklam. Google jako zewnętrzny dostawca używa plików cookies (m.in. cookie DART) do wyświetlania reklam dopasowanych do zainteresowań użytkowników na podstawie ich wizyt na tej i innych stronach internetowych. Użytkownicy mogą zrezygnować z używania pliku cookie DART, odwiedzając stronę polityki prywatności reklam Google: <a className="text-primary underline" href="https://policies.google.com/technologies/ads" rel="noopener" target="_blank">policies.google.com/technologies/ads</a>.</p>

        <h2 className="text-2xl font-semibold mt-8">7. Twoje prawa</h2>
        <p>Masz prawo do dostępu do swoich danych, ich sprostowania, usunięcia, ograniczenia przetwarzania, przenoszenia, a także wniesienia sprzeciwu i skargi do Prezesa UODO.</p>

        <h2 className="text-2xl font-semibold mt-8">8. Kontakt</h2>
        <p>W sprawach związanych z ochroną danych pisz na: kontakt@aromacup.pl.</p>
      </article>
    </SiteLayout>
  ),
});
