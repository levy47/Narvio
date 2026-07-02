import React from "react";
import { useLang } from "@/lib/i18n";
import { Mail, MapPin } from "lucide-react";

export default function Footer() {
  const { t } = useLang();
  return (
    <footer className="bg-[#0A4247] text-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-14">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-8">
          <div>
            <div className="flex items-center gap-2">
              <div className="h-7 w-7 rounded-xl bg-gradient-to-br from-[#C67D39] to-white/40" />
              <span className="text-xl font-bold tracking-tight">Narvio</span>
            </div>
            <p className="mt-4 text-white/60 max-w-xs leading-relaxed">{t.hero.tagline}</p>
          </div>
          <div className="flex flex-col gap-3 text-sm">
            <span className="inline-flex items-center gap-2 text-white/70">
              <MapPin size={16} className="text-[#C67D39]" /> {t.footer.location}
            </span>
            <a href="mailto:jacky.levy277@gmail.com" className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors">
              <Mail size={16} className="text-[#C67D39]" /> jacky.levy277@gmail.com
            </a>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-white/10 text-sm text-white/50">
          © {new Date().getFullYear()} Narvio · {t.footer.location} · {t.footer.rights}
        </div>
      </div>
    </footer>
  );
}
