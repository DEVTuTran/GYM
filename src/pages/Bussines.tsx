import { useState } from 'react'

import { Box, Typography } from '@mui/material'

import { FLexBox, StyleTitle, StyledButtonDefault } from 'styles'
import { BaseCard } from 'components/common/BaseCard'
import { BaseSearch } from 'components/common/BaseSearch'

export default function Business() {
  const [searchInput, setSearchInput] = useState<string>()

  const handleConfirm = () => {}
  const handleCancel = () => {}
  return (
    <Box>
      <StyleTitle variant='h1'>Business</StyleTitle>
      <FLexBox mt={2} justifyContent={'flex-end'}>
        <StyledButtonDefault>bt1</StyledButtonDefault>
      </FLexBox>
      <FLexBox mt={2} px={5} justifyContent={'flex-end'}>
        <BaseSearch placeholder='search' variant='standard' searchInput={searchInput} setSearchInput={setSearchInput} />
      </FLexBox>
      <FLexBox gap={2} flexWrap={'wrap'} justifyContent={'center'} px={5} mt={2}>
        <BaseCard
          title='card title'
          status='warning'
          onOk={handleConfirm}
          onCancel={handleCancel}
          sx={{ width: 'calc(50% - 8px)' }}
        >
          <Box>
            <Typography variant='body2'>ID: value</Typography>
            <Typography variant='body2'>ID: value</Typography>
          </Box>
        </BaseCard>
        <BaseCard
          title='card title'
          status='success'
          onOk={handleConfirm}
          onCancel={handleCancel}
          sx={{ width: 'calc(50% - 8px)' }}
        >
          <Box>
            <Typography variant='body2'>ID: value</Typography>
            <Typography variant='body2'>ID: value</Typography>
          </Box>
        </BaseCard>
        <BaseCard
          title='card title'
          status='cancel'
          onOk={handleConfirm}
          onCancel={handleCancel}
          sx={{ width: 'calc(50% - 8px)' }}
        >
          <Box>
            <Typography variant='body2'>ID: value</Typography>
            <Typography variant='body2'>ID: value</Typography>
          </Box>
        </BaseCard>
      </FLexBox>
    </Box>
  )
}
