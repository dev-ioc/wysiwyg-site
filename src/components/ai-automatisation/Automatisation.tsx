import React from "react";
import {
  Star,
  Quote,
  Megaphone,
  SlidersHorizontal,
  Code2,
  BarChart3,
  Sparkles,
} from "lucide-react";
import { useTranslations } from "next-intl";
const ICONS: any = {
  Megaphone,
  SlidersHorizontal,
  Code2,
  BarChart3,
};
const HERO_IMG =
  "https://images.unsplash.com/photo-1758873269276-9518d0cb4a0b?q=80&w=1200&auto=format&fit=crop";
const PORTRAIT_IMG =
  "https://images.unsplash.com/photo-1573164574472-797cdf4a583a?q=80&w=400&auto=format&fit=crop";

export default function Automatisation() {
  const t = useTranslations("AIAutomatisation");
  const teams = t.raw("teams") as any[];
  return (
    <div className="min-h-screen bg-white  font-sans  dark:bg-slate-900 dark:text-white pb-20">
      <div className="min-h-screen font-body container mx-auto px-16">
        <section className="p-3">
          <div className="rounded-2xl overflow-hidden border border-stone-100">
            <img
              src={HERO_IMG}
              alt="Une équipe collabore autour d'un ordinateur portable"
              className="w-full h-[54vh] object-cover"
            />
            <div className="bg-slate-900 p-4">
              <div className="flex items-start justify-between gap-3">
                <p className="font-heading text-white text-sm font-semibold leading-snug w-32">
                  {t("discover")}
                </p>
                <p className="text-slate-400 text-xs leading-snug w-36"></p>
              </div>
            </div>
          </div>
        </section>
        <section className="px-5 py-10">
          <h2 className="font-heading text-2xl text-slate-900 mb-6">
            <span className="font-normal text-slate-400 dark:text-white">
              {t("teamConcu")}{" "}
            </span>
            <span className="font-bold dark:text-white">{t("teamConcu2")}</span>
          </h2>

          <div className="grid grid-cols-3 grid-rows-2 gap-3">
            {teams.map((team, i) => {
              const Icon = ICONS[team.icon];
              return (
                <div
                  key={i}
                  className="col-span-1 bg-white border border-stone-200 rounded-xl p-3 flex flex-col gap-2 dark:bg-slate-800 dark:border-slate-700 "
                >
                  <span className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center">
                    {Icon && <Icon className="w-4 h-4 text-amber-600" />}
                  </span>
                  <h3 className="font-heading text-sm font-semibold text-slate-900 dark:text-white">
                    {team.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-snug dark:text-white">
                    {team.desc}
                  </p>
                </div>
              );
            })}

            <div className="col-span-1 row-span-2 bg-slate-900 rounded-xl p-4 flex flex-col justify-between dark:bg-slate-800 dark:border-slate-700 ">
              <div>
                <span className="w-8 h-8 rounded-full bg-amber-400 flex items-center justify-center mb-3">
                  <Sparkles className="w-4 h-4 text-slate-900" />
                </span>
                <h3 className="font-heading text-white text-base font-bold leading-snug mb-2">
                  {t("optimization")}
                </h3>
                <p className="text-slate-400 text-xs leading-snug">
                  {t("automatisationReport")}
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-10 bg-stone-50 border-t border-stone-100 px-5">
          <h2 className="font-heading text-2xl text-slate-900 mb-6">
            <span className="font-normal text-slate-400">{t("Adopt")}</span>
            <br />
            <span className="font-bold">{t("world")}</span>
          </h2>

          <div className="bg-white border border-stone-200 rounded-xl p-3 flex gap-3">
            <img
              src={PORTRAIT_IMG}
              alt="Portrait d'une cliente"
              className="w-20 h-28 object-cover rounded-lg flex-shrink-0"
            />
            <div className="flex flex-col justify-between">
              <div>
                <div className="flex gap-0.5 mb-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-3 h-3 text-amber-400 fill-amber-400"
                    />
                  ))}
                </div>
                <p className="text-xs text-slate-600 leading-relaxed italic">
                  Cette plateforme a transformé notre façon de travailler. Nous
                  avons automatisé des heures de tâches répétitives et gagné une
                  vision en temps réel sur nos données.
                </p>
              </div>
              <div className="flex items-center gap-2 mt-3">
                <span className="w-6 h-6 rounded-full bg-slate-900 flex items-center justify-center flex-shrink-0">
                  <Quote className="w-3 h-3 text-amber-400" />
                </span>
                <div>
                  <p className="text-xs font-semibold font-heading text-slate-900 leading-tight">
                    LEONEL RAFATRO
                  </p>
                  <p className="text-xs text-slate-400 leading-tight">
                    Responsable IT
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
