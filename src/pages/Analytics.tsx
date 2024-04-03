import { useState } from 'react'

import { Box, Typography } from '@mui/material'

import { FLexBox, StyleTitle, StyledButtonDefault } from 'Styles'

interface IAnalyticsProps {}

export function Analytics(props: IAnalyticsProps) {
  const [searchInput, setSearchInput] = useState<string>()

  const handleConfirm = () => {}
  const handleCancel = () => {}
  return (
    <Box>
      <StyleTitle variant='h1'>Analytics</StyleTitle>
    </Box>
  )
}
