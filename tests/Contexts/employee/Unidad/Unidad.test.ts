import { Unidad } from '../../../../src/Contexts/employee/Unidad/domain/entity/Unidad'
import { UnidadId } from '../../../../src/Contexts/employee/Unidad/domain/valueObject/UnidadId'
import { CargoId } from '../../../../src/Contexts/employee/Cargo/domain/valueObject/CargoId'
import { UnidadCreatedDomainEvent } from '../../../../src/Contexts/employee/Unidad/domain/event/UnidadCreatedDomainEvent'
import { UnidadRenamedDomainEvent } from '../../../../src/Contexts/employee/Unidad/domain/event/UnidadRenamedDomainEvent'
import { UnidadCargoAddedDomainEvent } from '../../../../src/Contexts/employee/Unidad/domain/event/UnidadCargoAddedDomainEvent'
import { UnidadCargoRemovedDomainEvent } from '../../../../src/Contexts/employee/Unidad/domain/event/UnidadCargoRemovedDomainEvent'
import { UnidadRemovedDomainEvent } from '../../../../src/Contexts/employee/Unidad/domain/event/UnidadRemovedDomainEvent'
import { UnidadUpdatedDomainEvent } from '../../../../src/Contexts/employee/Unidad/domain/event/UnidadUpdatedDomainEvent'

