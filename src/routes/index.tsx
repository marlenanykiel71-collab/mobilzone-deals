import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import heroPhone from "@/assets/hero-phone.jpg";
import productIphone from "@/assets/product-iphone.jpg";
import productSamsung from "@/assets/product-samsung.jpg";
import productXiaomi from "@/assets/product-xiaomi.jpg";
import productEarbuds from "@/assets/product-earbuds.jpg";
import productCharger from "@/assets/product-charger.jpg";
import productAccessories from "@/assets/product-accessories.jpg";

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

const faqs = [
  { q: "Ile trwa naprawa telefonu?", a: "Wymiana ekranu lub baterii to zwykle 1–2h. Bardziej skomplikowane naprawy (płyta główna, zalanie) — 1–3 dni robocze. Zawsze informujemy o czasie po diagnozie." },
  { q: "Czy dajecie gwarancję na naprawę?", a: "Tak — 6 miesięcy gwarancji na wymienione części i wykonaną usługę." },
  { q: "Czy można wysłać telefon do serwisu kurierem?", a: "Tak. Po wycenie wysyłamy instrukcję pakowania i adres. Naprawiony telefon odsyłamy w 24h od zakończenia naprawy." },
  { q: "Czy kupujecie używane telefony?", a: "Tak, skupujemy iPhone'y, Samsungi i Xiaomi w dobrym stanie. Wyceń telefon w formularzu lub zadzwoń." },
  { q: "Jakie formy płatności akceptujecie?", a: "BLIK, karta, przelew tradycyjny oraz płatność przy odbiorze (kurier za pobraniem)." },
  { q: "Czy mogę zwrócić zakupiony telefon?", a: "Tak — masz 14 dni na zwrot zgodnie z prawem konsumenckim, pod warunkiem że telefon jest w stanie nienaruszonym." },
];

type PhoneModel = { id: string; label: string };
const phoneModels: PhoneModel[] = [
  { id: "iphone-15-pro", label: "iPhone 15 Pro / 15 Pro Max" },
  { id: "iphone-15", label: "iPhone 15 / 15 Plus" },
  { id: "iphone-14", label: "iPhone 14 / 14 Pro" },
  { id: "iphone-13", label: "iPhone 13 / 13 Pro" },
  { id: "galaxy-s24", label: "Samsung Galaxy S24 / S24 Ultra" },
  { id: "galaxy-s23", label: "Samsung Galaxy S23" },
  { id: "galaxy-a54", label: "Samsung Galaxy A54" },
  { id: "xiaomi-14", label: "Xiaomi 14 / 14 Pro" },
  { id: "xiaomi-redmi-note-13", label: "Xiaomi Redmi Note 13" },
];

type Accessory = { name: string; type: "Etui" | "Szkło" | "Ładowarka" | "Kabel"; price: number; image: string };
const accessoriesByModel: Record<string, Accessory[]> = {
  "iphone-15-pro": [
    { name: "Etui silikonowe MagSafe", type: "Etui", price: 79, image: productAccessories },
    { name: "Szkło hartowane 9H Full Glue", type: "Szkło", price: 39, image: productAccessories },
    { name: "Ładowarka MagSafe 15W", type: "Ładowarka", price: 119, image: productCharger },
    { name: "Kabel USB-C → USB-C 1m", type: "Kabel", price: 29, image: productAccessories },
  ],
  "iphone-15": [
    { name: "Etui przezroczyste anti-shock", type: "Etui", price: 59, image: productAccessories },
    { name: "Szkło hartowane Privacy", type: "Szkło", price: 49, image: productAccessories },
    { name: "Ładowarka MagSafe 15W", type: "Ładowarka", price: 119, image: productCharger },
  ],
  "iphone-14": [
    { name: "Etui skórzane premium", type: "Etui", price: 89, image: productAccessories },
    { name: "Szkło hartowane 9H", type: "Szkło", price: 35, image: productAccessories },
    { name: "Ładowarka indukcyjna 15W", type: "Ładowarka", price: 89, image: productCharger },
  ],
  "iphone-13": [
    { name: "Etui silikonowe MagSafe", type: "Etui", price: 69, image: productAccessories },
    { name: "Szkło 9H Full Glue", type: "Szkło", price: 29, image: productAccessories },
    { name: "Kabel Lightning 1m", type: "Kabel", price: 25, image: productAccessories },
  ],
  "galaxy-s24": [
    { name: "Etui pancerne Spigen-style", type: "Etui", price: 75, image: productAccessories },
    { name: "Szkło UV 3D Full Glue", type: "Szkło", price: 59, image: productAccessories },
    { name: "Ładowarka indukcyjna 15W", type: "Ładowarka", price: 89, image: productCharger },
  ],
  "galaxy-s23": [
    { name: "Etui książkowe", type: "Etui", price: 69, image: productAccessories },
    { name: "Szkło hartowane 9H", type: "Szkło", price: 35, image: productAccessories },
  ],
  "galaxy-a54": [
    { name: "Etui silikonowe matowe", type: "Etui", price: 49, image: productAccessories },
    { name: "Szkło 9H Full Glue", type: "Szkło", price: 29, image: productAccessories },
    { name: "Kabel USB-C 1m", type: "Kabel", price: 19, image: productAccessories },
  ],
  "xiaomi-14": [
    { name: "Etui Carbon TPU", type: "Etui", price: 59, image: productAccessories },
    { name: "Szkło 9H Full Glue", type: "Szkło", price: 29, image: productAccessories },
    { name: "Ładowarka HyperCharge 120W", type: "Ładowarka", price: 149, image: productCharger },
  ],
  "xiaomi-redmi-note-13": [
    { name: "Etui silikonowe matowe", type: "Etui", price: 39, image: productAccessories },
    { name: "Szkło hartowane 9H", type: "Szkło", price: 25, image: productAccessories },
    { name: "Kabel USB-C 1m", type: "Kabel", price: 19, image: productAccessories },
  ],
};

