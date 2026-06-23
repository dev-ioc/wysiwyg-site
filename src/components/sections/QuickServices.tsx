import { useTranslations } from "next-intl";

type Service = {
  id: number;
  label: string;
  description: string;
  icon: string;
  href: string;
};
const QuickServices = () => {
  const t = useTranslations("QuickServices");
  const tp = useTranslations("Hero");
  const services = t.raw("services") as Service[];
  return (
    <div className="w-full py-28 px-4 bg-[#F0EDEA] dark:text-white  dark:bg-slate-900 border-b border-light">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-16">
          {services.map((service) => (
            <div
              key={service.label}
              className="flex flex-col items-center text-center gap-4"
            >
              <div className="h-[120px] flex items-center justify-center">
                <img
                  src={service.icon}
                  alt={service.label}
                  className={`max-h-[120px] max-w-[200px] object-contain ${service.id === 1 ? "dark:invert" : ""} animate-slideUp`}
                />
              </div>
              <h3 className="text-[13px] font-bold text-gray-800 uppercase tracking-wide">
                {service.label}
              </h3>
              <p className="text-[14px] text-gray-700 leading-relaxed">
                {service.description}
              </p>
              <a
                href={service.href}
                className="dark:text-black mt-1 border border-grey text-gray-800 text-[12px] bg-secondary hover:bg-gray-800 transition-colors px-4 py-1.5 rounded-full "
              >
                {tp("BtnPlus")}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuickServices;
