import { JsonWebTokenError, NotBeforeError, verify, TokenExpiredError } from 'jsonwebtoken'
import { InvalidArgumentError } from '../../../Shared/domain/errors/ApiError'
import { type JwtPayloadUser } from './GenerateToken'

/**
 * @function validateToken
 * @description Validates a JWT using the provided secret. It checks the token's signature and expiration.
 * @param {object} params - The parameters for token validation.
 * @param {string} params.token - The JWT string to validate.
 * @param {string} params.globalSecret - The secret key used to sign the token.
 * @returns {JwtPayloadUser} The decoded JWT payload if validation is successful.
 * @throws {InvalidArgumentError} If the token is invalid, expired, not yet valid, or if any other validation error occurs.
 */
export function validateToken({ token, globalSecret }: { token: string; globalSecret: string }): JwtPayloadUser {
	try {
		// Verify the token using the secret
		const decoded = verify(token, globalSecret) as JwtPayloadUser

		// Return the decoded token
		return decoded
	} catch (err) {
		if (err instanceof JsonWebTokenError) {
			throw new InvalidArgumentError(`Invalid token: ${err.message}`)
		} else if (err instanceof NotBeforeError) {
			throw new InvalidArgumentError(`Token is not yet valid: ${err.message}`)
		} else if (err instanceof TokenExpiredError) {
			throw new InvalidArgumentError(`Token has expired: ${err.message}`)
		} else {
			throw new InvalidArgumentError(`Unknown error: ${(err as Error).message}`)
		}
	}
}
