import { type Criteria } from '../../../Shared/domain/criteria/Criteria'
import { type DevicePrimitives } from '../domain/Device'
import { type DeviceRepository } from '../domain/DeviceRepository'

export class DeviceSearchByCriteria {
	constructor(private readonly deviceRepository: DeviceRepository) {}

	async run(
		criteria: Criteria
	): Promise<{ total: number; data: DevicePrimitives[] }> {
		return await this.deviceRepository.matching(criteria)
	}
}
