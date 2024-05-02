import { AMPLIFY_REGION, AMPLIFY_OAUTH_DOMAIN, AMPLIFY_USER_POOL_ID, AUTH_API_URL, AMPLIFY_APP_CLIENT_ID } from './env'

export const AMPLIFY_CONFIG = {
  Auth: {
    region: AMPLIFY_REGION,
    userPoolId: AMPLIFY_USER_POOL_ID,
    userPoolWebClientId: AMPLIFY_APP_CLIENT_ID
  },
  oauth: {
    domain: AMPLIFY_OAUTH_DOMAIN,
    scope: ['openid', 'aws.cognito.signin.user.admin'],
    redirectSignIn: `${window.location.origin}/`,
    redirectSignOut: `${AUTH_API_URL}/logout`,
    responseType: 'code'
  }
}
