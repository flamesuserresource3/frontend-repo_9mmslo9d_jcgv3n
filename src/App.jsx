import { useMemo, useState } from "react";
import Navbar from "./components/Navbar.jsx";
import HeroBuilder from "./components/HeroBuilder.jsx";
import Pricing from "./components/Pricing.jsx";
import PreviewShowcase from "./components/PreviewShowcase.jsx";
import { Rocket, ShieldCheck, Sparkles, Settings } from "lucide-react";

export default function App() {
  const [lang, setLang] = useState("es");
  const dict = useMemo(() => translations[lang], [lang]);
  const t = (key) => key.split(".").reduce((o, k) => (o ? o[k] : key), dict);

  const handleStart = () => {
    const el = document.getElementById("pricing");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar lang={lang} setLang={setLang} t={t} />
      <HeroBuilder t={t} onStart={handleStart} />

      {/* Features strip */}
      <section id="features" className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard
              icon={<Rocket className="text-blue-600" size={20} />}
              title={t("featuresList.f1.t")}
              desc={t("featuresList.f1.d")}
            />
            <FeatureCard
              icon={<Sparkles className="text-orange-500" size={20} />}
              title={t("featuresList.f2.t")}
              desc={t("featuresList.f2.d")}
            />
            <FeatureCard
              icon={<Settings className="text-emerald-600" size={20} />}
              title={t("featuresList.f3.t")}
              desc={t("featuresList.f3.d")}
            />
            <FeatureCard
              icon={<ShieldCheck className="text-slate-800" size={20} />}
              title={t("featuresList.f4.t")}
              desc={t("featuresList.f4.d")}
            />
          </div>
        </div>
      </section>

      <PreviewShowcase t={t} />
      <Pricing t={t} />

      <footer className="py-10 border-t border-slate-200 mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-600">
          <div>© {new Date().getFullYear()} Nesnion. {t("footer.rights")}</div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-blue-600">{t("footer.terms")}</a>
            <a href="#" className="hover:text-blue-600">{t("footer.privacy")}</a>
            <a href="#" className="hover:text-blue-600">{t("footer.cookies")}</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, desc }) {
  return (
    <div className="rounded-2xl border border-slate-200 p-5 bg-white shadow-sm">
      <div className="h-9 w-9 rounded-lg bg-slate-50 grid place-items-center mb-3">{icon}</div>
      <div className="font-semibold">{title}</div>
      <div className="text-sm text-slate-600 mt-1">{desc}</div>
    </div>
  );
}

