import { Amplify } from 'aws-amplify'
import { AMPLIFY_CONFIG } from 'configs/amplify'
import useAuth from 'hooks/useAuth'
import BaseLoadingBackDrop from 'components/common/BaseLoadingBackDrop'
import { RoutesList } from 'routes/RoutesList'

Amplify.configure(AMPLIFY_CONFIG)

function App() {
  const { isLoggingIn } = useAuth()

  console.log(isLoggingIn)

  if (isLoggingIn) return <BaseLoadingBackDrop />

  return <RoutesList />
}

export default App
