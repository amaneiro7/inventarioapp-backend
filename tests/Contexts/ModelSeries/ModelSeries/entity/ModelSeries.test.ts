import { Uuid } from '../../../../../src/Contexts/Shared/domain/value-object/Uuid'
import { type ModelDependencies } from '../../../../../src/Contexts/ModelSeries/ModelSeries/domain/entity/ModelDependencies'
import { ModelSeries } from '../../../../../src/Contexts/ModelSeries/ModelSeries/domain/entity/ModelSeries'
import { ComputerModels } from '../../../../../src/Contexts/ModelSeries/ModelSeries/domain/entity/ComputerModels'
import { LaptopsModels } from '../../../../../src/Contexts/ModelSeries/ModelSeries/domain/entity/LaptopsModels'
import { ModelSeriesCreatedDomainEvent } from '../../../../../src/Contexts/ModelSeries/ModelSeries/domain/event/ModelSeriesCreatedDomainEvent'
import { ModelSeriesRenamedDomainEvent } from '../../../../../src/Contexts/ModelSeries/ModelSeries/domain/event/ModelSeriesRenamedDomainEvent'
import { ProcessorDoesNotExistError } from '../../../../../src/Contexts/Features/Processor/Processor/domain/ProcessorDoesNotExistError'
import { ModelSeriesProcessorAddedDomainEvent } from '../../../../../src/Contexts/ModelSeries/ModelSeries/domain/event/ModelSeriesProcessorAddedDomainEvent'
import { ModelSeriesProcessorRemovedDomainEvent } from '../../../../../src/Contexts/ModelSeries/ModelSeries/domain/event/ModelSeriesProcessorRemovedDomainEvent'
import { MemorryRamTypeDoesNotExistError } from '../../../../../src/Contexts/Features/MemoryRam/MemoryRamType/domain/errors/MemorryRamTypeDoesNotExistError'
import { ModelSeriesDto } from '../../../../../src/Contexts/ModelSeries/ModelSeries/domain/dto/ModelSeries.dto'

// --- Mock de Dependencias ---
// Creamos mocks para los repositorios que la entidad necesita para sus validaciones.
const mockModelSeriesRepository = {
	findByNameAndBrand: jest.fn()
}
const mockProcessorRepository = {
	findByIds: jest.fn()
}
const mockMemoryRamTypeRepository = {
	findById: jest.fn()
}

const dependencies: ModelDependencies = {
	modelSeriesRepository: mockModelSeriesRepository as any,
	processorRepository: mockProcessorRepository as any,
	memoryRamTypeRepository: mockMemoryRamTypeRepository as any,
	// Añade otros repositorios si son necesarios para otros tests
	inputTypeRepository: {} as any,
	categoryRepository: {} as any,
	brandRepository: {} as any
}

