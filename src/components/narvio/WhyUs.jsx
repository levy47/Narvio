import React from "react";
import { motion } from "framer-motion";
import { useLang } from "@/lib/i18n";
import { Ruler, Hammer, MessageSquare, FileCheck, MapPin } from "lucide-react";

const icons = [Ruler, Hammer, MessageSquare, FileCheck, MapPin];

export default function WhyUs() {
  const { t } = useLang();
  return (
    <section id="why" className="py-20 md:py-28 bg-[#0A4247]/[0.03]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0A4247] max-w-2xl">{t.why.title}</h2>
        <div className="mt-12 flex flex-wrap justify-center gap-6">
          {t.why.items.map((item, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-[24px] bg-[#FDFBFA] border border-[#0A4247]/10 p-7 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#C67D39]/10 text-[#C67D39]">
                  <Icon size={20} />
                </div>
                <h3 className="mt-4 text-lg font-bold text-[#0A4247]">{item.title}</h3>
                <p className="mt-2 text-[#1A1A1A]/70 leading-relaxed">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
