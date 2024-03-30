/* eslint-disable @typescript-eslint/no-empty-interface */
import { EFranchiseEquipment, EFranchiseStatus, EPaymentMethod, EShopCode, EWeekdaysText } from 'enums'

export interface CategoriesList {
  id: number
  title: string
  image: string
}

export interface IBusinessDay {
  holiday?: boolean
  time?: IBusinessTime[]
}

export interface IFranchiseEquipment extends Partial<Record<EFranchiseEquipment, boolean>> {}

export interface IPaymentMethod extends Partial<Record<EPaymentMethod, boolean>>, Partial<Record<EShopCode, string>> {}

export interface IOperatingHours extends Record<EWeekdaysText, IBusinessDay> {}

export interface OperatingHours {
  monday: IDay
  tuesday: IDay
  wednesday: IDay
  thursday: IDay
  friday: IDay
  saturday: IDay
  sunday: IDay
}

export interface IDay {
  holiday: boolean
  time: ContactHour[]
}

export interface ContactHour {
  openAt: string
  closeAt: string
}

export interface IStoreUpdateReq {
  /** @deprecated */
  isNoNeedAddress?: boolean

  id?: number
  directorName?: string
  franchiseCode?: string
  franchiseEmail?: string
  franchiseName?: string
  franchiseNameF?: string
  franchiseNameEn?: string
  franchiseNickName?: string
  franchisePhoneNumber?: string
  financialName?: string
  bankCode?: string
  branchName?: string
  branchCode?: string
  accountType?: string
  accountNumber?: number
  accountHolder?: string
  snsMessage?: string
  status?: string
  userId?: string
  genre?: string
  categoriesId?: number[]
  postalCode?: string
  stateName?: string
  address?: string
  buildingName?: string
  operatingHours?: IOperatingHours
  equipmentService?: IEquipmentService
  linkMenu?: string
  storeIntroduction?: string
  lat?: number
  lng?: number
  additionalWorkHours?: string
  phoneNumber?: string
  homePage?: string
  avatar?: string
  images?: string[]
  /** @deprecated This property is no longer used. It has been replaced by `avatar`. */
  storeMainVisual?: Array<string[]>
  /** @deprecated This property is no longer used. It has been replaced by `images`. */
  storeMenuProductImages?: Array<string[]>
}

interface IEquipmentService {
  franchiseEquipment?: IFranchiseEquipment
  paymentMethod?: IPaymentMethod
}

export interface IBusinessTime {
  closeAt?: string
  openAt?: string
}

export interface IStoreDetailRes {
  genre: string
  avatar: string
  franchiseNameF: string
  franchiseNameEn: string
  address: string
  buildingName: string
  created_at: number
  currentPointFund: number
  directorName: string
  franchiseCode: string
  franchiseEmail: string
  franchiseName: string
  franchiseNickName: string
  franchisePhoneNumber: string
  financialName: string
  bankCode: string
  branchName: string
  branchCode: string
  accountType: string
  accountNumber: number
  accountHolder: string
  haveStampRally: boolean
  homePage: string
  id: string
  images: string[]
  isAgentVerified: boolean
  isAllowedToUseTaxPoint: boolean
  isDeleted: boolean
  lat: number
  lng: number
  maxPointFund: number
  maxPointPurchasePromotion: number
  phoneNumber: string
  pointExchangeRateOfPromotion: number
  postalCode: string
  sendNotice_at: number
  snsMessage: string
  stateName: string
  status: EFranchiseStatus
  storeIntroduction: string
  storeMainVisual: string[]
  storeMenuProductImages: string[]
  typeOfOrganization: string
  updated_at: number
  usersUsePointInDay: string[]
  categoriesList: CategoriesList[]
  categoriesId: number[]
  additionalWorkHours: string
  operatingHours: IOperatingHours
  equipmentService: IEquipmentService
  isAllItemsExchangedForPoints?: boolean
  isCookingArea?: boolean
  isLocation?: boolean
  isLodging?: boolean
  isProcessInCity?: boolean
  isProcessInOdawara?: boolean
  isRawMaterialProducedInOdawara?: boolean
  isRegisterHometownTax?: boolean
  isServiceProvidedInCity?: boolean
  stripeStatus?: string
  creditCardShopCode: string
  franchiseId?: number
}

export interface IStoreBasicInfo
  extends Pick<
    IStoreUpdateReq,
    | 'franchiseName'
    | 'franchiseNameF'
    | 'franchiseNameEn'
    | 'postalCode'
    | 'stateName'
    | 'address'
    | 'buildingName'
    | 'lat'
    | 'lng'
    | 'phoneNumber'
    | 'homePage'
    | 'operatingHours'
    | 'additionalWorkHours'
  > {}

export interface IStoreIntroduction
  extends Pick<
    IStoreUpdateReq,
    | 'categoriesId'
    | 'storeIntroduction'
    | 'snsMessage'
    | 'avatar'
    | 'images'
    | 'genre'
    | 'franchiseNickName'
    | 'franchiseCode'
  > {}

export interface IStoreEquipment extends Pick<IStoreUpdateReq, 'equipmentService'> {}

export interface IStorePicInfo
  extends Pick<
    IStoreUpdateReq,
    | 'directorName'
    | 'franchisePhoneNumber'
    | 'franchiseEmail'
    | 'financialName'
    | 'bankCode'
    | 'branchName'
    | 'branchCode'
    | 'accountType'
    | 'accountNumber'
    | 'accountHolder'
  > {}

export interface ICategory {
  id: string
  label: string
  value: string
}

export interface IFranchise {
  id: string
  franchiseName: string
  franchiseNameEn: string
  franchiseNameF: string
  address: string
  postalCode: string
  stateName: string
  buildingName: string
  phoneNumber: string
  franchiseEmail: string
  homePage: string
  additionalWorkHours: string
  snsMessage: string
  storeIntroduction: string
  genre: string
  status: string
  isRegisterHometownTax: boolean
  allProductsLocallyProduced: boolean
  isLocation: boolean
  location: string
  isProcessInCity: boolean
  processInCity: string
  isCookingArea: boolean
  cookingArea: string
  isLodging: boolean
  lodging: string
  isAllItemsExchangedForPoints: boolean
  allItemsExchangedForPoints: string
  dogSpace: boolean
  freeWiFi: boolean
  wheelchairAccessibleSeats: boolean
  kidsSpace: boolean
  cash: boolean
  creditCard: boolean
  creditCardShopCode: string
  lat: string
  lng: string
  categoriesId: string
  monday: Day
  tuesday: Day
  wednesday: Day
  thursday: Day
  friday: Day
  saturday: Day
  sunday: Day
  stripeStatus: any
  createdAt: string
  updatedAt: string
}

export interface Time {
  openAt: string
  closeAt: string
}

export interface Day {
  holiday: boolean
  time: Time[] | []
}
