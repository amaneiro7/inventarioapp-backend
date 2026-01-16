import { type CacheService } from '../../domain/CacheService'
import { type CacheInvalidator } from '../../domain/repository/CacheInvalidator'

export class GenericCacheInvalidator implements CacheInvalidator {
	constructor(
		private readonly cache: CacheService,
		private readonly cacheKey: string
	) {}

	async invalidate(params?: string | Record<string, string | number | null | undefined>): Promise<void> {
		if (params) {
			const promises: Promise<void>[] = [
				// 1. Invalidamos búsquedas completas y listas (siempre se invalidan al haber cambios)
				this.cache.removeCachedData({ cacheKey: `${this.cacheKey}:all` }),
				this.cache.removeCachedData({ cacheKey: `${this.cacheKey}:lists:*` }),
				this.cache.removeCachedData({ cacheKey: `${this.cacheKey}:matching:*` }),
				this.cache.removeCachedData({ cacheKey: `${this.cacheKey}:dashboard:*` })
			]

			if (typeof params === 'string') {
				// Comportamiento legacy: Mantenemos la invalidación amplia si solo se pasa un ID string
				promises.push(this.cache.removeCachedData({ cacheKey: `${this.cacheKey}:name:${params}` }))
				promises.push(this.cache.removeCachedData({ cacheKey: `${this.cacheKey}:id:${params}` }))
				promises.push(this.cache.removeCachedData({ cacheKey: `${this.cacheKey}:key:${params}` }))
				promises.push(this.cache.removeCachedData({ cacheKey: `${this.cacheKey}:ids:${params}` }))
			} else {
				// Comportamiento granular: Invalidamos solo las propiedades enviadas
				for (const [key, value] of Object.entries(params)) {
					if (value) {
						promises.push(this.cache.removeCachedData({ cacheKey: `${this.cacheKey}:${key}:${value}` }))
					}
				}
			}

			await Promise.all(promises)
		} else {
			// Estrategia Global:
			await this.cache.removeCachedData({ cacheKey: `${this.cacheKey}*` })
		}
	}
}
