import { FormControlLabel, Switch, SwitchProps } from '@mui/material'
import React, { MouseEvent } from 'react'

export interface IBaseSwitchProps extends Pick<SwitchProps, 'disabled' | 'checked'> {
  onChange?: (value: boolean) => void
  onClick?: (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => void
  labels?: [string, string] // [off, on]
  label?: React.ReactNode
  defaultChecked?: boolean
}

function BaseSwitch(props: IBaseSwitchProps) {
  return (
    <FormControlLabel
      control={
        <Switch
          defaultChecked={props.defaultChecked}
          disabled={props.disabled}
          checked={props.checked}
          onChange={(_event, value) => props.onChange?.(value)}
          onClick={(e) => props.onClick && props.onClick(e)}
        />
      }
      label={props.labels?.[Number(!!props.checked)] || props.label}
    />
  )
}

export default BaseSwitch
