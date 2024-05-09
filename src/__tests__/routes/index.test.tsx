import { fireEvent, render, screen } from '@testing-library/react'
import { createMemoryHistory } from 'history'
import { RoutesList } from 'routes/RoutesList'
import { MemoryRouter, Router, RouterProps } from 'react-router-dom'

const createRouterWrapper = ({ children, initialRoutes }: any) => (
  <MemoryRouter initialEntries={initialRoutes}>{children}</MemoryRouter>
)

describe('SideBar', () => {
  it('navigation to location 1', () => {
    const history = createMemoryHistory()
    render(<RoutesList />, { wrapper: createRouterWrapper(history) })
    fireEvent.click(screen.getByText('location 1'))
    expect(history.location.pathname).toBe('/location1')
  })

  it('navigation to location 2', () => {
    const history = createMemoryHistory()
    render(<RoutesList />, { wrapper: createRouterWrapper(history) })
    fireEvent.click(screen.getByText('location 2'))
    expect(history.location.pathname).toBe('/location2')
  })
})