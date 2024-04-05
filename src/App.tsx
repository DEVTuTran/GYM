import { Route, Routes } from 'react-router-dom'

import ProtectedRoute from 'guards/ProtectedRoute'
import { ENDPOINT } from './constants/endpoint'

import BaseAuthLayout from 'layouts/BaseAuthLayout'

import Login from 'pages/Login'
import Dashboard from 'pages/Dashboard'
import { NotFound } from 'pages/NotFound'
import { Users } from 'pages/Users'
import { Machines } from 'pages/Machines'
import { Staffs } from 'pages/Staffs'
import { Business } from 'pages/Bussines'
import { Analytics } from 'pages/Analytics'
import { Facilities } from 'pages/Facilities'

function App() {
  return (
    <Routes>
      <Route path='*' element={<NotFound />} />
      <Route path={ENDPOINT.LOGIN} element={<Login />} />
      <Route element={<ProtectedRoute />}>
        <Route
          path={ENDPOINT.DASHBOARD}
          element={
            <BaseAuthLayout>
              <Dashboard />
            </BaseAuthLayout>
          }
        />
      </Route>
      <Route
        path={ENDPOINT.USERS}
        element={
          <BaseAuthLayout>
            <Users />
          </BaseAuthLayout>
        }
      />
      <Route
        path={ENDPOINT.MACHINES}
        element={
          <BaseAuthLayout>
            <Machines />
          </BaseAuthLayout>
        }
      />
      <Route
        path={ENDPOINT.STAFFS}
        element={
          <BaseAuthLayout>
            <Staffs />
          </BaseAuthLayout>
        }
      />
      <Route
        path={ENDPOINT.FACILITIES}
        element={
          <BaseAuthLayout>
            <Facilities />
          </BaseAuthLayout>
        }
      />
      <Route
        path={ENDPOINT.BUSINESS}
        element={
          <BaseAuthLayout>
            <Business />
          </BaseAuthLayout>
        }
      />
      <Route
        path={ENDPOINT.ANALYTICS}
        element={
          <BaseAuthLayout>
            <Analytics />
          </BaseAuthLayout>
        }
      />
    </Routes>
  )
}

export default App
