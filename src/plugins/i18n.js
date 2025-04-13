import { createI18n } from 'vue-i18n'
import localesEN from '@/locales/en.json'
import localesUA from '@/locales/ua.json'


const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: import.meta.env.VITE_APP_I18N_LOCALE || 'en',
  fallbackLocale: import.meta.env.VITE_APP_I18N_FALLBACK_LOCALE || 'en',

  messages: {
    en: localesEN,
    ua: localesUA,
  },
})


export default i18n
