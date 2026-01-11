import { DeviceCreator } from '../../../../../../src/Contexts/Device/Device/application/DeviceCreator'
import { DeviceRepository } from '../../../../../../src/Contexts/Device/Device/domain/repository/DeviceRepository'
import { StatusRepository } from '../../../../../../src/Contexts/Device/Status/domain/repository/StatusRepository'
import { ModelSeriesRepository } from '../../../../../../src/Contexts/ModelSeries/ModelSeries/domain/repository/ModelSeriesRepository'
import { EmployeeRepository } from '../../../../../../src/Contexts/employee/Employee/domain/Repository/EmployeeRepository'
import { LocationRepository } from '../../../../../../src/Contexts/Location/Location/domain/repository/LocationRepository'
import { EventBus } from '../../../../../../src/Contexts/Shared/domain/event/EventBus'
import { DeviceAlreadyExistError } from '../../../../../../src/Contexts/Device/Device/domain/errors/DeviceAlreadyExistError'
import { InvalidArgumentError } from '../../../../../../src/Contexts/Shared/domain/errors/ApiError'
import { StatusOptions } from '../../../../../../src/Contexts/Device/Status/domain/StatusOptions'
import { TypeOfSiteList } from '../../../../../../src/Contexts/Location/TypeOfSite/domain/TypeOfSiteList'
import { DeviceParams } from '../../../../../../src/Contexts/Device/Device/domain/dto/Device.dto'
import { ProcessorRepository } from '../../../../../../src/Contexts/Features/Processor/domain/repository/ProcessorRepository'
import { HardDriveCapacityRepository } from '../../../../../../src/Contexts/Features/HardDrive/HardDriveCapacity/domain/repository/HardDriveCapacityRepository'
import { HardDriveTypeRepository } from '../../../../../../src/Contexts/Features/HardDrive/HardDriveType/domain/repository/HardDriveTypeRepository'
import { OperatingSystemRepository } from '../../../../../../src/Contexts/Features/OperatingSystem/OperatingSystem/domain/repository/OperatingSystemRepository'
import { OperatingSystemArqRepository } from '../../../../../../src/Contexts/Features/OperatingSystem/OperatingSystemArq/domain/repository/OperatingSystemArqRepository'

