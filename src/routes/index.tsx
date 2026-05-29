import { createFileRoute } from "@tanstack/react-router";
import heroPhone from "@/assets/hero-phone.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MOBILZONE Jasło — Telefony, Serwis, Akcesoria" },
      { name: "description", content: "Sklep z telefonami komórkowymi w Jaśle. Sprzedaż smartfonów, profesjonalny serwis, akcesoria. ul. Tadeusza Czackiego 21." },
      { property: "og:title", content: "MOBILZONE Jasło — Telefony, Serwis, Akcesoria" },
      { property: "og:description", content: "Smartfony, serwis i akcesoria w Jaśle. Profesjonalne doradztwo, najlepsze ceny." },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const Star = () => (
  <svg className="size-4 fill-brand-accent" viewBox="0 0 20 20" aria-hidden="true">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const testimonials = [
  { quote: "Zakupiłam telefon iPhone 13 w niskiej cenie. Gorąco Polecam!!!", author: "L R", time: "5 miesięcy temu" },
  { quote: "Bardzo miła obsługa, akcesoria jak i telefony w świetnych cenach, profesjonalne podejście do klienta. Serwis prowadzony bardzo rzetelnie.", author: "Igor Świątkowski", time: "4 lata temu" },
  { quote: "Bardzo duży wybór telefonów. Fachowe doradztwo, miła obsługa. Polecam!!!", author: "Sławomir Ginalski", time: "2 lata temu" },
];

function Index() {
  return (
    <div className="min-h-screen bg-brand-bg text-brand-text font-sans selection:bg-brand-accent/30">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-brand-text/10 bg-brand-bg/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="size-8 bg-brand-accent rounded-sm rotate-12" />
            <span className="font-display text-2xl font-bold tracking-tight uppercase">Mobilzone</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium tracking-wide uppercase text-brand-text/60">
            <a href="#kolekcja" className="hover:text-brand-accent transition-colors">Kolekcja</a>
            <a href="#serwis" className="hover:text-brand-accent transition-colors">Serwis</a>
            <a href="#opinie" className="hover:text-brand-accent transition-colors">Opinie</a>
            <a href="#kontakt" className="hover:text-brand-accent transition-colors">Kontakt</a>
          </div>
          <a href="tel:508171201" className="px-5 py-2.5 bg-brand-accent text-brand-bg font-bold text-sm rounded-full hover:scale-105 transition-transform">
            ZADZWOŃ TERAZ
          </a>
        </div>
      </nav>

      {/* Hero */}
      <header className="relative overflow-hidden pt-20 pb-32">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 size-[600px] bg-brand-accent/10 blur-[120px] rounded-full" />
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block px-3 py-1 border border-brand-accent/30 text-brand-accent text-xs font-bold tracking-widest uppercase mb-6">
                Najlepszy Serwis w Jaśle
              </div>
              <h1 className="font-display text-5xl sm:text-6xl lg:text-8xl font-bold leading-none mb-8">
                CYFROWA <span className="text-brand-accent">MOC</span> W TWOJEJ DŁONI.
              </h1>
              <p className="text-xl text-brand-text/60 max-w-lg mb-10 leading-relaxed">
                Nowoczesne smartfony, profesjonalny serwis i akcesoria, które odmienią Twój telefon. Sprawdź nasze ceny na iPhone 13 i więcej.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#kolekcja" className="px-8 py-4 bg-brand-text text-brand-bg font-bold rounded-lg hover:bg-brand-accent transition-colors">ZOBACZ OFERTĘ</a>
                <a href="#serwis" className="px-8 py-4 border border-brand-text/20 font-bold rounded-lg hover:border-brand-accent transition-colors">NASZ SERWIS</a>
              </div>
            </div>
            <div className="relative">
              <div className="w-full aspect-[4/5] bg-brand-surface border border-brand-text/10 rounded-2xl overflow-hidden">
                <img src={heroPhone} alt="Nowoczesny smartfon z podświetlonym ekranem" width={800} height={1000} className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-brand-accent p-8 rounded-xl shadow-2xl shadow-brand-accent/20">
                <p className="text-brand-bg text-4xl font-bold font-display">5/5</p>
                <p className="text-brand-bg/80 text-xs font-bold uppercase tracking-wider">Opinia Google</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Bento services */}
      <section id="serwis" className="py-24 bg-brand-surface/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2 p-8 bg-brand-surface border border-brand-text/5 rounded-3xl hover:border-brand-accent/30 transition-colors">
              <div className="size-12 rounded-lg bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center mb-6">
                <div className="size-4 bg-brand-accent rounded-full" />
              </div>
              <h2 className="text-2xl font-display font-bold mb-4">Szybki Serwis</h2>
              <p className="text-brand-text/50 leading-relaxed max-w-prose">
                Twoje urządzenie wróci do życia szybciej niż myślisz. Wymiana ekranów, baterii, naprawa płyt głównych — realizujemy naprawy rzetelnie i z profesjonalnym podejściem do każdego klienta.
              </p>
            </div>
            <div id="kontakt" className="p-8 bg-brand-accent text-brand-bg rounded-3xl">
              <h2 className="text-2xl font-display font-bold mb-4">Jasło, Czackiego 21</h2>
              <p className="font-medium mb-8">Znajdziesz nas w samym sercu miasta. Zapraszamy po fachowe doradztwo.</p>
              <div className="space-y-2 text-sm font-bold">
                <div className="flex justify-between border-b border-brand-bg/10 pb-2"><span>PON–PT</span><span>09:30–16:30</span></div>
                <div className="flex justify-between border-b border-brand-bg/10 pb-2"><span>SOBOTA</span><span>09:00–13:00</span></div>
                <div className="flex justify-between"><span>NIEDZIELA</span><span>ZAMKNIĘTE</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collection */}
      <section id="kolekcja" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <h2 className="font-display text-5xl font-bold">NASZA <br/><span className="text-brand-accent">KOLEKCJA</span></h2>
            <p className="text-brand-text/40 max-w-sm mb-2">Smartfony nowe i używane od czołowych producentów. Akcesoria w świetnych cenach.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-px bg-brand-text/10 border border-brand-text/10 rounded-2xl overflow-hidden">
            {["Apple", "Samsung", "Xiaomi", "Huawei", "Motorola"].map((brand) => (
              <div key={brand} className="bg-brand-bg p-10 flex items-center justify-center hover:bg-brand-surface transition-colors">
                <span className="font-display text-xl font-bold tracking-tighter text-brand-text/70">{brand}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="opinie" className="py-24 bg-brand-surface/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <h2 className="font-display text-5xl font-bold">CO MÓWIĄ <br/><span className="text-brand-accent">KLIENCI</span></h2>
            <p className="text-brand-text/40 max-w-sm mb-2">Ponad 30 pozytywnych opinii od stałych klientów z Jasła i okolic.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <article key={t.author} className="p-8 bg-brand-surface rounded-2xl border border-brand-text/5">
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: 5 }).map((_, i) => <Star key={i} />)}
                </div>
                <p className="italic text-lg mb-6 leading-relaxed text-brand-text/80">“{t.quote}”</p>
                <p className="text-sm font-bold tracking-widest text-brand-accent">{t.author.toUpperCase()}</p>
                <p className="text-xs text-brand-text/30 mt-1">Opinia Google · {t.time}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Footer */}
      <footer className="bg-black py-20 border-t border-brand-text/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20">
            <div>
              <h2 className="font-display text-4xl font-bold mb-8 uppercase tracking-tighter">Gotowy na upgrade?</h2>
              <div className="space-y-6">
                <div className="flex gap-6">
                  <div className="size-12 rounded-full border border-brand-text/10 flex items-center justify-center shrink-0">
                    <span className="text-brand-accent text-xs font-bold">ADR</span>
                  </div>
                  <div>
                    <p className="text-sm text-brand-text/40 uppercase font-bold tracking-widest mb-1">Adres</p>
                    <p className="text-xl">ul. Tadeusza Czackiego 21, Jasło</p>
                  </div>
                </div>
                <a href="tel:508171201" className="flex gap-6 group">
                  <div className="size-12 rounded-full border border-brand-text/10 flex items-center justify-center shrink-0 group-hover:border-brand-accent transition-colors">
                    <span className="text-brand-accent text-xs font-bold">TEL</span>
                  </div>
                  <div>
                    <p className="text-sm text-brand-text/40 uppercase font-bold tracking-widest mb-1">Telefon</p>
                    <p className="text-xl group-hover:text-brand-accent transition-colors">508 171 201</p>
                  </div>
                </a>
                <div className="flex gap-6">
                  <div className="size-12 rounded-full border border-brand-text/10 flex items-center justify-center shrink-0">
                    <span className="text-brand-accent text-[10px] font-bold">HRS</span>
                  </div>
                  <div>
                    <p className="text-sm text-brand-text/40 uppercase font-bold tracking-widest mb-1">Godziny</p>
                    <p className="text-xl">Pn–Pt 09:30–16:30 · Sob 09:00–13:00</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-brand-surface p-1 rounded-2xl border border-brand-text/10 overflow-hidden min-h-[300px]">
              <iframe
                title="Mapa MOBILZONE Jasło"
                src="https://www.google.com/maps?q=Tadeusza+Czackiego+21,+Jaslo&output=embed"
                className="w-full h-full min-h-[300px] rounded-2xl grayscale contrast-125 invert"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
          <div className="mt-20 pt-8 border-t border-brand-text/5 flex flex-col md:flex-row justify-between gap-4 text-xs font-bold tracking-widest text-brand-text/30">
            <p>© 2024 MOBILZONE JASŁO</p>
            <p>SERWIS / SPRZEDAŻ / AKCESORIA</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
