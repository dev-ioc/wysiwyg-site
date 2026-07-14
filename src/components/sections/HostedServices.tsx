"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useEffect, useState } from "react";
import { useTranslations } from "next-intl";

type Service = {
  label: string;
  description: string;
  icon: string;
  href: string;
};
const HostedServices = () => {
  const t = useTranslations("HostedServices");
  const services = t.raw("services") as Service[];
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      breakpoints: {
        "(max-width: 768px)": {
          slidesToScroll: 1,
        },
        "(min-width: 769px)": {
          slidesToScroll: 2,
        },
      },
    },
    [
      Autoplay({
        delay: 3000,
        stopOnInteraction: false,
        stopOnMouseEnter: false,
      }),
    ],
  );

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi],
  );

  return (
    <div className="w-full py-16 bg-[#D9D9D9] lg:h-[580px] h-auto dark:text-white  dark:bg-slate-900 border-b border-t border-light">
      <div className="container mx-auto space-y-16 px-16">
        <h1 className="text-center text-black font-bold font-merriweather text-[38px] dark:text-white">
          {t("title")}
        </h1>

        <div className="relative ">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {services.map((service) => (
                <div
                  key={service.label}
                  className="
                    flex-[0_0_100%]
                    md:flex-[0_0_50%]
                    min-w-0
                    px-3
                  "
                >
                  <div className="flex lg:flex-row flex-col bg-white w-full min-h-[244px] px-6 gap-8 py-6 shadow-sm">
                    <img
                      src={service.icon}
                      alt={service.label}
                      className="h-[77px] w-[77px] object-contain flex-shrink-0"
                    />
                    <div className="flex flex-col gap-2 leading-[1.5rem] space-y-4">
                      <h3 className="text-[17px] text-[#636363] font-assistant">
                        {service.description}
                      </h3>
                      <p className="text-[17px] text-[#222222] font-assistant font-bold">
                        {service.label}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={scrollPrev}
            className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none "
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 hover:bg-white/50 transition-colors shadow-lg">
              <svg
                className="w-5 h-5 text-grey-100 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m15 19-7-7 7-7"
                  className="dark:bg-slate-900 dark:text-black"
                />
              </svg>
              <span className="sr-only">Précédent</span>
            </span>
          </button>

          <button
            onClick={scrollNext}
            className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 hover:bg-white/50 transition-colors shadow-lg">
              <svg
                className="w-5 h-5 text-grey-100 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m9 5 7 7-7 7"
                  className="dark:bg-slate-900 dark:text-black"
                />
              </svg>
              <span className="sr-only">Suivant</span>
            </span>
          </button>
        </div>
        <div className="flex justify-center gap-3 mt-6 ">
          {services.map((_, index) => {
            const isMobile =
              typeof window !== "undefined" && window.innerWidth < 768;
            const slidesPerView = isMobile ? 1 : 2;
            const totalPages = Math.ceil(services.length / slidesPerView);
            const currentPage = Math.floor(selectedIndex / slidesPerView);
            if (index % slidesPerView !== 0) return null;

            const pageIndex = Math.floor(index / slidesPerView);
            const isActive = pageIndex === currentPage;

            return (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`
                  w-4 h-4 rounded-full transition-all duration-3000 flex items-center
                  ${
                    isActive
                      ? "bg-[#52BC71] w-8 h-8 rounded-full"
                      : "bg-white hover:bg-gray-400 mt-2"
                  }
                `}
                aria-label={`Aller à la page ${pageIndex + 1}`}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HostedServices;
