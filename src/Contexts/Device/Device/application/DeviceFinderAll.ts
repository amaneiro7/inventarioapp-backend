
import { type DevicePrimitives } from '../domain/Device'
import { type DeviceRepository } from '../domain/DeviceRepository'

export class DevicesFinderAll {
  constructor(private readonly repository: DeviceRepository) { }

  async search(): Promise<DevicePrimitives[]> {
    return await this.repository.searchAll()
  }
}
