export interface Account {
  id: string
  name: string
  loginId: string
  email: string
}

export interface AccountScopes {
  account: Account
  scopes: string[]
  idScopes: string[]
}
