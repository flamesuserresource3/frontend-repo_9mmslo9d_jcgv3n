import { Check, Star, Crown, Hammer } from "lucide-react";

const plans = (t) => [
  {
    id: "free",
    name: t("plans.free.name"),
    price: "0€",
    badge: t("plans.free.badge"),
    highlight: false,
    features: [
      t("plans.free.f1"),
      t("plans.free.f2"),
      t("plans.free.f3"),
      t("plans.free.f4"),
      t("plans.free.f5"),
    ],
    cta: t("cta.choose"),
    limit: t("plans.free.limit"),
    color: "from-slate-200 to-slate-100",
    icon: Hammer,
  },
  {
    id: "starter",
    name: t("plans.starter.name"),
    price: "14,99€",
    oldPrice: "29,99€",
    badge: t("plans.starter.badge"),
    highlight: true,
    features: [
      t("plans.starter.f1"),
      t("plans.starter.f2"),
      t("plans.starter.f3"),
      t("plans.starter.f4"),
      t("plans.starter.f5"),
      t("plans.starter.f6"),
    ],
    cta: t("cta.choose"),
    limit: t("plans.starter.limit"),
    color: "from-blue-600 to-blue-500",
    icon: Star,
  },
  {
    id: "builder",
    name: t("plans.builder.name"),
    price: "49,99€",
    badge: null,
    highlight: false,
    features: [
      t("plans.builder.f1"),
      t("plans.builder.f2"),
      t("plans.builder.f3"),
      t("plans.builder.f4"),
      t("plans.builder.f5"),
      t("plans.builder.f6"),
      t("plans.builder.f7"),
    ],
    cta: t("cta.choose"),
    limit: t("plans.builder.limit"),
    color: "from-orange-500 to-orange-400",
    icon: Hammer,
  },
  {
    id: "pro",
    name: t("plans.pro.name"),
    price: "119,99€",
    badge: null,
    highlight: false,
    features: [
      t("plans.pro.f1"),
      t("plans.pro.f2"),
      t("plans.pro.f3"),
      t("plans.pro.f4"),
      t("plans.pro.f5"),
    ],
    cta: t("cta.choose"),
    limit: t("plans.pro.limit"),
    color: "from-green-600 to-emerald-500",
    icon: Crown,
  },
];

export default function Pricing({ t }) {
  const items = plans(t);
  return (
    <section id="pricing" className="py-16 sm:py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            {t("pricing.title")}
          </h2>
          <p className="mt-3 text-slate-600">{t("pricing.subtitle")}</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((p) => (
            <PlanCard key={p.id} plan={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PlanCard({ plan }) {
  const Icon = plan.icon;
  return (
    <div className={`relative rounded-2xl border ${
      plan.highlight ? "border-blue-500" : "border-slate-200"
    } bg-white p-6 shadow-sm`}
    >
      {plan.badge && (
        <div className="absolute -top-3 left-4 text-xs font-semibold bg-orange-100 text-orange-800 px-2 py-1 rounded-full">
          {plan.badge}
        </div>
      )}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className={`h-9 w-9 rounded-xl bg-gradient-to-br ${plan.color} text-white grid place-items-center`}>
            <Icon size={18} />
          </div>
          <div>
            <div className="text-lg font-semibold text-slate-900">{plan.name}</div>
            <div className="text-sm text-slate-500">{plan.limit}</div>
          </div>
        </div>
        <div className="text-right">
          {plan.oldPrice && (
            <div className="text-xs text-slate-400 line-through">{plan.oldPrice}</div>
          )}
          <div className={`text-2xl font-bold ${plan.highlight ? "text-blue-600" : "text-slate-900"}`}>{plan.price}</div>
        </div>
      </div>
      <ul className="mt-4 space-y-2">
        {plan.features.map((f, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
            <Check className="text-green-600 mt-0.5" size={16} />
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <button className={`mt-6 w-full rounded-xl px-4 py-2 font-medium ${
        plan.highlight ? "bg-blue-600 hover:bg-blue-700 text-white" : "bg-slate-900/90 hover:bg-slate-900 text-white"
      }`}>{plan.cta}</button>
    </div>
  );
}
