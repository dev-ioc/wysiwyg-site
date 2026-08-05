import {
  Search,
  PenTool,
  Code,
  Rocket,
  Wrench,
  Monitor,
  Server,
  Database,
  Cloud,
  Smartphone,
  ShieldCheck,
} from "lucide-react";
import { useTranslations } from "next-intl";
type ProcessStep = {
  icon: "Search" | "PenTool" | "Code" | "Rocket" | "Wrench";
  title: string;
  desc: string;
};
type Technology = {
  icon:
    | "Monitor"
    | "Server"
    | "Database"
    | "Cloud"
    | "Smartphone"
    | "ShieldCheck";
  title: string;
  desc: string;
};
export default function ApplicationDevelopment() {
  const t = useTranslations("ApplicationDevelopment");

  const processSteps = t.raw("developmentProcess") as ProcessStep[];

  const technologyIcons = {
    Monitor,
    Server,
    Database,
    Cloud,
    Smartphone,
    ShieldCheck,
  };

  const technologies = t.raw("technologies") as Technology[];
  return (
    <div className="min-h-screen flex flex-col dark:bg-slate-900 ">
      <section className="relative bg-gray-800 text-white py-20 px-6">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
          }}
        ></div>
        <div className="relative container mx-auto text-center z-10">
          <h1 className="text-5xl font-bold leading-tight mb-4">
            {t("title")}
          </h1>
          <p className="text-xl mb-8">{t("description")}</p>
          <a
            href="/#contact"
            className="bg-[#54BE73]  hover:bg-green-600 text-white text-lg px-8 py-3 rounded-full"
          >
            {t("quote")}
          </a>
        </div>
      </section>
      <section className="py-16 px-6 bg-gray-50 dark:text-white">
        <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Application Development"
              className="rounded-lg shadow-xl"
            />
          </div>
          <div className="lg:w-1/2 text-gray-800">
            <h2 className="text-4xl font-bold mb-6">{t("transform")}</h2>
            <p className="text-lg leading-relaxed mb-4">{t("transform2")}</p>
            <p className="text-lg leading-relaxed">{t("whether")}</p>
          </div>
        </div>
      </section>
      <main className="flex-grow container mx-auto py-12 px-6">
        <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center dark:text-white">
          {t("process")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {processSteps.map((step, index) => {
            const Icon = {
              Search,
              PenTool,
              Code,
              Rocket,
              Wrench,
            }[step.icon];

            return (
              <div
                key={index}
                className="
                bg-white
                rounded-lg
                shadow-lg
                p-6
                text-center
                border
                border-transparent
                hover:border-[#54BE73]
                hover:-translate-y-2
                transition-all
                duration-300
            "
              >
                {Icon && (
                  <Icon className="mx-auto text-green-500 mb-4" size={48} />
                )}

                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>

                <p className="text-gray-600">{step.desc}</p>
              </div>
            );
          })}
        </div>
      </main>
      <section className="py-16 px-6 bg-white dark:bg-slate-900">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-10 dark:text-white">
            {t("technologiesTitle")}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => {
              const Icon = technologyIcons[tech.icon];

              return (
                <div
                  key={index}
                  className="
              bg-gray-50
              dark:bg-slate-800
              rounded-xl
              shadow-lg
              p-6
              text-center
              hover:-translate-y-2
              transition-all
              duration-300
            "
                >
                  <Icon size={48} className="mx-auto mb-4 text-green-500" />

                  <h3 className="text-xl font-semibold mb-3 dark:text-white">
                    {tech.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 dark:text-white">
                    {tech.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
