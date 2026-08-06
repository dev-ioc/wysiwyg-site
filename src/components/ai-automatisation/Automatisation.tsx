"use client";

import React, { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import {
  Star,
  Quote,
  Megaphone,
  SlidersHorizontal,
  Code2,
  BarChart3,
  Sparkles,
  Zap,
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
function TiltCard({
  children,
  className = "",
  intensity = 10,
}: {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(
    useTransform(y, [-0.5, 0.5], [intensity, -intensity]),
    { stiffness: 220, damping: 22, mass: 0.4 },
  );
  const rotateY = useSpring(
    useTransform(x, [-0.5, 0.5], [-intensity, intensity]),
    { stiffness: 220, damping: 22, mass: 0.4 },
  );
  const glowX = useTransform(x, [-0.5, 0.5], [0, 100]);
  const glowY = useTransform(y, [-0.5, 0.5], [0, 100]);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (reduceMotion) return;
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  }
  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: reduceMotion ? 0 : rotateX,
        rotateY: reduceMotion ? 0 : rotateY,
        transformStyle: "preserve-3d",
        transformPerspective: 900,
      }}
      className={`relative group will-change-transform ${className}`}
    >
      {!reduceMotion && (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute -inset-px rounded-[inherit] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: useTransform(
              [glowX, glowY],
              ([gx, gy]: number[]) =>
                `radial-gradient(200px circle at ${gx}% ${gy}%, rgba(251,191,36,0.18), transparent 70%)`,
            ),
          }}
        />
      )}
      <div style={{ transform: "translateZ(30px)" }}>{children}</div>
    </motion.div>
  );
}
function AutomationGraph() {
  const reduceMotion = useReducedMotion();
  const nodes = [
    { x: 30, y: 30 },
    { x: 170, y: 26 },
    { x: 172, y: 110 },
    { x: 28, y: 112 },
  ];
  const center = { x: 100, y: 70 };
  return (
    <svg viewBox="0 0 200 140" className="w-full h-28" fill="none">
      {nodes.map((n, i) => (
        <motion.line
          key={`line-${i}`}
          x1={center.x}
          y1={center.y}
          x2={n.x}
          y2={n.y}
          stroke="url(#lineGrad)"
          strokeWidth="1.5"
          strokeDasharray="4 3"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: i * 0.12 }}
        />
      ))}
      {nodes.map((n, i) => (
        <motion.circle
          key={`node-${i}`}
          cx={n.x}
          cy={n.y}
          r="4.5"
          fill="#1e293b"
          stroke="#fbbf24"
          strokeWidth="1.5"
          animate={reduceMotion ? {} : { opacity: [0.5, 1, 0.5] }}
          transition={{
            duration: 2.4,
            repeat: Infinity,
            delay: i * 0.3,
            ease: "easeInOut",
          }}
        />
      ))}
      <motion.circle
        cx={center.x}
        cy={center.y}
        r="9"
        fill="#fbbf24"
        animate={reduceMotion ? {} : { scale: [1, 1.18, 1] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
      />
      <Zap
        x={center.x - 5}
        y={center.y - 5}
        width={10}
        height={10}
        className="text-slate-900"
        style={{ position: "relative" }}
      />
      <defs>
        <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#fbbf24" stopOpacity="0.05" />
        </linearGradient>
      </defs>
    </svg>
  );
}
export default function Automatisation() {
  const t = useTranslations("AIAutomatisation");
  const teams = t.raw("teams") as any[];
  const reduceMotion = useReducedMotion();

  return (
    <div className="min-h-screen bg-white font-sans dark:bg-slate-900 dark:text-white pb-20 overflow-x-hidden">
      <div className="min-h-screen font-body container mx-auto px-16 relative">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-20 right-0 w-[420px] h-[420px] rounded-full bg-amber-300/20 blur-[100px] dark:bg-amber-500/10"
        />
        <section className="p-3 relative">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="rounded-2xl overflow-hidden border border-stone-100 dark:border-slate-700 relative shadow-xl"
          >
            <div className="relative overflow-hidden">
              <img
                src={HERO_IMG}
                alt="Une équipe collabore autour d'un ordinateur portable"
                className="w-full h-[54vh] object-cover scale-105 hover:scale-100 transition-transform duration-[1200ms] ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/0 to-slate-900/10" />
              <motion.div
                animate={reduceMotion ? {} : { y: [0, -8, 0] }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-4 left-4 flex items-center gap-2 rounded-full bg-slate-900/80 backdrop-blur-md border border-amber-400/30 px-3 py-1.5 shadow-lg"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span className="text-[11px] font-semibold text-white tracking-wide">
                  IA · Automatisation
                </span>
              </motion.div>
            </div>

            <div className="bg-slate-900 p-4 relative">
              <div className="flex items-start justify-between gap-3">
                <p className="font-heading text-white text-sm font-semibold leading-snug w-32">
                  {t("discover")}
                </p>
                <p className="text-slate-400 text-xs leading-snug w-36"></p>
              </div>
            </div>
          </motion.div>
        </section>
        <section className="px-5 py-10">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-heading text-2xl text-slate-900 mb-6"
          >
            <span className="font-normal text-slate-400 dark:text-white">
              {t("teamConcu")}{" "}
            </span>
            <span className="font-bold dark:text-white">{t("teamConcu2")}</span>
          </motion.h2>

          <div
            className="grid grid-cols-3 grid-rows-2 gap-3"
            style={{ perspective: 1200 }}
          >
            {teams.map((team, i) => {
              const Icon = ICONS[team.icon];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                  className="lg:col-span-1 flex gap-1 col-span-3"
                >
                  <TiltCard className="h-full rounded-xl">
                    <div className="h-full bg-white/80 backdrop-blur-sm border border-stone-200 rounded-xl p-3 flex flex-col gap-2 shadow-sm hover:shadow-xl transition-shadow duration-300 dark:bg-slate-800/80 dark:border-slate-700">
                      <span className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6 dark:bg-amber-400/20">
                        {Icon && (
                          <Icon className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                        )}
                      </span>
                      <h3 className="font-heading text-sm font-semibold text-slate-900 dark:text-white">
                        {team.title}
                      </h3>
                      <p className="text-xs text-slate-500 leading-snug dark:text-slate-300">
                        {team.desc}
                      </p>
                    </div>
                  </TiltCard>
                </motion.div>
              );
            })}

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-1 row-span-2 flex gap-1 col-span-3"
            >
              <TiltCard className="h-full rounded-xl" intensity={7}>
                <div className="relative h-full overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-xl p-4 flex flex-col justify-between border border-slate-700/60 shadow-xl">
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-amber-400/20 blur-3xl"
                  />
                  <div className="relative">
                    <span className="w-8 h-8 rounded-full bg-amber-400 flex items-center justify-center mb-3 shadow-[0_0_20px_rgba(251,191,36,0.4)]">
                      <Sparkles className="w-4 h-4 text-slate-900" />
                    </span>
                    <h3 className="font-heading text-white text-base font-bold leading-snug mb-2">
                      {t("optimization")}
                    </h3>
                    <p className="text-slate-400 text-xs leading-snug">
                      {t("automatisationReport")}
                    </p>
                  </div>
                  <div className="relative mt-3">
                    <AutomationGraph />
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          </div>
        </section>
        <section className="py-10 bg-stone-50 border-t border-stone-100 px-5 dark:bg-slate-800/40 dark:border-slate-700">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-heading text-2xl text-slate-900 mb-6 dark:text-white"
          >
            <span className="font-normal text-slate-400">{t("Adopt")}</span>
            <br />
            <span className="font-bold dark:text-white">{t("world")}</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="px-6"
          >
            <TiltCard className="rounded-xl" intensity={5}>
              <div className="bg-white border border-stone-200 rounded-xl p-3 flex gap-3 shadow-sm hover:shadow-lg transition-shadow duration-300 dark:bg-slate-800 dark:border-slate-700">
                <div className="w-20 h-28 rounded-lg overflow-hidden flex-shrink-0">
                  <img
                    src={PORTRAIT_IMG}
                    alt="Portrait d'une cliente"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="flex flex-col justify-between">
                  <div>
                    <div className="flex gap-0.5 mb-2">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <motion.span
                          key={i}
                          initial={{ opacity: 0, scale: 0.5 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.08 }}
                        >
                          <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                        </motion.span>
                      ))}
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed italic dark:text-slate-300">
                      Cette plateforme a transformé notre façon de travailler.
                      Nous avons automatisé des heures de tâches répétitives et
                      gagné une vision en temps réel sur nos données.
                    </p>
                  </div>
                  <div className="flex items-center gap-2 mt-3">
                    <span className="w-6 h-6 rounded-full bg-slate-900 flex items-center justify-center flex-shrink-0">
                      <Quote className="w-3 h-3 text-amber-400" />
                    </span>
                    <div>
                      <p className="text-xs font-semibold font-heading text-slate-900 leading-tight dark:text-white">
                        LEONEL RAFATRO
                      </p>
                      <p className="text-xs text-slate-400 leading-tight">
                        Responsable IT
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </TiltCard>
          </motion.div>
        </section>
      </div>
    </div>
  );
}
