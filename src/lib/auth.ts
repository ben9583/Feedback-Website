import type { AstroGlobal } from 'astro'
import Config from './config'

// validate username is valid
if (!Config.admin.username.match(/^[a-zA-Z0-9_-]{3,16}$/)) {
  throw new Error(
    'Invalid username in config.yml. It must be between 3-16 characters and only contain letters, numbers, and _-.'
  )
}

// validate passkey is valid
if (!Config.admin.passkey.match(/^[a-zA-Z0-9!@#$%^()_-]{8,32}$/)) {
  throw new Error(
    'Invalid passkey in config.yml. It must be between 8-32 characters and only contain letters, numbers, and !@#$%^()_-.'
  )
}

export const adminAuthGuard = (username?: string, passkey?: string) =>
  username === Config.admin.username && passkey === Config.admin.passkey

export const encodeLogin = (username?: string, passkey?: string) =>
  'Basic ' + Buffer.from(`${username}:${passkey}`).toString('base64')

export const decodeLogin = (encoded: string) => {
  const [method, creds] = encoded.split(' ')
  switch (method) {
    case 'Basic':
      const decoded = Buffer.from(creds, 'base64').toString('utf-8')
      const [username, passkey] = decoded.split(':')
      return { username, passkey }
    default:
      return { username: undefined, passkey: undefined }
  }
}

const adminIsAuthenticated = (
  Astro: Readonly<AstroGlobal<Record<string, any>>>
) => {
  const authHeader =
    Astro.request.headers.get('Authorization') ??
    Astro.cookies.get('token').value ??
    ''
  const { username, passkey } = decodeLogin(authHeader)
  return adminAuthGuard(username, passkey)
}

export default adminIsAuthenticated
