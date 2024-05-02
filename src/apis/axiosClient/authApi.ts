import axiosAuthClient from './axiosClient'
import { AccountScopes } from 'models/auth'

const authApi = {
  getScopes(accountId: string): Promise<AccountScopes> {
    const url = `/api/accounts/${accountId}/scopes`
    return axiosAuthClient.get(url)
  }
}

export default authApi
