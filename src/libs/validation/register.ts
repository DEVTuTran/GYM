import * as yup from 'yup'
import { MESSAGES } from '../../constants/messages'
import { yupTestBusinessDay, yupTestPaymentMethod } from './yup-test'

export const REGEX = {
  LAT_LNG: /@(-?\d+\.\d+),(-?\d+\.\d+)/,
  // eslint-disable-next-line no-useless-escape
  URL: /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g,
  TIMESTAMP: /^\d{13}$/,
  DOMAIN: /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/,
  PHONE_NUMBER: /^[0-9]{10,11}$/,
  PASSWORD: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^*()_+-=~`{}|””'<>?]).{8,20}$/,
  POSTCODE: /^\d{7}$/,
  TIME: /^([0-1][0-9]|2[0-3]):([0-5]{0,1}[0-9])$/,
  KATAKANA: /^([ァ-ヶー ]+)$/,
  ALPHABET_AND_SPECIAL_CHARACTERS: /^[A-Z0-9 @~`!@#$%^&*()_=+\\\\';:\"\\/?>.<,-]*$/i,
  EMAIL: /^[\w\.\-\+]+@[\w\.\-]+\.[a-zA-Z]+$/
}

const registerSchema = yup.object().shape(
  {
    franchiseName: yup.string().required(MESSAGES.PM15_MEM_01),
    franchiseNameF: yup.string().required(MESSAGES.PM15_MEM_01).matches(REGEX.KATAKANA, MESSAGES.PM15_MEM_02),
    franchiseNameEn: yup
      .string()
      .required(MESSAGES.PM15_MEM_01)
      .matches(REGEX.ALPHABET_AND_SPECIAL_CHARACTERS, MESSAGES.PM15_MEM_03),
    postalCode: yup.string().required(MESSAGES.PM12_PTC_01).matches(REGEX.POSTCODE, MESSAGES.PM12_PTC_02),
    stateName: yup.string().required(MESSAGES.PM12_PRE_01).max(100, MESSAGES.PM12_PRE_02),
    address: yup.string().required(MESSAGES.PM12_ADD_01).max(100, MESSAGES.PM12_ADD_02),
    buildingName: yup.string().optional().max(100, MESSAGES.PM12_BLD_02),
    // lat: yup.number().required(MESSAGES.PM12_BLD_01),
    // lng: yup.number().required(MESSAGES.PM12_BLD_01),
    phoneNumber: yup.string().required(MESSAGES.PM14_PNB_01).matches(REGEX.PHONE_NUMBER, MESSAGES.PM14_PNB_02),
    homePage: yup
      .string()
      .transform((v) => (v === '' ? null : v))
      .nullable()
      .matches(REGEX.URL, MESSAGES.PM14_WEB_01),
    operatingHours: yup.object().shape({
      monday: yup.object().test({
        name: 'monday',
        test: yupTestBusinessDay
      }),
      tuesday: yup.object().test({
        name: 'tuesday',
        test: yupTestBusinessDay
      }),
      wednesday: yup.object().test({
        name: 'wednesday',
        test: yupTestBusinessDay
      }),
      thursday: yup.object().test({
        name: 'thursday',
        test: yupTestBusinessDay
      }),
      friday: yup.object().test({
        name: 'friday',
        test: yupTestBusinessDay
      }),
      saturday: yup.object().test({
        name: 'saturday',
        test: yupTestBusinessDay
      }),
      sunday: yup.object().test({
        name: 'sunday',
        test: yupTestBusinessDay
      })
    }),
    additionalWorkHours: yup.string().optional(),
    genre: yup.string().required(MESSAGES.PM26_GEN_01),
    categoriesId: yup
      .array()
      .of(yup.string())
      .required(MESSAGES.PM26_CAT_01)
      .min(1, MESSAGES.PM26_CAT_01)
      .max(3, MESSAGES.PM26_CAT_02),
    storeIntroduction: yup.string().required(MESSAGES.PM26_ITD_01),
    snsMessage: yup.string().optional(),
    equipmentService: yup
      .object()
      .optional()
      .shape({
        paymentMethod: yup
          .object()
          .shape({
            creditCard: yup.boolean(),
            cash: yup.boolean(),
            creditCardShopCode: yup.string().optional()
          })
          .test({
            name: 'paymentMethod',
            test: yupTestPaymentMethod
          }),
        franchiseEquipment: yup.object().optional()
      }),
    franchiseEmail: yup
      .string()
      .matches(REGEX.EMAIL, MESSAGES.AD10_EMA_01)
      .required('メールアドレスを入力してください。'),
    isRegisterHometownTax: yup.boolean(),

    isLocation: yup.boolean(),
    isCookingArea: yup.boolean(),
    isLodging: yup.boolean(),
    isAllItemsExchangedForPoints: yup.boolean(),
    location: yup
      .string()
      .when(['isLocation'], ([isLocation], schema) =>
        isLocation ? schema.required(MESSAGES.PM27_LC_01) : schema.optional()
      ),
    processInCity: yup
      .string()
      .when(['isLocation'], ([isLocation], schema) =>
        isLocation ? schema.required(MESSAGES.PM27_LC_01) : schema.optional()
      ),
    cookingArea: yup
      .string()
      .when(['isCookingArea'], ([isCookingArea], schema) =>
        isCookingArea ? schema.required(MESSAGES.PM27_LC_01) : schema.optional()
      ),
    lodging: yup
      .string()
      .when(['isLodging'], ([isLodging], schema) =>
        isLodging ? schema.required(MESSAGES.PM27_LC_01) : schema.optional()
      ),
    allItemsExchangedForPoints: yup
      .string()
      .when(['isAllItemsExchangedForPoints'], ([isAllItemsExchangedForPoints], schema) =>
        isAllItemsExchangedForPoints ? schema.required(MESSAGES.PM27_LC_01) : schema.optional()
      ),
    allProductsLocallyProduced: yup.boolean()
  },
  [['location', 'processInCity']]
)

export type RegisterSchemaType = yup.InferType<typeof registerSchema>
export default registerSchema
