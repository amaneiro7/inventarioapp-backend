import { DeviceRepository } from "../../Device/domain/DeviceRepository"



export class Dashboard {
    constructor(private readonly repository: DeviceRepository) { }

    async run(): Promise<{}> {
        return await this.repository.searchAll()
    }

}