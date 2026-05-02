import { type CacheRepository } from '../domain/CacheRepository'

/**
 * @description Caso de Uso para limpiar el caché.
 * Orquesta la lógica de limpieza sin importar el motor de persistencia (Redis, memoria, etc).
 */
export class CacheClearer {
	private readonly cacheRepository: CacheRepository

	constructor({ cacheRepository }: { cacheRepository: CacheRepository }) {
		this.cacheRepository = cacheRepository
	}

	async run(pattern?: string): Promise<void> {
		if (pattern) {
			await this.cacheRepository.delByPattern(pattern)
		} else {
			await this.cacheRepository.flushall()
		}
	}
}
