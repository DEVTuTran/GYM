import { Box, Divider, Stack } from '@mui/material'
import React, { ReactNode } from 'react'

import headImg from '../assets/img/image.png'
import { BodyContainer } from 'Styles'
import { Helmet } from 'react-helmet'
import { useNavigate } from 'react-router-dom'

function BaseLayout({ children }: { children: ReactNode }) {
  const navigate = useNavigate()
  return (
    <Box component='section'>
      <Helmet>
        <title>加盟店申請フォーム</title>
      </Helmet>
      <Box
        sx={{
          gridColumn: '1 / -1'
        }}
        component='header'
        zIndex={2}
      ></Box>
      <BodyContainer>
        <Stack
          sx={{
            margin: '20px auto',
            width: 159,
            cursor: 'pointer'
          }}
          onClick={() => navigate('/')}
        >
          <img src={headImg} alt='head img' width={159} />
        </Stack>
        <Divider sx={{ boxShadow: 1, backgroundColor: '#324A77' }} />
        {children}
      </BodyContainer>
    </Box>
  )
}

export default BaseLayout
