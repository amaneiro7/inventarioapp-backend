import { DeviceDoesNotExistError } from '../domain/DeviceDoesNotExistError'
import { DeviceId } from '../domain/DeviceId'

import { type DevicePrimitives } from '../domain/Device'
import { type DeviceRepository } from '../domain/DeviceRepository'
import { type Nullable } from '../../../Shared/domain/Nullable'

export class DeviceFinder {
	constructor(private readonly deviceRepository: DeviceRepository) {}

	async run(params: { id: string }): Promise<Nullable<DevicePrimitives>> {
		const { id } = params
		const deviceId = new DeviceId(id).value

		const device = await this.deviceRepository.searchById(deviceId)

		if (device === null) {
			throw new DeviceDoesNotExistError(id.toString())
		}

		return device
	}
}
