import { REGEX } from 'constants/common'
import dayjs from 'dayjs'
import { DateTimeFormat } from 'models/Common'

export const isProduction = () => {
  return process.env.NODE_ENV == 'production'
}

export const isNotProduction = () => {
  return process.env.NODE_ENV !== 'production'
}

export const timeToNumericString = (time: string) => time.replace(':', '')

export const setDataToLocalStorage = (key: string, value: any) => {
  console.log(value)

  if (typeof window !== 'undefined' && value) {
    const newValue = JSON.stringify(value)
    localStorage.setItem(key, newValue)
  }
  return
}

export const getDataFromLocalStorage = (key: string) => {
  if (typeof window !== 'undefined') {
    const value = localStorage.getItem(key)
    return value ? JSON.parse(value) : undefined
  }
}

export const clearAllDataFromLocalStorage = () => {
  localStorage.clear()
}

export const removeFalsyProperty = (query: { [key: string]: any }) => {
  const returnQuery: Record<string, string> = {}
  Object.keys(query).forEach((key) => {
    if (query[key] || typeof query[key] === 'number') returnQuery[key] = query[key]
  })
  return returnQuery
}

export const generateUEID = () => {
  const first = (Math.random() * 46656) | 0
  const second = (Math.random() * 46656) | 0

  return first + second
}

export const formatDate = (value?: number | string, format: DateTimeFormat = 'YYYY/MM/DD HH:mm') => {
  if (value && value.toString().match(REGEX.TIMESTAMP)) {
    const date = new Date(+value)
    return dayjs(date.toString()).format(format)
  }
  return '-'
}
