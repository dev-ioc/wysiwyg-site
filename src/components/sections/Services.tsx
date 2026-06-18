"use client";
import { useInView } from "@/hooks/useInView";

const Services = () => {
  const { ref, isVisible } = useInView(0.2);
  return (
    <div className="px-8 h-auto space-y-0 mb-0 bg-secondary">
      <div
        ref={ref}
        className={`container mx-auto py-8 transition-all ${
          isVisible
            ? "animate-zoomIn opacity-100 scale-100"
            : "opacity-0 scale-90"
        }`}
      >
        <div className="text-center text-dark font-bold text-[38px] font-merriweather ">
          Nos Services
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="w-full flex flex-row gap-8">
            <img
              src="/images/gestion-comptabilty.png"
              alt="gestion-comptabilty"
              className="w-[62px] h-[62px] rounded-full opacity-100"
            />
            <div className="flex flex-col gap-2">
              <h1 className="text-[#3699BE] font-inter font-bold text-[22px]">
                Gestion & Comptabilité
              </h1>
              <p className="text-[#A8A8A8] text-[18px] font-assistant font-bold">
                Un apport significatif à votre performance financière grâce à
                une information fiable et accessible, un reporting pertinent et
                des analyses approfondies permettant d'améliorer la prise de
                décision et l'efficacité des processus comptables.
              </p>
            </div>
          </div>
          <div className="w-full flex flex-row gap-8">
            <img
              src="/images/product-management.png"
              alt="gestion-comptabilty"
              className="w-[62px] h-[62px] rounded-full opacity-100"
            />
            <div className="flex flex-col gap-2">
              <h1 className="text-[#3699BE] font-inter font-bold text-[22px]">
                Production Management
              </h1>
              <p className="text-[#A8A8A8] text-[18px] font-assistant font-bold">
                La mondialisation et l’évolution du marché ont renforcé les
                exigences de respect des délais, de rapidité de réaction et de
                rentabilité dans le processus de fabrication.
              </p>
            </div>
          </div>
          <div className="w-full flex flex-row gap-8">
            <img
              src="/images/analyse-predictive.png"
              alt="gestion-comptabilty"
              className="w-[62px] h-[62px] rounded-full opacity-100"
            />
            <div className="flex flex-col gap-2">
              <h1 className="text-[#3699BE] font-inter font-bold text-[22px]">
                Production Management
              </h1>
              <p className="text-[#A8A8A8] text-[18px] font-assistant font-bold">
                La mondialisation et l’évolution du marché ont renforcé les
                exigences de respect des délais, de rapidité de réaction et de
                rentabilité dans le processus de fabrication.
              </p>
            </div>
          </div>
          <div className="w-full flex flex-row gap-8">
            <img
              src="/images/iso-management-system.png"
              alt="gestion-comptabilty"
              className="w-[62px] h-[62px] rounded-full opacity-100"
            />
            <div className="flex flex-col gap-2">
              <h1 className="text-[#3699BE] font-inter font-bold text-[22px]">
                ISO Management Systems
              </h1>
              <p className="text-[#A8A8A8] text-[18px] font-assistant font-bold">
                Le management de la qualité, ou gestion de la qualité est une
                discipline du management regroupant l’ensemble des concepts et
                méthodes visant à satisfaire les clients de l’entreprise.
              </p>
            </div>
          </div>
          <div className="w-full flex flex-row gap-8">
            <img
              src="/images/architect-erp-bi.png"
              alt="gestion-comptabilty"
              className="w-[62px] h-[62px] rounded-full opacity-100"
            />
            <div className="flex flex-col gap-2">
              <h1 className="text-[#3699BE] font-inter font-bold text-[22px]">
                Architecte ERP et BPM
              </h1>
              <p className="text-[#A8A8A8] text-[18px] font-assistant font-bold">
                La stratégie de WYSIWYG permet aux PME d’optimiser et d’intégrer
                les solutions CFAO et ERP grâce à une solution globale et
                intégrée.
              </p>
            </div>
          </div>
          <div className="w-full flex flex-row gap-8">
            <img
              src="/images/supply-chain-management.png"
              alt="gestion-comptabilty"
              className="w-[62px] h-[62px] rounded-full opacity-100"
            />
            <div className="flex flex-col gap-2">
              <h1 className="text-[#3699BE] font-inter font-bold text-[22px]">
                Supply chain Management
              </h1>
              <p className="text-[#A8A8A8] text-[18px] font-assistant font-bold">
                Aujourd’hui, les chaînes d’approvisionnement sont plus
                interconnectées, complexes et mondiales pour produire et livrer
                aux clients.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Services;
