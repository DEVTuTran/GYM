import { Control, Controller, FieldValues, Path } from 'react-hook-form'
import { Box, FormHelperText, Stack, TextField, TextFieldProps, Tooltip } from '@mui/material'
import { Help } from '@mui/icons-material'

interface IProps<T extends FieldValues>
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
  control: Control<T, any>
  name: Path<T>
  maxLength?: number
  hint?: string
}

const BaseInputStrict = <T extends FieldValues = FieldValues>(props: IProps<T>) => {
  return (
    <Controller
      control={props.control}
      name={props.name}
      rules={{
        required: true
      }}
      render={({ field, fieldState: { error } }) => (
        <>
          <Stack direction='row' alignItems='center' gap={2.25} width={props.fullWidth ? '100%' : 'auto'}>
            <TextField
              sx={{
                ...props.sx,
                flex: '1 1 auto'
              }}
              rows={props.rows}
              type={props.type}
              size={props.size}
              label={props.label}
              hidden={props.hidden}
              variant={props.variant}
              disabled={props.disabled}
              multiline={props.multiline}
              className={props.className}
              InputProps={props.InputProps}
              placeholder={props.placeholder}
              InputLabelProps={props.InputLabelProps}
              {...field}
              error={!!error?.message}
              helperText={error?.message || props.helperText}
              onChange={(e) => {
                e.target.value = e.target.value.toString().slice(0, props.maxLength)
                const value = e.target.value
                field.onChange(value)
              }}
            />
            {props.hint && (
              <Tooltip
                sx={{ flex: '0 0 auto' }}
                title={<Box sx={{ whiteSpace: 'pre-line' }}>{props.hint}</Box>}
                arrow
                placement='top'
              >
                <Help color='disabled' />
              </Tooltip>
            )}
          </Stack>
          {!error?.message && props.maxLength && (
            <FormHelperText sx={{ ml: 2 }}>
              {(field.value as string)?.length || 0}/{props.maxLength}
            </FormHelperText>
          )}
        </>
      )}
    />
  )
}

export default BaseInputStrict
