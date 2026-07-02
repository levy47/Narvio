import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "@/lib/i18n";
import { Ruler, Hammer, FileCheck } from "lucide-react";

// ─────────────────────────────────────────────────────────────────────────────
// FORM BACKEND (Formspree)
// 1. Create a free account at https://formspree.io (50 submissions/month free)
// 2. Create a new form → copy its ID (looks like "mqkrzvbe")
// 3. Replace YOUR_FORM_ID below, commit and push — done.
// Submissions arrive by email and in the Formspree dashboard.
// ─────────────────────────────────────────────────────────────────────────────
const FORM_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-[#0A4247]">{label}</span>
      {children}
    </label>
  );
}

const inputClass =
  "mt-1.5 w-full bg-transparent border-b-2 border-[#0A4247]/20 py-2 text-[#1A1A1A] outline-none transition-colors focus:border-[#0A4247] placeholder:text-[#1A1A1A]/30";

export default function InquiryForm({ successImage }) {
  const { t } = useLang();
  const [form, setForm] = useState({
    name: "", business_name: "", email: "", phone: "", service_of_interest: "", message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState(false);

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError(false);
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          ...form,
          service_of_interest: form.service_of_interest || "not_sure",
        }),
      });
      if (!res.ok) throw new Error("Form submission failed");
      setDone(true);
    } catch {
      setError(true);
    } finally {
      setSubmitting(false);
    }
  };

  const whyProps = [
    { icon: Ruler, ...t.why.items[0] },
    { icon: Hammer, ...t.why.items[1] },
    { icon: FileCheck, ...t.why.items[3] },
  ];

  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-14 items-start">
        {/* Left: value props */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0A4247]">{t.form.title}</h2>
          <p className="mt-4 text-lg text-[#1A1A1A]/60 leading-relaxed">{t.form.subtitle}</p>
          <div className="mt-8 flex flex-col gap-5">
            {whyProps.map((p, i) => (
              <div key={i} className="flex gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#C67D39]/10 text-[#C67D39]">
                  <p.icon size={18} />
                </div>
                <div>
                  <h3 className="font-semibold text-[#0A4247]">{p.title}</h3>
                  <p className="text-sm text-[#1A1A1A]/60 leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: form / success */}
        <div className="rounded-[28px] border border-[#0A4247]/10 bg-[#FDFBFA] p-7 sm:p-9 shadow-xl shadow-[#0A4247]/5">
          <AnimatePresence mode="wait">
            {done ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center"
              >
                <div className="rounded-2xl overflow-hidden mb-6">
                  <img src={successImage} alt="Abstract gradient composition" className="w-full h-40 object-cover" />
                </div>
                <h3 className="text-2xl font-bold text-[#0A4247]">{t.form.successTitle}</h3>
                <p className="mt-3 text-[#1A1A1A]/70 leading-relaxed">{t.form.successBody}</p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="flex flex-col gap-5"
              >
                <Field label={t.form.name}>
                  <input required value={form.name} onChange={set("name")} className={inputClass} />
                </Field>
                <Field label={t.form.business}>
                  <input value={form.business_name} onChange={set("business_name")} className={inputClass} />
                </Field>
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label={t.form.email}>
                    <input type="email" required value={form.email} onChange={set("email")} className={inputClass} />
                  </Field>
                  <Field label={t.form.phone}>
                    <input value={form.phone} onChange={set("phone")} className={inputClass} />
                  </Field>
                </div>
                <Field label={t.form.service}>
                  <select value={form.service_of_interest} onChange={set("service_of_interest")} className={`${inputClass} cursor-pointer`}>
                    <option value="" disabled>{t.form.servicePlaceholder}</option>
                    <option value="audit">{t.form.serviceOptions.audit}</option>
                    <option value="implementation">{t.form.serviceOptions.implementation}</option>
                    <option value="custom_agent">{t.form.serviceOptions.custom_agent}</option>
                    <option value="not_sure">{t.form.serviceOptions.not_sure}</option>
                  </select>
                </Field>
                <Field label={t.form.message}>
                  <textarea rows={4} value={form.message} onChange={set("message")} className={`${inputClass} resize-none`} />
                </Field>
                {/* Honeypot anti-spam field — invisible to humans */}
                <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
                {error && (
                  <p className="text-sm font-medium text-red-700">{t.form.errorBody}</p>
                )}
                <button
                  type="submit"
                  disabled={submitting}
                  className="mt-2 rounded-full bg-[#0A4247] px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-[#0A4247]/90 disabled:opacity-60"
                >
                  {submitting ? t.form.submitting : t.form.submit}
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
