import { Directiva } from '../domain/Directiva'
import { CreateDirectivaUseCase } from '../domain/CreatorDirectivaUseCase'
import { type CargoRepository } from '../../Cargo/domain/CargoRepository'
import { type DepartmentRepository } from '../../IDepartment/DepartmentRepository'
import { type DirectivaDto, type DirectivaParams } from '../domain/Directiva.dto'

/**
 * @description Use case for creating a new Directiva entity.
 */
export class DirectivaCreator {
	private readonly createDirectivaUseCase: CreateDirectivaUseCase
	private readonly directivaRepository: DepartmentRepository<DirectivaDto>
	private readonly cargoRepository: CargoRepository

	constructor(dependencies: {
		directivaRepository: DepartmentRepository<DirectivaDto>
		cargoRepository: CargoRepository
	}) {
		this.cargoRepository = dependencies.cargoRepository
		this.directivaRepository = dependencies.directivaRepository
		this.createDirectivaUseCase = new CreateDirectivaUseCase(this.directivaRepository, this.cargoRepository)
	}

	/**
	 * @description Executes the Directiva creation process.
	 * @param {{ params: DirectivaParams }} data The parameters for creating the Directiva.
	 * @returns {Promise<void>} A promise that resolves when the Directiva is successfully created.
	 */
	async run({ params }: { params: DirectivaParams }): Promise<void> {
		const { name, cargos } = params
		const uniqueCargos = Array.from(new Set(cargos))

		await this.createDirectivaUseCase.execute({ name, cargos: uniqueCargos })

		const directiva = Directiva.create({ name, cargos: uniqueCargos })

		await this.directivaRepository.save(directiva.toPrimitive())
	}
}
