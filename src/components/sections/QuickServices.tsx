// src/components/sections/QuickServices.tsx

const services = [
  { label: "Hébergement Cloud", icon: "☁️", active: true },
  { label: "Infogérance", icon: "🖥️", active: false },
  { label: "SyncProd", icon: "🔄", active: false },
  { label: "ERP Axelor", icon: "📊", active: false },
];

const QuickServices = () => {
  return (
    <div className="grid grid-cols-12 gap-2">
      <section className="w-full py-10 px-4 col-span-12  bg-white">
        <div className="container mx-auto col-span-12 flex gap-80 px-10">
          {services.map((service) => (
            <div
              key={service.label}
              className={`flex flex-col items-center gap-3 px-8 py-6 rounded-xl cursor-pointer transition-all text-gray-600 hover:bg-[#54BE73]`}
            >
              <span className="text-4xl">{service.icon}</span>
              <span className="text-[15px] font-semibold text-center">
                {service.label}
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default QuickServices;
