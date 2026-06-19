"use client";
import { contactSchema } from "@/lib/contactSchema";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string[]>>({});
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;

    try {
      setLoading(true);

      const formData = new FormData(form);

      const rawData = {
        name: formData.get("name"),
        phone: formData.get("phone"),
        email: formData.get("email"),
        subject: formData.get("subject"),
        message: formData.get("message"),
      };

      const result = contactSchema.safeParse(rawData);

      setErrors({});

      if (!result.success) {
        const fieldErrors = result.error.flatten().fieldErrors;

        setErrors(fieldErrors);

        toast.error("Veuillez corriger les champs");
        return;
      }

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(result.data),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Erreur lors de l'envoi");
      }

      toast.success(data.message);

      form.reset();
    } catch (error: any) {
      console.error(error);
      toast.error(error.message || "Erreur lors de l'envoi");
    } finally {
      setLoading(false);
    }
  };
  const clearError = (field: string) => {
    setErrors((prev) => {
      const newErrors = { ...prev };
      delete newErrors[field];
      return newErrors;
    });
  };
  return (
    <div className="w-full bg-[url('/images/bg-contact.png')] bg-no-repeat bg-cover bg-center px-4 py-12 lg:h-[417px]">
      <Toaster position="top-right" reverseOrder={false} />
      {loading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="bg-white px-6 py-5 rounded-lg shadow-lg flex items-center gap-3">
            <div className="w-6 h-6 border-4 border-gray-200 border-t-green-600 rounded-full animate-spin"></div>
            <span className="text-sm font-medium text-gray-700">
              Envoi du message...
            </span>
          </div>
        </div>
      )}
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center lg:px-16">
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
            className={`bg-white rounded-lg shadow-xl p-6
        w-full lg:max-w-[400px]
        mx-auto
        lg:mx-62
        lg:justify-self-end
        mt-8 lg:-mt-24
        lg:h-[520px]
        ${errors.name || errors.phone || errors.email || errors.subject || errors.message ? "lg:space-y-6" : "lg:space-y-8"} `}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
              <div>
                <input
                  onChange={() => clearError("name")}
                  name="name"
                  type="text"
                  placeholder="Nom"
                  className="border-b border-grey px-3 py-2 text-sm focus:outline-none w-full"
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1">{errors.name[0]}</p>
                )}
              </div>
              <div>
                <input
                  onChange={() => clearError("phone")}
                  name="phone"
                  type="text"
                  placeholder="Téléphone"
                  className="border-b border-grey px-3 py-2 text-sm focus:outline-none w-full"
                />
                {errors.phone && (
                  <p className="text-red-500 text-xs mt-1">{errors.phone[0]}</p>
                )}
              </div>
            </div>
            <div>
              <input
                onChange={() => clearError("email")}
                name="email"
                type="email"
                placeholder="Adresse e-mail"
                className="border-b border-grey px-3 py-2 text-sm focus:outline-none w-full mb-3"
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email[0]}</p>
              )}
            </div>
            <div>
              <input
                onChange={() => clearError("subject")}
                name="subject"
                type="text"
                placeholder="Objet"
                className="border-b border-grey px-3 py-2 text-sm focus:outline-none w-full mb-3"
              />
              {errors.subject && (
                <p className="text-red-500 text-xs mt-1">{errors.subject[0]}</p>
              )}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
              <input
                name="date"
                type="date"
                className={`border-b border-grey px-3 py-2 text-sm focus:outline-none w-full`}
              />
              <input
                name="time"
                type="time"
                className={`border-b  border-grey px-3 py-2 text-sm focus:outline-none w-full`}
              />
            </div>
            <div>
              <textarea
                onChange={() => clearError("message")}
                name="message"
                placeholder="Message"
                rows={2}
                className="border-b border-grey px-3 py-2 text-sm focus:outline-none w-full resize-none"
              />
              {errors.message && (
                <p className="text-red-500 text-xs">{errors.message[0]}</p>
              )}
            </div>
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
