import React from "react";
import { motion } from "framer-motion";
import { useLang } from "@/lib/i18n";
import { Search, Wrench, LineChart } from "lucide-react";

const icons = [Search, Wrench, LineChart];

export default function HowWeWork() {
  const { t } = useLang();
  return (
    <section id="how" className="py-20 md:py-28 bg-[#0A4247]/[0.03]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0A4247]">{t.how.title}</h2>
          <p className="mt-4 text-lg text-[#1A1A1A]/60 leading-relaxed">{t.how.subtitle}</p>
        </div>

        <div className="mt-14 relative">
          <div className="absolute left-[27px] top-4 bottom-4 w-px bg-[#C67D39]/40 hidden sm:block" />
          <div className="flex flex-col gap-6">
            {t.how.steps.map((step, i) => {
              const Icon = icons[i];
              return (
                <motion.div
                  key={step.n}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="relative flex gap-5 sm:gap-7"
                >
                  <div className="relative z-10 flex-shrink-0">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#0A4247] text-white shadow-lg shadow-[#0A4247]/20">
                      <Icon size={22} />
                    </div>
                  </div>
                  <div className="flex-1 rounded-[28px] border border-[#0A4247]/10 bg-[#FDFBFA] p-7 sm:p-8">
                    <span className="text-sm font-bold text-[#C67D39]">{step.n}</span>
                    <h3 className="mt-1 text-xl font-bold text-[#0A4247]">{step.title}</h3>
                    <p className="mt-2 text-[#1A1A1A]/70 leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
