import { ComponentType } from 'react'

export type Route = {
  path?: string
  component?: any
  guard?: React.LazyExoticComponent<ComponentType<any>> | ComponentType<any>
}

export type RouteItem = Route & {
  routes?: Route[]
}
