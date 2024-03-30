export enum EWeekdaysText {
  MONDAY = 'monday',
  TUESDAY = 'tuesday',
  WEDNESDAY = 'wednesday',
  THURSDAY = 'thursday',
  FRIDAY = 'friday',
  SATURDAY = 'saturday',
  SUNDAY = 'sunday'
}

export enum TypeOfOrganization {
  store = '一般',
  charity = '寄付団体'
}

export enum FranchiseStatus {
  published = '公開',
  pending = '差し戻し',
  draft = '未申請'
}

export enum EFranchiseStatus {
  APPLIED = 'applied',
  APPLYING = 'applying'
}

export enum FranchiseRule {
  manager = '管理者',
  staff = '一般'
}

export enum EPaymentMethod {
  CASH = 'cash',
  CREDIT_CARD = 'creditCard',
  AU_PAY = 'auPay',
  RAKUTEN_PAY = 'rakutenPay',
  D_PAY = 'dPay',
  REBATE_POINT = 'haveHometownTaxDonationPoints'
}

export enum EShopCode {
  CREDIT_CARD = 'creditCardShopCode',
  AU_PAY = 'auPayShopCode',
  RAKUTEN_PAY = 'rakutenPayShopCode',
  D_PAY = 'dPayShopCode'
}

export enum EFranchiseEquipment {
  FREE_WIFI = 'freeWiFi',
  KIDS_SPACE = 'kidsSpace',
  WHEELCHAIR_ACCESSIBLE_SEATS = 'wheelchairAccessibleSeats',
  DOG_SPACE = 'dogSpace'
}

export enum EFormUIState {
  VIEW_ONLY = 'view-only',
  EDITABLE = 'editable',
  LOADING = 'loading',
  DISABLED = 'disabled'
}

export enum EDay {
  '月曜日',
  '火曜日',
  '水曜日',
  '木曜日',
  '金曜日',
  '土曜日',
  '日曜日'
}
