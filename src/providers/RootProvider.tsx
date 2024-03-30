import { ReactNode, Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import themes from '../themes'
import { ThemeProvider } from '@mui/material'
import { Provider } from 'react-redux'
import { store } from '../app/store'

interface RootProviderProps {
  children: ReactNode
}

const RootProvider = ({ children }: RootProviderProps) => {
  return (
    <Provider store={store}>
      <Suspense fallback={''}>
        <BrowserRouter>
          <ThemeProvider theme={{ ...themes }}>{children}</ThemeProvider>
        </BrowserRouter>
      </Suspense>
    </Provider>
  )
}

export default RootProvider
