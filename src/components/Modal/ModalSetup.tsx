import Box from '@mui/material/Box'
import { useForm } from 'react-hook-form'

import BaseModal from '../common/BaseModal'
import BaseSelect from '../common/BaseSelectField/BaseSelectStrict'
import { FLexBox, StyleLable } from 'styles'
import { useTranslation } from 'react-i18next'
import { LANGUAGES, UNITS } from 'constants/common'
import { setLangAndUnit } from 'stores/reduxSlices/langAndUnitSlice'
import { ELang, EUnit } from 'enums'
import { getDataFromLocalStorage } from 'utils/common'
import { useAppDispatch } from 'stores/hooks'

type IProps = {
  open: boolean
  setOpen: (value: boolean) => void
}

interface IConfig {
  lng: string
  unit: string | number
}

export const ModalSetup = (props: IProps) => {
  const { open, setOpen } = props

  const { t } = useTranslation()
  const dispatch = useAppDispatch()

  const initialValue: IConfig = {
    lng: getDataFromLocalStorage('lang') || ELang.EN,
    unit: UNITS[0].value
  }

  const form = useForm({
    defaultValues: initialValue
  })

  const { control } = form

  const onSubmit = async () => {
    const lang = form.getValues('lng')
    dispatch(setLangAndUnit({ lang: lang, unit: EUnit.KGM }))
    setOpen(false)
  }

  return (
    <BaseModal
      width={600}
      showBtnCancel
      open={open}
      onCancel={() => setOpen(false)}
      title={t('modal.setup.title')}
      cancelText={'キャンセル'}
      okText={'削除する'}
      onOk={() => onSubmit()}
      footerSx={{
        justifyContent: 'end'
      }}
      bodySx={{
        py: 3
      }}
    >
      <Box component='form'>
        <FLexBox pb={3} justifyContent={'space-between'}>
          <StyleLable variant='body2'>select1</StyleLable>
          <BaseSelect control={control} name='lng' options={LANGUAGES} />
        </FLexBox>
        <FLexBox justifyContent={'space-between'}>
          <StyleLable variant='body2'>select1</StyleLable>
          <BaseSelect control={control} name='unit' label='登録種別' disabled options={UNITS} />
        </FLexBox>
      </Box>
    </BaseModal>
  )
}
