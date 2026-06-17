const ContactForm = () => {
  return (
    <div className="w-full bg-[url('/images/bg-contact.png')] bg-no-repeat bg-cover bg-center px-4 py-12 lg:h-[417px]">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div className="text-white space-y-4 pt-4">
          <h1 className="text-2xl md:text-3xl lg:text-[32px] font-bold font-merriweather leading-tight">
            Avez-vous des questions ?
            <br />
            Contactez-nous
          </h1>

          <p className="text-sm md:text-base text-white font-merriweather max-w-full lg:max-w-[609px]">
            L’entreprise propose également des prestations de formation et de
            conseil dans les domaines de la gestion de production, des
            Technologies de l’Information et de la Communication, et du
            management de la qualité.
          </p>

          <div>
            <a
              href="/a-propos"
              className="inline-block bg-white text-black font-bold px-6 py-2 rounded-full hover:bg-gray-200 transition-colors text-sm"
            >
              Prendre rendez-vous
            </a>
          </div>
        </div>
        <div
          className="
        bg-white rounded-lg shadow-xl p-6
        w-full lg:max-w-[400px]
        mx-auto
        lg:mx-62
        lg:justify-self-end
        mt-8 lg:-mt-28
        lg:h-[500px]
        lg:space-y-8
      "
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
            <input
              type="text"
              placeholder="Nom"
              className="border-b border-grey px-3 py-2 text-sm focus:outline-none w-full"
            />
            <input
              type="tel"
              placeholder="Téléphone"
              className="border-b border-grey px-3 py-2 text-sm focus:outline-none w-full"
            />
          </div>

          <input
            type="email"
            placeholder="Adresse e-mail"
            className="border-b border-grey px-3 py-2 text-sm focus:outline-none w-full mb-3"
          />

          <input
            type="text"
            placeholder="Objet"
            className="border-b border-grey px-3 py-2 text-sm focus:outline-none w-full mb-3"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
            <input
              type="date"
              className="border-b border-grey px-3 py-2 text-sm focus:outline-none w-full"
            />
            <input
              type="time"
              className="border-b border-grey px-3 py-2 text-sm focus:outline-none w-full"
            />
          </div>

          <textarea
            placeholder="Message"
            rows={3}
            className="border-b border-grey px-3 py-2 text-sm focus:outline-none w-full mb-4 resize-none"
          />

          <button
            type="button"
            className="bg-[#54BE73] text-white font-bold px-6 py-2 rounded-full hover:bg-green-700 transition-colors text-sm font-assistant"
          >
            Envoyer la demande
          </button>
        </div>
      </div>
    </div>
  );
};
export default ContactForm;
