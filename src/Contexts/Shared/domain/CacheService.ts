import { type TimeTolive, type CacheRepository } from './CacheRepository'
import { createHash } from 'node:crypto'
import { type Criteria } from './criteria/Criteria'

export class CacheService {
	constructor(private readonly cacheRepository: CacheRepository) {}

	async getCachedData<T>({
		cacheKey,
		criteria,
		fetchFunction,
		ex
	}: {
		cacheKey: string
		criteria?: Criteria
		ex?: TimeTolive
		fetchFunction: () => Promise<T>
	}) {
		const key = this.generaCacheKeyFromCriteriaPattern({
			cacheKey,
			criteria
		})
		try {
			const cache = await this.cacheRepository.get(key)
			if (cache) {
				return JSON.parse(cache)
			}
		} catch (error) {
			console.error('Cache service failed: ', error)
		}
		// If cache fails, fetch data from the database
		const data = await fetchFunction()

		await this.setCachedData({ cacheKey: key, data, ex })
		return data
	}

	async setCachedData<T>({
		cacheKey,
		data,
		ex
	}: {
		cacheKey: string
		data: T
		ex?: TimeTolive
	}) {
		try {
			await this.cacheRepository.set(cacheKey, JSON.stringify(data), ex)
		} catch (error) {
			console.error('Setting cache failed: ', error)
		}
	}

	async removeCachedData<T>({ cacheKey }: { cacheKey: string }) {
		try {
			await this.cacheRepository.del(cacheKey)
		} catch (error) {
			console.error('Deleting cache failed: ', error)
		}
	}

	private generaCacheKeyFromCriteriaPattern({
		cacheKey,
		criteria
	}: {
		cacheKey: string
		criteria?: Criteria
	}): string {
		if (!criteria) {
			return cacheKey
		}

		const queryString = JSON.stringify(criteria.toPrimitives())

		const hash = createHash('sha256').update(queryString).digest('hex')

		return `${cacheKey}-Filter:${hash}`
	}
}
