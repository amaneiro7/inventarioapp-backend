import { type CacheRepository } from '../../Shared/domain/CacheRepository'

/**
 * @class TokenDenylistService
 * @description Manages a denylist for JWTs to handle token revocation, such as on logout or
 * when a refresh token is rotated. It uses a cache to temporarily store invalidated tokens
 * until they expire.
 */
export class TokenDenylistService {
	private readonly prefix = 'denylist:'

	constructor(private readonly cacheRepository: CacheRepository) {}

	/**
	 * @method addToDenylist
	 * @description Adds a token to the denylist with a specified expiration time.
	 * @param {string} token - The JWT to invalidate.
	 * @param {number} expiresIn - The time in seconds until the token naturally expires.
	 * @returns {Promise<void>}
	 */
	async addToDenylist(token: string, expiresIn: number): Promise<void> {
		const key = `${this.prefix}${token}`
		await this.cacheRepository.set(key, 'true', expiresIn)
	}

	/**
	 * @method isDenylisted
	 * @description Checks if a token is in the denylist.
	 * @param {string} token - The JWT to verify.
	 * @returns {Promise<boolean>} A promise that resolves to `true` if the token is denylisted, `false` otherwise.
	 */
	async isDenylisted(token: string): Promise<boolean> {
		const key = `${this.prefix}${token}`
		const result = await this.cacheRepository.get(key)
		return result === 'true'
	}
}