const translations = {
  es: {
    features: "Características",
    pricing: "Precios",
    builder: "Creador",
    cta: {
      start: "Empezar",
      build: "Crear app",
      send: "Enviar",
      choose: "Elegir plan",
    },
    hero: {
      title: "Crea apps con IA en minutos con",
      subtitle:
        "Describe tu idea en español o inglés. Z.AI GLM 4.5 genera la app mientras la pruebas en una previsualización en vivo.",
      placeholder: "Crea una app para gestionar mis gastos con categorías y gráficos…",
      note: "Cada mensaje consume 1 token. Elige un plan para empezar.",
    },
    preview: {
      app: "Vista previa",
      chat: "Chat con IA",
      chatTip1: "Usuario: Quiero un dashboard con tarjetas y una tabla.",
      chatTip2: "IA: He añadido un dashboard con métricas y tabla editable.",
      chatTip3: "Usuario: Cambia el color a azul eléctrico y añade exportación.",
    },
    showcase: {
      preview: "Previsualización en vivo",
      chat: "Conversación",
    },
    pricing: {
      title: "Planes y precios",
      subtitle:
        "El plan gratuito incluye 12 tokens en total (no se renuevan) y 3 mensajes por día. Mejora cuando lo necesites.",
    },
    plans: {
      free: {
        name: "Gratuito",
        badge: "Nuevo",
        limit: "12 tokens totales • 3 mensajes/día • 300 KB • 1 app • Sin APK",
        f1: "12 tokens en total (no se renuevan)",
        f2: "Máximo 3 mensajes por día",
        f3: "Hasta 300 KB de almacenamiento de apps",
        f4: "Solo 1 app activa",
        f5: "Sin descargas de APK",
      },
      starter: {
        name: "Inicial",
        badge: "Popular -50%",
        limit: "150 tokens/mes • 25/día • 2 GB • 1 APK/mes",
        f1: "Acceso completo al generador de apps",
        f2: "1 descarga de APK por mes",
        f3: "2 GB de almacenamiento",
        f4: "Integración básica con Supabase",
        f5: "Soporte estándar",
        f6: "Hasta 150 tokens/mes (25 por día)",
      },
      builder: {
        name: "Constructor",
        limit: "500 tokens/mes • 85/día • Descargas APK ilimitadas",
        f1: "Descargas de APK ilimitadas",
        f2: "5 GB de almacenamiento",
        f3: "Integraciones: Supabase, Stripe, GitHub",
        f4: "Acceso prioritario a IA",
        f5: "Edición parcial del código generado",
        f6: "Soporte preferencial",
        f7: "Hasta 500 tokens/mes (85 por día)",
      },
      pro: {
        name: "Profesional",
        limit: "1350 tokens/mes • 350/día • 15 GB",
        f1: "Integraciones completas: Stripe, Supabase, GitHub",
        f2: "Edición completa del código generado",
        f3: "Prioridad máxima de procesamiento IA",
        f4: "15 GB de almacenamiento total",
        f5: "Soporte premium 24/7",
      },
    },
    featuresList: {
      f1: { t: "Construye sin programar", d: "Describe tu idea y nuestra IA genera la app por ti." },
      f2: { t: "Cambios en vivo", d: "Chatea para ajustar diseño, funciones y estilo en tiempo real." },
      f3: { t: "Listo para deploy", d: "Generación automática de APK en planes de pago." },
      f4: { t: "Seguro y privado", d: "Autenticación y almacenamiento fiables con Supabase." },
    },
    footer: {
      rights: "Todos los derechos reservados.",
      terms: "Términos",
      privacy: "Privacidad",
      cookies: "Cookies",
    },
  },
  en: {
    features: "Features",
    pricing: "Pricing",
    builder: "Builder",
    cta: { start: "Get started", build: "Build app", send: "Send", choose: "Choose plan" },
    hero: {
      title: "Build AI apps in minutes with",
      subtitle:
        "Describe your idea in English or Spanish. Z.AI GLM 4.5 generates your app while you test it live.",
      placeholder: "Build me an app to track monthly expenses with charts…",
      note: "Each message costs 1 token. Pick a plan to start.",
    },
    preview: {
      app: "Preview",
      chat: "AI Chat",
      chatTip1: "User: I need a dashboard with cards and a table.",
      chatTip2: "AI: Added a dashboard with metrics and editable table.",
      chatTip3: "User: Switch to electric blue and add export.",
    },
    showcase: { preview: "Live preview", chat: "Conversation" },
    pricing: {
      title: "Plans & pricing",
      subtitle:
        "Free plan includes 12 total tokens (no renewal) and 3 messages per day. Upgrade anytime.",
    },
    plans: {
      free: {
        name: "Free",
        badge: "New",
        limit: "12 total tokens • 3 msg/day • 300 KB • 1 app • No APK",
        f1: "12 total tokens (no renewal)",
        f2: "Up to 3 messages per day",
        f3: "Up to 300 KB app storage",
        f4: "Only 1 active app",
        f5: "APK downloads disabled",
      },
      starter: {
        name: "Starter",
        badge: "Popular -50%",
        limit: "150 tokens/mo • 25/day • 2 GB • 1 APK/mo",
        f1: "Full access to the app builder",
        f2: "1 APK download per month",
        f3: "2 GB storage",
        f4: "Basic Supabase integration",
        f5: "Standard support",
        f6: "Up to 150 tokens/mo (25 per day)",
      },
      builder: {
        name: "Builder",
        limit: "500 tokens/mo • 85/day • Unlimited APK downloads",
        f1: "Unlimited APK downloads",
        f2: "5 GB app storage",
        f3: "Integrations: Supabase, Stripe, GitHub",
        f4: "Priority AI access",
        f5: "Partial code editing",
        f6: "Preferred support",
        f7: "Up to 500 tokens/mo (85 per day)",
      },
      pro: {
        name: "Professional",
        limit: "1350 tokens/mo • 350/day • 15 GB",
        f1: "Full integrations: Stripe, Supabase, GitHub",
        f2: "Full code editing",
        f3: "Max AI processing priority",
        f4: "15 GB total storage",
        f5: "24/7 premium support",
      },
    },
    featuresList: {
      f1: { t: "Build without coding", d: "Describe your idea and our AI generates the app." },
      f2: { t: "Live changes", d: "Chat to adjust design, features and style in real time." },
      f3: { t: "Ready to deploy", d: "Automatic APK generation on paid plans." },
      f4: { t: "Secure & private", d: "Reliable auth and storage powered by Supabase." },
    },
    footer: {
      rights: "All rights reserved.",
      terms: "Terms",
      privacy: "Privacy",
      cookies: "Cookies",
    },
  },
};
