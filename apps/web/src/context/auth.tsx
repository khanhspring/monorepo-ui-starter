import * as React from 'react'
import {ReactNode, useCallback, useEffect, useState} from 'react'
import {deleteCookie, getCookie, setCookie} from "@repo/utils";

export const ACCESS_TOKEN_KEY = 'access_token';

export interface AuthContext {
  isAuthenticated: boolean
  login: (username: string) => Promise<void>
  logout: () => Promise<void>
}

export const AuthContext = React.createContext<AuthContext | null>(null)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const logout = useCallback(async () => {
    setIsAuthenticated(false);
    deleteCookie(ACCESS_TOKEN_KEY);
  }, [])

  const login = useCallback(async (accessToken: string) => {
    setCookie(ACCESS_TOKEN_KEY, accessToken);
    setIsAuthenticated(!!accessToken);
  }, [])

  useEffect(() => {
    const accessToken = getCookie(ACCESS_TOKEN_KEY);
    setIsAuthenticated(!!accessToken);
  }, [])

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}