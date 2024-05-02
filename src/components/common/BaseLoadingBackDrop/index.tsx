import Backdrop from '@mui/material/Backdrop'
import CircularProgress from '@mui/material/CircularProgress'

interface BaseLoadingBackDropProps {
  open?: boolean
  onClick?: () => void
  position?: string
}

const BaseLoadingBackDrop = (props: BaseLoadingBackDropProps) => {
  const { open = true, onClick, position = '' } = props

  return (
    <Backdrop
      sx={{
        color: '#fff',
        zIndex: (theme) => theme.zIndex.drawer + 1,
        position: position
      }}
      open={open}
      onClick={onClick}
    >
      <CircularProgress color='inherit' />
    </Backdrop>
  )
}

export default BaseLoadingBackDrop
