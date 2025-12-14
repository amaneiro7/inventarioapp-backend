import { sign, SignOptions, type JwtPayload } from 'jsonwebtoken'
import { randomUUID } from 'crypto'
import { config } from '../../Shared/infrastructure/config'

import { type User } from '../../User/user/domain/entity/User.dto' // Use User.dto
import { type Primitives } from '../../Shared/domain/value-object/Primitives'
import { type RoleId } from '../../User/Role/domain/RoleId'
import { type UserId } from '../../User/user/domain/valueObject/UserId' // Corrected path for UserId
import { type EmployeeId } from '../../employee/Employee/domain/valueObject/EmployeeId' // Import EmployeeId
import { type PasswordChangeAt } from '../../User/user/domain/valueObject/PasswordChangeAt'
import { type PasswordNeverExpires } from '../../User/user/domain/valueObject/PasswordNeverExpires'
import { type CargoId } from '../../employee/Cargo/domain/valueObject/CargoId'
import { type DepartmentId } from '../../employee/IDepartment/DepartmentId'

export interface Tokens {
	accessToken: string
	refreshToken: string
}

type JwtPayloadPurposes = 'access' | 'refresh' | 'change-password' | undefined

/**
 * @interface UserTokenAttributes
 * @description Define los atributos mínimos necesarios del usuario para generar un token,
 * incluyendo los atributos de negocio requeridos por el middleware hasPermission (ABAC).
 */
export interface UserTokenAttributes extends Pick<User, 'id' | 'employeeId' | 'roleId'> {
	cargoId: string // ATRIBUTO REQUERIDO PARA ABAC
	departamentoId: string // ATRIBUTO REQUERIDO PARA ABAC
}

/**
 * @interface JwtPayloadUser
 * @extends JwtPayload
 * @description Define la estructura completa del payload del JWT para tokens de usuario.
 * Incluye los atributos de negocio 'cargoId' y 'departamentoId' para la resolución de políticas de acceso (ABAC).
 */
export interface JwtPayloadUser extends JwtPayload {
	sub: Primitives<UserId> // User ID
	employeeId: Primitives<EmployeeId> // Associated Employee ID
	passwordChangeAt: Primitives<PasswordChangeAt>
	passwordNeverExpires: Primitives<PasswordNeverExpires> // <--- CAMBIO: Campo añadido}
	roleId: Primitives<RoleId>
	cargoId: Primitives<CargoId> | null
	departamentoId: Primitives<DepartmentId> | null
	vicepresidenciaId: Primitives<DepartmentId> | null
	vicepresidenciaEjecutivaId: Primitives<DepartmentId> | null
	directivaId: Primitives<DepartmentId> | null
	iat: number
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
 * @param {Pick<User, 'id' | 'employeeId' | 'roleId'>} params.payload - User data to include in the token.
 * @param {string} params.secret - The secret key for signing the token.
 * @param {string} params.expiresIn - The expiration time for the token (e.g., '1h', '7d').
 * @param {string} [params.jti] - Optional JWT ID, typically used for refresh tokens.
 * @returns {string} The generated JWT string.
 */
function generateToken<
	T extends Pick<User, 'id' | 'employeeId' | 'roleId' | 'employee' | 'passwordChangeAt' | 'passwordNeverExpires'>
>({
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
	const { id, employeeId, roleId, employee, passwordChangeAt, passwordNeverExpires } = payload // Updated destructuring
	const { cargoId, departamentoId, directivaId, vicepresidenciaEjecutivaId, vicepresidenciaId } = employee
	const tokenPayload: JwtPayloadUser = {
		sub: id,
		employeeId,
		roleId: String(roleId),
		cargoId,
		directivaId,
		vicepresidenciaEjecutivaId,
		vicepresidenciaId,
		departamentoId,
		passwordChangeAt,
		passwordNeverExpires,
		iat: Math.floor(Date.now()) / 1000,
		iss: issuer, // Issuer
		...(purpose && { purpose }), // Añadir propósito si se proporciona
		jti
	}
	return sign(tokenPayload, secret, { expiresIn })
}

/**
 * @function generateAccessToken
 * @description Generates an access token for a user.
 * @param {Pick<User, 'id' | 'employeeId' | 'roleId'>} user - The user data to be included in the token payload.
 * @returns {string} The generated access token.
 */
export function generateAccessToken(
	user: Pick<User, 'id' | 'employeeId' | 'roleId' | 'employee' | 'passwordChangeAt' | 'passwordNeverExpires'>
): string {
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
 * @param {Pick<User, 'id' | 'employeeId' | 'roleId'>} user - The user data to be included in the token payload.
 * @returns {string} The generated refresh token.
 */
export function generateRefreshToken(
	user: Pick<User, 'id' | 'employeeId' | 'roleId' | 'employee' | 'passwordChangeAt' | 'passwordNeverExpires'>
): string {
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
 * @param {Pick<User, 'id' | 'employeeId' | 'roleId'>} user - The user data.
 * @returns {string} The generated temporary token.
 */
export function generateChangePasswordToken(
	user: Pick<User, 'id' | 'employeeId' | 'roleId' | 'employee' | 'passwordChangeAt' | 'passwordNeverExpires'>
): string {
	const expiresIn: SignOptions['expiresIn'] = '10m' // Corta duración, ej. 10 minutos
	return generateToken({
		payload: user,
		secret: accessTokenSecret, // Reutilizamos el secret del access token o podríamos usar uno nuevo
		expiresIn,
		purpose: 'change-password'
	})
}
