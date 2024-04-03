import { Chip, ChipProps } from '@mui/material'

interface IBaseChipProps extends Pick<ChipProps, 'sx' | 'size'> {
  type: string
}

export function BaseChip(props: IBaseChipProps) {
  const { type, ...rest } = props
  return <Chip key={type} label={type} {...rest} />
}
