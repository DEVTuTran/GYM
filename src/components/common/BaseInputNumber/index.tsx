import { TextField, TextFieldProps } from '@mui/material'
import { NumericFormatProps } from 'react-number-format'

import NumericFormatCustom from './NumericFormatCustom'
import PatternFormatCustom from './PatternFormatCustom'

export interface IBaseInputNumberProps
  extends Pick<
      TextFieldProps,
      | 'label'
      | 'variant'
      | 'InputProps'
      | 'fullWidth'
      | 'sx'
      | 'onClick'
      | 'name'
      | 'error'
      | 'helperText'
      | 'InputLabelProps'
      | 'disabled'
      | 'placeholder'
      | 'className'
      | 'size'
    >,
    Pick<NumericFormatProps, 'suffix' | 'prefix'> {
  value?: any
  parseValue?: (value: string) => any
  onChange?: (value: string) => void
  componentType?: 'numeric' | 'pattern'
  format?: string
  componentStyle?: 'colorful'
}

function BaseInputNumber({ componentType = 'numeric', ...props }: IBaseInputNumberProps) {
  return (
    <TextField
      name={props.name}
      size={props.size}
      value={props.value}
      label={props.label}
      error={props.error}
      variant={props.variant}
      disabled={props.disabled}
      className={props.className}
      fullWidth={props.fullWidth}
      helperText={props.helperText}
      placeholder={props.placeholder}
      onChange={(value: any) => props.onChange?.(value as string)}
      sx={{
        ...(props.componentStyle === 'colorful'
          ? {
              height: '52px',
              fieldset: {
                borderRadius: 0,
                borderColor: (theme) =>
                  +props.value! > 0
                    ? theme.palette.primary.main
                    : +props.value! < 0
                    ? theme.palette.error.main
                    : undefined
              },
              input: {
                padding: '14px 16px'
              },
              '.Mui-focused': {
                'fieldset.MuiOutlinedInput-notchedOutline': {
                  borderColor: (theme) => (+props.value! >= 0 ? theme.palette.primary.main : theme.palette.error.main)
                }
              }
            }
          : {}),
        background: (theme) => theme.palette.background.default,
        ...props.sx
      }}
      InputProps={{
        ...props.InputProps,
        inputComponent: componentType === 'numeric' ? (NumericFormatCustom as any) : PatternFormatCustom,
        inputProps: {
          ...props.InputProps?.inputProps,
          prefix: props.componentStyle === 'colorful' ? (props.value > 0 ? '+' : '') : props.prefix,
          suffix: props.suffix,
          format: props.format,
          parseValue: props.parseValue
        }
      }}
      InputLabelProps={props.InputLabelProps}
    />
  )
}

export default BaseInputNumber
