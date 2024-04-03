import ReactDOM from 'react-dom/client'
import App from './App'
import RootProvider from './providers/RootProvider'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './index.css'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <>
    <RootProvider>
      <ToastContainer
        position='bottom-left'
        icon={({ type }) => {
          if (type === 'success') {
            return <CheckCircleOutlineIcon color='success' />
          }
        }}
      />
      <App />
    </RootProvider>
  </>
)
