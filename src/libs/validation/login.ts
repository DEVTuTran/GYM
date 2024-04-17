import { REGEX } from 'constants/common'
import * as yup from 'yup'

const loginSchema = yup.object().shape({
  email: yup.string().email('email not valid').required('email required'),
  password: yup.string().required('required').matches(REGEX.PASSWORD, 'invalid')
})

export default loginSchema
