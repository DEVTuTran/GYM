import { ApolloClient, InMemoryCache, ApolloLink } from '@apollo/client'
import { QueryClient } from 'react-query'
import { onError } from '@apollo/client/link/error'
import { setContext } from '@apollo/client/link/context'

import { getAccessToken, logoutManually } from 'hooks/useAuth'
import { HttpStatusCode } from 'enums'

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 200,
      cacheTime: Infinity,
      refetchOnWindowFocus: false,
      suspense: true
    }
  }
})

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`)
    )
  }

  if (networkError) {
    console.log(`[Network error]: ${networkError}`)
    if (networkError && 'statusCode' in networkError && networkError.statusCode === HttpStatusCode.Unauthorized) {
      logoutManually()
    }
  }
})

const authMiddleware = setContext((_, { headers }) =>
  getAccessToken().then((token) => {
    return {
      headers: {
        ...headers,
        authorization: token || null
      }
    }
  })
)

export const graphQlClient = new ApolloClient({
  link: ApolloLink.from([authMiddleware, errorLink]),
  cache: new InMemoryCache()
})
