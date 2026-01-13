import { type CacheInvalidator } from '../../../../Shared/domain/repository/CacheInvalidator'

export type LocationMonitoringCacheInvalidator = CacheInvalidator & {
	/**
	 * @method invalidateActiveIpCache
	 * @description Invalidates only the cache related to the list of devices with active IPs.
	 * This prevents clearing the entire dashboard cache when only the monitoring list changes.
	 */
	invalidateActiveIpCache(): Promise<void>
}
