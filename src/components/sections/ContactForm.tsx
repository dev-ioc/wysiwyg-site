"use client";
import { contactSchema } from "@/lib/contactSchema";
import { useTranslations } from "next-intl";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const ContactForm = () => {
  const t = useTranslations("Contact");
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
        service: formData.get("service"),
      };

      const schema = contactSchema(t);
      const result = schema.safeParse(rawData);

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
    <div className="w-full bg-[url('/images/bg-contact.png')] bg-no-repeat bg-cover bg-center px-4 py-12 lg:h-auto ">
      <Toaster position="top-right" reverseOrder={false} />
      {loading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="bg-white px-6 py-5 rounded-lg shadow-lg flex items-center gap-3">
            <div className="w-6 h-6 border-4 border-gray-200 border-t-green-600 rounded-full animate-spin"></div>
            <span className="text-sm font-medium text-gray-700">
              {t("sending")}
            </span>
          </div>
        </div>
      )}
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-28 items-center lg:px-10 ">
        <div className="text-white space-y-10 lg:-mt-20">
          <h1 className="text-2xl md:text-3xl lg:text-[32px] font-bold font-merriweather leading-tight">
            {t("title1")}
          </h1>
          <h1 className="text-2xl md:text-3xl lg:text-[32px] font-bold font-merriweather leading-tight">
            {t("title2")}
          </h1>
          <p className="text-sm md:text-base text-white font-merriweather max-w-full lg:max-w-[609px]">
            {t("description")}
          </p>

          <div>
            <a
              href="/a-propos"
              className="inline-block bg-white text-black font-bold px-6 py-2 rounded-full hover:bg-gray-200 transition-colors text-sm"
            >
              {t("rdv")}
            </a>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div
            className={`bg-white rounded-lg shadow-xl p-6
    w-full 
    mx-auto lg:mx-62 lg:justify-self-end
    mt-8 
    
    ${errors.name || errors.phone || errors.email || errors.subject || errors.message ? "lg:space-y-5" : "lg:space-y-8"}  `}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
              <div className="relative z-0 w-full group">
                <input
                  onChange={() => clearError("name")}
                  type="text"
                  name="name"
                  id="floating_name"
                  placeholder=" "
                  className={`block py-2.5 px-0 w-full text-sm text-dark bg-transparent border-0 border-b-2 ${
                    errors.name ? "border-red-500" : "border-grey"
                  } appearance-none focus:outline-none focus:ring-0 focus:border-[#54BE73] peer`}
                />
                <label
                  htmlFor="floating_name"
                  className="absolute text-sm text-gray duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0]
            peer-focus:text-[#54BE73]
            peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0
            peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  {t("name")}
                </label>
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1">{errors.name[0]}</p>
                )}
              </div>
              <div className="relative z-0 w-full group">
                <input
                  onChange={() => clearError("phone")}
                  type="text"
                  name="phone"
                  id="floating_phone"
                  placeholder=" "
                  className={`block py-2.5 px-0 w-full text-sm text-dark bg-transparent border-0 border-b-2 ${
                    errors.phone ? "border-red-500" : "border-grey"
                  } appearance-none focus:outline-none focus:ring-0 focus:border-[#54BE73] peer`}
                />
                <label
                  htmlFor="floating_phone"
                  className="absolute text-sm text-gray duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0]
            peer-focus:text-[#54BE73]
            peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0
            peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  {t("phone")}
                </label>
                {errors.phone && (
                  <p className="text-red-500 text-xs mt-1">{errors.phone[0]}</p>
                )}
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
              <div className="relative z-0 w-full mb-1 group">
                <input
                  onChange={() => clearError("email")}
                  type="email"
                  name="email"
                  id="floating_email"
                  placeholder=" "
                  className={`block py-2.5 px-0 w-full text-sm text-dark bg-transparent border-0 border-b-2 ${
                    errors.email ? "border-red-500" : "border-grey"
                  } appearance-none focus:outline-none focus:ring-0 focus:border-[#54BE73] peer`}
                />
                <label
                  htmlFor="floating_email"
                  className="absolute text-sm text-gray duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0]
          peer-focus:text-[#54BE73]
          peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0
          peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  {t("email")}
                </label>
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email[0]}</p>
                )}
              </div>
              <div className="relative z-0 w-full mb-1 group">
                <select
                  onChange={() => clearError("service")}
                  name="service"
                  id="floating_service"
                  defaultValue=""
                  className={`block py-2.5 px-0 w-full text-sm text-dark bg-transparent border-0 border-b-2 ${
                    errors.service ? "border-red-500" : "border-grey"
                  } focus:outline-none focus:ring-0 focus:border-[#54BE73] peer`}
                >
                  <option value="">{t("serviceSelect")}</option>
                  <option value="Automatisation IA">{t("Ai")}</option>
                  <option value="ERP Axelor">{t("Axelor")}</option>
                  <option value="Développement d'application">
                    {t("development")}
                  </option>
                  <option value="Visual planning">{t("visualPlanning")}</option>
                  <option value="Messagerie BlueMind">{t("blueMind")}</option>
                  <option value="Infogérance">{t("managedITServices")}</option>
                </select>

                {/* <label
                  htmlFor="floating_service"
                  className="absolute text-sm text-gray duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0]
      peer-focus:text-[#54BE73]"
                >
                  {t("serviceSelect")}
                </label> */}

                {errors.service && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.service[0]}
                  </p>
                )}
              </div>
            </div>

            <div className="relative z-0 w-full mb-1 group">
              <input
                onChange={() => clearError("subject")}
                type="text"
                name="subject"
                id="floating_subject"
                placeholder=" "
                className={`block py-2.5 px-0 w-full text-sm text-dark bg-transparent border-0 border-b-2 ${
                  errors.subject ? "border-red-500" : "border-grey"
                } appearance-none focus:outline-none focus:ring-0 focus:border-[#54BE73] peer`}
              />
              <label
                htmlFor="floating_subject"
                className="absolute text-sm text-gray duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0]
          peer-focus:text-[#54BE73]
          peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0
          peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                {t("subject")}
              </label>
              {errors.subject && (
                <p className="text-red-500 text-xs mt-1">{errors.subject[0]}</p>
              )}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-1">
              <div className="relative z-0 w-full group">
                <input
                  name="date"
                  type="date"
                  className="block py-2.5 px-0 w-full text-sm text-dark bg-transparent border-0 border-b-2 border-grey appearance-none focus:outline-none focus:ring-0 focus:border-[#54BE73] peer"
                />
                <label
                  className="absolute text-sm text-gray duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0]
          peer-focus:text-[#54BE73]
          peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0
          peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  {t("date")}
                </label>
              </div>
              <div className="relative z-0 w-full group">
                <input
                  name="time"
                  type="time"
                  className="block py-2.5 px-0 w-full text-sm text-dark bg-transparent border-0 border-b-2 border-grey appearance-none focus:outline-none focus:ring-0 focus:border-[#54BE73] peer"
                />
                <label
                  className="absolute text-sm text-gray duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0]
          peer-focus:text-[#54BE73]
          peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0
          peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  {t("time")}
                </label>
              </div>
            </div>
            <div className="relative z-0 w-full mb-1 group">
              <textarea
                onChange={() => clearError("message")}
                name="message"
                id="floating_message"
                placeholder=" "
                rows={3}
                className={`block py-2.5 px-0 w-full text-sm text-dark bg-transparent border-0 border-b-2 ${
                  errors.message ? "border-red-500" : "border-grey"
                } appearance-none focus:outline-none focus:ring-0 focus:border-[#54BE73] peer resize-none`}
              />
              <label
                htmlFor="floating_message"
                className="absolute text-sm text-gray duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0]
          peer-focus:text-[#54BE73]
          peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0
          peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Message
              </label>
              {errors.message && (
                <p className="text-red-500 text-xs">{errors.message[0]}</p>
              )}
            </div>

            <button
              type="submit"
              className="bg-[#54BE73] text-white font-bold px-6 py-2 rounded-full hover:bg-green-700 transition-colors text-sm font-assistant"
              disabled={loading}
            >
              {loading ? t("sending") : t("send")}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default ContactForm;
