import { fireEvent, render } from '@testing-library/react'
import Dashboard from 'pages/Dashboard'
import { BrowserRouter as Router } from 'react-router-dom'
import BaseAuthLayout from '../../layouts/BaseAuthLayout'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import '../../i18n'

describe('SideBar', () => {
  const initialState = {
    langAndUnit: {
      lang: ''
    }
  }
  const mockStore = configureStore()
  const mockedNavigation = jest.fn()
  let store
  beforeEach(() => {
    jest.mock('react-i18next', () => ({
      useTranslation: () => ({ t: (key: string) => key })
    }))
  })
  it('navigation to dashboard', () => {
    store = mockStore(initialState)
    const { getByText } = render(
      <Provider store={store}>
        <BaseAuthLayout>
          <Dashboard />
        </BaseAuthLayout>
      </Provider>,
      { wrapper: Router })
    console.log(getByText('Dashboard'))
    fireEvent.click(getByText(/ダッシュボード/i))

    expect(mockedNavigation).toHaveBeenCalledWith(
      '/',
      {
        preventScrollReset: undefined,
        relative: undefined,
        replace: false,
        state: undefined,
        unstable_viewTransition: undefined
      }
    )
  })

  // it('navigation to location 2', () => {
  //   const history = createMemoryHistory()
  //   render(<RoutesList />, { wrapper: createRouterWrapper(history) })
  //   fireEvent.click(screen.getByText('location 2 '))
  //   expect(history.location.pathname).toBe('/location2')
  // })
})