export interface BrandCacheInvalidator {
	invalidateBrandCache(): Promise<void>
}
