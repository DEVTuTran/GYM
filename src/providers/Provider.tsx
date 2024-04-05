import { BaseToast } from 'components/common/BaseToast'
import useTimeout from 'hooks/useTimeout'
import { createContext, useContext, useMemo, useState } from 'react'
import { generateUEID } from 'utils/common'

type Props = {
  children?: React.ReactNode
}

type ToastProps = {
  id: string | number
  message: string
  severity: 'success' | 'error'
}

const ToastContext = createContext<{
  // eslint-disable-next-line no-unused-vars
  success: (content: Omit<ToastProps, 'id' | 'severity'>) => void
  // eslint-disable-next-line no-unused-vars
  error: (content: Omit<ToastProps, 'id' | 'severity'>) => void
  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-explicit-any
  handleApiError: (err?: any) => void
  // eslint-disable-next-line no-unused-vars
  handleFormError: (err?: object) => void
}>({
  success: () => {},
  error: () => {},
  handleApiError: () => {},
  handleFormError: () => {}
})

export const ToastProvider = ({ children }: Props) => {
  const [toasts, setToasts] = useState<ToastProps[]>([])

  useTimeout(() => {
    toasts.shift()
    return setToasts([...toasts])
  }, 5000)

  const success = (content: Omit<ToastProps, 'id' | 'severity'>) => {
    const newToasts: ToastProps[] = [
      ...toasts,
      {
        id: generateUEID(),
        message: content.message,
        severity: 'success'
      }
    ]

    setToasts(newToasts)
  }

  const error = (content: Omit<ToastProps, 'id' | 'severity'>) => {
    const newToasts: ToastProps[] = [
      ...toasts,
      {
        id: generateUEID(),
        message: content.message,
        severity: 'error'
      }
    ]
    setToasts(newToasts)
  }

  const handleApiError = (err?: any) => {
    if (err?.response?.data?.message) {
      error({
        message: err?.response?.data?.message
      })
      return
    }
    if (err?.message) {
      error({ message: err?.message })
    }
  }

  const handleFormError = (errorObject?: object) => {
    errorObject && Object.values(errorObject).forEach((err) => error({ message: err.message }))
  }

  const close = (id: string | number) => {
    setToasts((currentToasts) => currentToasts.filter((toast) => toast.id !== id))
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const contextValue = useMemo(
    () => ({ success, error, handleApiError, handleFormError }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [toasts]
  )

  return (
    <ToastContext.Provider value={contextValue}>
      {children}
      <div className='absolute bottom-4 left-4 flex flex-col space-y-4'>
        {toasts.map((toast) => (
          <BaseToast
            key={toast.id}
            message={toast.message}
            handleClose={() => close(toast.id)}
            severity={toast.severity}
          />
        ))}
      </div>
    </ToastContext.Provider>
  )
}

export const useToast = () => useContext(ToastContext)
