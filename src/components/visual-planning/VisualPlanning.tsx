"use client";
import {
  Calendar,
  Users,
  BarChart3,
  CheckCircle2,
  LucideIcon,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";

const ZoomInOnView = ({
  children,
  delayMs = 0,
  className = "",
}: {
  children: React.ReactNode;
  delayMs?: number;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ animationDelay: isVisible ? `${delayMs}ms` : undefined }}
      className={`${className} ${
        isVisible ? "animate-zoomIn" : "opacity-0"
      } motion-reduce:animate-none motion-reduce:opacity-100`}
    >
      {children}
    </div>
  );
};
const CornerMarks = () => (
  <>
    <span className="pointer-events-none absolute -top-1.5 -right-1.5 h-3.5 w-3.5 border-t-2 border-r-2 border-primary" />
    <span className="pointer-events-none absolute -bottom-1.5 -left-1.5 h-3.5 w-3.5 border-b-2 border-l-2 border-primary" />
  </>
);

const FeatureCard = ({
  icon: Icon,
  title,
  description,
  className = "",
  delayMs = 0,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
  delayMs?: number;
}) => (
  <ZoomInOnView
    delayMs={delayMs}
    className={`group/card relative w-full md:w-[380px] hover:z-40 ${className}`}
  >
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#141414] p-7 shadow-2xl shadow-black/40 transition-all duration-300 group-hover/card:-translate-y-1 group-hover/card:scale-[1.03] group-hover/card:border-white/20 group-hover/card:shadow-primary/20">
      <div className="pointer-events-none absolute inset-0 opacity-[0.06] bg-gradient-to-r from-green-500 to-blue-600 rounded-2xl opacity-20 blur-xl" />
      <CornerMarks />

      <div className="relative z-10">
        <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white transition-colors duration-300 group-hover/card:bg-primary group-hover/card:text-black">
          <Icon size={20} strokeWidth={1.75} />
        </div>
        <h3 className="mb-3 text-lg font-bold uppercase tracking-tight text-white">
          {title}
        </h3>
        <p className="text-sm leading-relaxed text-white/60 transition-colors duration-300 group-hover/card:text-white/90">
          {description}
        </p>
      </div>
    </div>
  </ZoomInOnView>
);
const VisualPlanning = () => {
  const t = useTranslations("VisualPlanning");
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <section className="relative bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800 text-white py-24 px-6 overflow-hidden  dark:bg-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(#22c55e_1px,transparent_1px)] [background-size:16px_16px] opacity-10"></div>
        <div className="relative container mx-auto max-w-6xl text-center z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 tracking-tight text-black dark:text-white/50">
            {t("title")}
          </h1>
          <p className="text-lg md:text-xl text-black mb-10 max-w-3xl mx-auto font-light leading-relaxed dark:text-white/50">
            {t("description")}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/#contact"
              className="bg-green-500 hover:bg-green-600  text-base px-8 py-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              {t("demo")}{" "}
            </a>
            <a
              href="#overview"
              className="border-gray-700 bg-[#b3b6ba]  text-base px-8 py-4 rounded-full text-white shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              {t("explore")}
            </a>
          </div>
        </div>
      </section>
      <section className="py-16 px-6 bg-gray-50 dark:bg-slate-900 dark:text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-green-500 to-blue-600 rounded-2xl opacity-20 blur-xl"></div>
              <img
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=2070&auto=format&fit=crop"
                alt="Visual Planning Dashboard"
                className="relative rounded-xl shadow-2xl border border-gray-200 object-cover w-full h-[400px]"
              />
            </div>
            <div className="lg:w-1/2 text-gray-800 dark:text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight leading-snug">
                {t("overviewTitle")}
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                {t("overviewDescription")}
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2
                    className="text-green-500 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span className="text-gray-700">
                    <strong>{t("benefits.0.title")} :</strong>{" "}
                    {t("benefits.0.desc")}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2
                    className="text-green-500 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span className="text-gray-700">
                    <strong>{t("benefits.1.title")} :</strong>{" "}
                    {t("benefits.1.desc")}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2
                    className="text-green-500 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span className="text-gray-700">
                    <strong>{t("benefits.2.title")} :</strong>{" "}
                    {t("benefits.2.desc")}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section
        className="relative overflow-hidden dark:bg-slate-900  px-6 md:py-16"
        id="overview"
      >
        <div className="relative container mx-auto max-w-6xl">
          <div className="mb-16 max-w-2xl md:mb-24">
            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-black md:text-5xl dark:text-white">
              {t("featuresTitle")}
            </h2>
            <p className="text-base leading-relaxed text-balck/50 md:text-lg dark:text-white">
              {t("featuresDescription")}
            </p>
          </div>
          <div className="inset-0 grid md:grid-cols-12 items-center justify-center">
            <div></div>
            <div className="relative flex flex-col items-center justify-center gap-8 md:block md:h-[520px]">
              <FeatureCard
                icon={Calendar}
                title={t("features.0.title")}
                description={t("features.0.desc")}
                delayMs={0}
                className="md:absolute md:left-0 md:top-0 md:z-10"
              />
              <FeatureCard
                icon={BarChart3}
                title={t("features.1.title")}
                description={t("features.1.desc")}
                delayMs={150}
                className="md:absolute md:left-[300px] md:top-[120px] md:z-20"
              />
              <FeatureCard
                icon={Users}
                title={t("features.2.title")}
                description={t("features.2.desc")}
                delayMs={300}
                className="md:absolute md:left-[120px] md:top-[220px] md:z-20"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 px-6 bg-gray-900 text-white text-center relative overflow-hidden  dark:bg-slate-900 ">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop")',
          }}
        ></div>
        <div className="relative container mx-auto max-w-4xl z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-black/50 dark:text-white">
            {t("ctaTitle")}
          </h2>
          <p className="text-lg md:text-xl text-black/25 mb-10 max-w-2xl mx-auto font-light dark:text-white">
            {t("ctaDescription")}
          </p>
          <a
            href="/#contact"
            className="bg-green-500 hover:bg-green-600 text-white text-lg px-10 py-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            {t("ctaButton")}
          </a>
        </div>
      </section>
    </div>
  );
};

export default VisualPlanning;
