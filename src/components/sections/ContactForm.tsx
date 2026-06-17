const ContactForm = () => {
  return (
    <div className="w-full bg-[url('/images/bg-contact.png')] bg-no-repeat bg-cover bg-center h-[417px]  px-4 mb-3">
      <div className="container mx-auto py-8 space-y-8 grid grid-cols-2 ">
        <div className="text-white grid grid-cols-1  gap-4">
          <h1>Avez-vous des questions ?</h1>
          <h2>Contactez-nous</h2>
          <p>
            L’entreprise propose également des prestations de formation et de
            conseil dans les domaines de la gestion de production, des
            Technologie de l’Information et de la Communication, et du
            management de la qualité.
          </p>
          <div className="mt-4">
            <a
              href="/a-propos"
              className="inline-block bg-[#FFFFFF] text-black font-bold px-8 py-3 rounded-full hover:bg-gray-600 transition-colors uppercase tracking-wide"
            >
              Prendre rendez-vous
            </a>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};
export default ContactForm;
