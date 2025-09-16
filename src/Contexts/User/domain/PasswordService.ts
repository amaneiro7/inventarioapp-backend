import bcrypt from 'bcrypt'
import { InvalidCredentialsError } from '../../../Auth/domain/InvalidCredentialsError'

/**
 * @description Provides utility methods for hashing and comparing passwords.
 */
export class PasswordService {
	/**
	 * @description Hashes a plain-text password using bcrypt.
	 * @param {string} password The plain-text password to hash.
	 * @returns {string} The hashed password.
	 */
	static hash(password: string): string {
		const saltRounds = 10
		return bcrypt.hashSync(password, saltRounds)
	}

	/**
	 * @description Compares a plain-text password with a hashed password.
	 * @param {string} password The plain-text password.
	 * @param {string} hash The hashed password to compare against.
	 * @throws {InvalidCredentialsError} If the password does not match the hash.
	 */
	static compare(password: string, hash: string): void {
		const isMatch = bcrypt.compareSync(password, hash)
		if (!isMatch) {
			throw new InvalidCredentialsError()
		}
	}
}
