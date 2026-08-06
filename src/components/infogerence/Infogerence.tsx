"use client";
import { useState } from "react";
import { useTranslations } from "next-intl";
import {
  Mail,
  ArrowRight,
  Server,
  ShieldCheck,
  Headphones,
  MonitorCog,
  Database,
  GitBranch,
  AppWindow,
  Network,
  Award,
  SlidersHorizontal,
  TrendingUp,
} from "lucide-react";
function NetworkMotif({ className = "" }) {
  return (
    <svg viewBox="0 0 480 420" className={className} fill="none">
      <g stroke="#1C6FD6" strokeWidth="1.5" strokeDasharray="4 5" opacity="0.5">
        <line x1="120" y1="120" x2="240" y2="60" />
        <line x1="240" y1="60" x2="360" y2="130" />
        <line x1="120" y1="120" x2="130" y2="250" />
        <line x1="240" y1="60" x2="240" y2="220" />
        <line x1="360" y1="130" x2="350" y2="260" />
        <line x1="130" y1="250" x2="240" y2="220" />
        <line x1="240" y1="220" x2="350" y2="260" />
        <line x1="130" y1="250" x2="220" y2="350" />
        <line x1="350" y1="260" x2="260" y2="350" />
      </g>
      {(
        [
          [
            120,
            120,
            "fill-[#101B36] dark:fill-white",
            "stroke-[#101B36] dark:stroke-white",
          ],
          [240, 60, "fill-[#E13D67]", "stroke-[#E13D67]"],
          [
            360,
            130,
            "fill-[#101B36] dark:fill-white",
            "stroke-[#101B36] dark:stroke-white",
          ],
          [130, 250, "fill-[#1C6FD6]", "stroke-[#1C6FD6]"],
          [
            240,
            220,
            "fill-[#101B36] dark:fill-white",
            "stroke-[#101B36] dark:stroke-white",
          ],
          [350, 260, "fill-[#1C6FD6]", "stroke-[#1C6FD6]"],
          [
            220,
            350,
            "fill-[#101B36] dark:fill-white",
            "stroke-[#101B36] dark:stroke-white",
          ],
          [260, 350, "fill-[#E13D67]", "stroke-[#E13D67]"],
        ] as [number, number, string, string][]
      ).map(([cx, cy, fillClass, strokeClass], i) => (
        <g key={i}>
          <circle cx={cx} cy={cy} r="14" className={fillClass} />
          <circle
            cx={cx}
            cy={cy}
            r="20"
            strokeWidth="1"
            opacity="0.35"
            className={strokeClass}
          >
            <animate
              attributeName="r"
              values="14;24;14"
              dur="3.5s"
              begin={`${i * 0.4}s`}
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="0.4;0;0.4"
              dur="3.5s"
              begin={`${i * 0.4}s`}
              repeatCount="indefinite"
            />
          </circle>
        </g>
      ))}
    </svg>
  );
}
const Infogerance = () => {
  const t = useTranslations("Infogerance");
  const [tab, setTab] = useState<"services" | "complements">("services");

  const services = [
    { icon: MonitorCog, key: "park" },
    { icon: Headphones, key: "support" },
    { icon: Server, key: "onsite" },
    { icon: ShieldCheck, key: "dsi" },
  ] as const;

  const complements = [
    { icon: Database, key: "backup" },
    { icon: GitBranch, key: "migration" },
    { icon: AppWindow, key: "apps" },
    { icon: Network, key: "outsourcing" },
  ] as const;

  const reasons = [
    { icon: Award, number: "01", key: "expertise" },
    { icon: SlidersHorizontal, number: "02", key: "flexible" },
    { icon: TrendingUp, number: "03", key: "competitive" },
  ] as const;

  const stats = [
    { value: "27+", key: "experience" },
    { value: "1999", key: "created" },
    { value: "24/7", key: "supervision" },
    { value: "< 2h", key: "response" },
  ] as const;
  const list = tab === "services" ? services : complements;
  const listNamespace = tab === "services" ? "services" : "complements";
  return (
    <div className="bg-white text-[#101B36] font-['Assistant',sans-serif] dark:bg-slate-900 dark:text-white">
      <section className="relative overflow-hidden bg-[#F4F6FB] dark:bg-slate-900 ">
        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-8 py-16 md:py-24 grid md:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
          <div>
            <h1 className="font-['Poppins',sans-serif] font-bold text-4xl md:text-[3.25rem] leading-[1.05] mb-6 dark:text-white">
              {t("hero.title1")}
              <span className="text-[#E13D67]">{t("hero.titleHighlight")}</span>
              {t("hero.title2")}
            </h1>
            <p className="text-[#48506B] text-lg leading-relaxed mb-8 max-w-xl">
              {t("hero.description")}
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="/#contact"
                className="inline-flex items-center gap-2 bg-[#1C6FD6] hover:bg-[#1558AD] text-white font-semibold px-6 py-3.5 rounded-full transition-colors duration-300"
              >
                <Mail className="w-4 h-4" />
                {t("hero.contact")}
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 text-[#101B36] font-semibold px-2 py-3.5 hover:text-[#1C6FD6] transition-colors duration-300 dark:text-white"
              >
                {t("hero.services")}
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            <dl className="grid grid-cols-3 gap-6 mt-14 max-w-md">
              {stats.slice(0, 3).map((s) => (
                <div key={s.key}>
                  <dt className="sr-only">{t(`stats.${s.key}`)}</dt>
                  <dd className="font-['Poppins',sans-serif] font-bold text-2xl text-[#101B36] dark:text-white">
                    {s.value}
                  </dd>
                  <dd className="text-xs text-[#6B7390] mt-1">
                    {t(`stats.${s.key}`)}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="relative flex items-center justify-center">
            <NetworkMotif className="w-full max-w-md h-auto" />
          </div>
        </div>
      </section>
      <section
        id="services"
        className="max-w-6xl mx-auto px-6 md:px-8 py-20 md:py-28"
      >
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-[#E13D67] font-semibold text-sm tracking-widest uppercase mb-3">
            {t("servicesSection.badge")}
          </p>
          <h2 className="font-['Poppins',sans-serif] font-bold text-3xl md:text-4xl mb-5">
            {t("servicesSection.title")}
          </h2>
          <p className="text-[#48506B] leading-relaxed">
            {t("servicesSection.description")}
          </p>
        </div>
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-[#F4F6FB] rounded-full p-1">
            {[
              { id: "services" as const, label: t("servicesSection.mainTab") },
              {
                id: "complements" as const,
                label: t("servicesSection.extraTab"),
              },
            ].map((tItem) => (
              <button
                key={tItem.id}
                onClick={() => setTab(tItem.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-colors duration-300 ${
                  tab === tItem.id
                    ? "bg-[#101B36] text-white"
                    : "text-[#48506B] hover:text-[#101B36]"
                }`}
              >
                {tItem.label}
              </button>
            ))}
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {list.map(({ icon: Icon, key }) => (
            <div
              key={key}
              className="group rounded-2xl border border-[#E7EAF3] p-6 hover:border-[#1C6FD6]/40 hover:shadow-[0_16px_40px_-20px_rgba(28,111,214,0.35)] transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-[#F4F6FB] flex items-center justify-center mb-5 group-hover:bg-[#1C6FD6] transition-colors duration-300">
                <Icon className="w-5 h-5 text-[#1C6FD6] group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="font-['Poppins',sans-serif] font-bold text-base mb-2">
                {t(`${listNamespace}.${key}.title`)}
              </h3>
              <p className="text-sm text-[#6B7390] leading-relaxed">
                {t(`${listNamespace}.${key}.desc`)}
              </p>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-[#F4F6FB] dark:bg-slate-900">
        <div className="max-w-6xl mx-auto px-6 md:px-8 py-20 md:py-28">
          <h2 className="font-['Poppins',sans-serif] font-bold text-3xl md:text-4xl mb-16 max-w-xl dark:text-white">
            {t("reasonsSection.title")}
          </h2>
          <div className="grid md:grid-cols-3 gap-10 md:gap-0 md:divide-x md:divide-[#E7EAF3]">
            {reasons.map(({ icon: Icon, number, key }) => (
              <div key={number} className="md:px-10 first:pl-0">
                <span className="font-['Poppins',sans-serif] text-sm font-bold text-[#E13D67] tracking-widest">
                  {number}
                </span>
                <Icon className="w-7 h-7 text-[#101B36] mt-4 mb-4 dark:invert" />
                <h3 className="font-['Poppins',sans-serif] font-bold text-lg mb-3">
                  {t(`reasons.${key}.title`)}
                </h3>
                <p className="text-sm text-[#48506B] leading-relaxed">
                  {t(`reasons.${key}.desc`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="max-w-6xl mx-auto px-6 md:px-8 py-20 md:py-28 grid md:grid-cols-2 gap-14 items-center">
        <div>
          <p className="text-[#E13D67] font-semibold text-sm tracking-widest uppercase mb-3">
            {t("history.badge")}
          </p>
          <h2 className="font-['Poppins',sans-serif] font-bold text-3xl md:text-4xl mb-6">
            {t("history.title")}
          </h2>
          <p className="text-[#48506B] leading-relaxed mb-4">
            {t("history.paragraph1")}
          </p>
          <p className="text-[#48506B] leading-relaxed mb-8">
            {t("history.paragraph2")}
          </p>
          <div className="grid grid-cols-2 gap-6">
            {stats.map((s) => (
              <div key={s.key} className="rounded-xl bg-[#F4F6FB] px-5 py-4">
                <p className="font-['Poppins',sans-serif] font-bold text-2xl text-[#101B36]">
                  {s.value}
                </p>
                <p className="text-xs text-[#6B7390] mt-1">
                  {t(`stats.${s.key}`)}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80"
            alt={t("history.imageAlt")}
            className="rounded-2xl w-full h-[420px] object-cover"
          />
          <div className="absolute -bottom-6 -left-6 hidden md:block bg-white rounded-2xl shadow-xl px-6 py-5 border border-[#E7EAF3]">
            <p className="font-['Poppins',sans-serif] font-bold text-3xl text-[#E13D67]">
              24/7
            </p>
            <p className="text-xs text-[#6B7390]">{t("stats.supervision")}</p>
          </div>
        </div>
      </section>
      <section
        id="contact"
        className="max-w-6xl mx-auto px-6 md:px-8 pb-20 md:pb-28"
      >
        <div className="relative overflow-hidden rounded-3xl bg-[#101B36] px-8 md:px-14 py-14 md:py-16 flex flex-col md:flex-row items-center justify-between gap-8">
          <NetworkMotif className="pointer-events-none absolute -right-16 -top-16 w-72 h-72 opacity-20" />
          <div className="relative z-10 text-center md:text-left">
            <h2 className="font-['Poppins',sans-serif] font-bold text-2xl md:text-3xl text-white mb-2">
              {t("cta.title")}
            </h2>
            <p className="text-white/70">{t("cta.description")}</p>
          </div>
          <div className="relative z-10 flex flex-col sm:flex-row gap-3">
            <a
              href="/#contact"
              className="inline-flex items-center justify-center gap-2 bg-[#1C6FD6] hover:bg-[#1558AD] text-white font-semibold px-6 py-3.5 rounded-full whitespace-nowrap transition-colors duration-300"
            >
              {t("cta.contact")}
            </a>

            <a
              href="tel:+33924900071"
              className="inline-flex items-center justify-center gap-2 border border-white/25 text-white font-semibold px-6 py-3.5 rounded-full whitespace-nowrap hover:bg-white/10 transition-colors duration-300"
            >
              +33 9 24 90 00 71
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Infogerance;
