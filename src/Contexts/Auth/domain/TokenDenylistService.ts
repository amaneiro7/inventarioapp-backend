import { type CacheRepository } from '../../Shared/domain/CacheRepository'

export class TokenDenylistService {
	private readonly prefix = 'denylist:'

	constructor(private readonly cacheRepository: CacheRepository) {}

	/**
	 * Añade un token a la denylist con un tiempo de expiración.
	 * @param token - El JWT a invalidar.
	 * @param expiresIn - El tiempo en segundos hasta que el token original expira.
	 */
	async addToDenylist(token: string, expiresIn: number): Promise<void> {
		const key = `${this.prefix}${token}`
		await this.cacheRepository.set(key, 'true', expiresIn)
	}

	/**
	 * Comprueba si un token está en la denylist.
	 * @param token - El JWT a verificar.
	 */
	async isDenylisted(token: string): Promise<boolean> {
		const key = `${this.prefix}${token}`
		const result = await this.cacheRepository.get(key)
		return result === 'true'
	}
}
