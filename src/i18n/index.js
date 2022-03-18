import i18n from "sveltekit-i18n" // https://github.com/jarda-svoboda/sveltekit-i18n

export const config = {
  loaders: [
    {
      locale: "en",
      key: "general",
      loader: async () => (await import("@/i18n/en/general.json")).default
    },
    {
      locale: "de",
      key: "general",
      loader: async () => (await import("@/i18n/de/general.json")).default
    }
  ]
}

export const { t, locale, locales, loading, loadTranslations } = new i18n(config)
