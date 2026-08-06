import { Calendar, Users, BarChart3, CheckCircle2 } from "lucide-react";
import { useTranslations } from "next-intl";

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
            <button className="border-gray-700 bg-[#b3b6ba]  text-base px-8 py-4 rounded-full text-white shadow-lg transition-all duration-300 transform hover:scale-105">
              {t("explore")}
            </button>
          </div>
        </div>
      </section>
      <section className="py-24 px-6 bg-gray-50 dark:bg-slate-900 dark:text-white">
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
      <section className="py-24 px-6 bg-white  dark:bg-slate-900 dark:text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t("featuresTitle")}
            </h2>
            <p className="text-gray-600 text-lg">{t("featuresDescription")}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow group">
              <div className="w-14 h-14 bg-green-100 text-green-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-600 group-hover:text-white transition-colors">
                <Calendar size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                {t("features.0.title")}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t("features.0.desc")}
              </p>
            </div>
            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow group">
              <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <BarChart3 size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                {t("features.1.title")}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t("features.1.desc")}
              </p>
            </div>
            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow group">
              <div className="w-14 h-14 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                <Users size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                {t("features.2.title")}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t("features.2.desc")}
              </p>
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
