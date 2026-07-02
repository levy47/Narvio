import React from "react";
import { useLang } from "@/lib/i18n";

function scrollTo(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export default function StickyCTA() {
  const { t } = useLang();
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 p-3 bg-[#FDFBFA]/95 backdrop-blur-md border-t border-[#0A4247]/10">
      <button
        onClick={() => scrollTo("contact")}
        className="w-full rounded-full bg-[#0A4247] px-6 py-3.5 text-base font-semibold text-white"
      >
        {t.hero.cta}
      </button>
    </div>
  );
}
