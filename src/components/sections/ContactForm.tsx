"use client";
import { useState } from "react";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);

    const formData = new FormData(e.currentTarget);

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.get("name"),
        phone: formData.get("phone"),
        email: formData.get("email"),
        subject: formData.get("subject"),
        message: formData.get("message"),
      }),
    });

    const data = await response.json();

    alert(data.message);

    setLoading(false);
  };

  return (
    <div className="w-full bg-[url('/images/bg-contact.png')] bg-no-repeat bg-cover bg-center px-4 py-12 lg:h-[417px]">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div className="text-white space-y-10 lg:-mt-20">
          <h1 className="text-2xl md:text-3xl lg:text-[32px] font-bold font-merriweather leading-tight">
            Avez-vous des questions ?
          </h1>
          <h1 className="text-2xl md:text-3xl lg:text-[32px] font-bold font-merriweather leading-tight">
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
        <form onSubmit={handleSubmit}>
          <div
            className="
        bg-white rounded-lg shadow-xl p-6
        w-full lg:max-w-[400px]
        mx-auto
        lg:mx-62
        lg:justify-self-end
        mt-8 lg:-mt-24
        lg:h-[500px]
        lg:space-y-8
      "
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
              <input
                name="name"
                type="text"
                placeholder="Nom"
                className="border-b border-grey px-3 py-2 text-sm focus:outline-none w-full"
              />
              <input
                name="phone"
                type="tel"
                placeholder="Téléphone"
                className="border-b border-grey px-3 py-2 text-sm focus:outline-none w-full"
              />
            </div>
            <input
              name="email"
              type="email"
              placeholder="Adresse e-mail"
              className="border-b border-grey px-3 py-2 text-sm focus:outline-none w-full mb-3"
            />

            <input
              name="subject"
              type="text"
              placeholder="Objet"
              className="border-b border-grey px-3 py-2 text-sm focus:outline-none w-full mb-3"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
              <input
                name="date"
                type="date"
                className="border-b border-grey px-3 py-2 text-sm focus:outline-none w-full"
              />
              <input
                name="time"
                type="time"
                className="border-b border-grey px-3 py-2 text-sm focus:outline-none w-full"
              />
            </div>

            <textarea
              name="message"
              placeholder="Message"
              rows={3}
              className="border-b border-grey px-3 py-2 text-sm focus:outline-none w-full mb-4 resize-none"
            />
            <button
              type="submit"
              className="bg-[#54BE73] text-white font-bold px-6 py-2 rounded-full hover:bg-green-700 transition-colors text-sm font-assistant"
              disabled={loading}
            >
              {loading ? "Envoi..." : "Envoyer"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default ContactForm;
