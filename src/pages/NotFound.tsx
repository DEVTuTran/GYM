import React from 'react'
import { Link } from 'react-router-dom'
import { Typography } from '@mui/material'

const NotFound = () => (
  <div>
    <Typography>404 Page not found</Typography>
    <Link to='/'>Go Home</Link>
  </div>
)

export default NotFound
