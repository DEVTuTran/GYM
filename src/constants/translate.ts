import { EFranchiseEquipment, EPaymentMethod, EWeekdaysText } from 'enums'

export const WEEKDAYS_JP: Record<EWeekdaysText, string> = {
  [EWeekdaysText.MONDAY]: '月曜日',
  [EWeekdaysText.TUESDAY]: '火曜日',
  [EWeekdaysText.WEDNESDAY]: '水曜日',
  [EWeekdaysText.THURSDAY]: '木曜日',
  [EWeekdaysText.FRIDAY]: '金曜日',
  [EWeekdaysText.SATURDAY]: '土曜日',
  [EWeekdaysText.SUNDAY]: '日曜日'
}

export const EQUIPMENT_JP: Record<EFranchiseEquipment, string> = {
  [EFranchiseEquipment.FREE_WIFI]: 'FreeWi-Fi',
  [EFranchiseEquipment.WHEELCHAIR_ACCESSIBLE_SEATS]: '車椅子利用',
  [EFranchiseEquipment.KIDS_SPACE]: '小さい子供同席',
  [EFranchiseEquipment.DOG_SPACE]: '犬の同伴'
}

export const PAYMENT_METHOD_JP: Record<EPaymentMethod, string> = {
  [EPaymentMethod.CASH]: '現金',
  [EPaymentMethod.CREDIT_CARD]: 'クレジットカード',
  [EPaymentMethod.AU_PAY]: 'auPay',
  [EPaymentMethod.RAKUTEN_PAY]: '楽天Pay',
  [EPaymentMethod.D_PAY]: 'd払い',
  [EPaymentMethod.REBATE_POINT]: 'ふるさと納税返礼ポイント'
}
