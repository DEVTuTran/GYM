import { useMemo } from 'react'

import { Stack, SxProps, Theme } from '@mui/material'
import Backdrop from '@mui/material/Backdrop'
import Box from '@mui/material/Box'
import { ButtonProps } from '@mui/material/Button'
import Fade from '@mui/material/Fade'
import Modal from '@mui/material/Modal'
import Typography from '@mui/material/Typography'

import { StyledButtonConfirm, StyledButtonDefault } from 'styles'

interface IProps {
  open: boolean
  title?: string
  children?: React.ReactNode
  bodySx?: SxProps<Theme>
  maxWidth?: string | number
  footerSx?: SxProps<Theme>
  width?: number

  showBtnCancel?: boolean
  cancelText?: string
  cancelStartIcon?: React.ReactNode
  onCancel?: () => void
  showBtnOk?: boolean
  okText?: string
  okEndIcon?: React.ReactNode
  okProps?: ButtonProps
  cancelProps?: ButtonProps
  isBgError?: boolean
  onOk?: () => void
  backdropClick?: boolean
}

export default function BaseModal({ backdropClick = true, ...props }: IProps) {
  const { modalStyle, titleWrapperStyle } = useMemo(() => {
    let modalWidthStyle: SxProps<Theme> = {}

    if (props.maxWidth) {
      modalWidthStyle = {
        maxWidth: props.maxWidth,
        width: '100%'
      }
    }

    const modalStyle: SxProps<Theme> = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: props?.width || 900,
      paddingX: 5,
      paddingBottom: 3,
      bgcolor: 'background.paper',
      boxShadow: 24,
      borderRadius: 1,
      ...modalWidthStyle
    }

    const titleWrapperStyle: SxProps<Theme> = {
      p: '16px 0',
      borderBottom: (theme) => `1px solid ${theme.palette.divider}`
    }

    return {
      modalStyle,
      titleWrapperStyle
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const showBtnCancel = props.showBtnCancel || !!props.cancelText
  const showBtnOk = props.showBtnOk || !!props.okText

  const handleCancel = (reason: string) => {
    if (reason === 'backdropClick' && !backdropClick) {
      return
    }
    if (props?.onCancel) {
      props.onCancel()
    }
  }

  return (
    <Modal
      aria-labelledby='transition-modal-title'
      aria-describedby='transition-modal-description'
      open={props.open}
      onClose={handleCancel}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500
        }
      }}
    >
      <Fade in={props.open}>
        <Box sx={modalStyle}>
          {!!props.title && (
            <Box sx={titleWrapperStyle}>
              <Typography id='transition-modal-title' variant='h6' component='h2'>
                {props.title}
              </Typography>
            </Box>
          )}
          <Box sx={props.bodySx}>{props.children}</Box>
          <Stack sx={{ ...props.footerSx }} direction='row' justifyContent='space-between' gap={3}>
            {showBtnCancel && (
              <StyledButtonDefault onClick={props.onCancel} startIcon={props.cancelStartIcon} {...props.cancelProps}>
                {props.cancelText || 'キャンセル'}
              </StyledButtonDefault>
            )}
            {showBtnOk && (
              <StyledButtonConfirm
                variant='contained'
                color={props.isBgError ? 'error' : 'primary'}
                onClick={props.onOk}
                endIcon={props.okEndIcon}
                {...props.okProps}
              >
                {props.okText || '変更を確認する'}
              </StyledButtonConfirm>
            )}
          </Stack>
        </Box>
      </Fade>
    </Modal>
  )
}
