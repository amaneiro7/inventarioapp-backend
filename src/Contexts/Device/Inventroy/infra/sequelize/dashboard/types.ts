/**
 * @file Defines the data structures and types for the inventory dashboard.
 * These interfaces ensure type safety across database queries, data transformations, and API responses.
 */

// --- HDD Data Types ---

/** Represents the raw, flat data structure returned from the HDD-related Sequelize query. */
export interface RawHDDData {
	hddCapacityName: string
	hddTypeName: string
	count: string | number
}

/** Represents aggregated data for a specific HDD type (e.g., SSD, NVMe). */
export interface HDDTypeData {
	name: string
	count: number
}

/** Represents the fully aggregated data for an HDD capacity, including a breakdown by type. */
export interface AggregatedHDDData {
	name: string
	count: number
	hddType: HDDTypeData[]
}

// --- Status Data Types ---

/** Represents the raw data for device counts by status from the Sequelize query. */
export interface RawStatusCountData {
	name: string
	count: string | number
}

/** Represents a single, processed status entry with a numeric count. */
export interface StatusCountData {
	name: string
	count: number
}

// --- Brand Data Types ---

/** Represents the raw, flat data for device counts by brand, model, and site type. */
export interface RawBrandCountData {
	categoryName: string
	brandName: string
	modelName: string
	typeOfSiteName: string
	count: string | number
}

/** Represents aggregated data for a type of site within a model's context. */
export interface TypeOfSiteAggregatedData {
	name: string
	count: number
}

/** Represents aggregated data for a device model, including a breakdown by site type. */
export interface ModelAggregatedData {
	name: string
	category: string
	count: number
	typeOfSite: TypeOfSiteAggregatedData[]
}

/** Represents the fully aggregated data for a brand, including a breakdown by model. */
export interface AggregatedBrandData {
	name: string
	count: number
	model: ModelAggregatedData[]
}
