import React, { PropsWithChildren } from 'react'
import { render } from '@testing-library/react'
import type { RenderOptions } from '@testing-library/react'
import { Provider } from 'react-redux'
import { store as setupStore } from 'stores'
import { renderHook } from '@testing-library/react-hooks'
import { useIdScopes } from '../../hooks/useAuth'

// This type interface extends the default options for render from RTL, as well
// as allows the user to specify other things such as initialState, store.
interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  store?: typeof setupStore
}

export function renderWithProviders(ui: React.ReactElement, extendedRenderOptions: ExtendedRenderOptions = {}) {
  const {
    // Automatically create a store instance if no store was passed in
    store = setupStore,
    ...renderOptions
  } = extendedRenderOptions

  const Wrapper = ({ children }: PropsWithChildren) => <Provider store={store}>{children}</Provider>

  // Return an object with the store and all of RTL's query functions
  return {
    store,
    ...render(ui, { wrapper: Wrapper, ...renderOptions })
  }
}

export function testHookWithProviders(hook: () => any, store: any) {

  const Wrapper = ({ children }: PropsWithChildren) => <Provider store={store}>{children}</Provider>

  // Return an object with the store and all of RTL's query functions
  return {
    store,
    ...renderHook(() => hook(), { wrapper: Wrapper })
  }
}