describe('ModelSeries Aggregate', () => {
	beforeEach(() => {
		// Limpiamos los mocks antes de cada test para evitar interferencias
		jest.clearAllMocks()
	})

	// --- Tests para la clase base: ModelSeries ---
	describe('ModelSeries', () => {
		it('should create a ModelSeries instance and record a created event', () => {
			const params = {
				name: 'Generic Model',
				categoryId: Uuid.random().value,
				brandId: Uuid.random().value,
				generic: true,
				processors: []
			}
			const model = ModelSeries.create(params)

			expect(model).toBeInstanceOf(ModelSeries)
			expect(model.nameValue).toBe(params.name)

			const events = model.pullDomainEvents()
			expect(events).toHaveLength(1)
			expect(events[0]).toBeInstanceOf(ModelSeriesCreatedDomainEvent)
		})

		it('should correctly report changes when name is updated', async () => {
			const modelDto: ModelSeriesDto = {
				id: Uuid.random().value,
				name: 'Old Name',
				categoryId: Uuid.random().value,
				brandId: Uuid.random().value,
				generic: false,
				processors: [],
				modelComputer: null,
				modelLaptop: null,
				modelKeyboard: null,
				modelMouse: null,
				modelMonitor: null,
				modelPrinter: null,
				brand: {
					name: 'Brand X',
					id: Uuid.random().value,
					categories: []
				},
				category: {
					name: 'Category Y',
					id: Uuid.random().value,
					mainCategoryId: Uuid.random().value,
					mainCategory: {
						id: Uuid.random().value,
						name: 'Main Category Z'
					}
				},
				createdAt: new Date(),
				updatedAt: new Date()
			}
			const model = ModelSeries.fromPrimitives(modelDto)

			// Mock para la validación de unicidad
			mockModelSeriesRepository.findByNameAndBrand.mockResolvedValue(null)

			const changes = await model.update({ name: 'New Name' }, dependencies)

			expect(changes).toHaveLength(1)
			expect(changes[0]).toEqual({
				field: 'name',
				oldValue: 'Old Name',
				newValue: 'New Name'
			})

			const events = model.pullDomainEvents()
			expect(events.some(e => e instanceof ModelSeriesRenamedDomainEvent)).toBe(true)
		})
	})

	// --- Tests para la subclase: ComputerModels ---
	describe('ComputerModels', () => {
		const computerParams = {
			name: 'Power PC 1000',
			categoryId: Uuid.random().value,
			brandId: Uuid.random().value,
			generic: false,
			memoryRamTypeId: Uuid.random().value,
			memoryRamSlotQuantity: 4,
			hasBluetooth: true,
			hasWifiAdapter: true,
			hasDVI: false,
			hasHDMI: true,
			hasVGA: true,
			processors: [Uuid.random().value]
		}

		it('should update computer-specific properties and return changes', async () => {
			const model = ComputerModels.create(computerParams)
			const newMemoryRamTypeId = Uuid.random().value

			// Mock para la validación de existencia
			mockMemoryRamTypeRepository.findById.mockResolvedValue({ id: newMemoryRamTypeId })

			const changes = await model.update(
				{ memoryRamTypeId: newMemoryRamTypeId, hasBluetooth: false },
				dependencies
			)

			expect(changes).toHaveLength(2)
			expect(changes).toContainEqual({
				field: 'memoryRamTypeId',
				oldValue: computerParams.memoryRamTypeId,
				newValue: newMemoryRamTypeId
			})
			expect(changes).toContainEqual({
				field: 'hasBluetooth',
				oldValue: true,
				newValue: false
			})
		})

		it('should throw an error if memory ram type does not exist', async () => {
			const model = ComputerModels.create(computerParams)
			const nonExistentId = Uuid.random().value

			// Mock para simular que el ID no existe
			mockMemoryRamTypeRepository.findById.mockResolvedValue(null)

			await expect(model.update({ memoryRamTypeId: nonExistentId }, dependencies)).rejects.toThrow(
				MemorryRamTypeDoesNotExistError
			)
		})

		it('should add and remove processors and record domain events', async () => {
			const initialProcessor = Uuid.random().value
			const processorToRemove = initialProcessor
			const processorToAdd = Uuid.random().value

			const model = ComputerModels.create({ ...computerParams, processors: [initialProcessor] })

			// Mock para la validación de existencia de los nuevos procesadores
			mockProcessorRepository.findByIds.mockResolvedValue([{ id: processorToAdd }])

			const changes = await model.update({ processors: [processorToAdd] }, dependencies)

			// Verificamos que se detectó el cambio en la lista de procesadores
			expect(changes).toContainEqual({
				field: 'processors',
				oldValue: [initialProcessor],
				newValue: [processorToAdd]
			})

			const events = model.pullDomainEvents()
			// Verificamos que se registraron los eventos correctos de añadir y quitar
			expect(events.some(e => e instanceof ModelSeriesProcessorAddedDomainEvent)).toBe(true)
			expect(events.some(e => e instanceof ModelSeriesProcessorRemovedDomainEvent)).toBe(true)

			const addedEvent = events.find(
				e => e instanceof ModelSeriesProcessorAddedDomainEvent
			) as ModelSeriesProcessorAddedDomainEvent
			const removedEvent = events.find(
				e => e instanceof ModelSeriesProcessorRemovedDomainEvent
			) as ModelSeriesProcessorRemovedDomainEvent

			expect(addedEvent.processorId).toBe(processorToAdd)
			expect(removedEvent.processorId).toBe(processorToRemove)
		})

		it('should throw an error if a processor to add does not exist', async () => {
			const model = ComputerModels.create(computerParams)
			const nonExistentProcessorId = Uuid.random().value

			// Mock para simular que el procesador no se encuentra
			mockProcessorRepository.findByIds.mockResolvedValue([])

			await expect(model.update({ processors: [nonExistentProcessorId] }, dependencies)).rejects.toThrow(
				ProcessorDoesNotExistError
			)
		})
	})

	// --- Tests para la subclase: LaptopsModels ---
	describe('LaptopsModels', () => {
		it('should update laptop-specific properties', async () => {
			const laptopParams = {
				name: 'Laptop Pro',
				categoryId: Uuid.random().value,
				brandId: Uuid.random().value,
				generic: false,
				memoryRamTypeId: Uuid.random().value,
				memoryRamSlotQuantity: 2,
				hasBluetooth: true,
				hasWifiAdapter: true,
				hasDVI: false,
				hasHDMI: true,
				hasVGA: false,
				processors: [],
				batteryModel: 'BATT-123'
			}
			const model = LaptopsModels.create(laptopParams)

			const changes = await model.update({ batteryModel: 'BATT-456-NEW' }, dependencies)

			expect(changes).toHaveLength(1)
			expect(changes[0]).toEqual({
				field: 'batteryModel',
				oldValue: 'BATT-123',
				newValue: 'BATT-456-NEW'
			})
		})
	})
})
