import { type CacheService } from '../../domain/CacheService'
import { type CacheInvalidator } from '../../domain/repository/CacheInvalidator'

export class GenericCacheInvalidator implements CacheInvalidator {
	constructor(
		private readonly cache: CacheService,
		private readonly cacheKey: string
	) {}

	async invalidate(id?: string): Promise<void> {
		if (id) {
			// Estrategia Específica:
			// 1. Invalidamos todas las listas
			await this.cache.removeCachedData({ cacheKey: `${this.cacheKey}:lists:*` })
			// 1. Invalidamos todas los dashboard
			await this.cache.removeCachedData({ cacheKey: `${this.cacheKey}:dashboard:*` })
			// 2. Invalidamos búsquedas por nombre
			await this.cache.removeCachedData({ cacheKey: `${this.cacheKey}:name:*` })
			// 3. Invalidamos el detalle específico
			await this.cache.removeCachedData({ cacheKey: `${this.cacheKey}:id:${id}` })
		} else {
			// Estrategia Global:
			await this.cache.removeCachedData({ cacheKey: `${this.cacheKey}*` })
		}
	}
}
