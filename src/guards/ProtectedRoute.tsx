import { Navigate, Outlet } from 'react-router-dom'
import { useProfileQuery } from '../app/services/auth'
import React from 'react'
import { CircularProgress } from '@mui/material'

function ProtectedRoute() {
  const { data, isLoading, isFetching } = useProfileQuery(null, {
    skip: false,
    refetchOnMountOrArgChange: true
  })

  const loading = isLoading || isFetching

  if (loading) {
    return <CircularProgress />
  }

  return data ? <Outlet /> : <Navigate to='/login' replace />
}

export default ProtectedRoute
