import '@testing-library/jest-dom'
import { REGEX } from 'constants/common'

describe('login', () => {
  test('validate function should pass on correct input email', () => {
    const text = 'text@test.com'
    expect(REGEX.EMAIL.test(text)).toBe(true)
  })
  test('validate function should pass on correct input password', () => {
    const text = 'Abc123@@'
    expect(REGEX.PASSWORD.test(text)).toBe(true)
  })
})
