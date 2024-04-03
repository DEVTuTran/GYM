import { Box } from '@mui/material'
import { ReactNode } from 'react'

import { BodyContainer } from 'Styles'
import { Helmet } from 'react-helmet'

function BaseLayout({ children }: { children: ReactNode }) {
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
      <BodyContainer>{children}</BodyContainer>
    </Box>
  )
}

export default BaseLayout
