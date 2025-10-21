import { sign, SignOptions, type JwtPayload } from 'jsonwebtoken'
import { randomUUID } from 'crypto'
import { config } from '../../Shared/infrastructure/config'

import { type UserPrimitives } from '../../User/user/domain/User.dto' // Use User.dto
import { type Primitives } from '../../Shared/domain/value-object/Primitives'
import { type RoleId } from '../../User/Role/domain/RoleId'
import { type UserId } from '../../User/user/domain/valueObject/UserId' // Corrected path for UserId
import { type EmployeeId } from '../../employee/Employee/domain/valueObject/EmployeeId' // Import EmployeeId

export interface Tokens {
	accessToken: string
	refreshToken: string
}

/**
 * @interface JwtPayloadUser
 * @extends JwtPayload
 * @description Defines the structure of the JWT payload for user tokens.
 * It includes standard claims like 'sub', 'iss', 'exp', and custom claims like 'email', 'roleId'.
 * It includes standard claims like 'sub', 'iss', 'exp', and custom claims like 'employeeId', 'roleId'.
 * The 'jti' claim is used for refresh token rotation to ensure a token is used only once.
 */
export interface JwtPayloadUser extends JwtPayload {
	sub: Primitives<UserId> // User ID
	employeeId: Primitives<EmployeeId> // Associated Employee ID
	roleId: Primitives<RoleId>
	iss: 'SoporteTecnicoBNC' // Issuer of the token
	jti?: string // JWT ID for refresh token rotation
}

const { accessTokenExpiresIn, refreshTokenExpiresIn, accessTokenSecret, refreshTokenSecret } = config
const issuer = 'SoporteTecnicoBNC'

/**
 * @private
 * @function generateToken
 * @description Generates a JWT with the given payload, secret, and expiration.
 * @param {object} params - The parameters for token generation.
 * @param {Pick<UserPrimitives, 'id' | 'employeeId' | 'roleId'>} params.payload - User data to include in the token.
 * @param {string} params.secret - The secret key for signing the token.
 * @param {string} params.expiresIn - The expiration time for the token (e.g., '1h', '7d').
 * @param {string} [params.jti] - Optional JWT ID, typically used for refresh tokens.
 * @returns {string} The generated JWT string.
 */
function generateToken({
	payload,
	secret,
	expiresIn,
	jti
}: {
	payload: Pick<UserPrimitives, 'id' | 'employeeId' | 'roleId'> // Updated payload type
	secret: string
	expiresIn: SignOptions['expiresIn']
	jti?: string
}) {
	const { id, employeeId, roleId } = payload // Updated destructuring
	const tokenPayload: JwtPayloadUser = {
		sub: id,
		employeeId, // Added employeeId
		roleId,
		iss: issuer,
		...(jti && { jti })
	}
	return sign(tokenPayload, secret, { expiresIn })
}

/**
 * @function generateAccessToken
 * @description Generates an access token for a user.
 * @param {Pick<UserPrimitives, 'id' | 'employeeId' | 'roleId'>} user - The user data to be included in the token payload.
 * @returns {string} The generated access token.
 */
export function generateAccessToken(user: Pick<UserPrimitives, 'id' | 'employeeId' | 'roleId'>): string {
	const expiresIn: SignOptions['expiresIn'] = `${accessTokenExpiresIn}m`
	return generateToken({
		payload: user,
		secret: accessTokenSecret,
		expiresIn
	})
}

/**
 * @function generateRefreshToken
 * @description Generates a refresh token for a user, including a unique JTI (JWT ID) to prevent token reuse.
 * @param {Pick<UserPrimitives, 'id' | 'employeeId' | 'roleId'>} user - The user data to be included in the token payload.
 * @returns {string} The generated refresh token.
 */
export function generateRefreshToken(user: Pick<UserPrimitives, 'id' | 'employeeId' | 'roleId'>): string {
	const expiresIn: SignOptions['expiresIn'] = `${refreshTokenExpiresIn}d`
	return generateToken({
		payload: user,
		secret: refreshTokenSecret,
		expiresIn,
		jti: randomUUID()
	})
}
