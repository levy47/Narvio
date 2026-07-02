import React from "react";
import { motion } from "framer-motion";
import { useLang } from "@/lib/i18n";
import { ArrowDown } from "lucide-react";

function scrollTo(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export default function Hero({ image }) {
  const { t } = useLang();

  return (
    <section id="hero" className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-[#C67D39]/40 bg-[#C67D39]/5 px-3 py-1 text-xs font-medium text-[#C67D39]">
            {t.hero.badge}
          </span>
          <p className="mt-6 text-[#C67D39] font-semibold text-lg">{t.hero.tagline}</p>
          <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight text-[#0A4247]">
            {t.hero.headline}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-[#1A1A1A]/70 max-w-xl">
            {t.hero.sub}
          </p>
          <div className="mt-9">
            <button
              onClick={() => scrollTo("contact")}
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full border-2 border-[#0A4247] px-7 py-3.5 text-base font-semibold text-[#0A4247] transition-colors hover:text-white"
            >
              <span className="absolute inset-0 -z-0 translate-y-full bg-[#0A4247] transition-transform duration-300 ease-out group-hover:translate-y-0" />
              <span className="relative z-10 flex items-center gap-2">
                {t.hero.cta}
                <ArrowDown size={18} />
              </span>
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="relative"
        >
          <div className="relative rounded-[28px] overflow-hidden shadow-2xl shadow-[#0A4247]/20">
            <img src={image} alt="Abstract gradient composition" className="w-full h-full object-cover aspect-[4/5]" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A4247]/30 to-transparent" />
          </div>
          {/* Abstract geometric accent */}
          <div className="absolute -bottom-6 -left-6 hidden sm:flex items-end gap-2">
            <span className="block h-10 w-10 rounded-2xl bg-[#C67D39]" />
            <span className="block h-16 w-10 rounded-2xl bg-[#0A4247]" />
            <span className="block h-24 w-10 rounded-2xl bg-[#0A4247]/40" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
