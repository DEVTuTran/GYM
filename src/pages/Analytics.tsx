import { useState } from 'react'

import { Box } from '@mui/material'

import { StyleTitle } from 'styles'

export default function Analytics() {
  const [searchInput, setSearchInput] = useState<string>()

  const handleConfirm = () => {}
  const handleCancel = () => {}
  return (
    <Box>
      <StyleTitle variant='h1'>Analytics</StyleTitle>
    </Box>
  )
}
