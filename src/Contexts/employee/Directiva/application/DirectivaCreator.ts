import { Directiva } from '../domain/Directiva'
import { CreateDirectivaUseCase } from '../domain/CreatorDirectivaUseCase'
import { type CargoRepository } from '../../Cargo/domain/CargoRepository'
import { type DepartmentRepository } from '../../IDepartment/DepartmentRepository'
import { type DirectivaDto, type DirectivaParams } from '../domain/Directiva.dto'

export class DirectivaCreator {
	private readonly createDirectivaUseCase: CreateDirectivaUseCase
	private readonly directivaRepository: DepartmentRepository<DirectivaDto>
	private readonly cargoRepository: CargoRepository
	constructor({
		cargoRepository,
		directivaRepository
	}: {
		directivaRepository: DepartmentRepository<DirectivaDto>
		cargoRepository: CargoRepository
	}) {
		this.cargoRepository = cargoRepository
		this.directivaRepository = directivaRepository
		this.createDirectivaUseCase = new CreateDirectivaUseCase(this.directivaRepository, this.cargoRepository)
	}

	async run({ params }: { params: DirectivaParams }): Promise<void> {
		const { name, cargos } = params
		const uniqueCargos = Array.from(new Set(cargos))

		await this.createDirectivaUseCase.execute({ name, cargos: uniqueCargos })

		const directiva = Directiva.create({ name, cargos: uniqueCargos })

		await this.directivaRepository.save(directiva.toPrimitive())
	}
}
