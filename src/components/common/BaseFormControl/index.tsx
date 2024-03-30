import { Box, Stack, StackProps, Typography } from '@mui/material'
import { Variant } from '@mui/material/styles/createTypography'
import { ReactNode } from 'react'

interface IProps extends Pick<StackProps, 'gap' | 'direction' | 'mb' | 'sx' | 'pl' | 'minHeight'> {
  label?: string
  labelVariant?: Variant
  labelIcon?: ReactNode
  children?: ReactNode
  labelWidth?: string | number
}

function BaseFormControl({ labelVariant = 'body1', ...props }: IProps) {
  const alignItems = props.direction === 'row' ? 'center' : undefined

  return (
    <Stack
      alignItems={alignItems}
      mb={props.mb}
      sx={props.sx}
      gap={props.gap}
      direction={props.direction}
      minHeight={props.minHeight}
    >
      {props.label && (
        <Stack direction='row' justifyContent='space-between'>
          <Typography variant={labelVariant} width={props.labelWidth}>
            {props.label}
          </Typography>
          <Box alignSelf='end'>{props.labelIcon}</Box>
        </Stack>
      )}
      {props.children}
    </Stack>
  )
}

export default BaseFormControl
