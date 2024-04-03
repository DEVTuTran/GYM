import { Box, Button, Divider, Typography } from '@mui/material'
import BaseInputStrict from '../components/common/BaseInputStrict'
import { useForm } from 'react-hook-form'
import useFormUI from '../hooks/useFormUI'
import { EFormUIState } from '../enums'
import { useNavigate } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup'
import loginSchema from '../libs/validation/login'
import { FLexBox } from '../Styles'

function Login() {
  const navigate = useNavigate()
  const form = useForm<{ email: string; password: string }>({
    defaultValues: {
      email: '',
      password: ''
    },
    resolver: yupResolver(loginSchema)
  })
  const { control, handleSubmit } = form
  const fx = useFormUI<{ email: string; password: string }>({
    initialState: EFormUIState.EDITABLE
  })

  const onSubmit = (data: { email: string; password: string }) => {
    console.log(data)
  }
  return (
    <Box
      component={'form'}
      autoComplete='off'
      onSubmit={handleSubmit(onSubmit)}
      p={2}
      sx={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        mt: 20
      }}
    >
      <Box width={500}>
        <FLexBox>
          <Box mb={2}>
            {/* <img src={headImg} alt="logo" width={120} /> */}
            logo
          </Box>
        </FLexBox>
        <Typography sx={{ mb: 1, fontSize: '24px' }}>ログイン</Typography>
        <Divider sx={{ mb: 5 }} />
        <Box mb={2}>
          <BaseInputStrict {...fx.textFieldProps} control={control} name='email' label='メールアドレス' />
        </Box>
        <Box>
          <BaseInputStrict
            {...fx.textFieldProps}
            control={control}
            name='password'
            label='パスワード'
            type='password'
          />
        </Box>
        <Button
          type='submit'
          fullWidth
          variant='contained'
          sx={{
            mt: 2,
            height: '48px',
            fontSize: '16px'
          }}
        >
          ログイン
        </Button>
      </Box>
    </Box>
  )
}

export default Login
