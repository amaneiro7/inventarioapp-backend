import { CreateCargoUseCase } from '../domain/CreateCargoUseCase'
import { Cargo } from '../domain/entity/Cargo'
import { type DepartmentRepository } from '../../IDepartment/DepartmentRepository'
import { type CargoRepository } from '../domain/repository/CargoRepository'
import { type DepartamentoDto } from '../../Departamento/domain/Departamento.dto'
import { type CargoParams } from '../domain/entity/Cargo.dto'
import { type DirectivaDto } from '../../Directiva/domain/entity/Directiva.dto'
import { type VicepresidenciaEjecutivaDto } from '../../VicepresidenciaEjecutiva/domain/VicepresidenciaEjecutiva.dto'
import { type VicepresidenciaDto } from '../../Vicepresidencia/domain/Vicepresidencia.dto'

/**
 * @description Use case for creating a new Cargo entity.
 */
export class CargoCreator {
	private readonly createCargoUseCase: CreateCargoUseCase
	private readonly cargoRepository: CargoRepository
	private readonly directivaRepository: DepartmentRepository<DirectivaDto>
	private readonly vicepresidenciaEjecutivaRepository: DepartmentRepository<VicepresidenciaEjecutivaDto>
	private readonly vicepresidenciaRepository: DepartmentRepository<VicepresidenciaDto>
	private readonly departamentoRepository: DepartmentRepository<DepartamentoDto>

	constructor(dependencies: {
		cargoRepository: CargoRepository
		departamentoRepository: DepartmentRepository<DepartamentoDto>
		directivaRepository: DepartmentRepository<DirectivaDto>
		vicepresidenciaEjecutivaRepository: DepartmentRepository<VicepresidenciaEjecutivaDto>
		vicepresidenciaRepository: DepartmentRepository<VicepresidenciaDto>
	}) {
		this.cargoRepository = dependencies.cargoRepository
		this.departamentoRepository = dependencies.departamentoRepository
		this.directivaRepository = dependencies.directivaRepository
		this.vicepresidenciaEjecutivaRepository = dependencies.vicepresidenciaEjecutivaRepository
		this.vicepresidenciaRepository = dependencies.vicepresidenciaRepository

		this.createCargoUseCase = new CreateCargoUseCase({
			cargoRepository: this.cargoRepository,
			departamentoRepository: this.departamentoRepository,
			directivaRepository: this.directivaRepository,
			vicepresidenciaEjecutivaRepository: this.vicepresidenciaEjecutivaRepository,
			vicepresidenciaRepository: this.vicepresidenciaRepository
		})
	}

	/**
	 * @description Executes the cargo creation process.
	 * @param {{ params: CargoParams }} data The parameters for creating the cargo.
	 * @returns {Promise<void>} A promise that resolves when the cargo is successfully created.
	 */
	async run({
		params: { name, departamentos, directivas, vicepresidencias, vicepresidenciasEjecutivas }
	}: {
		params: CargoParams
	}): Promise<void> {
		const uniqueDepartamentos = Array.from(new Set(departamentos))
		const uniqueDirectivas = Array.from(new Set(directivas))
		const uniqueVicepresidencias = Array.from(new Set(vicepresidencias))
		const uniqueVicepresidenciasEjecutivas = Array.from(new Set(vicepresidenciasEjecutivas))

		await this.createCargoUseCase.execute({
			name,
			departamentos: uniqueDepartamentos,
			directivas: uniqueDirectivas,
			vicepresidencias: uniqueVicepresidencias,
			vicepresidenciasEjecutivas: uniqueVicepresidenciasEjecutivas
		})

		const cargo = Cargo.create({
			name,
			departamentos: uniqueDepartamentos,
			directivas: uniqueDirectivas,
			vicepresidencias: uniqueVicepresidencias,
			vicepresidenciasEjecutivas: uniqueVicepresidenciasEjecutivas
		})

		await this.cargoRepository.save(cargo.toPrimitives())
	}
}
