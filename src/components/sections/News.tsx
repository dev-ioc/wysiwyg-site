import { useTranslations } from "next-intl";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const News = () => {
  const t = useTranslations("News");

  return (
    <section className="w-full bg-[#F1F1F1] dark:bg-slate-900 dark:text-white border-b border-gray-200 dark:border-slate-700">
      <div className="container mx-auto px-16 py-32 space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 items-center">
          <div />

          <div className="flex flex-col items-center gap-2">
            <h1 className="text-4xl lg:text-[60px] font-merriweather font-bold">
              {t("title")}
            </h1>

            <div className="grid grid-cols-2 lg:py-2">
              <div className="border-r border-grey dark:border-gray-600 mt-1" />
              <div className="flex flex-col gap-1 px-3 text-sm font-merriweather">
                <span>Consectetur adipiscing elit gggg</span>
                <span>Consectetur adipiscing elit gsqg</span>
              </div>
            </div>
          </div>

          <div />
        </div>
        <hr className="w-full border-grey dark:border-gray-600 border-t-2" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="flex flex-col gap-4">
            <img
              src="/images/images.jfif"
              alt="news"
              className="w-full h-[34vh] object-cover rounded-[16px]"
            />

            <span className="text-red-400 font-bold text-xs uppercase">
              {t("title")}
            </span>

            <p className="text-xl font-bold dark:text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
              nesciunt enim cumque inventore.
            </p>

            <div className="flex gap-2 items-center text-gray-500 text-sm">
              <span>{new Date().toLocaleDateString()}</span>
              <span className="border-l border-gray-400 pl-2">By Roby</span>
            </div>
          </div>
          <div className="flex flex-col gap-7">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="flex flex-col gap-3 flex-1">
                <span className="text-red-400 font-bold text-xs uppercase">
                  {t("title")}
                </span>

                <span className="font-bold text-black dark:text-white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit
                </span>

                <div className="flex gap-2 items-center text-gray-500 text-sm">
                  <span>{new Date().toLocaleDateString()}</span>
                  <span className="border-l border-gray-400 pl-2">By Roby</span>
                </div>
              </div>

              <img
                src="/images/pexels-serpstat-572056.jpg"
                alt="news-1"
                className="w-full md:w-[161px] h-[100px] object-cover rounded-[16px]"
              />
            </div>

            <hr className="w-full border-grey dark:border-gray-600" />
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="flex flex-col gap-3 flex-1">
                <span className="text-red-400 font-bold text-xs uppercase">
                  {t("title")}
                </span>

                <span className="font-bold text-black dark:text-white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit
                </span>

                <div className="flex gap-2 items-center text-gray-500 text-sm">
                  <span>{new Date().toLocaleDateString()}</span>
                  <span className="border-l border-gray-400 pl-2">By Roby</span>
                </div>
              </div>

              <img
                src="/images/pexels-burst-374074-r4vkxxp465ugxrl96hm7ejrhtep1450egrhout2npw.jpg.webp"
                alt="news-2"
                className="w-full md:w-[161px] h-[100px] object-cover rounded-[16px]"
              />
            </div>

            <hr className="w-full border-grey dark:border-gray-600" />
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="flex flex-col gap-3 flex-1">
                <span className="text-red-400 font-bold text-xs uppercase">
                  {t("title")}
                </span>

                <span className="font-bold text-black dark:text-white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit
                </span>

                <div className="flex gap-2 items-center text-gray-500 text-sm">
                  <span>{new Date().toLocaleDateString()}</span>
                  <span className="border-l border-gray-400 pl-2">By Roby</span>
                </div>
              </div>

              <img
                src="/images/luke-chesser-JKUTrJ4vK00-unsplash-r4vkxymyczvr9djw100tz1iyeskebu44sw56c319jo.jpg.webp"
                alt="news-3"
                className="w-full md:w-[161px] h-[100px] object-cover rounded"
              />
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <span className="whitespace-nowrap text-2xl lg:text-[32px] font-assistant font-bold ">
            {t("AllNews")}
          </span>
          <hr className="flex-1 border-t-2 border-grey dark:border-gray-600" />
        </div>
        <div className="grid grid-cols-1  gap-6">
          <div className="flex lg:flex-row lg:gap-8 flex-col gap-4">
            <div className="lg:w-[50%] w-full">
              <div className="bg-[url('/images/images.jfif')] bg-no-repeat bg-cover bg-center lg:h-[400px] h-[200px] rounded-[16px]" />
              <div className="flex flex-col gap-4 py-6">
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo
                  vel quis deleniti modi aliquid, voluptatum, doloremque
                  voluptas,
                </span>
                <div className="flex gap-2 items-center text-gray-500 text-sm">
                  <span>{new Date().toLocaleDateString()}</span>
                  <span className="border-l border-gray-400 pl-2">By Roby</span>
                </div>
              </div>
            </div>
            <div className="lg:w-[25%] w-full">
              <div className="bg-[url('/images/images_1.jfif')] bg-no-repeat bg-cover bg-center lg:h-[400px] h-[200px] rounded-[16px]" />
              <div className="flex flex-col gap-4 py-6">
                <span>Lorem ipsum dolor sit amet, consectetur</span>
                <div className="flex gap-2 items-center text-gray-500 text-sm">
                  <span>{new Date().toLocaleDateString()}</span>
                  <span className="border-l border-gray-400 pl-2">By Roby</span>
                </div>
              </div>
            </div>
            <div className="lg:w-[25%] w-full">
              <div className="bg-[url('/images/images_2.jfif')] bg-no-repeat bg-cover bg-center  lg:h-[400px] h-[200px] rounded-[16px]" />
              <div className="flex flex-col gap-4 py-6">
                <span>Lorem ipsum dolor sit amet, consectetur</span>
                <div className="flex gap-2 items-center text-gray-500 text-sm">
                  <span>{new Date().toLocaleDateString()}</span>
                  <span className="border-l border-gray-400 pl-2">By Roby</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex lg:flex-row lg:gap-8 flex-col gap-4 w-full">
            <div className="lg:w-[23%] w-full">
              <div className="bg-[url('/images/images_8.jfif')] bg-no-repeat bg-cover bg-center lg:h-[400px] h-[200px] rounded-[16px] " />
              <div className="flex flex-col gap-4 py-6">
                <span>Lorem ipsum dolor sit amet, consectetur</span>
                <div className="flex gap-2 items-center text-gray-500 text-sm">
                  <span>{new Date().toLocaleDateString()}</span>
                  <span className="border-l border-gray-400 pl-2">By Roby</span>
                </div>
              </div>
            </div>
            <div className="lg:w-[23%] w-full">
              <div className="bg-[url('/images/images_3.jfif')] bg-no-repeat bg-cover bg-center lg:h-[400px] h-[200px] rounded-[16px]" />
              <div className="flex flex-col gap-4 py-6">
                <span>Lorem ipsum dolor sit amet, consectetur</span>
                <div className="flex gap-2 items-center text-gray-500 text-sm">
                  <span>{new Date().toLocaleDateString()}</span>
                  <span className="border-l border-gray-400 pl-2">By Roby</span>
                </div>
              </div>
            </div>
            <div className="lg:w-[50%] w-full">
              <div className="bg-[url('/images/images_10.jfif')] bg-no-repeat bg-cover bg-center lg:h-[400px] h-[200px] rounded-[16px]" />
              <div className="flex flex-col gap-4 py-6">
                <span>Lorem ipsum dolor sit amet, consectetur</span>
                <div className="flex gap-2 items-center text-gray-500 text-sm">
                  <span>{new Date().toLocaleDateString()}</span>
                  <span className="border-l border-gray-400 pl-2">By Roby</span>
                </div>
              </div>
            </div>
          </div>
          <div className="grid lg:grid-cols-4 gap-4 grid-cols-1">
            <div className="w-full">
              <div className="bg-[url('/images/images_7.jfif')] bg-no-repeat bg-cover bg-center h-[30vh] rounded-[16px] " />
              <div className="flex flex-col gap-4 py-6">
                <span>Lorem ipsum dolor sit amet, consectetur</span>
                <div className="flex gap-2 items-center text-gray-500 text-sm">
                  <span>{new Date().toLocaleDateString()}</span>
                  <span className="border-l border-gray-400 pl-2">By Roby</span>
                </div>
              </div>
            </div>
            <div className="w-full">
              <div className="bg-[url('/images/generative-formation.jpg')] bg-no-repeat bg-cover bg-center h-[30vh] rounded-[16px]" />
              <div className="flex flex-col gap-4 py-6">
                <span>Lorem ipsum dolor sit amet, consectetur</span>
                <div className="flex gap-2 items-center text-gray-500 text-sm">
                  <span>{new Date().toLocaleDateString()}</span>
                  <span className="border-l border-gray-400 pl-2">By Roby</span>
                </div>
              </div>
            </div>
            <div className="w-full">
              <div className="bg-[url('/images/images_5.jfif')] bg-no-repeat bg-cover bg-center h-[30vh] rounded-[16px]" />
              <div className="flex flex-col gap-4 py-6">
                <span>Lorem ipsum dolor sit amet, consectetur</span>
                <div className="flex gap-2 items-center text-gray-500 text-sm">
                  <span>{new Date().toLocaleDateString()}</span>
                  <span className="border-l border-gray-400 pl-2">By Roby</span>
                </div>
              </div>
            </div>
            <div className="w-full">
              <div className="bg-[url('/images/images_6.jfif')] bg-no-repeat bg-cover bg-center h-[30vh] rounded-[16px]" />
              <div className="flex flex-col gap-4 py-6">
                <span>Lorem ipsum dolor sit amet, consectetur</span>
                <div className="flex gap-2 items-center text-gray-500 text-sm">
                  <span>{new Date().toLocaleDateString()}</span>
                  <span className="border-l border-gray-400 pl-2">By Roby</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center gap-6 lg:grid lg:grid-cols-3 lg:items-center">
            <div className="flex flex-row gap-3 items-center justify-center lg:justify-start">
              <FaArrowLeft className="cursor-pointer text-gray-500 hover:text-red-400" />
              <span className="cursor-pointer hover:text-red-400">1</span>
              <span className="cursor-pointer hover:text-red-400">2</span>
              <span className="cursor-pointer hover:text-red-400">3</span>
              <span>...</span>
              <span className="cursor-pointer hover:text-red-400">10</span>
              <FaArrowRight className="cursor-pointer text-gray-500 hover:text-red-400" />
            </div>

            {/* Bouton Voir Plus */}
            <div className="w-full flex justify-center">
              <button className="flex justify-center items-center w-[100px] h-[100px] rounded-full border border-red-400 text-red-400 hover:bg-red-400 hover:text-white transition-colors">
                {t("viewAll")}
              </button>
            </div>

            <div className="hidden lg:block" />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          <div className="flex flex-col gap-4">
            <h1 className="text-red-400 text-[32px] font-bold uppercase">
              {t("Security")}
            </h1>
            <label className="dark:text-white text-[32px] font-bold uppercase">
              RGPD
            </label>
            <label className="dark:text-white text-[32px] font-bold uppercase">
              PCA / PRA
            </label>
            <label className="dark:text-white text-[32px] font-bold uppercase ">
              {t("parfeu")}
            </label>
          </div>
          <div>
            <p className="leading-[1.8rem]">{t("description")}</p>
          </div>
          <div className="bg-[url('/images/pexels-fauxels-3183197-768x512.jpg.webp')] bg-no-repeat bg-cover bg-center h-[40vh] rounded-[16px]" />
          <div className="bg-[url('/images/pexels-burst-374074-r4vkxxp465ugxrl96hm7ejrhtep1450egrhout2npw.jpg.webp')] bg-no-repeat bg-cover bg-center h-[40vh] rounded-[16px]" />
        </div>
      </div>
    </section>
  );
};

export default News;
