import { AccountCircleRounded } from '@mui/icons-material'
import { Box, Divider, IconButton, ListItemText, MenuItem, MenuList, Popover, Tooltip, Typography } from '@mui/material'
import React, { useState } from 'react'
import BaseBackdrop from './common/BaseBackdrop'

interface IProps {
  user?: { name: string; email: string }
  sessionStatus: 'loading' | 'authenticated' | 'unauthenticated'
}

function AccountIcon(props: IProps) {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)
  // const [loggingOut, setLoggingOut] = useState(false)

  const open = Boolean(anchorEl)
  const id = open ? 'simple-popover' : undefined

  const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <>
      <BaseBackdrop open={false} description={'ログアウト中です。'} />
      <IconButton aria-describedby={id} onClick={handleClick}>
        <AccountCircleRounded sx={{ width: 40, height: 40 }} />
      </IconButton>
      <Popover
        open={open}
        id={id}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right'
        }}
        transformOrigin={{
          horizontal: 'right',
          vertical: 'top'
        }}
      >
        <MenuList>
          <MenuItem>
            <Box sx={{ width: 220 }}>
              <Tooltip title={props.user?.name}>
                <Typography noWrap>{props.user?.name}</Typography>
              </Tooltip>
              <Tooltip title={props.user?.email}>
                <Typography color={(theme) => theme.palette.text.secondary} variant='body2' display='block' noWrap>
                  {props.user?.email}
                </Typography>
              </Tooltip>
            </Box>
          </MenuItem>
          <Divider sx={{ mx: 1 }} />
          <MenuItem
            onClick={() => {
              console.log('a')
            }}
          >
            <ListItemText>マイページ</ListItemText>
          </MenuItem>
          <MenuItem
            onClick={() => {
              console.log('a')
            }}
          >
            <ListItemText>マイページ</ListItemText>
          </MenuItem>
          <MenuItem
            onClick={() => {
              console.log('a')
            }}
          >
            <ListItemText>マイページ</ListItemText>
          </MenuItem>
          <MenuItem
            onClick={() => {
              console.log('a')
            }}
          >
            <ListItemText>ログアウト</ListItemText>
          </MenuItem>
        </MenuList>
      </Popover>
    </>
  )
}

export default AccountIcon
