import { authenticateAccessToken } from './authenticateAccessToken'
import { ensurePasswordNotExpired } from './ensurePasswordNotExpired'

/**
 * @description A collection of standard middleware for protecting authenticated routes.
 * It first authenticates the user and then checks if their password has expired.
 */
export const protectedRoute = [authenticateAccessToken, ensurePasswordNotExpired]
