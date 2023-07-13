import Config from './config'

// validate passkey is valid
if (!Config.admin.passkey.match(/^[a-zA-Z0-9!@#$%^()_-]{8,32}$/)) {
  throw new Error(
    'Invalid passkey in config.yml. It must be between 8-32 characters and only contain letters, numbers, and !@#$%^()_-.'
  )
}

export const adminAuthGuard = (username?: string, passkey?: string) =>
  username === Config.admin.username && passkey === Config.admin.passkey

export const encodeLogin = (username?: string, passkey?: string) =>
  Buffer.from(`${username}:${passkey}`).toString('base64')

export const decodeLogin = (encoded: string) =>
  Buffer.from(encoded, 'base64').toString('ascii').split(':').slice(0, 2)
