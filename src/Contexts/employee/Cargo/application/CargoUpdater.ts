import { Cargo } from '../domain/Cargo'
import { CargoId } from '../domain/CargoId'
import { CargoDoesNotExistError } from '../domain/CargoDoesNotExistError'
import { UpdateCargoUseCase } from '../domain/UpdateCargoUseCase'
import { type DepartmentRepository } from '../../IDepartment/DepartmentRepository'
import { type CargoRepository } from '../domain/CargoRepository'
import { type CargoParams } from '../domain/Cargo.dto'
import { type DepartamentoDto } from '../../Departamento/domain/Departamento.dto'
import { type DirectivaDto } from '../../Directiva/domain/Directiva.dto'
import { type VicepresidenciaEjecutivaDto } from '../../VicepresidenciaEjecutiva/domain/VicepresidenciaEjecutiva.dto'
import { type VicepresidenciaDto } from '../../Vicepresidencia/domain/Vicepresidencia.dto'

export class CargoUpdater {
	private readonly updateCargoUseCase: UpdateCargoUseCase
	private readonly cargoRepository: CargoRepository
	private readonly directivaRepository: DepartmentRepository<DirectivaDto>
	private readonly vicepresidenciaEjecutivaRepository: DepartmentRepository<VicepresidenciaEjecutivaDto>
	private readonly vicepresidenciaRepository: DepartmentRepository<VicepresidenciaDto>
	private readonly departamentoRepository: DepartmentRepository<DepartamentoDto>
	constructor({
		cargoRepository,
		departamentoRepository,
		directivaRepository,
		vicepresidenciaEjecutivaRepository,
		vicepresidenciaRepository
	}: {
		cargoRepository: CargoRepository
		directivaRepository: DepartmentRepository<DirectivaDto>
		vicepresidenciaEjecutivaRepository: DepartmentRepository<VicepresidenciaEjecutivaDto>
		vicepresidenciaRepository: DepartmentRepository<VicepresidenciaDto>
		departamentoRepository: DepartmentRepository<DepartamentoDto>
	}) {
		this.cargoRepository = cargoRepository
		this.departamentoRepository = departamentoRepository
		this.directivaRepository = directivaRepository
		this.vicepresidenciaEjecutivaRepository = vicepresidenciaEjecutivaRepository
		this.vicepresidenciaRepository = vicepresidenciaRepository

		this.updateCargoUseCase = new UpdateCargoUseCase({
			cargoRepository: this.cargoRepository,
			departamentoRepository: this.departamentoRepository,
			directivaRepository: this.directivaRepository,
			vicepresidenciaEjecutivaRepository: this.vicepresidenciaEjecutivaRepository,
			vicepresidenciaRepository: this.vicepresidenciaRepository
		})
	}

	async run({ id, params }: { id: string; params: Partial<CargoParams> }): Promise<void> {
		const cargoId = new CargoId(id)

		const cargo = await this.cargoRepository.searchById(cargoId.value)
		if (!cargo) {
			throw new CargoDoesNotExistError()
		}

		const cargoEntity = Cargo.fromPrimitives(cargo)

		await this.updateCargoUseCase.execute({
			entity: cargoEntity,
			params
		})

		await this.cargoRepository.save(cargoEntity.toPrimitive())
	}
}
