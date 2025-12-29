export interface CacheInvalidator {
	invalidate(id?: string): Promise<void>
}
