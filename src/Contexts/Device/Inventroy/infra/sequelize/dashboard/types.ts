/**
 * @interface RawHDDData
 * @description Represents the raw data structure returned from the `countTotalHDD` query.
 */
export interface RawHDDData {
	hddCapacityName: string
	hddTypeName: string
	count: string | number
}

/**
 * @interface HDDTypeData
 * @description Represents the aggregated data for a specific HDD type, including its name and count.
 */
export interface HDDTypeData {
	name: string
	count: number
}

/**
 * @interface AggregatedHDDData
 * @description Represents the fully aggregated HDD data, including the capacity name, total count,
 * and a breakdown by HDD type.
 */
export interface AggregatedHDDData {
	name: string
	count: number
	hddType: HDDTypeData[]
}

/**
 * @interface RawStatusCountData
 * @description Represents the raw data structure for device counts by status.
 */
export interface RawStatusCountData {
	name: string
	count: string | number
}

/**
 * @interface RawBrandCountData
 * @description Represents the raw data structure for device counts by brand, model, and site type.
 */
export interface RawBrandCountData {
	categoryName: string
	brandName: string
	modelName: string
	typeOfSiteName: string
	count: string | number
}

/**
 * @interface TypeOfSiteAggregatedData
 * @description Represents aggregated data for a type of site, including its name and count.
 */
export interface TypeOfSiteAggregatedData {
	name: string
	count: number
}

/**
 * @interface ModelAggregatedData
 * @description Represents aggregated data for a device model, including its name, category, count,
 * and a breakdown by site type.
 */
export interface ModelAggregatedData {
	name: string
	category: string
	count: number
	typeOfSite: TypeOfSiteAggregatedData[]
}

/**
 * @interface AggregatedBrandData
 * @description Represents the fully aggregated data for a brand, including its name, total count,
 * and a breakdown by model.
 */
export interface AggregatedBrandData {
	name: string
	count: number
	model: ModelAggregatedData[]
}
