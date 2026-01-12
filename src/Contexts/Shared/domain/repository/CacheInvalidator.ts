export interface CacheInvalidator {
	invalidate(params?: string | Record<string, string | number | null | undefined>): Promise<void>
}
