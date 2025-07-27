/** Represents aggregated data for a specific OS architecture. */
export interface ArqData {
	name: string
	count: number
}

/** Represents the fully aggregated data for an Operating System, including a breakdown by architecture. */
export interface AggregatedOSData {
	name: string
	count: number
	arq: ArqData[]
}

/**
 * @abstract class CountTotalOperatingSystemRepository
 * @description Defines the contract for a repository that provides total OS counts grouped by architecture.
 */
export abstract class CountTotalOperatingSystemRepository {
	/**
	 * @abstract
	 * @method run
	 * @description Retrieves the total count of operating systems grouped by OS name and architecture.
	 * @returns {Promise<AggregatedOSData[]>} A promise that resolves to an array of aggregated OS data.
	 */
	abstract run(): Promise<AggregatedOSData[]>
}
