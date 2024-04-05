import { APP_DEV, APP_PROD } from 'configs'
import i18n from 'i18next'
import i18nBackend from 'i18next-http-backend'
import { initReactI18next } from 'react-i18next'
import { getDataFromLocalStorage, isNotProduction } from 'utils/common'

const getCurrentHost = !isNotProduction ? APP_PROD : APP_DEV
const lang = getDataFromLocalStorage('lang') || 'en'

// eslint-disable-next-line import/no-named-as-default-member
i18n
  .use(i18nBackend)
  .use(initReactI18next)
  .init({
    fallbackLng: lang,
    lng: lang,
    interpolation: {
      escapeValue: false
    },
    backend: {
      loadPath: `${getCurrentHost}/i18n/{{lng}}.json`
    }
  })

export default i18n
