import * as yup from 'yup'

const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email(' メールアドレスの形式で正しく入力してください。')
    .required('メールアドレスを入力してください。'),
  password: yup.string().required()
})

export default loginSchema
