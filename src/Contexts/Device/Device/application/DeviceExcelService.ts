import type { Criteria } from '../../../Shared/domain/criteria/Criteria'
import type { DeviceRepository } from '../domain/repository/DeviceRepository'

/**
 * @description Service for generating an Excel file (Buffer) containing device data based on specified criteria.
 */
export class DeviceExcelService {
	private readonly deviceRepository: DeviceRepository

	constructor({ deviceRepository }: { deviceRepository: DeviceRepository }) {
		this.deviceRepository = deviceRepository
	}

	/**
	 * @description Executes the Excel file generation process.
	 * @param {Criteria} criteria The criteria object containing filters and orderings.
	 * @returns {Promise<Buffer>} A promise that resolves to a Buffer containing the Excel file data.
	 */
	async run(criteria: Criteria): Promise<Buffer> {
		// Creamos un nuevo Criteria sin paginación (limit/offset) para descargar todo
		const criteriaAll = criteria.withoutPagination()
		return this.deviceRepository.donwload(criteriaAll)
	}
}
