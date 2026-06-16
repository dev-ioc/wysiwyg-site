import { CheckCircle } from "lucide-react";

const features = [
  "Sécurité",
  "Développement",
  "Services hébergés",
  "Infogérance",
];

const About = () => {
  return (
    <div className="w-full py-0 bg-[#D9D9D9] grid-cols-12 gap-4 col-span-12">
      <div className="container mx-auto flex flex-row justify-center items-center gap-20 px-12 col-span-10 col-start-2">
        <div className="pt-10">
          <img
            src="/images/logo.png"
            alt="WYSIWYG"
            className="w-[500px] h-[710px] py-10 col-span-4 col-start-2"
          />
        </div>
        <div className="flex-1 flex flex-col gap-4 col-span-6 col-start-6 space-y-4">
          <span className="text-primary text-[13px] font-bold uppercase tracking-widest">
            Bienvenue à WYSIWYG
          </span>
          <h2 className="text-4xl font-bold text-gray-800 leading-snug">
            What You See Is What You Get
          </h2>
          <p className="text-gray-600 text-[15px] leading-relaxed">
            Ce nom est basé sur un concept basique de qualité totale. Chaque
            entreprise doit avoir une vision de ce qu&apos;elle veut être.
            <br />
            Donner à nos clients et à nous-mêmes les moyens de gérer et
            d&apos;améliorer leurs activités avec succès grâce à des solutions
            informatiques innovantes.
          </p>

          <p className="text-gray-600 text-[15px] leading-relaxed">
            Wysiwyg s&apos;engage à traiter les métiers de ses clients comme
            s&apos;il s&apos;agissait des siens.
          </p>
          <ul className="flex flex-col gap-2 mt-2">
            {features.map((feature) => (
              <li
                key={feature}
                className="flex items-center gap-2 text-gray-700 text-[15px]"
              >
                <CheckCircle size={18} className="text-primary flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <a
              href="/a-propos"
              className="inline-block bg-primary text-white font-bold px-8 py-3 rounded-full hover:bg-green-600 transition-colors uppercase tracking-wide"
            >
              Découvrir
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
