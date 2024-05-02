import ReactDOM from 'react-dom/client'

import './i18n'
import App from './App'
import 'assets/fonts/Kosugi/Kosugi-Regular.ttf'
import 'assets/fonts/Roboto/Roboto-Regular.ttf'
import './index.css'

import RootProvider from './providers/RootProvider'
import { QueryClientProvider } from 'react-query'
import { ApolloProvider } from '@apollo/client'
import { graphQlClient, queryClient } from 'configs/client'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <>
    <RootProvider>
      <QueryClientProvider client={queryClient}>
        <ApolloProvider client={graphQlClient}>
          <App />
        </ApolloProvider>
      </QueryClientProvider>
    </RootProvider>
  </>
)
