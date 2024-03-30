import React from 'react'
import { NumericFormat, NumericFormatProps } from 'react-number-format'

interface IProps {
  name: string
  parseValue?: (value: string) => any
  onChange: (value: string | number) => void
}

const NumericFormatCustom = React.forwardRef<NumericFormatProps, IProps>(function NumericFormatCustom(
  { name, onChange, parseValue = (value) => value, ...props },
  ref
) {
  return (
    <NumericFormat
      {...props}
      name={name}
      getInputRef={ref}
      onValueChange={({ value }) => onChange(parseValue(value))}
      thousandSeparator
    />
  )
})

export default NumericFormatCustom
