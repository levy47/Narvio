import React, { createContext, useContext, useState, useEffect } from "react";

export const translations = {
  es: {
    nav: { how: "Cómo trabajamos", services: "Servicios", why: "Por qué nosotros", contact: "Conversemos", cta: "Solicitar diagnóstico" },
    hero: {
      tagline: "IA práctica para tu negocio",
      headline: "Elevamos tu negocio con IA que funciona.",
      sub: "Encontramos dónde la IA realmente genera resultados en tu negocio — y lo implementamos contigo.",
      cta: "Solicitar diagnóstico",
      badge: "Diagnóstico, implementación y medición",
    },
    how: {
      title: "Cómo trabajamos",
      subtitle: "Un proceso claro y medido para llevar tu negocio al siguiente nivel.",
      steps: [
        { n: "01", title: "Diagnóstico", desc: "Mapeamos tus procesos con métodos de ingeniería industrial y encontramos dónde la IA realmente rinde." },
        { n: "02", title: "Implementación", desc: "Configuramos las herramientas o construimos agentes de IA a medida, trabajando junto a tu equipo." },
        { n: "03", title: "Capacitación y medición", desc: "Capacitamos a tu personal y documentamos los resultados antes y después." },
      ],
    },
    services: {
      title: "Servicios",
      subtitle: "Precios claros, sin sorpresas. Todo en dólares.",
      creditNote: "El costo se acredita a la implementación si continúas.",
      from: "desde",
      perMonth: "/mes",
      cta: "Solicitar diagnóstico",
      items: [
        { id: "audit", name: "Diagnóstico de Oportunidades AI", price: "$490", desc: "Auditoría de procesos en sitio durante dos semanas, con informe de oportunidades priorizadas, estimaciones de ROI y una hoja de ruta." },
        { id: "implementation", name: "Implementación + Capacitación", price: "$750", prefix: true, desc: "Desplegamos las herramientas recomendadas y capacitamos a tu equipo de forma práctica hasta que las usen por su cuenta." },
        { id: "custom_agent", name: "Agentes AI a Medida", price: "$1,500", prefix: true, extra: "+ $99/mes de soporte", desc: "Un agente de IA a medida para un flujo específico (reservas, cotizaciones, seguimientos, reportes), mantenido y mejorado cada mes." },
      ],
    },
    why: {
      title: "Por qué Narvio",
      items: [
        { title: "Disciplina de ingeniería industrial", desc: "Todo se mide. Trabajamos con método, no con suposiciones." },
        { title: "Implementamos, no solo recomendamos", desc: "No te dejamos un informe y ya. Lo ponemos a funcionar contigo." },
        { title: "Sin jerga técnica", desc: "Hablamos en tu idioma, no en el de los ingenieros." },
        { title: "Resultados documentados", desc: "Casos reales de antes y después, con números claros." },
        { title: "Servicio local y personal", desc: "Atención directa y cercana, de principio a fin." },
      ],
    },
    form: {
      title: "Conversemos",
      subtitle: "Cuéntanos sobre tu negocio y encontramos por dónde empezar.",
      name: "Nombre",
      business: "Nombre del negocio",
      email: "Correo electrónico",
      phone: "Teléfono (opcional)",
      service: "Servicio de interés",
      serviceOptions: {
        audit: "Diagnóstico de Oportunidades AI",
        implementation: "Implementación + Capacitación",
        custom_agent: "Agentes AI a Medida",
        not_sure: "Aún no estoy seguro",
      },
      servicePlaceholder: "Selecciona una opción",
      message: "Mensaje",
      submit: "Enviar solicitud",
      submitting: "Enviando...",
      successTitle: "¡Solicitud recibida!",
      successBody: "Nos pondremos en contacto contigo muy pronto.",
      errorBody: "No se pudo enviar la solicitud. Escríbenos directamente a jacky.levy277@gmail.com.",
    },
    footer: { location: "Ciudad de Panamá", rights: "Todos los derechos reservados." },
  },
  en: {
    nav: { how: "How we work", services: "Services", why: "Why us", contact: "Let's talk", cta: "Request an audit" },
    hero: {
      tagline: "Practical AI for your business",
      headline: "We lift your business with AI that works.",
      sub: "We find where AI actually delivers results in your business — and implement it with you.",
      cta: "Request an audit",
      badge: "Diagnosis, implementation and measurement",
    },
    how: {
      title: "How we work",
      subtitle: "A clear, measured process to take your business to the next level.",
      steps: [
        { n: "01", title: "Diagnosis", desc: "We map your processes with industrial-engineering methods and find where AI actually pays off." },
        { n: "02", title: "Implementation", desc: "We set up the tools or build custom AI agents, hands-on, alongside your team." },
        { n: "03", title: "Training & measurement", desc: "We train your staff and document before/after results." },
      ],
    },
    services: {
      title: "Services",
      subtitle: "Clear pricing, no surprises. All prices in USD.",
      creditNote: "Fee credited toward implementation if you continue.",
      from: "from",
      perMonth: "/month",
      cta: "Request an audit",
      items: [
        { id: "audit", name: "AI Opportunity Audit", price: "$490", desc: "A two-week on-site process audit, with a report of prioritized opportunities, ROI estimates and a roadmap." },
        { id: "implementation", name: "Implementation & Team Training", price: "$750", prefix: true, desc: "We deploy the recommended tools and train your team hands-on until they use them on their own." },
        { id: "custom_agent", name: "Custom AI Agents", price: "$1,500", prefix: true, extra: "+ $99/month support", desc: "A custom AI agent built for one specific workflow (bookings, quotes, follow-ups, reporting), maintained and improved monthly." },
      ],
    },
    why: {
      title: "Why Narvio",
      items: [
        { title: "Industrial engineering discipline", desc: "Everything is measured. We work with method, not guesswork." },
        { title: "We implement, not just recommend", desc: "We don't hand you a report and leave. We get it running with you." },
        { title: "No jargon", desc: "We speak your language, not an engineer's." },
        { title: "Documented results", desc: "Real before/after case studies, with clear numbers." },
        { title: "Local and personal service", desc: "Direct, personal attention from start to finish." },
      ],
    },
    form: {
      title: "Let's talk",
      subtitle: "Tell us about your business and we'll find where to start.",
      name: "Name",
      business: "Business name",
      email: "Email",
      phone: "Phone (optional)",
      service: "Service of interest",
      serviceOptions: {
        audit: "AI Opportunity Audit",
        implementation: "Implementation & Team Training",
        custom_agent: "Custom AI Agents",
        not_sure: "Not sure yet",
      },
      servicePlaceholder: "Select an option",
      message: "Message",
      submit: "Send request",
      submitting: "Sending...",
      successTitle: "Request received!",
      successBody: "We'll be in touch with you very soon.",
      errorBody: "The request couldn't be sent. Email us directly at jacky.levy277@gmail.com.",
    },
    footer: { location: "Panama City", rights: "All rights reserved." },
  },
};

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("es");
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);
  const toggle = () => setLang((l) => (l === "es" ? "en" : "es"));
  return (
    <LanguageContext.Provider value={{ lang, setLang, toggle, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
}