describe('Unidad', () => {
	const mockUnidadParams = {
		name: 'Gerencia General',
		rangeLevel: 1,
		centroDeCosto: 'CC001',
		codigoInterno: 'GG001',
		isUnitActive: true,
		parentId: null,
		cargos: [CargoId.random().value, CargoId.random().value]
	}

	beforeEach(() => {
		// Limpiar eventos registrados antes de cada test
		jest.spyOn(Unidad.prototype, 'record').mockClear()
	})

	it('should create a new Unidad instance and record a creation event', () => {
		const unidad = Unidad.create(mockUnidadParams)

		expect(unidad).toBeInstanceOf(Unidad)
		expect(unidad.idValue).toBeDefined()
		expect(unidad.nameValue).toBe(mockUnidadParams.name)
		expect(unidad.cargosValue.length).toBe(mockUnidadParams.cargos.length)

		// Verificar que el evento de creación fue registrado
		expect(Unidad.prototype.record).toHaveBeenCalledTimes(1)
		const recordedEvent = (Unidad.prototype.record as jest.Mock).mock.calls[0][0]
		expect(recordedEvent).toBeInstanceOf(UnidadCreatedDomainEvent)
		expect(recordedEvent.aggregateId).toBe(unidad.idValue)
		expect(recordedEvent.name).toBe(unidad.nameValue)
	})

	it('should reconstruct a Unidad from primitives', () => {
		const id = UnidadId.random().value
		const cargoId1 = CargoId.random().value
		const cargoId2 = CargoId.random().value
		const primitives = {
			id,
			name: 'Dirección de TI',
			rangeLevel: 2,
			centroDeCosto: 'CC002',
			codigoInterno: 'DTI001',
			isUnitActive: true,
			parentId: mockUnidadParams.parentId,
			cargos: [
				{ id: cargoId1, name: 'Dev' },
				{ id: cargoId2, name: 'QA' }
			] // DTO expects CargoDto
		}

		const unidad = Unidad.fromPrimitives(primitives)

		expect(unidad).toBeInstanceOf(Unidad)
		expect(unidad.idValue).toBe(id)
		expect(unidad.nameValue).toBe(primitives.name)
		expect(unidad.cargosValue).toEqual(expect.arrayContaining([cargoId1, cargoId2]))
		expect(Unidad.prototype.record).not.toHaveBeenCalled() // No events on reconstruction
	})

	it('should update the name and record a rename event', () => {
		const unidad = Unidad.create(mockUnidadParams)
		const oldName = unidad.nameValue
		const newName = 'Nueva Gerencia'
		;(Unidad.prototype.record as jest.Mock).mockClear() // Clear initial creation event

		unidad.updateName(newName)

		expect(unidad.nameValue).toBe(newName)
		expect(Unidad.prototype.record).toHaveBeenCalledTimes(1)
		const recordedEvent = (Unidad.prototype.record as jest.Mock).mock.calls[0][0]
		expect(recordedEvent).toBeInstanceOf(UnidadRenamedDomainEvent)
		expect(recordedEvent.aggregateId).toBe(unidad.idValue)
		expect(recordedEvent.name).toBe(newName)
	})

	it('should add a cargo and record an event', () => {
		const unidad = Unidad.create(mockUnidadParams)
		const newCargoId = CargoId.random()
		;(Unidad.prototype.record as jest.Mock).mockClear()

		unidad.addCargo(newCargoId)

		expect(unidad.cargosValue).toContain(newCargoId.value)
		expect(Unidad.prototype.record).toHaveBeenCalledTimes(1)
		const recordedEvent = (Unidad.prototype.record as jest.Mock).mock.calls[0][0]
		expect(recordedEvent).toBeInstanceOf(UnidadCargoAddedDomainEvent)
		expect(recordedEvent.aggregateId).toBe(unidad.idValue)
		expect(recordedEvent.cargoId).toBe(newCargoId.value)
	})

	it('should not add a duplicate cargo', () => {
		const unidad = Unidad.create(mockUnidadParams)
		const existingCargoId = new CargoId(mockUnidadParams.cargos[0])
		;(Unidad.prototype.record as jest.Mock).mockClear()

		const initialCargoCount = unidad.cargosValue.length
		unidad.addCargo(existingCargoId)

		expect(unidad.cargosValue.length).toBe(initialCargoCount)
		expect(Unidad.prototype.record).not.toHaveBeenCalled() // No event for duplicate
	})

	it('should remove a cargo and record an event', () => {
		const unidad = Unidad.create(mockUnidadParams)
		const cargoToRemove = new CargoId(mockUnidadParams.cargos[0])
		;(Unidad.prototype.record as jest.Mock).mockClear()

		unidad.removeCargo(cargoToRemove)

		expect(unidad.cargosValue).not.toContain(cargoToRemove.value)
		expect(Unidad.prototype.record).toHaveBeenCalledTimes(1)
		const recordedEvent = (Unidad.prototype.record as jest.Mock).mock.calls[0][0]
		expect(recordedEvent).toBeInstanceOf(UnidadCargoRemovedDomainEvent)
		expect(recordedEvent.aggregateId).toBe(unidad.idValue)
		expect(recordedEvent.cargoId).toBe(cargoToRemove.value)
	})

	it('should not remove a non-existent cargo', () => {
		const unidad = Unidad.create(mockUnidadParams)
		const nonExistentCargo = CargoId.random()
		;(Unidad.prototype.record as jest.Mock).mockClear()

		const initialCargoCount = unidad.cargosValue.length
		unidad.removeCargo(nonExistentCargo)

		expect(unidad.cargosValue.length).toBe(initialCargoCount)
		expect(Unidad.prototype.record).not.toHaveBeenCalled() // No event for non-existent
	})

	it('should update parentId', () => {
		const unidad = Unidad.create(mockUnidadParams)
		const newParentId = UnidadId.random().value
		unidad.updateParentId(newParentId)
		expect(unidad.parentIdValue).toBe(newParentId)
	})

	it('should throw error if parentId is the same as its own id', () => {
		const unidad = Unidad.create(mockUnidadParams)
		const selfId = unidad.idValue
		expect(() => unidad.updateParentId(selfId)).toThrow('Una unidad no puede ser su propia unidad padre.')
	})

	it('should record a generic update event for other changes', () => {
		const unidad = Unidad.create(mockUnidadParams)
		;(Unidad.prototype.record as jest.Mock).mockClear()
		const oldValueRangeLavel = mockUnidadParams.rangeLevel
		const newRangeLevel = 2
		const changes = [{ field: 'rangeLevel', oldValue: oldValueRangeLavel, newValue: newRangeLevel }]
		unidad.updateRangeLevel(newRangeLevel) // This method doesn't record a specific event
		unidad.registerUpdateEvent(changes) // Manually record generic update event

		expect(unidad.rangeLevelValue).toBe(newRangeLevel)
		expect(Unidad.prototype.record).toHaveBeenCalledTimes(1)
		const recordedEvent = (Unidad.prototype.record as jest.Mock).mock.calls[0][0]
		expect(recordedEvent).toBeInstanceOf(UnidadUpdatedDomainEvent)
		expect(recordedEvent.aggregateId).toBe(unidad.idValue)
		expect(recordedEvent.changes).toEqual(changes)
	})

	it('should record a removal event when deleted', () => {
		const unidad = Unidad.create(mockUnidadParams)
		;(Unidad.prototype.record as jest.Mock).mockClear()

		unidad.delete()

		expect(Unidad.prototype.record).toHaveBeenCalledTimes(1)
		const recordedEvent = (Unidad.prototype.record as jest.Mock).mock.calls[0][0]
		expect(recordedEvent).toBeInstanceOf(UnidadRemovedDomainEvent)
		expect(recordedEvent.aggregateId).toBe(unidad.idValue)
		expect(recordedEvent.name).toBe(unidad.nameValue)
	})
})
