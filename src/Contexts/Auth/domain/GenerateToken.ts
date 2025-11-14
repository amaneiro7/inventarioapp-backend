import { sign, SignOptions, type JwtPayload } from 'jsonwebtoken'
import { randomUUID } from 'crypto'
import { config } from '../../Shared/infrastructure/config'

import { type UserPrimitives } from '../../User/user/domain/entity/User.dto' // Use User.dto
import { type Primitives } from '../../Shared/domain/value-object/Primitives'
import { type RoleId } from '../../User/Role/domain/RoleId'
import { type UserId } from '../../User/user/domain/valueObject/UserId' // Corrected path for UserId
import { type EmployeeId } from '../../employee/Employee/domain/valueObject/EmployeeId' // Import EmployeeId

export interface Tokens {
	accessToken: string
	refreshToken: string
}

type JwtPayloadPurposes = 'access' | 'refresh' | 'change-password' | undefined

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
	purpose?: JwtPayloadPurposes // Propósito del token
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
function generateToken<T extends Pick<UserPrimitives, 'id' | 'employeeId' | 'roleId'>>({
	payload,
	secret,
	expiresIn,
	jti,
	purpose
}: {
	payload: T
	secret: string
	expiresIn: SignOptions['expiresIn']
	purpose?: JwtPayloadPurposes
	jti?: string
}) {
	const { id, employeeId, roleId } = payload // Updated destructuring
	const tokenPayload: JwtPayloadUser = {
		sub: id,
		employeeId, // Added employeeId
		roleId,
		iss: issuer, // Issuer
		...(purpose && { purpose }), // Añadir propósito si se proporciona
		jti
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
		expiresIn,
		purpose: 'access'
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
		purpose: 'refresh',
		jti: randomUUID()
	})
}

/**
 * @function generateChangePasswordToken
 * @description Generates a short-lived, single-purpose token for forcing a password change.
 * @param {Pick<UserPrimitives, 'id' | 'employeeId' | 'roleId'>} user - The user data.
 * @returns {string} The generated temporary token.
 */
export function generateChangePasswordToken(user: Pick<UserPrimitives, 'id' | 'employeeId' | 'roleId'>): string {
	const expiresIn: SignOptions['expiresIn'] = '10m' // Corta duración, ej. 10 minutos
	return generateToken({
		payload: user,
		secret: accessTokenSecret, // Reutilizamos el secret del access token o podríamos usar uno nuevo
		expiresIn,
		purpose: 'change-password'
	})
}
