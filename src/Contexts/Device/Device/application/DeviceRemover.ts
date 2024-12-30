import { DeviceDoesNotExistError } from '../domain/DeviceDoesNotExistError'
import { DeviceId } from '../domain/DeviceId'
import { type DeviceRepository } from '../domain/DeviceRepository'

export class DeviceRemover {
  constructor(private readonly repository: DeviceRepository) { }

  async run(params: { id: string }): Promise<void> {
    const { id } = params
    const deviceId = new DeviceId(id).toString()

    const device = await this.repository.searchById(deviceId)
    if (device === null) {
      throw new DeviceDoesNotExistError(id)
    }

    await this.repository.remove(deviceId)
  }
}
