import { useState } from 'react'

type ValueType = number | string | boolean
type ToggleReturnType = [boolean, (value?: ValueType) => void]

export default function useToggle(defaultValue?: ValueType): ToggleReturnType {
  const [value, setValue] = useState<boolean>(!!defaultValue)

  function toggleValue(value?: ValueType) {
    setValue((currentValue: boolean) => (typeof value === 'boolean' ? value : !currentValue))
  }

  return [value, toggleValue]
}
