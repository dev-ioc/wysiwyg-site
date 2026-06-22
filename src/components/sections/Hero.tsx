const Hero = () => {
  return (
    <div className="relative grid grid-cols-12 col-span-12 h-auto lg:h-[761px] w-full bg-[url('/images/pexels-christina-morillo-1181341-768x512.jpg.webp')] bg-cover bg-center bg-no-repeat overflow-hidden pb-10">
      <div className="col-span-12 lg:col-start-5 flex flex-col items-center justify-center text-center w-full gap-6 relative z-10 pt-20 lg:pt-20 lg:-top-5 lg:w-[700px]">
        <h1 className="mb-2">
          <span className="relative inline-block font-mono">
            {/* Texte animé via clip-path */}
            <span className="whitespace-nowrap animate-type inline-block">
              <span className="text-[#05e7eb] text-[38px]">C</span>
              <span className="text-[#05e7eb] text-[30px]">onsole</span>
              <span className="text-white text-[20px]">.</span>
              <span className="text-yellow-300 text-[30px]">log</span>
              <span className="text-[#b205eb] text-[34px]">(</span>
              <span className="text-primary text-[36px] lg:text-[30px] font-bold font-merriweather">
                &quot;What You See Is What You Get&quot;
              </span>
              <span className="text-[#b205eb] text-[40px]">)</span>
              <span className="text-white text-[30px]">;</span>
            </span>

            {/* Curseur clignotant */}
            <span className="absolute -top-1 bottom-0 right-0 inline-block w-[3px] bg-white animate-cursor will-change-[opacity]" />
          </span>
        </h1>

        <span className="max-w-[500px] text-[16px] lg:text-[20px] text-center text-secondary font-assistant font-bold lg:leading-[2rem]">
          Ce nom est basé sur un concept basique de qualité totale. Chaque
          entreprise doit avoir une vision de ce qu&apos;elle veut être
        </span>
        <button className="bg-secondary px-6 py-2 rounded-full text-black font-medium transition font-assistant">
          En savoir plus
        </button>
      </div>
    </div>
  );
};

export default Hero;
