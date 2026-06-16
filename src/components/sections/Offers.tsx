const Offers = () => {
  return (
    <div className="px-8 h-auto space-y-0 mb-0 bg-white">
      <div className="container mx-auto py-8 space-y-8">
        <h1 className="text-center font-bold text-[38px] font-merriweather text-[#222222]">
          Offres associées
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14">
          <div className="flex flex-col items-center text-center gap-4 ">
            <div className="bg-[url('/images/support-users.png')] bg-no-repeat bg-contain bg-center w-[210px] h-[210px]" />
            <div className="flex flex-col gap-2 w-full">
              <h2 className="font-bold text-[#282828] font-assistant text-[22px]">
                Support utilisateurs
              </h2>
              <p className="text-[15px] text-[#7E7E7E] leading-[1.5rem] font-medium font-assistant w-full h-auto">
                Nous le mettons à votre disposition afin de prendre en charge
                votre ticket pour une résolution la plus rapide possible.e
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center text-center gap-4">
            <div className="bg-[url('/images/infogerence-on-site.png')] bg-no-repeat bg-contain bg-center w-[210px] h-[210px]" />
            <div className="flex flex-col gap-2">
              <h2 className="font-bold text-[#282828] font-assistant text-[22px]">
                Infogérance sur site.
              </h2>
              <p className="text-[15px] text-[#7E7E7E] leading-[1.5rem] font-medium font-assistant w-full h-auto">
                Nos équipes vous apportent leur soutien dans toutes les tâches
                quotidiennes de la gestion de votre parc.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center text-center gap-4">
            <div className="bg-[url('/images/dsi-externalise.png')] bg-no-repeat bg-contain bg-center w-[210px] h-[210px]" />
            <div className="flex flex-col gap-2">
              <h2 className="font-bold text-[#282828] font-assistant text-[22px]">
                DSI Externalisé
              </h2>
              <p className="text-[15px] text-[#7E7E7E] leading-[1.5rem] font-medium font-assistant w-full h-auto">
                Nous confier votre SI c’est vous assurer de bénéficier de la
                meilleure expertise informatique, à la demande et sans aucune
                contrainte budgétaire.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center text-center gap-4">
            <div className="bg-[url('/images/save-extern.png')] bg-no-repeat bg-contain bg-center w-[210px] h-[210px]" />
            <div className="flex flex-col gap-2">
              <h2 className="font-bold text-[#282828] font-assistant text-[22px]">
                Sauvegarde externalisé
              </h2>
              <p className="text-[15px] text-[#7E7E7E] leading-[1.5rem] font-medium font-assistant w-full h-auto">
                L’infogérance d’infrastructures permet la gestion du parc
                informatique
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offers;
