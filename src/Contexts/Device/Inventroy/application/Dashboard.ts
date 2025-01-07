import { DeviceRepository } from "../../Device/domain/DeviceRepository"

export class Dashboard {
    constructor(private readonly deviceRepository: DeviceRepository) { }

    async run(): Promise<{}> {
        return await this.deviceRepository.searchAll()
    }

}