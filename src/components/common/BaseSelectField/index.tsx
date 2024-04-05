import { Select, SelectProps, MenuItem, InputLabel, FormControl, OutlinedInput } from '@mui/material'
import { styled } from '@mui/material/styles'

type BaseSelectFieldProps = {
  name?: string
  label?: string
  options: {
    value: string | number | undefined
    label: string | number | undefined
  }[]
  value?: string | number
  disableItems?: number[]
} & SelectProps

const MenuItemStyled = styled(MenuItem)({
  fontSize: 15,
  height: 30,
  borderRadius: 0,
  boxShadow: 'none',
  '& .MuiList-padding': {
    padding: 0
  }
})

const BaseSelectField = (props: BaseSelectFieldProps) => {
  const { name, label, options, disableItems, sx, ...rest } = props
  return (
    <>
      <FormControl fullWidth>
        <InputLabel id='name-label'>{label}</InputLabel>
        <Select
          labelId='name-label'
          value={props.defaultValue}
          displayEmpty
          {...rest}
          sx={{ height: 38, width: 280, ...sx }}
          name={name}
          input={<OutlinedInput label={label} />}
        >
          {options?.map((option, index) => (
            <MenuItemStyled
              key={index}
              value={option.value}
              disabled={disableItems ? disableItems.includes(index) : false}
            >
              {option.label}
            </MenuItemStyled>
          ))}
        </Select>
      </FormControl>
    </>
  )
}

export default BaseSelectField
