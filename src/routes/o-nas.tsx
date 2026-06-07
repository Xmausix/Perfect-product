import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/o-nas")({
  head: () => ({
    meta: [
      { title: "O nas — AromaCup" },
      { name: "description", content: "Poznaj historię AromaCup — rodzinnej pracowni ceramicznej z Bolesławca tworzącej ręcznie kubki do kawy i herbaty." },
      { property: "og:title", content: "O nas — AromaCup" },
      { property: "og:description", content: "Historia rodzinnej pracowni ceramicznej AromaCup." },
      { property: "og:url", content: "/o-nas" },
    ],
    links: [{ rel: "canonical", href: "/o-nas" }],
  }),
  component: () => (
    <SiteLayout>
      <article className="mx-auto max-w-3xl px-6 py-16 prose-neutral">
        <h1 className="text-4xl md:text-5xl font-semibold mb-6">O nas</h1>
        <p className="text-lg text-muted-foreground mb-6">
          AromaCup powstał w 2019 roku w małej pracowni w Bolesławcu, w sercu polskiej tradycji
          ceramicznej. Założycielami są Anna i Marek — dwoje rzemieślników, którzy wierzą, że
          codzienne przedmioty zasługują na to, by były wyjątkowe.
        </p>
        <h2 className="text-2xl font-semibold mt-10 mb-4">Nasza filozofia</h2>
        <p className="text-muted-foreground mb-4">
          Każdy kubek AromaCup powstaje na kole garncarskim. Nie używamy form ani masowej produkcji.
          Dzięki temu każdy egzemplarz jest jedyny w swoim rodzaju — z subtelnymi różnicami w
          kształcie, fakturze i odcieniu glazury.
        </p>
        <h2 className="text-2xl font-semibold mt-10 mb-4">Materiały</h2>
        <p className="text-muted-foreground mb-4">
          Glinę pozyskujemy lokalnie, a wszystkie glazury są bezpieczne dla zdrowia i dopuszczone do
          kontaktu z żywnością. Wypalamy w temperaturze 1240°C, co gwarantuje trwałość przez lata.
        </p>
        <h2 className="text-2xl font-semibold mt-10 mb-4">Zrównoważony rozwój</h2>
        <p className="text-muted-foreground">
          Pracujemy w małych partiach, by ograniczyć marnotrawstwo. Opakowania, w których wysyłamy
          kubki, są w 100% z makulatury i biodegradowalne.
        </p>
      </article>
    </SiteLayout>
  ),
});
