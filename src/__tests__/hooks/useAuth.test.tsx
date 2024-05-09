/* eslint-disable react/display-name */
import { useIdScopes } from 'hooks/useAuth'
import { act } from 'react'
import type { RenderOptions } from '@testing-library/react'
import { store as setupStore } from '../../stores'
import { testHookWithProviders } from '../utils/test-utils.test'

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  store?: typeof setupStore
}

jest.useFakeTimers()

const mockedUseDispatch = jest.fn()
const mockedUseSelector = jest.fn()
jest.mock('react-redux', () => ({
  useSelector: mockedUseSelector,
  useDispatch: mockedUseDispatch
}))

describe('useAuth', () => {
  test('useIdScopes', () => {
    const { result } = testHookWithProviders(useIdScopes, setupStore)
    const { level, permission, vendorId, companyId, siteId } = result.current
    act(() => {
      expect(level).not.toBe(undefined)
      expect(permission).not.toBe(undefined)
      expect(vendorId).not.toBe(undefined)
      expect(companyId).not.toBe(undefined)
      expect(siteId).not.toBe(undefined)
    })

  })
  // test('signIn calls federatedSignIn', () => {
  //
  //   const { result } = renderHook(() => useAuth())
  //   result.current.signIn()
  //   expect(Auth.federatedSignIn).toHaveBeenCalledWith({ provider: 'customProvider' })
  // })
  //
  // test('signOut calls signOut', () => {
  //   const { result } = renderHook(() => useAuth())
  //   result.current.signOut()
  //   expect(Auth.signOut).toHaveBeenCalled()
  // })

  //   test('getCurrentUser calls currentAuthenticatedUser', async () => {
  //     const mockUser = { username: 'testUser' }
  //     Auth.currentAuthenticatedUser.mockResolvedValueOnce(mockUser)
  //     const user = await getCurrentUser()
  //     expect(user).toEqual(mockUser)
  //     expect(Auth.currentAuthenticatedUser).toHaveBeenCalled()
  //   })

  // Similarly, write tests for getAccessToken, getIdToken, logoutManually, and useIdScopes
})
