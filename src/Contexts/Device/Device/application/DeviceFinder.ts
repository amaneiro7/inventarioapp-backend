import { DeviceDoesNotExistError } from '../domain/DeviceDoesNotExistError'
import { DeviceId } from '../domain/DeviceId'
import { type DeviceRepository } from '../domain/DeviceRepository'
import { type Nullable } from '../../../Shared/domain/Nullable'
import { type DeviceDto } from '../domain/Device.dto'

export class DeviceFinder {
	private readonly deviceRepository: DeviceRepository
	constructor({ deviceRepository }: { deviceRepository: DeviceRepository }) {
		this.deviceRepository = deviceRepository
	}

	async run(params: { id: string }): Promise<Nullable<DeviceDto>> {
		const { id } = params
		const deviceId = new DeviceId(id).value

		const device = await this.deviceRepository.searchById(deviceId)

		if (!device) {
			throw new DeviceDoesNotExistError(id.toString())
		}

		return device
	}
}
