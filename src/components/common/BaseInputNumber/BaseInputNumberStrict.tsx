import { Control, Controller, FieldValues, Path } from 'react-hook-form'

import BaseInputNumber, { IBaseInputNumberProps } from '.'

interface IProps<T extends FieldValues> extends Omit<IBaseInputNumberProps, 'value' | 'onChange'> {
  control: Control<T, any>
  name: Path<T>
}

function BaseInputNumberStrict<T extends FieldValues = FieldValues>(props: IProps<T>) {
  return (
    <Controller
      control={props.control}
      name={props.name}
      render={({ field: { value, name, onChange }, fieldState: { error } }) => (
        <BaseInputNumber
          name={name}
          value={value}
          size={props.size}
          sx={props.sx}
          label={props.label}
          suffix={props.suffix}
          prefix={props.prefix}
          format={props.format}
          variant={props.variant}
          error={!!error?.message}
          disabled={props.disabled}
          fullWidth={props.fullWidth}
          helperText={error?.message}
          InputProps={props.InputProps}
          placeholder={props.placeholder}
          componentType={props.componentType}
          componentStyle={props.componentStyle}
          InputLabelProps={props.InputLabelProps}
          onChange={onChange}
          onClick={props.onClick}
          parseValue={props.parseValue}
        />
      )}
    />
  )
}

export default BaseInputNumberStrict