const SHOP_EMAIL = "prygakacper449@gmail.com";

type Product = {
  id: string;
  name: string;
  category: "Smartfony" | "Akcesoria";
  price: number;
  image: string;
  desc: string;
};

const products: Product[] = [
  { id: "iphone-15-pro", name: "iPhone 15 Pro 256GB", category: "Smartfony", price: 4799, image: productIphone, desc: "Tytan, ekran 6,1\", aparat 48 Mpx" },
  { id: "galaxy-s24", name: "Samsung Galaxy S24 Ultra", category: "Smartfony", price: 4499, image: productSamsung, desc: "S Pen, 512GB, AMOLED 120Hz" },
  { id: "xiaomi-14", name: "Xiaomi 14 Pro", category: "Smartfony", price: 2899, image: productXiaomi, desc: "Leica, 12/256GB, 5G" },
  { id: "earbuds-pro", name: "Słuchawki TWS Pro", category: "Akcesoria", price: 199, image: productEarbuds, desc: "Bluetooth 5.3, ANC, 24h pracy" },
  { id: "wireless-charger", name: "Ładowarka indukcyjna 15W", category: "Akcesoria", price: 89, image: productCharger, desc: "Qi, szybkie ładowanie" },
  { id: "accessory-pack", name: "Zestaw startowy", category: "Akcesoria", price: 59, image: productAccessories, desc: "Etui + szkło + kabel USB-C" },
];

const buildMailtoHref = (subject: string, body: string) =>
  `mailto:${SHOP_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

const buildGmailHref = (subject: string, body: string) =>
  `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(SHOP_EMAIL)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

const buildOutlookHref = (subject: string, body: string) =>
  `https://outlook.office.com/mail/deeplink/compose?to=${encodeURIComponent(SHOP_EMAIL)}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

type SendPayload = { subject: string; body: string };

function SendPanel({ payload }: { payload: SendPayload }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(`Do: ${SHOP_EMAIL}\nTemat: ${payload.subject}\n\n${payload.body}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* ignore */
    }
  };
  return (
    <div className="space-y-3 p-5 rounded-2xl border border-brand-accent/40 bg-brand-accent/5">
      <p className="text-sm font-bold text-brand-accent uppercase tracking-widest">Wyślij na: {SHOP_EMAIL}</p>
      <p className="text-xs text-brand-text/60">Wybierz, jak chcesz wysłać wiadomość — kliknięcie otworzy gotowy mail w nowej karcie:</p>
      <div className="grid grid-cols-2 gap-2">
        <a href={buildGmailHref(payload.subject, payload.body)} target="_blank" rel="noopener noreferrer" className="px-4 py-3 bg-brand-accent text-brand-bg font-bold text-sm rounded-lg text-center hover:scale-[1.02] transition-transform">📧 GMAIL</a>
        <a href={buildOutlookHref(payload.subject, payload.body)} target="_blank" rel="noopener noreferrer" className="px-4 py-3 bg-brand-text text-brand-bg font-bold text-sm rounded-lg text-center hover:scale-[1.02] transition-transform">📨 OUTLOOK</a>
        <a href={buildMailtoHref(payload.subject, payload.body)} className="px-4 py-3 border border-brand-text/20 font-bold text-sm rounded-lg text-center hover:border-brand-accent transition-colors">✉ APLIKACJA POCZTY</a>
        <button type="button" onClick={copy} className="px-4 py-3 border border-brand-text/20 font-bold text-sm rounded-lg hover:border-brand-accent transition-colors">{copied ? "✓ SKOPIOWANO" : "📋 KOPIUJ TREŚĆ"}</button>
      </div>
      <p className="text-[11px] text-brand-text/40">Możesz też napisać do nas na WhatsApp / SMS pod <a href="tel:508171201" className="underline">508 171 201</a>.</p>
    </div>
  );
}