describe('DeviceCreator', () => {
	let deviceCreator: DeviceCreator

	// Mocks de Repositorios
	const mockDeviceRepository = {
		save: jest.fn(),
		searchBySerialAndBrand: jest.fn(),
		searchByActivo: jest.fn(),
		findById: jest.fn()
	} as unknown as DeviceRepository

	const mockStatusRepository = {
		findById: jest.fn()
	} as unknown as StatusRepository

	const mockModelSeriesRepository = {
		findById: jest.fn(),
		searchByModelSeriesIdAndBrandIdAndCategoryId: jest.fn()
	} as unknown as ModelSeriesRepository

	const mockEmployeeRepository = {
		findById: jest.fn()
	} as unknown as EmployeeRepository

	const mockLocationRepository = {
		findById: jest.fn()
	} as unknown as LocationRepository

	const mockEventBus = {
		publish: jest.fn()
	} as unknown as EventBus

	// Mocks adicionales para DeviceFactory (aunque no probaremos la factory en detalle aquí, se necesitan para instanciar)
	const mockProcessorRepo = {} as unknown as ProcessorRepository
	const mockHddCapRepo = {} as unknown as HardDriveCapacityRepository
	const mockHddTypeRepo = {} as unknown as HardDriveTypeRepository
	const mockOsRepo = {} as unknown as OperatingSystemRepository
	const mockOsArqRepo = {} as unknown as OperatingSystemArqRepository

	// Datos Dummy
	const validUser = { sub: 'user-id', email: 'test@test.com', roleId: '1' }
	const validParams: DeviceParams = {
		serial: 'SN123',
		activo: 'ACT123',
		statusId: StatusOptions.DISPONIBLE,
		categoryId: 'cat-id',
		brandId: 'brand-id',
		modelId: 'model-id',
		locationId: 'loc-id',
		employeeId: null,
		observation: 'None',
		stockNumber: null
	}

	beforeEach(() => {
		jest.clearAllMocks()

		deviceCreator = new DeviceCreator({
			deviceRepository: mockDeviceRepository,
			statusRepository: mockStatusRepository,
			modelSeriesRepository: mockModelSeriesRepository,
			employeeRepository: mockEmployeeRepository,
			locationRepository: mockLocationRepository,
			eventBus: mockEventBus,
			processorRepository: mockProcessorRepo,
			hardDriveCapacityRepository: mockHddCapRepo,
			hardDriveTypeRepository: mockHddTypeRepo,
			operatingSystemRepository: mockOsRepo,
			operatingSystemArqRepository: mockOsArqRepo
		})

		// Setup default successful responses
		;(mockDeviceRepository.searchBySerialAndBrand as jest.Mock).mockResolvedValue(null)
		;(mockDeviceRepository.searchByActivo as jest.Mock).mockResolvedValue(null)
		;(mockStatusRepository.findById as jest.Mock).mockResolvedValue({ id: StatusOptions.DISPONIBLE })
		;(mockEmployeeRepository.findById as jest.Mock).mockResolvedValue(null) // No employee needed for DISPONIBLE
		;(mockLocationRepository.findById as jest.Mock).mockResolvedValue({
			id: 'loc-id',
			typeOfSiteId: TypeOfSiteList.OFICINA
		})
		;(mockModelSeriesRepository.searchByModelSeriesIdAndBrandIdAndCategoryId as jest.Mock).mockResolvedValue({
			id: 'model-id',
			generic: false
		})
	})

	describe('Business Rules Validation', () => {
		it('should create a device successfully when all rules are met', async () => {
			await deviceCreator.run({ params: validParams, user: validUser })

			expect(mockDeviceRepository.save).toHaveBeenCalled()
			expect(mockEventBus.publish).toHaveBeenCalled()
		})

		it('should throw InvalidArgumentError if user is not provided', async () => {
			await expect(deviceCreator.run({ params: validParams, user: undefined })).rejects.toThrow(
				InvalidArgumentError
			)
		})

		// --- Unicidad ---

		it('should throw DeviceAlreadyExistError if serial already exists for the brand', async () => {
			;(mockDeviceRepository.searchBySerialAndBrand as jest.Mock).mockResolvedValue({ id: 'existing-id' })

			await expect(deviceCreator.run({ params: validParams, user: validUser })).rejects.toThrow(
				DeviceAlreadyExistError
			)
		})

		it('should throw DeviceAlreadyExistError if activo already exists', async () => {
			;(mockDeviceRepository.searchByActivo as jest.Mock).mockResolvedValue({ id: 'existing-id' })

			await expect(deviceCreator.run({ params: validParams, user: validUser })).rejects.toThrow(
				DeviceAlreadyExistError
			)
		})

		// --- Consistencia: Serial vs Genérico ---

		it('should throw InvalidArgumentError if model is NOT generic and serial is missing', async () => {
			;(mockModelSeriesRepository.searchByModelSeriesIdAndBrandIdAndCategoryId as jest.Mock).mockResolvedValue({
				generic: false
			})
			const params = { ...validParams, serial: null }

			await expect(deviceCreator.run({ params, user: validUser })).rejects.toThrow(
				'El serial es obligatorio para modelos no genéricos'
			)
		})

		it('should allow missing serial if model IS generic', async () => {
			;(mockModelSeriesRepository.searchByModelSeriesIdAndBrandIdAndCategoryId as jest.Mock).mockResolvedValue({
				generic: true
			})
			const params = { ...validParams, serial: null }

			await deviceCreator.run({ params, user: validUser })
			expect(mockDeviceRepository.save).toHaveBeenCalled()
		})

		// --- Consistencia: Ubicación vs Estatus ---

		it('should throw InvalidArgumentError if device is IN USE but location is ALMACEN', async () => {
			;(mockStatusRepository.findById as jest.Mock).mockResolvedValue({ id: StatusOptions.INUSE })
			;(mockLocationRepository.findById as jest.Mock).mockResolvedValue({
				id: 'loc-id',
				typeOfSiteId: TypeOfSiteList.ALMACEN
			})
			// Mock employee existence for INUSE status
			;(mockEmployeeRepository.findById as jest.Mock).mockResolvedValue({ id: 'emp-id' })

			const params = { ...validParams, statusId: StatusOptions.INUSE, employeeId: 'emp-id' }

			await expect(deviceCreator.run({ params, user: validUser })).rejects.toThrow(
				'Un dispositivo en uso no puede estar ubicado en un almacén'
			)
		})

		it('should throw InvalidArgumentError if device is IN ALMACEN but location is NOT ALMACEN', async () => {
			;(mockStatusRepository.findById as jest.Mock).mockResolvedValue({ id: StatusOptions.INALMACEN })
			;(mockLocationRepository.findById as jest.Mock).mockResolvedValue({
				id: 'loc-id',
				typeOfSiteId: TypeOfSiteList.OFICINA
			})

			const params = { ...validParams, statusId: StatusOptions.INALMACEN, stockNumber: 'STOCK-1' }

			await expect(deviceCreator.run({ params, user: validUser })).rejects.toThrow(
				'Un dispositivo en almacén solo puede estar ubicado en un almacén'
			)
		})

		it('should throw InvalidArgumentError if device is DESINCORPORADO but has a location', async () => {
			;(mockStatusRepository.findById as jest.Mock).mockResolvedValue({ id: StatusOptions.DESINCORPORADO })
			;(mockLocationRepository.findById as jest.Mock).mockResolvedValue({
				id: 'loc-id',
				typeOfSiteId: TypeOfSiteList.ALMACEN
			})

			const params = {
				...validParams,
				statusId: StatusOptions.DESINCORPORADO,
				locationId: 'loc-id',
				stockNumber: 'STOCK-1'
			}

			await expect(deviceCreator.run({ params, user: validUser })).rejects.toThrow(
				'Un dispositivo desincorporado no puede tener una ubicación asignada'
			)
		})

		// --- Consistencia: Empleado vs Estatus ---

		it('should throw InvalidArgumentError if device is IN USE (Prestamo) but has NO employee', async () => {
			;(mockStatusRepository.findById as jest.Mock).mockResolvedValue({ id: StatusOptions.PRESTAMO })
			;(mockLocationRepository.findById as jest.Mock).mockResolvedValue({
				id: 'loc-id',
				typeOfSiteId: TypeOfSiteList.OFICINA
			})

			const params = { ...validParams, statusId: StatusOptions.PRESTAMO, employeeId: null }

			//debe estar asignado a un empleado/
			await expect(deviceCreator.run({ params, user: validUser })).rejects.toThrow()
		})

		it('should throw InvalidArgumentError if device is DISPONIBLE but HAS an employee', async () => {
			;(mockStatusRepository.findById as jest.Mock).mockResolvedValue({ id: StatusOptions.DISPONIBLE })
			;(mockEmployeeRepository.findById as jest.Mock).mockResolvedValue({ id: 'emp-id' })

			const params = { ...validParams, statusId: StatusOptions.DISPONIBLE, employeeId: 'emp-id' }

			await expect(deviceCreator.run({ params, user: validUser })).rejects.toThrow(
				/no puede tener un empleado asignado/
			)
		})

		it('should throw InvalidArgumentError if device is IN ALMACEN but HAS an employee', async () => {
			;(mockStatusRepository.findById as jest.Mock).mockResolvedValue({ id: StatusOptions.INALMACEN })
			;(mockLocationRepository.findById as jest.Mock).mockResolvedValue({
				id: 'loc-id',
				typeOfSiteId: TypeOfSiteList.ALMACEN
			})
			;(mockEmployeeRepository.findById as jest.Mock).mockResolvedValue({ id: 'emp-id' })

			const params = {
				...validParams,
				statusId: StatusOptions.INALMACEN,
				employeeId: 'emp-id',
				stockNumber: 'STOCK-1'
			}

			await expect(deviceCreator.run({ params, user: validUser })).rejects.toThrow(
				'Un dispositivo en almacén o desincorporado no puede tener un empleado asignado'
			)
		})

		// --- Consistencia: Stock Number ---

		it('should throw InvalidArgumentError if stockNumber is present but status is NOT ALMACEN', async () => {
			;(mockStatusRepository.findById as jest.Mock).mockResolvedValue({ id: StatusOptions.DISPONIBLE })

			const params = { ...validParams, statusId: StatusOptions.DISPONIBLE, stockNumber: 'STOCK-123' }

			await expect(deviceCreator.run({ params, user: validUser })).rejects.toThrow(
				'Un dispositivo solo puede tener número de stock si está en almacén o por desincorporar'
			)
		})
	})
})
