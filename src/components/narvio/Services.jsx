import React from "react";
import { motion } from "framer-motion";
import { useLang } from "@/lib/i18n";
import { Check } from "lucide-react";

function scrollTo(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export default function Services() {
  const { t } = useLang();
  return (
    <section id="services" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0A4247]">{t.services.title}</h2>
          <p className="mt-4 text-lg text-[#1A1A1A]/60 leading-relaxed">{t.services.subtitle}</p>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {t.services.items.map((item, i) => {
            const premium = item.id === "custom_agent";
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                className={`flex flex-col rounded-[28px] p-8 ${
                  premium
                    ? "bg-[#0A4247] text-white shadow-2xl shadow-[#0A4247]/30 md:-translate-y-3"
                    : "bg-[#FDFBFA] border border-[#0A4247]/10"
                }`}
              >
                <h3 className={`text-xl font-bold ${premium ? "text-white" : "text-[#0A4247]"}`}>{item.name}</h3>
                <div className="mt-4 flex items-baseline gap-1.5">
                  {item.prefix && (
                    <span className={`text-sm font-medium ${premium ? "text-white/60" : "text-[#1A1A1A]/50"}`}>{t.services.from}</span>
                  )}
                  <span className={`text-3xl font-bold ${premium ? "text-[#C67D39]" : "text-[#0A4247]"}`}>{item.price}</span>
                </div>
                {item.extra && (
                  <span className={`text-sm font-medium ${premium ? "text-white/70" : "text-[#1A1A1A]/60"}`}>{item.extra}</span>
                )}
                <p className={`mt-4 leading-relaxed flex-1 ${premium ? "text-white/80" : "text-[#1A1A1A]/70"}`}>{item.desc}</p>

                {item.id === "audit" && (
                  <span className="mt-5 inline-flex items-start gap-2 self-start rounded-xl border border-[#C67D39]/50 bg-[#C67D39]/5 px-3 py-2 text-xs font-medium text-[#C67D39]">
                    <Check size={14} className="mt-0.5 flex-shrink-0" />
                    {t.services.creditNote}
                  </span>
                )}

                <button
                  onClick={() => scrollTo("contact")}
                  className={`mt-6 rounded-full px-5 py-3 text-sm font-semibold transition-colors ${
                    premium
                      ? "bg-[#C67D39] text-white hover:bg-[#C67D39]/90"
                      : "border-2 border-[#0A4247] text-[#0A4247] hover:bg-[#0A4247] hover:text-white"
                  }`}
                >
                  {t.services.cta}
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
