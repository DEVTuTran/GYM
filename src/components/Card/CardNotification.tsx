import { Card, CardContent, Chip, Stack, Typography } from '@mui/material'
import { FLexBox } from 'styles'
import { BaseCard } from 'components/common/BaseCard'

interface IProps {
  title: string
  label: string
  type: string
}

function CardNotification(props: IProps) {
  return (
    <BaseCard>
      <FLexBox justifyContent={'space-between'}>
        <Typography variant='subtitle1'>{props.title}</Typography>
        <Stack direction={'row'} gap={2}>
          <Chip label={props.label} />
          <Chip label={props.title} variant='outlined' />
        </Stack>
      </FLexBox>
    </BaseCard>
  )
}

export default CardNotification
