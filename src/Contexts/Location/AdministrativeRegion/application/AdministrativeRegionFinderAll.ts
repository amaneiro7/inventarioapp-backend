import { GetAllBaseService } from '../../../Shared/methods/getAll.abstract'
import { type Criteria } from '../../../Shared/domain/criteria/Criteria'
import { type ResponseService } from '../../../Shared/domain/ResponseType'
import { type AdministrativeRegionDto } from '../domain//entity/AdministrativeRegion.dto'
import { type AdministrativeRegionRepository } from '../domain/repository/AdministrativeRegionRepository'

/**
 * Service to find all administrative regions based on provided criteria.
 * Extends GetAllBaseService for common pagination and response handling.
 */
export class AdministrativeRegionFinderAll extends GetAllBaseService<AdministrativeRegionDto> {
	private readonly administrativeRegionRepository: AdministrativeRegionRepository
	constructor({
		administrativeRegionRepository
	}: {
		administrativeRegionRepository: AdministrativeRegionRepository
	}) {
		super()
		this.administrativeRegionRepository = administrativeRegionRepository
	}

	/**
	 * Runs the service to retrieve administrative regions.
	 * @param {Criteria} criteria - The criteria for searching, filtering, and pagination.
	 * @returns {Promise<ResponseService<AdministrativeRegionDto>>} A promise that resolves to a paginated response of administrative regions.
	 */
	async run(criteria: Criteria): Promise<ResponseService<AdministrativeRegionDto>> {
		const { data, total } = await this.administrativeRegionRepository.searchAll(criteria)
		return this.response({
			data,
			total,
			pageNumber: criteria.pageNumber,
			pageSize: criteria.pageSize
		})
	}
}
