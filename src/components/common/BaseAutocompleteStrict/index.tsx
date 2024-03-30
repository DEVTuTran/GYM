import { Control, Controller, FieldValues, Path } from 'react-hook-form'
import {
  Autocomplete,
  AutocompleteProps,
  Chip,
  FormControl,
  FormHelperText,
  TextField,
  TextFieldProps
} from '@mui/material'
import { ElementType } from 'react'

import { ISelectOption } from 'models/Common'

interface IProps<T extends FieldValues>
  extends Pick<
      AutocompleteProps<any, boolean | undefined, boolean | undefined, boolean | undefined, ElementType<any>>,
      'aria-label' | 'readOnly'
    >,
    Pick<TextFieldProps, 'label' | 'variant'> {
  control: Control<T, any>
  name: Path<T>
  options: ISelectOption[]
}

const BaseAutocompleteStrict = <T extends FieldValues = FieldValues>(props: IProps<T>) => {
  const { control, options, name } = props

  return (
    <Controller
      name={name as Path<T>}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <FormControl fullWidth error={!!error?.message}>
          <Autocomplete
            size='medium'
            id={name}
            value={options.filter((opt) =>
              (field.value as any[])?.map((value) => value?.toString()).includes(opt.value?.toString())
            )}
            options={options}
            multiple
            readOnly={props.readOnly}
            getOptionLabel={(option: ISelectOption) => option.label}
            noOptionsText='オプションなし'
            isOptionEqualToValue={(option, value) => option.value?.toString() === value.value?.toString()}
            renderTags={(tagValue, getTagProps) => {
              return tagValue.map((option, index) => (
                <Chip {...getTagProps({ index })} key={option.value} label={option.label} />
              ))
            }}
            renderInput={(params) => (
              <TextField {...params} variant={props.variant} label={props.label} error={!!error?.message} />
            )}
            onChange={(e, data) => {
              field.onChange(data.map((item: ISelectOption) => item?.value || item))
            }}
          />
          {!!error?.message && <FormHelperText>{error.message}</FormHelperText>}
        </FormControl>
      )}
    />
  )
}

export default BaseAutocompleteStrict
