import { getDataFromLocalStorage, setDataToLocalStorage } from 'utils/common'

describe('localstorage', () => {
  beforeEach(() => {
    // Clear local storage before each test
    localStorage.clear()
  })

  it('sets data to local storage', () => {
    const key = 'testKey'
    const value = { foo: 'bar' }

    setDataToLocalStorage(key, value)

    expect(localStorage.getItem(key)).toBe(JSON.stringify(value))
  })

  it('does not set data to local storage if value is falsy', () => {
    const key = 'testKey'
    const value = null

    setDataToLocalStorage(key, value)

    expect(localStorage.getItem(key)).toBeNull()
  })

  it('does not set data to local storage if key is falsy', () => {
    const key = ''
    const value = { foo: 'bar' }

    setDataToLocalStorage(key, value)

    expect(localStorage.getItem(key)).toBeNull()
  })

  it('does not set data to local storage if value is undefined', () => {
    const key = 'testKey'
    const value = undefined

    setDataToLocalStorage(key, value)

    expect(localStorage.getItem(key)).toBeNull()
  })

  it('returns data from local storage', () => {
    const key = 'testKey'
    const value = { foo: 'bar' }
    localStorage.setItem(key, JSON.stringify(value))

    const result = getDataFromLocalStorage(key)

    expect(result).toEqual(value)
  })

  it('returns undefined if key is not found in local storage', () => {
    const key = 'nonexistentKey'

    const result = getDataFromLocalStorage(key)

    expect(result).toBeUndefined()
  })

  //   it('returns undefined if window is undefined', () => {
  //     // Mock window object to simulate undefined
  //     const originalWindow = global.window
  //     global.window = undefined as any

  //     const key = 'testKey'
  //     const value = { foo: 'bar' }
  //     localStorage.setItem(key, JSON.stringify(value))

  //     const result = getDataFromLocalStorage(key)

  //     expect(result).toBeUndefined()

  //     // Restore the original window object
  //     global.window = originalWindow
  //   })
})
