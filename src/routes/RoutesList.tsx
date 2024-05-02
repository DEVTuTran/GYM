import React, { Fragment, Suspense } from 'react'

import { RouteItem } from 'models/route'

import BaseLoadingBackDrop from 'components/common/BaseLoadingBackDrop'
import { ENDPOINT } from 'constants/endpoint'
import { AuthGuard } from 'guards/AuthGuard'
import BaseAuthLayout from 'layouts/BaseAuthLayout'
import { Route, Routes } from 'react-router-dom'
import { NotFound } from 'pages/NotFound'

const ROUTES: RouteItem[] = [
  {
    path: ENDPOINT.LOGIN,
    component: React.lazy(() => import('pages/Login'))
  },
  {
    path: ENDPOINT.LOGOUT,
    component: React.lazy(() => import('pages/LogOut')),
    guard: AuthGuard
  },
  {
    path: '/',
    component: BaseAuthLayout,
    guard: AuthGuard,
    routes: [
      {
        path: ENDPOINT.DASHBOARD,
        component: React.lazy(() => import('pages/Dashboard'))
      },
      {
        path: ENDPOINT.USERS,
        component: React.lazy(() => import('pages/Users'))
      },
      {
        path: ENDPOINT.MACHINES,
        component: React.lazy(() => import('pages/Machines'))
      },
      {
        path: ENDPOINT.STAFFS,
        component: React.lazy(() => import('pages/Staffs'))
      },
      {
        path: ENDPOINT.FACILITIES,
        component: React.lazy(() => import('pages/Facilities'))
      },
      {
        path: ENDPOINT.BUSINESS,
        component: React.lazy(() => import('pages/Bussines'))
      },
      {
        path: ENDPOINT.ANALYTICS,
        component: React.lazy(() => import('pages/Analytics'))
      }
    ]
  },
  {
    path: ENDPOINT.NO_RESULT,
    component: NotFound
  }
]

const renderRoutes = (routes: RouteItem[]) => {
  return routes?.map((route: RouteItem, idx: number) => {
    const Component = route.component
    const Guard = route.guard || Fragment

    return (
      <Route
        key={`routes-${idx}`}
        path={route.path}
        element={
          <Guard>
            <Suspense fallback={<BaseLoadingBackDrop />}>
              <Component />
            </Suspense>
          </Guard>
        }
      >
        {route.routes && renderRoutes(route.routes)}
      </Route>
    )
  })
}

export const RoutesList = () => {
  return <Routes>{renderRoutes(ROUTES)}</Routes>
}