export function Index() {
  const [quote, setQuote] = useState({ name: "", phone: "", email: "", model: "", damage: "", service: "Przyniosę osobiście", address: "" });
  const [quoteSent, setQuoteSent] = useState<SendPayload | null>(null);
  const [cart, setCart] = useState<{ product: Product; qty: number }[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [order, setOrder] = useState({ fullName: "", email: "", phone: "", address: "", postal: "", city: "", payment: "BLIK", blik: "", delivery: "Kurier" });
  const [orderSent, setOrderSent] = useState<SendPayload | null>(null);
  const [selectedModel, setSelectedModel] = useState<string>("");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const cartCount = cart.reduce((s, i) => s + i.qty, 0);
  const cartTotal = cart.reduce((s, i) => s + i.qty * i.product.price, 0);
  const shipping = order.delivery === "Pobranie" ? 27 : 18;
  const grandTotal = cartTotal + shipping;

  const addToCart = (p: Product) => {
    setCart((c) => {
      const ex = c.find((i) => i.product.id === p.id);
      if (ex) return c.map((i) => i.product.id === p.id ? { ...i, qty: i.qty + 1 } : i);
      return [...c, { product: p, qty: 1 }];
    });
    setCartOpen(true);
    setOrderSent(null);
  };
  const updateQty = (id: string, delta: number) => {
    setCart((c) => c.map((i) => i.product.id === id ? { ...i, qty: Math.max(1, i.qty + delta) } : i));
  };
  const removeItem = (id: string) => setCart((c) => c.filter((i) => i.product.id !== id));

  const submitQuote = (e: FormEvent) => {
    e.preventDefault();
    const subject = `Wycena naprawy — ${quote.model || quote.name}`;
    const body = `Wycena naprawy — MOBILZONE\n\nKlient: ${quote.name}\nTelefon: ${quote.phone}\nE-mail: ${quote.email}\n\nModel urządzenia: ${quote.model}\n\nOpis uszkodzenia:\n${quote.damage}\n\nForma dostarczenia: ${quote.service}${quote.service !== "Przyniosę osobiście" ? `\nAdres: ${quote.address}` : ""}\n`;
    setQuoteSent({ subject, body });
  };

  const submitOrder = (e: FormEvent) => {
    e.preventDefault();
    if (cart.length === 0) return;
    const orderNo = `MZ-${Date.now().toString().slice(-6)}`;
    const itemsLines = cart.map((i) => `• ${i.product.name} × ${i.qty} = ${i.qty * i.product.price} zł`).join("\n");
    const subject = `Zamówienie ${orderNo} — ${cartCount} szt., ${grandTotal} zł`;
    const body = `Zamówienie — MOBILZONE\nNumer: ${orderNo}\n\nPRODUKTY:\n${itemsLines}\n\nSuma produktów: ${cartTotal} zł\nDostawa: ${order.delivery} (${shipping} zł)\nRAZEM DO ZAPŁATY: ${grandTotal} zł\n\nDANE DO WYSYŁKI:\n${order.fullName}\n${order.address}\n${order.postal} ${order.city}\nTel: ${order.phone}\nE-mail: ${order.email}\n\nPŁATNOŚĆ: ${order.payment}${order.payment === "BLIK" ? ` (kod: ${order.blik})` : ""}\n`;
    setOrderSent({ subject, body });
  };

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
            <a href="#serwis" className="hover:text-brand-accent transition-colors">Wycena</a>
            <a href="#sklep" className="hover:text-brand-accent transition-colors">Sklep</a>
            <a href="#akcesoria" className="hover:text-brand-accent transition-colors">Akcesoria</a>
            <a href="#faq" className="hover:text-brand-accent transition-colors">FAQ</a>
            <a href="#opinie" className="hover:text-brand-accent transition-colors">Opinie</a>
            <a href="#kontakt" className="hover:text-brand-accent transition-colors">Kontakt</a>
          </div>
          <div className="flex items-center gap-3">
            <button type="button" onClick={() => setCartOpen(true)} className="relative px-4 py-2.5 border border-brand-text/20 hover:border-brand-accent font-bold text-sm rounded-full transition-colors flex items-center gap-2">
              <span aria-hidden>🛒</span>
              <span className="hidden sm:inline">KOSZYK</span>
              {cartCount > 0 && (
                <span className="ml-1 inline-flex items-center justify-center min-w-5 h-5 px-1 text-[11px] font-bold rounded-full bg-brand-accent text-brand-bg">{cartCount}</span>
              )}
            </button>
            <a href="tel:508171201" className="hidden sm:inline-block px-5 py-2.5 bg-brand-accent text-brand-bg font-bold text-sm rounded-full hover:scale-105 transition-transform">ZADZWOŃ</a>
          </div>
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
                <a href="#sklep" className="px-8 py-4 bg-brand-text text-brand-bg font-bold rounded-lg hover:bg-brand-accent transition-colors">ZOBACZ OFERTĘ</a>
                <a href="#serwis" className="px-8 py-4 border border-brand-text/20 font-bold rounded-lg hover:border-brand-accent transition-colors">WYCEŃ NAPRAWĘ</a>
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

      {/* Service quote form */}
      <section id="serwis" className="py-24 bg-brand-surface/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-8">
            <div className="lg:col-span-2">
              <div className="inline-block px-3 py-1 border border-brand-accent/30 text-brand-accent text-xs font-bold tracking-widest uppercase mb-6">Bezpłatna wycena 24h</div>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">WYCEŃ <span className="text-brand-accent">NAPRAWĘ</span> ONLINE</h2>
              <p className="text-brand-text/60 leading-relaxed mb-8">Wypełnij formularz — odpowiemy z dokładną wyceną w ciągu 24h. Wymiana ekranów, baterii, naprawa płyt głównych i zalanych urządzeń.</p>
              <ul className="space-y-3 text-sm text-brand-text/70">
                <li className="flex gap-3"><span className="text-brand-accent">✓</span> Diagnoza gratis</li>
                <li className="flex gap-3"><span className="text-brand-accent">✓</span> Oryginalne części</li>
                <li className="flex gap-3"><span className="text-brand-accent">✓</span> 6 miesięcy gwarancji</li>
                <li className="flex gap-3"><span className="text-brand-accent">✓</span> Naprawa nawet w 1h</li>
              </ul>
            </div>
            <form onSubmit={submitQuote} className="lg:col-span-3 p-8 bg-brand-surface border border-brand-text/10 rounded-3xl space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <Field label="Imię i nazwisko" value={quote.name} onChange={(v) => setQuote({ ...quote, name: v })} required />
                <Field label="Telefon kontaktowy" type="tel" value={quote.phone} onChange={(v) => setQuote({ ...quote, phone: v })} required />
              </div>
              <Field label="E-mail" type="email" value={quote.email} onChange={(v) => setQuote({ ...quote, email: v })} required />
              <Field label="Model urządzenia (np. iPhone 13 Pro)" value={quote.model} onChange={(v) => setQuote({ ...quote, model: v })} required />
              <div>
                <label className="block text-xs font-bold tracking-widest uppercase text-brand-text/50 mb-2">Opis uszkodzenia</label>
                <textarea required rows={4} value={quote.damage} onChange={(e) => setQuote({ ...quote, damage: e.target.value })} className="w-full px-4 py-3 bg-brand-bg border border-brand-text/10 rounded-lg focus:border-brand-accent outline-none text-brand-text resize-none" placeholder="Np. pęknięty ekran, telefon nie włącza się po zalaniu…" />
              </div>
              <div>
                <label className="block text-xs font-bold tracking-widest uppercase text-brand-text/50 mb-2">Jak dostarczysz telefon?</label>
                <div className="grid grid-cols-3 gap-2">
                  {["Przyniosę osobiście", "Wyślę kurierem", "Dojazd technika"].map((s) => (
                    <button type="button" key={s} onClick={() => setQuote({ ...quote, service: s })} className={`px-3 py-3 rounded-lg border text-xs font-bold transition-colors text-center ${quote.service === s ? "border-brand-accent bg-brand-accent/10 text-brand-accent" : "border-brand-text/10 text-brand-text/60 hover:border-brand-text/30"}`}>{s}</button>
                  ))}
                </div>
                <p className="text-[11px] text-brand-text/40 mt-2">
                  {quote.service === "Przyniosę osobiście" && "Zapraszamy do sklepu: ul. Tadeusza Czackiego 21, Jasło."}
                  {quote.service === "Wyślę kurierem" && "Po wycenie wyślemy instrukcję pakowania. Odsyłka w 24h od naprawy."}
                  {quote.service === "Dojazd technika" && "Dojazd na terenie Jasła — 30 zł. Drobne naprawy wykonujemy na miejscu."}
                </p>
              </div>
              {quote.service !== "Przyniosę osobiście" && (
                <Field label={quote.service === "Dojazd technika" ? "Adres dojazdu" : "Adres nadawcy"} value={quote.address} onChange={(v) => setQuote({ ...quote, address: v })} required placeholder="Ulica, nr, kod, miasto" />
              )}
              <button type="submit" className="w-full px-8 py-4 bg-brand-accent text-brand-bg font-bold rounded-lg hover:scale-[1.02] transition-transform">WYŚLIJ WYCENĘ →</button>
              {quoteSent && <SendPanel payload={quoteSent} />}
            </form>
          </div>
        </div>
      </section>

      {/* Accessories by model */}
      <section id="akcesoria" className="py-24 bg-brand-surface/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
            <h2 className="font-display text-5xl font-bold">AKCESORIA <br/><span className="text-brand-accent">DO TWOJEGO TELEFONU</span></h2>
            <p className="text-brand-text/40 max-w-sm mb-2">Wybierz model — pokażemy pasujące etui, szkła, ładowarki i kable.</p>
          </div>
          <div className="mb-8">
            <label className="block text-xs font-bold tracking-widest uppercase text-brand-text/50 mb-3">Wybierz swój telefon</label>
            <select value={selectedModel} onChange={(e) => setSelectedModel(e.target.value)} className="w-full md:w-96 px-4 py-4 bg-brand-bg border border-brand-text/10 rounded-lg focus:border-brand-accent outline-none text-brand-text font-bold">
              <option value="">— wybierz model —</option>
              {phoneModels.map((m) => <option key={m.id} value={m.id}>{m.label}</option>)}
            </select>
          </div>
          {selectedModel && accessoriesByModel[selectedModel] && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {accessoriesByModel[selectedModel].map((a, i) => (
                <article key={i} className="bg-brand-surface border border-brand-text/10 rounded-2xl overflow-hidden hover:border-brand-accent/40 transition-colors">
                  <div className="aspect-square bg-brand-bg overflow-hidden">
                    <img src={a.image} alt={a.name} loading="lazy" className="w-full h-full object-cover" />
                  </div>
                  <div className="p-5">
                    <p className="text-[10px] font-bold tracking-widest uppercase text-brand-accent mb-2">{a.type}</p>
                    <h3 className="font-display text-base font-bold mb-3 leading-tight">{a.name}</h3>
                    <div className="flex items-center justify-between">
                      <span className="font-display text-xl font-bold">{a.price} zł</span>
                      <button type="button" onClick={() => addToCart({ id: `acc-${selectedModel}-${i}`, name: `${a.name} (${phoneModels.find((m) => m.id === selectedModel)?.label ?? ""})`, category: "Akcesoria", price: a.price, image: a.image, desc: a.type })} className="text-xs font-bold text-brand-accent hover:underline">DO KOSZYKA →</button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
          {!selectedModel && (
            <div className="text-center py-16 border border-dashed border-brand-text/10 rounded-2xl text-brand-text/40 text-sm">
              Wybierz model telefonu z listy powyżej, aby zobaczyć pasujące akcesoria.
            </div>
          )}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-block px-3 py-1 border border-brand-accent/30 text-brand-accent text-xs font-bold tracking-widest uppercase mb-6">Najczęściej zadawane pytania</div>
            <h2 className="font-display text-5xl font-bold">MASZ <span className="text-brand-accent">PYTANIA?</span></h2>
          </div>
          <div className="space-y-3">
            {faqs.map((f, i) => {
              const open = openFaq === i;
              return (
                <div key={i} className="bg-brand-surface border border-brand-text/10 rounded-2xl overflow-hidden">
                  <button type="button" onClick={() => setOpenFaq(open ? null : i)} className="w-full flex items-center justify-between gap-4 p-6 text-left hover:bg-brand-surface/60 transition-colors">
                    <span className="font-display font-bold text-lg">{f.q}</span>
                    <span className={`text-brand-accent text-2xl transition-transform shrink-0 ${open ? "rotate-45" : ""}`}>+</span>
                  </button>
                  {open && <div className="px-6 pb-6 text-brand-text/70 leading-relaxed">{f.a}</div>}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Shop / Products */}
      <section id="sklep" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <h2 className="font-display text-5xl font-bold">SKLEP <br/><span className="text-brand-accent">ONLINE</span></h2>
            <p className="text-brand-text/40 max-w-sm mb-2">Zamów online z dostawą kurierem — płatność BLIK, kartą lub przy odbiorze.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p) => (
              <article key={p.id} className="group bg-brand-surface border border-brand-text/10 rounded-2xl overflow-hidden hover:border-brand-accent/40 transition-colors">
                <div className="aspect-square bg-brand-bg overflow-hidden">
                  <img src={p.image} alt={p.name} width={768} height={768} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <p className="text-[10px] font-bold tracking-widest uppercase text-brand-accent mb-2">{p.category}</p>
                  <h3 className="font-display text-xl font-bold mb-1">{p.name}</h3>
                  <p className="text-sm text-brand-text/50 mb-4">{p.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="font-display text-2xl font-bold">{p.price} zł</span>
                    <button onClick={() => addToCart(p)} className="px-4 py-2 bg-brand-accent text-brand-bg font-bold text-sm rounded-lg hover:scale-105 transition-transform">DO KOSZYKA</button>
                  </div>
                </div>
              </article>
            ))}
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
      <footer id="kontakt" className="bg-black py-20 border-t border-brand-text/5">
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
            <a
              href="https://www.google.com/maps/place/Telefony+MOBILZONE/@49.7441754,21.4683716,17z/data=!3m1!4b1!4m6!3m5!1s0x473db474a96c6415:0xeadaa54a7a09ecd5!8m2!3d49.7441754!4d21.4709465!16s%2Fg%2F11c7vyhygk"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Otwórz Telefony MOBILZONE w Google Maps"
              className="bg-brand-surface p-1 rounded-2xl border border-brand-text/10 overflow-hidden min-h-[300px] block group relative"
            >
              <iframe
                title="Mapa MOBILZONE Jasło"
                src="https://www.google.com/maps?q=Tadeusza+Czackiego+21,+Jaslo&output=embed"
                className="w-full h-full min-h-[300px] rounded-2xl grayscale contrast-125 invert pointer-events-none"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <span className="absolute bottom-3 right-3 bg-brand-accent text-brand-bg text-xs font-bold tracking-widest px-3 py-2 rounded-full opacity-90 group-hover:opacity-100">OTWÓRZ W MAPACH →</span>
            </a>
          </div>
          <div className="mt-20 pt-8 border-t border-brand-text/5 flex flex-col md:flex-row justify-between gap-4 text-xs font-bold tracking-widest text-brand-text/30">
            <p>© 2024 MOBILZONE JASŁO</p>
            <p>SERWIS / SPRZEDAŻ / AKCESORIA</p>
          </div>
        </div>
      </footer>

      {/* Cart drawer */}
      {cartOpen && (
        <div className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm" onClick={() => setCartOpen(false)}>
          <aside className="absolute right-0 top-0 h-full w-full max-w-md bg-brand-surface border-l border-brand-text/10 flex flex-col" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between p-6 border-b border-brand-text/10">
              <h3 className="font-display text-2xl font-bold uppercase">Koszyk ({cartCount})</h3>
              <button onClick={() => setCartOpen(false)} className="size-10 rounded-full border border-brand-text/10 hover:border-brand-accent text-brand-text/60 hover:text-brand-accent">✕</button>
            </div>
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {cart.length === 0 ? (
                <p className="text-brand-text/40 text-sm text-center py-12">Twój koszyk jest pusty.</p>
              ) : cart.map((i) => (
                <div key={i.product.id} className="flex gap-4 p-3 bg-brand-bg/50 rounded-xl border border-brand-text/5">
                  <img src={i.product.image} alt="" className="size-16 object-cover rounded-lg shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-sm leading-tight line-clamp-2">{i.product.name}</p>
                    <p className="text-xs text-brand-text/40 mt-0.5">{i.product.price} zł / szt.</p>
                    <div className="flex items-center gap-2 mt-2">
                      <button type="button" onClick={() => updateQty(i.product.id, -1)} className="size-7 rounded border border-brand-text/20 hover:border-brand-accent font-bold">−</button>
                      <span className="w-6 text-center text-sm font-bold">{i.qty}</span>
                      <button type="button" onClick={() => updateQty(i.product.id, 1)} className="size-7 rounded border border-brand-text/20 hover:border-brand-accent font-bold">+</button>
                      <button type="button" onClick={() => removeItem(i.product.id)} className="ml-auto text-[11px] text-brand-text/40 hover:text-brand-accent">USUŃ</button>
                    </div>
                  </div>
                  <p className="font-display font-bold text-brand-accent whitespace-nowrap">{i.qty * i.product.price} zł</p>
                </div>
              ))}
            </div>
            <div className="border-t border-brand-text/10 p-6 space-y-3">
              <div className="flex justify-between text-sm text-brand-text/60"><span>Produkty</span><span>{cartTotal} zł</span></div>
              <button type="button" disabled={cart.length === 0} onClick={() => { setCartOpen(false); setCheckoutOpen(true); setOrderSent(null); }} className="w-full px-6 py-4 bg-brand-accent text-brand-bg font-bold rounded-lg hover:scale-[1.02] transition-transform disabled:opacity-40 disabled:hover:scale-100">ZAMÓW ({cartTotal} zł) →</button>
              <p className="text-[10px] text-brand-text/40 text-center">Dostawę i metodę płatności wybierzesz w następnym kroku.</p>
            </div>
          </aside>
        </div>
      )}

      {/* Checkout modal */}
      {checkoutOpen && cart.length > 0 && (
        <div className="fixed inset-0 z-[70] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto" onClick={() => setCheckoutOpen(false)}>
          <div className="bg-brand-surface border border-brand-text/10 rounded-3xl max-w-2xl w-full my-8" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between p-6 border-b border-brand-text/10">
              <div>
                <p className="text-[10px] font-bold tracking-widest uppercase text-brand-accent">Finalizacja zamówienia</p>
                <p className="font-display text-xl font-bold">{cartCount} szt. · {cartTotal} zł</p>
              </div>
              <button onClick={() => setCheckoutOpen(false)} className="size-10 rounded-full border border-brand-text/10 hover:border-brand-accent text-brand-text/60 hover:text-brand-accent">✕</button>
            </div>
            {orderSent ? (
              <div className="p-6 space-y-4">
                <div className="text-center space-y-2">
                  <div className="text-5xl">✓</div>
                  <h3 className="font-display text-2xl font-bold">Zamówienie gotowe!</h3>
                  <p className="text-brand-text/60 text-sm">Wybierz, jak wysłać potwierdzenie. Po otrzymaniu odezwiemy się i wyślemy paczkę w 24h.</p>
                </div>
                <SendPanel payload={orderSent} />
                <button onClick={() => { setCheckoutOpen(false); setCart([]); }} className="w-full px-6 py-3 border border-brand-text/10 hover:border-brand-accent font-bold rounded-lg transition-colors">ZAMKNIJ I WYCZYŚĆ KOSZYK</button>
              </div>
            ) : (
              <form onSubmit={submitOrder} className="p-6 space-y-4 max-h-[75vh] overflow-y-auto">
                <div className="space-y-2 p-4 bg-brand-bg/50 rounded-xl border border-brand-text/5">
                  {cart.map((i) => (
                    <div key={i.product.id} className="flex justify-between text-xs">
                      <span className="truncate pr-2">{i.product.name} × {i.qty}</span>
                      <span className="font-bold whitespace-nowrap">{i.qty * i.product.price} zł</span>
                    </div>
                  ))}
                </div>

                <h3 className="font-display text-xl font-bold uppercase tracking-tight pt-2">Dane do wysyłki</h3>
                <Field label="Imię i nazwisko" value={order.fullName} onChange={(v) => setOrder({ ...order, fullName: v })} required />
                <div className="grid md:grid-cols-2 gap-4">
                  <Field label="E-mail" type="email" value={order.email} onChange={(v) => setOrder({ ...order, email: v })} required />
                  <Field label="Telefon" type="tel" value={order.phone} onChange={(v) => setOrder({ ...order, phone: v })} required />
                </div>
                <Field label="Ulica i numer" value={order.address} onChange={(v) => setOrder({ ...order, address: v })} required />
                <div className="grid grid-cols-3 gap-4">
                  <Field label="Kod pocztowy" value={order.postal} onChange={(v) => setOrder({ ...order, postal: v })} required />
                  <div className="col-span-2"><Field label="Miasto" value={order.city} onChange={(v) => setOrder({ ...order, city: v })} required /></div>
                </div>

                <h3 className="font-display text-xl font-bold uppercase tracking-tight pt-2">Dostawa</h3>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { id: "Kurier", label: "Kurier (przedpłata)", price: 18 },
                    { id: "Pobranie", label: "Kurier za pobraniem", price: 27 },
                  ].map((d) => (
                    <button type="button" key={d.id}
                      onClick={() => setOrder({ ...order, delivery: d.id, payment: d.id === "Pobranie" ? "Pobranie" : (order.payment === "Pobranie" ? "BLIK" : order.payment) })}
                      className={`px-3 py-3 rounded-lg border text-sm font-bold transition-colors text-left ${order.delivery === d.id ? "border-brand-accent bg-brand-accent/10 text-brand-accent" : "border-brand-text/10 text-brand-text/60 hover:border-brand-text/30"}`}>
                      <div>{d.label}</div>
                      <div className="text-xs opacity-70 mt-1">{d.price} zł</div>
                    </button>
                  ))}
                </div>

                <h3 className="font-display text-xl font-bold uppercase tracking-tight pt-2">Płatność</h3>
                <div className="grid grid-cols-3 gap-2">
                  {(order.delivery === "Pobranie" ? ["Pobranie"] : ["BLIK", "Karta", "Przelew"]).map((p) => (
                    <button type="button" key={p} onClick={() => setOrder({ ...order, payment: p })} className={`px-3 py-3 rounded-lg border text-sm font-bold transition-colors ${order.payment === p ? "border-brand-accent bg-brand-accent/10 text-brand-accent" : "border-brand-text/10 text-brand-text/60 hover:border-brand-text/30"}`}>{p}</button>
                  ))}
                </div>
                {order.payment === "BLIK" && (
                  <Field label="6-cyfrowy kod BLIK" value={order.blik} onChange={(v) => setOrder({ ...order, blik: v.replace(/\D/g, "").slice(0, 6) })} required placeholder="123 456" />
                )}
                {order.payment === "Karta" && <p className="text-xs text-brand-text/50">Po wysłaniu zamówienia otrzymasz link do bezpiecznej płatności kartą.</p>}
                {order.payment === "Przelew" && <p className="text-xs text-brand-text/50">Dane do przelewu wyślemy mailem od razu po złożeniu zamówienia.</p>}
                {order.payment === "Pobranie" && <p className="text-xs text-brand-text/50">Zapłacisz kurierowi przy odbiorze paczki.</p>}

                <div className="flex items-center justify-between pt-4 border-t border-brand-text/10">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-brand-text/40">Razem</p>
                    <p className="font-display text-2xl font-bold">{grandTotal} zł</p>
                    <p className="text-[10px] text-brand-text/40">w tym dostawa {shipping} zł</p>
                  </div>
                  <button type="submit" className="px-8 py-4 bg-brand-accent text-brand-bg font-bold rounded-lg hover:scale-105 transition-transform">ZAMÓW I ZAPŁAĆ →</button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

function Field({ label, value, onChange, type = "text", required, placeholder }: { label: string; value: string; onChange: (v: string) => void; type?: string; required?: boolean; placeholder?: string }) {
  return (
    <div>
      <label className="block text-xs font-bold tracking-widest uppercase text-brand-text/50 mb-2">{label}</label>
      <input type={type} value={value} onChange={(e) => onChange(e.target.value)} required={required} placeholder={placeholder} className="w-full px-4 py-3 bg-brand-bg border border-brand-text/10 rounded-lg focus:border-brand-accent outline-none text-brand-text" />
    </div>
  );
}
