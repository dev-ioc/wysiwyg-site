const WhyUs = () => {
  return (
    <div className="px-8 h-auto mb-0 bg-[#D9D9D9] py-2">
      <div className="container mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-20">
        <div className="flex flex-col gap-8">
          <h1 className="text-left text-[#222222] font-bold text-[38px] font-merriweather">
            Pourquoi nous choisir ?
          </h1>

          <div className="flex flex-row items-start gap-6">
            <div className="flex-shrink-0 w-[70px] h-[70px] rounded-full bg-white flex items-center justify-center shadow-sm">
              <img
                src="/images/informatique-si.png"
                alt="Informatique et SI"
                className="w-7 h-7"
              />
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-[19px] font-bold text-[#282828] font-assistant">
                Informatique et SI
              </h3>
              <p className="text-[15px] text-[#7E7E7E] leading-[1.5rem] font-medium font-assistant">
                Développement de solutions logicielles professionnelles
                spécifiques sur mesure.
              </p>
            </div>
          </div>

          <div className="flex flex-row items-start gap-6">
            <div className="flex-shrink-0 w-[70px] h-[70px] rounded-full bg-white flex items-center justify-center shadow-sm">
              <img
                src="/images/gestion-processus.png"
                alt="Gestion et Processus"
                className="w-7 h-7"
              />
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-[19px] font-bold text-[#282828] font-assistant">
                Gestion et Processus
              </h3>
              <p className="text-[15px] text-[#7E7E7E] leading-[1.5rem] font-medium font-assistant">
                Optimisez la gestion et améliorez vos processus pour une
                organisation plus efficace et performante.
              </p>
            </div>
          </div>

          <div className="flex flex-row items-start gap-6">
            <div className="flex-shrink-0 w-[70px] h-[70px] rounded-full bg-white flex items-center justify-center shadow-sm">
              <img
                src="/images/commercial-bi.png"
                alt="Commercial et BI"
                className="w-7 h-7"
              />
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-[19px] font-bold text-[#282828] font-assistant">
                Commercial et BI
              </h3>
              <p className="text-[15px] text-[#7E7E7E] leading-[1.5rem] font-medium font-assistant">
                La Business Intelligence (BI) comprend les stratégies et les
                technologies utilisées par les entreprises pour l&apos;analyse
                des données d&apos;informations commerciales.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[url('/images/why-choise-us.png')] bg-no-repeat bg-contain bg-center w-full h-[450px] lg:h-[536px]" />
      </div>
    </div>
  );
};

export default WhyUs;
