import { Control, Controller, FieldValues, Path } from 'react-hook-form'

import BaseSwitch, { IBaseSwitchProps } from '.'

interface IProps<T extends FieldValues, TInput extends boolean, TOutput>
  extends Pick<IBaseSwitchProps, 'disabled' | 'labels' | 'label'> {
  control: Control<T, any>
  name: Path<T>
  transform: {
    input: (value: TOutput) => TInput
    output: (value: boolean) => TOutput
  }
}

function BaseWitchTransform<
  T extends FieldValues = FieldValues,
  TInput extends boolean = boolean,
  TOutput extends string = string
>(props: IProps<T, TInput, TOutput>) {
  return (
    <Controller
      control={props.control}
      name={props.name}
      render={({ field: { value, onChange } }) => (
        <BaseSwitch
          disabled={props.disabled}
          labels={props.labels}
          label={props.label}
          onChange={(e) => onChange(props.transform.output(e))}
          checked={props.transform.input(value)}
        />
      )}
    />
  )
}

export default BaseWitchTransform
