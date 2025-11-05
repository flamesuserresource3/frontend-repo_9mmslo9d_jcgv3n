import { motion } from "framer-motion";
import { Settings, LayoutGrid } from "lucide-react";

export default function PreviewShowcase({ t }) {
  return (
    <section id="preview" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-6 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-slate-200 overflow-hidden bg-white shadow-sm"
          >
            <div className="h-12 bg-slate-50 border-b border-slate-200 flex items-center justify-between px-4">
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <LayoutGrid size={16} /> {t("showcase.preview")}
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <div className="h-2 w-2 rounded-full bg-green-500" /> Live
              </div>
            </div>
            <div className="p-4 grid sm:grid-cols-2 gap-4">
              <div className="h-56 bg-blue-50 rounded-xl border border-blue-100" />
              <div className="space-y-2">
                <div className="h-10 bg-slate-100 rounded" />
                <div className="h-10 bg-slate-100 rounded" />
                <div className="h-10 bg-slate-100 rounded" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl border border-slate-200 overflow-hidden bg-white shadow-sm"
          >
            <div className="h-12 bg-slate-50 border-b border-slate-200 flex items-center justify-between px-4">
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <Settings size={16} /> {t("showcase.chat")}
              </div>
              <div className="text-xs text-slate-500">Z.AI GLM 4.5</div>
            </div>
            <div className="p-4 space-y-2 text-sm">
              <div className="bg-white border border-slate-200 rounded-xl p-3">{t("preview.chatTip1")}</div>
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-3 text-blue-900">{t("preview.chatTip2")}</div>
              <div className="bg-white border border-slate-200 rounded-xl p-3">{t("preview.chatTip3")}</div>
              <div className="flex gap-2 pt-2">
                <input className="flex-1 rounded-xl border border-slate-300 px-3 py-2 text-sm" placeholder={t("hero.placeholder")}/>
                <button className="rounded-xl bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 text-sm font-medium">{t("cta.send")}</button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
