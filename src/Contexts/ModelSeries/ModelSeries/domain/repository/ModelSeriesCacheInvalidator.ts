export interface ModelSeriesCacheInvalidator {
	invalidateModelSeriesCache(): Promise<void>
}
