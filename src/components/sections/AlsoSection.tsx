"use client";

const cards = [
  {
    title: "Une Equipe d’expert",
    description:
      "Une Equipe de professionnel consistant d’ingénieurs, de système Admin, de commerciaux et des Techniciens de support.",
    hoverTitle: "Experts certifiés",
    hoverDescription:
      "Notre équipe accompagne les entreprises dans leurs projets d'infrastructure, cloud, cybersécurité et transformation digitale.",
  },
  {
    title: "Gamme complète de solutions et de services",
    description:
      "WYSIWYG détient de nombreuses certifications, validant nos compétences techniques. Notre façon d’intervenir chez nos clients pour solutionner leur besoins fait de nous des experts dans des domaines très larges.",
    hoverTitle: "Solutions innovantes",
    hoverDescription:
      "ERP, Cloud, Infrastructure, Cybersécurité, IA et services managés pour répondre à tous vos besoins.",
  },
  {
    title: "Satisfaction client",
    description:
      "La confiance de nos clients est le moteur de notre croissance et de notre engagement qualité. Nous sommes fiers de nos 207 Clients entreprise. Ce chiffre ne cesse de s’accroitre.",
    hoverTitle: "Clients satisfaits",
    hoverDescription:
      "Nous sommes fiers de nos 207 Clients entreprise. Ce chiffre ne cesse de s’accroitre.",
  },
];

const AlsoSection = () => {
  return (
    <div className="w-full py-16 px-4 bg-white lg:min-h-[400px] dark:text-white  dark:bg-slate-900">
      <div className="container mx-auto ">
        <h1 className="text-center text-[#E4373A] text-[38px] font-merriweather font-bold mb-16">
          Wysiwyg c&apos;est aussi
        </h1>
        <div className="flex lg:flex-row flex-col lg:gap-16 gap-12 items-center justify-center py-16">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`group relative w-[295px] ${
                index === 1 ? "lg:-mt-16 h-[380px]" : "h-[315px]"
              } [perspective:1000px]`}
            >
              <div
                className="
                  relative h-full w-full
                  transition-all duration-700
                  [transform-style:preserve-3d]
                  group-hover:[transform:rotateY(180deg)]
                "
              >
                <div
                  className="
                    absolute inset-0
                    rounded-[8px]
                    bg-white
                    shadow-lg
                    px-6 py-10
                    [backface-visibility:hidden]
                  "
                >
                  <div className="flex flex-col h-full justify-between">
                    <h2 className="text-[21px] text-[#313131] font-poppins font-bold text-center">
                      {card.title}
                    </h2>

                    <p className="text-[17px] text-[#000000] font-poppins text-center">
                      {card.description}
                    </p>
                  </div>
                </div>

                <div
                  className="
                    absolute inset-0
                    rounded-[8px]
                    bg-[#52BC71]
                    shadow-lg
                    px-6 py-10
                    text-white
                    [transform:rotateY(180deg)]
                    [backface-visibility:hidden]
                  "
                >
                  <div className="flex flex-col h-full justify-center items-center gap-6">
                    <h2 className="text-[24px] font-bold text-center">
                      {card.hoverTitle}
                    </h2>

                    <p className="text-center text-[18px]">
                      {card.hoverDescription}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AlsoSection;
