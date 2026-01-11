import { type CacheService } from '../../domain/CacheService'
import { type CacheInvalidator } from '../../domain/repository/CacheInvalidator'

export class GenericCacheInvalidator implements CacheInvalidator {
	constructor(
		private readonly cache: CacheService,
		private readonly cacheKey: string
	) {}

	async invalidate(id?: string): Promise<void> {
		if (id) {
			// Estrategia Específica: Ejecutamos en paralelo para optimizar el tiempo de respuesta
			await Promise.all([
				// 1. Invalidamos búsquedas completas
				this.cache.removeCachedData({ cacheKey: `${this.cacheKey}:all` }),
				// 2. Invalidamos todas las listas
				this.cache.removeCachedData({ cacheKey: `${this.cacheKey}:lists:*` }),
				this.cache.removeCachedData({ cacheKey: `${this.cacheKey}:matching:*` }),
				// 3. Invalidamos todos los dashboards
				this.cache.removeCachedData({ cacheKey: `${this.cacheKey}:dashboard:*` }),
				// 4. Invalidamos búsquedas por nombre
				this.cache.removeCachedData({ cacheKey: `${this.cacheKey}:name:*` }),
				// 5. Invalidamos el detalle específico
				this.cache.removeCachedData({ cacheKey: `${this.cacheKey}:id:${id}` }),
				// 5. Invalidamos el detalle específico
				this.cache.removeCachedData({ cacheKey: `${this.cacheKey}:key:${id}` })
			])
		} else {
			// Estrategia Global:
			await this.cache.removeCachedData({ cacheKey: `${this.cacheKey}*` })
		}
	}
}
