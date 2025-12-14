/**
 * @enum TimeTolive
 * @description Defines standard time-to-live (TTL) durations for cache entries in seconds.
 * The values are increased to leverage caching more effectively, as the system
 * has a robust cache invalidation mechanism upon data modification.
 */
export enum TimeTolive {
	/** 10 minutes */
	TOO_SHORT = 60 * 10,
	/** 1 hour */
	SHORT = 60 * 60,
	/** 12 hours */
	MEDIUM = 60 * 60 * 12,
	/** 7 days */
	LONG = 60 * 60 * 24 * 7,
	/** 30 days */
	VERY_LONG = 60 * 60 * 24 * 30
}

/**
 * @interface CacheRepository
 * @description Defines the contract for any cache storage implementation.
 * This interface abstracts the underlying cache mechanism (e.g., Redis, in-memory).
 */
export abstract class CacheRepository {
	/**
	 * @method get
	 * @description Retrieves a value from the cache by its key.
	 * @param {string} key - The unique key of the cached item.
	 * @returns {Promise<string | null>} A promise that resolves to the cached string value, or null if not found.
	 */
	abstract get(key: string): Promise<string | null>

	/**
	 * @method set
	 * @description Stores a value in the cache with a specified key and time-to-live (TTL).
	 * @param {string} key - The unique key for the item.
	 * @param {string} value - The string value to store.
	 * @param {number} ex - The time-to-live for the item in seconds.
	 * @returns {Promise<void>} A promise that resolves when the item is successfully stored.
	 */
	abstract set(key: string, value: string, ex?: TimeTolive): Promise<void>

	/**
	 * @method del
	 * @description Deletes a specific item from the cache by its key.
	 * @param {string} key - The key of the item to delete.
	 * @returns {Promise<void>} A promise that resolves when the item is successfully deleted.
	 */
	abstract del(key: string): Promise<void>

	/**
	 * @method delByPattern
	 * @description Deletes multiple items from the cache that match a given pattern.
	 * This is typically used for wildcard invalidation (e.g., 'prefix:*').
	 * @param {string} pattern - The pattern to match keys for deletion.
	 * @returns {Promise<void>} A promise that resolves when matching items are successfully deleted.
	 */
	abstract delByPattern(pattern: string): Promise<void>

	abstract close(): Promise<void>

	abstract connect(): Promise<void>
}
