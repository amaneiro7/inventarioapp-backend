import { UnidadCreator } from '../../../../src/Contexts/employee/Unidad/application/UnidadCreator'
import { UnidadNameUniquenessChecker } from '../../../../src/Contexts/employee/Unidad/domain/service/UnidadNameUniquenessChecker'
import { UnidadCentroDeCostoUniquenessChecker } from '../../../../src/Contexts/employee/Unidad/domain/service/UnidadCentroDeCostoUniquenessChecker'
import { UnidadCodigoInternoUniquenessChecker } from '../../../../src/Contexts/employee/Unidad/domain/service/UnidadCodigoInternoUniquenessChecker'
import { UnidadHierarchyValidator } from '../../../../src/Contexts/employee/Unidad/domain/service/UnidadHierarchyValidator'
import { CargoExistenceChecker } from '../../../../src/Contexts/employee/Cargo/domain/service/CargoExistanceChecker'
import { CargoId } from '../../../../src/Contexts/employee/Cargo/domain/valueObject/CargoId'
import { InvalidArgumentError } from '../../../../src/Contexts/Shared/domain/errors/ApiError'

describe('UnidadCreator', () => {
	let unidadRepository: any
	let cargoRepository: any
	let eventBus: any
	let creator: UnidadCreator

	const params = {
		name: 'Gerencia de Tecnología',
		rangeLevel: 1,
		centroDeCosto: 'CC-100',
		codigoInterno: 'COD-001',
		isUnitActive: true,
		parentId: null,
		cargos: [CargoId.random().value, CargoId.random().value]
	}

	beforeEach(() => {
		unidadRepository = { save: jest.fn() }
		cargoRepository = {}
		eventBus = { publish: jest.fn() }
		creator = new UnidadCreator({ unidadRepository, cargoRepository, eventBus })

		// Mocks por defecto para que las validaciones pasen
		jest.spyOn(UnidadNameUniquenessChecker.prototype, 'ensureUnique').mockResolvedValue()
		jest.spyOn(UnidadCentroDeCostoUniquenessChecker.prototype, 'ensureUnique').mockResolvedValue()
		jest.spyOn(UnidadCodigoInternoUniquenessChecker.prototype, 'ensureUnique').mockResolvedValue()
		jest.spyOn(UnidadHierarchyValidator.prototype, 'validate').mockResolvedValue()
		jest.spyOn(CargoExistenceChecker.prototype, 'ensureExist').mockResolvedValue()
	})

	afterEach(() => {
		jest.restoreAllMocks()
	})

	it('should create a unidad and publish events when all validations pass', async () => {
		await creator.run({ params })

		expect(UnidadNameUniquenessChecker.prototype.ensureUnique).toHaveBeenCalledWith(params.name)
		expect(UnidadCentroDeCostoUniquenessChecker.prototype.ensureUnique).toHaveBeenCalledWith(params.centroDeCosto)
		expect(UnidadCodigoInternoUniquenessChecker.prototype.ensureUnique).toHaveBeenCalledWith(params.codigoInterno)
		expect(UnidadHierarchyValidator.prototype.validate).toHaveBeenCalledWith(params.rangeLevel, params.parentId)
		expect(CargoExistenceChecker.prototype.ensureExist).toHaveBeenCalledWith(params.cargos)

		expect(unidadRepository.save).toHaveBeenCalled()
		expect(eventBus.publish).toHaveBeenCalled()
	})

	it('should filter duplicate cargos before calling the existence checker', async () => {
		const id1 = CargoId.random().value
		const id2 = CargoId.random().value
		const paramsWithDuplicates = { ...params, cargos: [id1, id1, id2] }
		const uniqueCargos = [id1, id2]

		await creator.run({ params: paramsWithDuplicates })

		expect(CargoExistenceChecker.prototype.ensureExist).toHaveBeenCalledWith(uniqueCargos)
	})
	it('should throw InvalidArgumentError for an invalid UUID string', async () => {
		const invalidUuid = 'invalid-uuid-string'
		const paramsWithInvalidCargo = { ...params, cargos: [invalidUuid] }

		await expect(creator.run({ params: paramsWithInvalidCargo })).rejects.toThrow(InvalidArgumentError)
		await expect(creator.run({ params: paramsWithInvalidCargo })).rejects.toThrow(
			`<${invalidUuid}> is not valid <CargoId>`
		)
	})

	it('should fail and not save if the name is not unique', async () => {
		const error = new Error('El nombre de la unidad ya existe')
		jest.spyOn(UnidadNameUniquenessChecker.prototype, 'ensureUnique').mockRejectedValue(error)

		await expect(creator.run({ params })).rejects.toThrow(error)
		expect(unidadRepository.save).not.toHaveBeenCalled()
		expect(eventBus.publish).not.toHaveBeenCalled()
	})

	it('should fail and not save if the centro de costo is not unique', async () => {
		const error = new Error('El centro de costo ya está asignado')
		jest.spyOn(UnidadCentroDeCostoUniquenessChecker.prototype, 'ensureUnique').mockRejectedValue(error)

		await expect(creator.run({ params })).rejects.toThrow(error)
		expect(unidadRepository.save).not.toHaveBeenCalled()
	})

	it('should fail and not save if the codigo interno is not unique', async () => {
		const error = new Error('El código interno ya existe')
		jest.spyOn(UnidadCodigoInternoUniquenessChecker.prototype, 'ensureUnique').mockRejectedValue(error)

		await expect(creator.run({ params })).rejects.toThrow(error)
		expect(unidadRepository.save).not.toHaveBeenCalled()
	})

	it('should fail and not save if the hierarchy validation fails', async () => {
		const error = new Error('Jerarquía inválida para el nivel seleccionado')
		jest.spyOn(UnidadHierarchyValidator.prototype, 'validate').mockRejectedValue(error)

		await expect(creator.run({ params })).rejects.toThrow(error)
		expect(unidadRepository.save).not.toHaveBeenCalled()
	})

	it('should fail and not save if any cargo does not exist', async () => {
		const error = new Error('Uno o más cargos no existen')
		jest.spyOn(CargoExistenceChecker.prototype, 'ensureExist').mockRejectedValue(error)

		await expect(creator.run({ params })).rejects.toThrow(error)
		expect(unidadRepository.save).not.toHaveBeenCalled()
		expect(eventBus.publish).not.toHaveBeenCalled()
	})
})
