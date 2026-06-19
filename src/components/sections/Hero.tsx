const Hero = () => {
  return (
    <div className="relative grid grid-cols-12 col-span-12 h-auto lg:h-[761px] w-full bg-[url('/images/pexels-christina-morillo-1181341-768x512.jpg.webp')] bg-cover bg-center bg-no-repeat overflow-hidden pb-10 ">
      <div className="col-span-12 lg:col-start-5 flex flex-col items-center justify-center text-center gap-10 px-6 text-white relative z-10 pt-20 lg:pt-20 lg:-top-5 w-full lg:w-[583px] ">
        <span className="text-[36px] lg:text-[53px] font-bold font-merriweather">
          WYSIWYG
        </span>
        <span className="max-w-[500px] text-[16px] lg:text-[20px] text-center text-secondary font-assistant font-bold lg:leading-[2rem]">
          Ce nom est basé sur un concept basique de qualité totale. Chaque
          entreprise doit avoir une vision de ce qu'elle veut être
        </span>
        <button className="bg-secondary px-6 py-2 rounded-full text-black font-medium transition font-assistant">
          En savoir plus
        </button>
      </div>
    </div>
  );
};

export default Hero;
