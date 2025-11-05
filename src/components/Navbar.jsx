import { Globe, Rocket } from "lucide-react";

export default function Navbar({ lang, setLang, t }) {
  return (
    <header className="w-full sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-blue-700 via-blue-500 to-orange-400 grid place-items-center text-white shadow-md">
            <Rocket size={18} />
          </div>
          <span className="font-semibold text-xl tracking-tight text-slate-900">Nesnion</span>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-slate-700">
          <a href="#features" className="hover:text-blue-600 transition-colors">{t("features")}</a>
          <a href="#pricing" className="hover:text-blue-600 transition-colors">{t("pricing")}</a>
          <a href="#preview" className="hover:text-blue-600 transition-colors">{t("builder")}</a>
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setLang(lang === "es" ? "en" : "es")}
            className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-700 hover:bg-slate-50"
            aria-label="Toggle language"
          >
            <Globe size={16} />
            <span className="font-medium">{lang === "es" ? "ES" : "EN"}</span>
          </button>
          <a
            href="#builder"
            className="hidden sm:inline-flex items-center gap-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 text-sm font-medium shadow-sm"
          >
            {t("cta.start")}
          </a>
        </div>
      </div>
    </header>
  );
}
