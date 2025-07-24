import { type TimeTolive, type CacheRepository } from './CacheRepository'
import { type Criteria } from './criteria/Criteria'

/**
 * @interface GetCachedDataOptions
 * @description Defines the options for retrieving data from the cache.
 * @property {string} cacheKey - The base key for the cache entry (e.g., 'brands').
 * @property {Criteria} [criteria] - Optional criteria object to generate a unique hash for the cache key.
 * @property {TimeTolive} [ex] - Optional time-to-live for the cache entry.
 * @property {() => Promise<T>} fetchFunction - A function to call if the data is not found in the cache.
 */
interface GetCachedDataOptions<T> {
	cacheKey: string
	criteria?: Criteria
	ex?: TimeTolive
	fetchFunction: () => Promise<T>
}

/**
 * @class CacheService
 * @description Provides a high-level interface for caching operations, abstracting the underlying
 * cache repository. Handles serialization, deserialization, and error logging.
 */
export class CacheService {
	/**
	 * @constructor
	 * @param {CacheRepository} cacheRepository - The concrete implementation of the cache storage (e.g., Redis).
	 */
	private readonly cacheRepository: CacheRepository
	constructor({ cacheRepository }: { cacheRepository: CacheRepository }) {
		this.cacheRepository = cacheRepository
	}

	/**
	 * @method getCachedData
	 * @description Attempts to retrieve data from the cache. If not found, it executes a fetch function,
	 * caches the result, and then returns it. Handles serialization/deserialization and logs cache errors.
	 * @template T - The type of data to be cached.
	 * @param {GetCachedDataOptions<T>} options - The options for the cache operation.
	 * @returns {Promise<T>} A promise that resolves to the cached or fetched data.
	 */
	async getCachedData<T>(options: GetCachedDataOptions<T>): Promise<T> {
		const { cacheKey, criteria, fetchFunction, ex } = options

		// Generate the final unique cache key, incorporating criteria hash if provided.
		const finalCacheKey = this.generaCacheKeyFromCriteriaPattern({
			cacheKey,
			criteria
		})

		try {
			const cachedData = await this.cacheRepository.get(finalCacheKey)
			if (cachedData) {
				// Attempt to parse the cached string data back into its original type.
				return JSON.parse(cachedData) as T
			}
		} catch (error) {
			// Log the error but do not prevent the application from fetching fresh data.
			console.error(`CacheService: Error retrieving or parsing data for key ${finalCacheKey}:`, error)
		}

		// If cache miss or cache error, fetch data from the original source.
		const data = await fetchFunction()

		// Attempt to set the newly fetched data in cache.
		await this.setCachedData({ cacheKey: finalCacheKey, data, ex })

		return data
	}

	/**
	 * @method setCachedData
	 * @description Stores data in the cache with a specified key and optional time-to-live.
	 * Handles serialization of the data to a string format.
	 * @template T - The type of data to be cached.
	 * @param {object} params - The parameters for setting cache data.
	 * @param {string} params.cacheKey - The unique key for the cache entry.
	 * @param {T} params.data - The data to store in the cache.
	 * @param {TimeTolive} [params.ex] - Optional time-to-live for the cache entry.
	 * @returns {Promise<void>} A promise that resolves when the data is successfully stored.
	 */
	async setCachedData<T>({ cacheKey, data, ex }: { cacheKey: string; data: T; ex?: TimeTolive }): Promise<void> {
		try {
			// Serialize the data to a JSON string before storing.
			await this.cacheRepository.set(cacheKey, JSON.stringify(data), ex)
		} catch (error) {
			console.error(`CacheService: Error setting data for key ${cacheKey}:`, error)
		}
	}

	/**
	 * @method removeCachedData
	 * @description Removes one or more entries from the cache.
	 * Supports wildcard pattern matching for cache keys (e.g., 'prefix:*').
	 * @param {object} params - The parameters for removing cache data.
	 * @param {string} params.cacheKey - The key or pattern of keys to remove.
	 * @returns {Promise<void>} A promise that resolves when the data is successfully removed.
	 */
	async removeCachedData({ cacheKey }: { cacheKey: string }): Promise<void> {
		try {
			// If the cacheKey ends with a wildcard, use delByPattern; otherwise, delete the specific key.
			if (cacheKey.endsWith('*')) {
				await this.cacheRepository.delByPattern(cacheKey)
			} else {
				await this.cacheRepository.del(cacheKey)
			}
		} catch (error) {
			console.error(`CacheService: Error removing data for key ${cacheKey}:`, error)
		}
	}

	/**
	 * @private
	 * @method generaCacheKeyFromCriteriaPattern
	 * @description Generates a unique cache key based on a base key and optional Criteria.
	 * If Criteria is provided, its hash is appended to the base key.
	 * @param {object} params - The parameters for key generation.
	 * @param {string} params.cacheKey - The base cache key.
	 * @param {Criteria} [params.criteria] - Optional Criteria object.
	 * @returns {string} The final, unique cache key.
	 */
	private generaCacheKeyFromCriteriaPattern({
		cacheKey,
		criteria
	}: {
		cacheKey: string
		criteria?: Criteria
	}): string {
		// If no criteria are provided, the base cacheKey is used as is.
		if (!criteria) {
			return cacheKey
		}

		// If criteria are provided, append their unique hash to the base cacheKey.
		// The hash is generated by the Criteria class itself, ensuring consistency.
		return `${cacheKey}-Filter:${criteria.hash()}`
	}
}
