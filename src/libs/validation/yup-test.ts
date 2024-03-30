import * as yup from 'yup'

import { timeToNumericString } from 'utils/common'
import { EShopCode } from 'enums'
import { MESSAGES } from 'constants/messages'
import { IBusinessDay, IPaymentMethod } from 'models/Store'
import { AnyObject } from 'yup'

export const yupTestBusinessDay: yup.TestFunction<IBusinessDay, AnyObject> = (value: IBusinessDay, ctx) => {
  if (!value) return false

  if (value.holiday) {
    return true
  } else {
    if (!value.time?.length) {
      return ctx.createError({ message: MESSAGES.CM_TIM_001 })
    }

    const firstShift = value.time?.[0]
    const secondShift = value.time?.[1]
    if (!firstShift || !firstShift.openAt || !firstShift.closeAt) {
      return ctx.createError({ message: MESSAGES.CM_TIM_001 })
    }

    // if (Number(timeToNumericString(firstShift.openAt)) >= Number(timeToNumericString(firstShift.closeAt))) {
    //   return ctx.createError({ message: MESSAGES.CM_TIM_002 })
    // }

    if (secondShift) {
      if (!secondShift.openAt || !secondShift.closeAt) {
        return ctx.createError({ message: MESSAGES.CM_TIM_001 })
      }

      // if (Number(timeToNumericString(firstShift.closeAt)) >= Number(timeToNumericString(secondShift.openAt))) {
      //   return ctx.createError({ message: MESSAGES.CM_TIM_003 })
      // }
      //
      // if (Number(timeToNumericString(firstShift.openAt)) >= Number(timeToNumericString(firstShift.closeAt))) {
      //   return ctx.createError({ message: MESSAGES.CM_TIM_003 })
      // }
    }
  }
  return true
}

export const yupTestPaymentMethod: yup.TestFunction<IPaymentMethod, AnyObject> = (value, ctx) => {
  if (!value) return false

  const errors: Partial<Record<EShopCode, string>> = {}

  // if (value.creditCard && !value.creditCardShopCode) {
  //   errors.creditCardShopCode = MESSAGES.CM_SPC_001
  // }

  if (value.auPay && !value.auPayShopCode) {
    errors.auPayShopCode = MESSAGES.CM_SPC_001
  }
  if (value.rakutenPay && !value.rakutenPayShopCode) {
    errors.rakutenPayShopCode = MESSAGES.CM_SPC_001
  }
  if (value.dPay && !value.dPayShopCode) {
    errors.dPayShopCode = MESSAGES.CM_SPC_001
  }

  if (Object.values(errors).some((message) => !!message)) {
    return ctx.createError({
      message: () => errors
    })
  }

  return true
}
export const yupTestBusinessHours: yup.TestFunction<AnyObject, AnyObject> = (value, ctx) => {
  const data = value
  if (!data) return false

  const errors: Partial<Record<string, string>> = {}

  Object.keys(data).forEach((key) => {
    if (data[key].holiday) {
      return true
    } else {
      if (!data[key].time?.length) {
        errors[key] = MESSAGES.CM_TIM_001
      }

      const firstShift = data[key].time?.[0]
      const secondShift = data[key].time?.[1]

      if (!firstShift || !firstShift.openAt || !firstShift.closeAt) {
        errors[key] = MESSAGES.CM_TIM_001
        return
      }

      if (Number(timeToNumericString(firstShift.openAt)) >= Number(timeToNumericString(firstShift.closeAt))) {
        errors[key] = MESSAGES.CM_TIM_002
      }

      if (secondShift) {
        if (!secondShift.openAt || !secondShift.closeAt) {
          errors[key] = MESSAGES.CM_TIM_001
          return
        }

        if (Number(timeToNumericString(firstShift.closeAt)) >= Number(timeToNumericString(secondShift.openAt))) {
          errors[key] = MESSAGES.CM_TIM_003
        }

        if (Number(timeToNumericString(firstShift.openAt)) >= Number(timeToNumericString(firstShift.closeAt))) {
          errors[key] = MESSAGES.CM_TIM_003
        }
      }
    }
  })

  if (Object.values(errors).some((message) => !!message)) {
    return ctx.createError({
      message: () => errors
    })
  }

  return true
}
