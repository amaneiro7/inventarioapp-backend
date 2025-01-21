import { type DevicePrimitives } from '../domain/Device'
import { type DeviceRepository } from '../domain/DeviceRepository'

export class DevicesFinderAll {
	constructor(private readonly deviceRepository: DeviceRepository) {}

	async run(): Promise<DevicePrimitives[]> {
		return await this.deviceRepository.searchAll()
	}
}
