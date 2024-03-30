import React from 'react'
import { PatternFormat, PatternFormatProps } from 'react-number-format'

interface IProps<T extends string | number = string> extends Pick<PatternFormatProps, 'format'> {
  format: string
  parseValue?: (value: string) => any
  onChange: (value: T) => void
}

const PatternFormatCustom = React.forwardRef<PatternFormatProps, IProps>(function PatternFormatCustom(
  { onChange, format = '', parseValue = (value) => value, ...props },
  ref
) {
  return (
    <PatternFormat
      {...props}
      format={format}
      getInputRef={ref}
      onValueChange={({ value }) => {
        onChange(parseValue(value))
      }}
      valueIsNumericString
    />
  )
})

export default PatternFormatCustom
