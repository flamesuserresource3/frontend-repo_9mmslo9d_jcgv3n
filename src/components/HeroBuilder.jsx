import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function HeroBuilder({ t, onStart }) {
  return (
    <section id="builder" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-orange-50 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20 relative">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900"
            >
              {t("hero.title")} <span className="text-blue-600">Nesnion</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="mt-4 text-lg sm:text-xl text-slate-600"
            >
              {t("hero.subtitle")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-8 bg-white/80 backdrop-blur rounded-2xl border border-slate-200 p-2 shadow-sm"
            >
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                <div className="flex-1 flex items-center gap-2 rounded-xl border border-slate-300 px-3 py-2">
                  <Sparkles className="text-blue-600" size={18} />
                  <input
                    type="text"
                    placeholder={t("hero.placeholder")}
                    className="w-full bg-transparent outline-none text-slate-900 placeholder-slate-400"
                  />
                </div>
                <button
                  onClick={onStart}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 font-medium shadow-sm"
                >
                  {t("cta.build")}
                  <ArrowRight size={18} />
                </button>
              </div>
              <p className="text-xs text-slate-500 mt-2 px-1">{t("hero.note")}</p>
            </motion.div>
          </div>

          <motion.div
            id="preview"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="lg:h-[420px]"
          >
            <PreviewPhoneMock t={t} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function PreviewPhoneMock({ t }) {
  return (
    <div className="mx-auto max-w-md w-full h-[420px] bg-white rounded-[32px] border border-slate-200 shadow-xl overflow-hidden">
      <div className="h-10 bg-slate-50 border-b border-slate-200 flex items-center justify-between px-4">
        <div className="h-4 w-16 bg-slate-200 rounded-full" />
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-green-500" />
          <span className="text-xs text-slate-500">Live</span>
        </div>
      </div>
      <div className="grid grid-cols-2 h-[calc(100%-40px)]">
        <div className="p-3 bg-white">
          <div className="h-full border border-slate-200 rounded-xl p-3">
            <div className="text-xs font-medium text-slate-500 mb-2">{t("preview.app")}</div>
            <div className="h-8 bg-blue-100 rounded mb-2" />
            <div className="h-6 bg-slate-100 rounded mb-2" />
            <div className="h-6 bg-slate-100 rounded mb-2" />
            <div className="h-24 bg-orange-100 rounded mb-2" />
            <div className="h-8 bg-green-100 rounded" />
          </div>
        </div>
        <div className="p-3 bg-slate-50 border-l border-slate-200">
          <div className="text-xs font-medium text-slate-500 mb-2">{t("preview.chat")}</div>
          <div className="space-y-2 text-xs">
            <div className="bg-white border border-slate-200 p-2 rounded-xl">{t("preview.chatTip1")}</div>
            <div className="bg-blue-50 border border-blue-200 text-blue-900 p-2 rounded-xl">{t("preview.chatTip2")}</div>
            <div className="bg-white border border-slate-200 p-2 rounded-xl">{t("preview.chatTip3")}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
