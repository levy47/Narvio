import React, { useState, useEffect } from "react";
import { useLang } from "@/lib/i18n";
import { Menu, X } from "lucide-react";

function scrollTo(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

function LangToggle() {
  const { lang, toggle } = useLang();
  return (
    <button
      onClick={toggle}
      aria-pressed={lang === "en"}
      aria-label="Toggle language"
      className="relative flex items-center rounded-full border border-[#0A4247]/20 bg-white/60 p-0.5 text-xs font-semibold"
    >
      <span className={`relative z-10 px-2.5 py-1 rounded-full transition-colors ${lang === "es" ? "text-white" : "text-[#0A4247]"}`}>ES</span>
      <span className={`relative z-10 px-2.5 py-1 rounded-full transition-colors ${lang === "en" ? "text-white" : "text-[#0A4247]"}`}>EN</span>
      <span
        className="absolute top-0.5 bottom-0.5 w-[calc(50%-2px)] rounded-full bg-[#C67D39] transition-transform duration-300"
        style={{ transform: lang === "en" ? "translateX(100%)" : "translateX(0)" }}
      />
    </button>
  );
}

export default function Navbar() {
  const { t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { id: "how", label: t.nav.how },
    { id: "services", label: t.nav.services },
    { id: "why", label: t.nav.why },
    { id: "contact", label: t.nav.contact },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-[#FDFBFA]/90 backdrop-blur-md border-b border-[#0A4247]/10" : ""}`}>
      <nav className="max-w-7xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        <button onClick={() => scrollTo("hero")} className="flex items-center gap-2" aria-label="Narvio home">
          <div className="h-7 w-7 rounded-xl bg-gradient-to-br from-[#0A4247] to-[#C67D39]" />
          <span className="text-lg font-bold tracking-tight text-[#0A4247]">Narvio</span>
        </button>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <button key={l.id} onClick={() => scrollTo(l.id)} className="text-sm font-medium text-[#1A1A1A]/70 hover:text-[#0A4247] transition-colors">
              {l.label}
            </button>
          ))}
          <LangToggle />
          <button onClick={() => scrollTo("contact")} className="rounded-full bg-[#0A4247] px-5 py-2 text-sm font-semibold text-white hover:bg-[#0A4247]/90 transition-colors">
            {t.nav.cta}
          </button>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <LangToggle />
          <button onClick={() => setOpen((o) => !o)} aria-label="Menu" className="text-[#0A4247]">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden bg-[#FDFBFA] border-b border-[#0A4247]/10 px-5 py-4 flex flex-col gap-3">
          {links.map((l) => (
            <button key={l.id} onClick={() => { scrollTo(l.id); setOpen(false); }} className="text-left text-base font-medium text-[#1A1A1A]/80 py-1">
              {l.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
