import { type CargoPrimitives } from '../domain/Cargo'
import { type CargoRepository } from '../domain/CargoRepository'

export class CargoFinderAll {
	constructor(private readonly cargoRepository: CargoRepository) {}

	async run(): Promise<CargoPrimitives[]> {
		return await this.cargoRepository.searchAll()
	}
}
