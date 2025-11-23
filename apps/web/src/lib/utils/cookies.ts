export interface CookieOptions {
  expires?: number | Date // Expiration in minutes (number) or specific date
  maxAge?: number // Max age in seconds
  path?: string
  domain?: string
  secure?: boolean
  sameSite?: 'strict' | 'lax' | 'none'
  httpOnly?: boolean // Note: Cannot be set via client-side JS, but included for API consistency
}

export function setCookie(
  name: string,
  value: string,
  options: CookieOptions = {}
): void {
  const {
    expires,
    maxAge,
    path = '/',
    domain,
    secure = window.location.protocol === 'https:',
    sameSite = 'lax',
  } = options

  let cookieString = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`

  // Handle max-age (takes precedence over expires)
  if (maxAge !== undefined) {
    cookieString += `; max-age=${maxAge}`
  } else if (expires) {
    // Handle expiration
    const expirationDate =
      typeof expires === 'number'
        ? new Date(Date.now() + expires * 60 * 1000) // Convert minutes to milliseconds
        : expires
    cookieString += `; expires=${expirationDate.toUTCString()}`
  }

  // Add path
  cookieString += `; path=${path}`

  // Add domain if specified
  if (domain) {
    cookieString += `; domain=${domain}`
  }

  // Add secure flag
  if (secure) {
    cookieString += '; secure'
  }

  // Add SameSite (lowercase for browser compatibility)
  cookieString += `; samesite=${sameSite}`

  document.cookie = cookieString
}

export function getCookie(name: string): string | null {
  const cookies = document.cookie.split(';')

  for (let cookie of cookies) {
    const [cookieName, cookieValue] = cookie.trim().split('=')
    if (cookieName === encodeURIComponent(name)) {
      return decodeURIComponent(cookieValue)
    }
  }

  return null
}

export function getAllCookies(): Record<string, string> {
  const cookies: Record<string, string> = {}
  const cookieList = document.cookie.split(';')

  for (let cookie of cookieList) {
    const [name, value] = cookie.trim().split('=')
    if (name && value) {
      cookies[decodeURIComponent(name)] = decodeURIComponent(value)
    }
  }

  return cookies
}

export function deleteCookie(
  name: string,
  options: Pick<CookieOptions, 'path' | 'domain'> = {}
): void {
  const { path = '/', domain } = options

  let cookieString = `${encodeURIComponent(name)}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=${path}`

  if (domain) {
    cookieString += `; domain=${domain}`
  }

  document.cookie = cookieString
}

export function hasCookie(name: string): boolean {
  return getCookie(name) !== null
}

