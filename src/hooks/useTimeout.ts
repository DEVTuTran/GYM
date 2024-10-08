import { useCallback, useEffect, useRef } from 'react'

interface TimeoutHandle {
  reset: () => void
  clear: () => void
}

export default function useTimeout(callback: () => void, delay: number): TimeoutHandle {
  const callbackRef = useRef<() => void>(callback)
  const timeoutRef = useRef<number | undefined>()

  useEffect(() => {
    callbackRef.current = callback
  }, [callback])

  const set = useCallback(() => {
    timeoutRef.current = window.setTimeout(() => callbackRef.current(), delay)
  }, [delay])

  const clear = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
  }, [])

  useEffect(() => {
    set()
    return clear
  }, [delay, set, clear])

  const reset = useCallback(() => {
    clear()
    set()
  }, [clear, set])

  return { reset, clear }
}
