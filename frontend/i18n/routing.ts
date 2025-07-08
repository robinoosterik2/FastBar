import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ["en", "nl"],

  // Used when no locale matches
  defaultLocale: "nl",

  localePrefix: "always",
  pathnames: {
    "/": "/",
    "/about": {
      en: "/about",
      nl: "/over-ons",
    },
    "/venues": {
      en: "/venues",
      nl: "/klanten",
    },
    "/features": {
      en: "/features",
      nl: "/oplossingen",
    },
    "/blog": {
      en: "/blog",
      nl: "/blog",
    },
    "/blog/:slug": {
      en: "/blog/:slug",
      nl: "/blog/:slug",
    },
    "/login": {
      en: "/login",
      nl: "/login",
    },
    "/register": {
      en: "/register",
      nl: "/register",
    },
    "/team": {
      en: "/team",
      nl: "/team",
    },
  },
});
