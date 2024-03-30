import { MouseEvent } from 'react'
import { Control, Controller, FieldValues, Path } from 'react-hook-form'

import BaseSwitch, { IBaseSwitchProps } from '.'

interface IProps<T extends FieldValues> extends Pick<IBaseSwitchProps, 'disabled' | 'labels' | 'label'> {
  control: Control<T>
  name: Path<T>
  onClick?: (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => void
}

function BaseSwitchStrict<T extends FieldValues = FieldValues>(props: IProps<T>) {
  return (
    <Controller
      control={props.control}
      name={props.name}
      render={({ field: { value, onChange } }) => (
        <BaseSwitch
          checked={value}
          disabled={props.disabled}
          onChange={onChange}
          labels={props.labels}
          label={props.label}
          onClick={(e) => props.onClick && props.onClick(e)}
        />
      )}
    />
  )
}

export default BaseSwitchStrict
