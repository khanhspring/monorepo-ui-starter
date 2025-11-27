import * as React from 'react'
import {ReactNode, useCallback, useContext, useEffect, useState} from 'react'
import {deleteCookie, getCookie, setCookie} from "@repo/utils";
import {ACCESS_TOKEN_KEY} from "@repo/types";

export interface AuthContext {
  isAuthenticated: boolean
  login: (username: string) => Promise<void>
  logout: () => Promise<void>
}

export const AuthContext = React.createContext<AuthContext | null>(null)

type Props = {
  children: ReactNode;
}

export function AuthProvider({ children }: Props) {
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

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
