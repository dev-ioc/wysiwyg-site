import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "fr"],

  // Used when no locale matches
  defaultLocale: "fr",
});
