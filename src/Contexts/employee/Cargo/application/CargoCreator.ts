import { CreateCargoUseCase } from '../domain/CreateCargoUseCase'
import { Cargo } from '../domain/Cargo'
import { type DepartmentRepository } from '../../IDepartment/DepartmentRepository'
import { type CargoRepository } from '../domain/CargoRepository'
import { type DepartamentoDto } from '../../Departamento/domain/Departamento.dto'
import { type CargoParams } from '../domain/Cargo.dto'
import { type DirectivaDto } from '../../Directiva/domain/Directiva.dto'
import { type VicepresidenciaEjecutivaDto } from '../../VicepresidenciaEjecutiva/domain/VicepresidenciaEjecutiva.dto'
import { type VicepresidenciaDto } from '../../Vicepresidencia/domain/Vicepresidencia.dto'

export class CargoCreator {
	private readonly createCargoUseCase: CreateCargoUseCase
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

		this.createCargoUseCase = new CreateCargoUseCase({
			cargoRepository: this.cargoRepository,
			departamentoRepository: this.departamentoRepository,
			directivaRepository: this.directivaRepository,
			vicepresidenciaEjecutivaRepository: this.vicepresidenciaEjecutivaRepository,
			vicepresidenciaRepository: this.vicepresidenciaRepository
		})
	}

	async run({
		params: { name, departamentos, directivas, vicepresidencias, vicepresidenciasEjecutivas }
	}: {
		params: CargoParams
	}): Promise<void> {
		const departamentosSinDuplicados: CargoParams['departamentos'] = Array.from(new Set(departamentos))
		const directivasSinDuplicados: CargoParams['directivas'] = Array.from(new Set(directivas))
		const vicepresidenciasSinDuplicados: CargoParams['vicepresidencias'] = Array.from(new Set(vicepresidencias))
		const vicepresidenciasEjecutivasSinDuplicados: CargoParams['vicepresidenciasEjecutivas'] = Array.from(
			new Set(vicepresidenciasEjecutivas)
		)
		await this.createCargoUseCase.execute({
			name,
			departamentos: departamentosSinDuplicados,
			directivas: directivasSinDuplicados,
			vicepresidencias: vicepresidenciasSinDuplicados,
			vicepresidenciasEjecutivas: vicepresidenciasEjecutivasSinDuplicados
		})

		const cargo = Cargo.create({
			name,
			departamentos: departamentosSinDuplicados,
			directivas: directivasSinDuplicados,
			vicepresidencias: vicepresidenciasSinDuplicados,
			vicepresidenciasEjecutivas: vicepresidenciasEjecutivasSinDuplicados
		})

		await this.cargoRepository.save(cargo.toPrimitive())
	}
}
