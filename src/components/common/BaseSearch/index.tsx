import { useState } from 'react'

import { TextField, TextFieldProps } from '@mui/material'
import useDebounce from 'hooks/useDebounce'
import { SearchOutlined } from '@mui/icons-material'

interface IBaseSearchProps
  extends Pick<
    TextFieldProps,
    | 'fullWidth'
    | 'label'
    | 'variant'
    | 'disabled'
    | 'InputProps'
    | 'sx'
    | 'placeholder'
    | 'InputLabelProps'
    | 'className'
    | 'type'
    | 'hidden'
    | 'size'
    | 'helperText'
    | 'multiline'
    | 'rows'
  > {
  lable?: string
  searchInput?: string
  setSearchInput: (value?: string) => void
}

export function BaseSearch(props: IBaseSearchProps) {
  const { label, searchInput, setSearchInput } = props

  const [value, setValue] = useState<string | undefined>(searchInput)

  useDebounce(() => setSearchInput(value), 500, [value])

  return (
    <TextField
      label={label}
      variant={props.variant}
      placeholder={props.placeholder}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      InputProps={{
        endAdornment: <SearchOutlined sx={{ fontSize: 14 }} />
      }}
    />
  )
}
