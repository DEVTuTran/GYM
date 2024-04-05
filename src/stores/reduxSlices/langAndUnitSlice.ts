import { createSlice } from '@reduxjs/toolkit'
import { ELang, EUnit } from 'enums'
import { AppState } from 'stores'
import { getDataFromLocalStorage, setDataToLocalStorage } from 'utils/common'

interface ILangAndUnit {
  lang: string
  unit: string
}

const defaultLangUnit: ILangAndUnit = {
  lang: getDataFromLocalStorage('lang') || ELang.EN,
  unit: EUnit.KGM
}

const initialState: ILangAndUnit = defaultLangUnit

export const langAndUnitSlice = createSlice({
  name: 'lang and unit',
  initialState,
  reducers: {
    setLangAndUnit: (state, payloadWithType) => {
      console.log(payloadWithType.payload.lang)

      if (payloadWithType.payload) {
        setDataToLocalStorage('lang', payloadWithType.payload.lang)
        state.lang = payloadWithType.payload.lang
        state.unit = payloadWithType.payload.unit
      }
    }
  }
})

export const { setLangAndUnit } = langAndUnitSlice.actions
export const getLangAndUnitFromStore = (state: AppState) => state.langAndUnit

export default langAndUnitSlice.reducer
