// import { render, screen, fireEvent, waitFor } from '@testing-library/react'
// import Login from 'pages/Login'

describe('login page', () => {
  // const setup = () => {
  //   const utils = render(<Login />)
  //   const emailField = screen.getByLabelText('メールアドレス') as HTMLInputElement
  //   const passwordField = screen.getByLabelText('パスワード') as HTMLInputElement
  //   const button = screen.getByRole('button', { name: /ログイン/i })
  //   return {
  //     emailField,
  //     passwordField,
  //     button,
  //     ...utils
  //   }
  // }
  // test('Check form element', () => {
  //   const { emailField, passwordField, button } = setup()
  //   expect(emailField).toBeInTheDocument()
  //   expect(passwordField).toBeInTheDocument()
  //   expect(button).toBeInTheDocument()
  // })
  // test('Check fields validate (Required): ', async () => {
  //   const { emailField, passwordField, button } = setup()
  //   expect(emailField.value).toMatch('')
  //   expect(passwordField.value).toMatch('')
  //   fireEvent.click(button)
  //   await waitFor(() => {
  //     const emailMessageNode = screen.getAllByText(/email required/i)
  //     const passwordMessageNode = screen.getAllByText(/required/i)
  //     expect(emailMessageNode).toBeTruthy()
  //     expect(passwordMessageNode).toBeTruthy()
  //   })
  // })
  // test('Check fields validate (Invalid):', async () => {
  //   const { emailField, passwordField, button } = setup()
  //   fireEvent.change(emailField, { target: { value: 'testing' } })
  //   fireEvent.change(passwordField, { target: { value: 'abc' } })
  //   fireEvent.click(button)
  //   await waitFor(() => {
  //     const emailMessageNode = screen.getAllByText(/email not valid/i)
  //     const passwordMessageNode = screen.getAllByText(/invalid/i)
  //     expect(emailMessageNode).toBeTruthy()
  //     expect(passwordMessageNode).toBeTruthy()
  //   })
  //   fireEvent.change(emailField, { target: { value: 'testing@gmail.com' } })
  //   fireEvent.change(passwordField, { target: { value: 'Abc123@@' } })
  //   fireEvent.click(button)
  //   await waitFor(() => {
  //     expect(screen.queryByText('email not valid')).not.toBeInTheDocument()
  //     expect(screen.queryByText('invalid')).not.toBeInTheDocument()
  //   })
  // })
})

// import React from 'react'
// import { render } from '@testing-library/react'
// import useAuth from 'hooks/useAuth'
// import Login from 'pages/Login'

// // Mock the useAuth hook
// jest.mock('hooks/useAuth')

// describe('Login Component', () => {
//   it('should call signIn on mount', () => {
//     // Mock the signIn function
//     const mockSignIn = jest.fn()

//     // Mock the useAuth hook to return the mocked signIn function
//     useAuth.mockReturnValue({ signIn: mockSignIn })

//     // Render the Login component
//     render(<Login />)

//     // Assert that signIn function is called
//     expect(mockSignIn).toHaveBeenCalled()
//   })

//   it('should handle sign-in error gracefully', () => {
//     // Mock the signIn function to throw an error
//     const mockSignIn = jest.fn().mockImplementation(() => {
//       throw new Error('Sign-in error')
//     })

//     // Mock the useAuth hook to return the mocked signIn function
//     useAuth.mockReturnValue({ signIn: mockSignIn })

//     // Suppress console.error output
//     console.error = jest.fn()

//     // Render the Login component
//     render(<Login />)

//     // Assert that error message is logged to console
//     expect(console.error).toHaveBeenCalledWith('Failed to login: ', expect.any(Error))
//   })
// })
