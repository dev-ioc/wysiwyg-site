// src/components/sections/QuickServices.tsx
const services = [
  {
    label: "Automatisation IA",
    description:
      "Automatisez vos taches avec les meilleurs outils et les lier à vos projets avec une possibilité d'optimisation.",
    icon: "/images/automatisation.avif",
    href: "https://www.indianoceancloud.com/automatisation",
  },
  {
    label: "ERP Axelor",
    description:
      "Une solution puissante et personnalisable pour simplifier la gestion de votre entreprise. CRM, comptabilité, stocks, RH — centralisez tous vos processus métier sur une seule plateforme.",
    icon: "/images/logo_axelor.avif",
    href: "https://www.indianoceancloud.com/erpaxelor",
  },
  {
    label: "Développement d'application",
    description:
      "De la conception au développement, en passant par la maintenance et la gestion d'applications logicielles.",
    icon: "/images/application.avif",
    href: "https://www.indianoceancloud.com/appdev",
  },
  {
    label: "Visual Planning",
    description:
      "L'outil incontournable pour organiser et suivre vos projets efficacement. Planification des ressources, gestion des plannings et suivi en temps réel de vos activités.",
    icon: "/images/visualPlanning.avif",
    href: "https://www.indianoceancloud.com/visualplanning",
  },
  {
    label: "Messagerie BlueMind",
    description:
      "Une plateforme collaborative pour optimiser vos échanges. Messagerie professionnelle, calendrier partagé, contacts unifiés — une solution souveraine et performante.",
    icon: "/images/bluemind.avif",
    href: "https://www.indianoceancloud.com/bluemind",
  },
  {
    label: "Infogérance",
    description:
      "Une infrastructure IT performante et sécurisée. Nous prenons en charge la gestion, la supervision et l'optimisation de vos systèmes informatiques pour garantir leur disponibilité et leur performance.",
    icon: "/images/Infogérance.avif",
    href: "https://www.indianoceancloud.com/infogerance",
  },
];

const QuickServices = () => {
  return (
    <section className="w-full py-16 px-4 bg-[#F0EDEA]">
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
                  className="max-h-[120px] max-w-[200px] object-contain"
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
                className="mt-1 border border-grey text-gray-800 text-[12px] bg-secondary hover:bg-gray-800 transition-colors px-4 py-1.5 rounded-full "
              >
                En savoir plus
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickServices;
