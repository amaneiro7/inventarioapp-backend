import { type CacheRepository } from "./CacheRepository"

export class CacheService {
    constructor(private readonly cacheRepository: CacheRepository) { }

    async getCachedData<T>(cacheKey: string, fetchFunction: () => Promise<T[]>) {
        try {
            const cache = await this.cacheRepository.get(cacheKey)
            if (cache) {
                return JSON.parse(cache)
            }
        } catch (error) {
            console.error('Cache service failed: ', error)
        }
        // If cache fails, fetch data from the database
        const result = await fetchFunction()

        await this.setCachedData(cacheKey, result)
        return result
    }

    async setCachedData<T>(cacheKey: string, data: T) {
        try {
            await this.cacheRepository.set(cacheKey, JSON.stringify(data))
        } catch (error) {
            console.error('Setting cache failed: ', error)
        }
    }

    async removeCachedData<T>(cacheKey: string) {
        try {
            await this.cacheRepository.del(cacheKey)
        } catch (error) {
            console.error('Deleting cache failed: ', error)
        }
    }
}
