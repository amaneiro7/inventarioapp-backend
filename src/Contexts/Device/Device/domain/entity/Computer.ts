import { Device } from './Device'
import { DeviceId } from '../valueObject/DeviceId'
import { BrandId } from '../../../../Brand/domain/valueObject/BrandId'
import { CategoryValues } from '../../../../Category/Category/domain/CategoryOptions'
import { CategoryDefault } from '../../../../Category/Category/domain/CategoryDefaultValues'
import { CategoryId } from '../../../../Category/Category/domain/valueObject/CategoryId'
import { EmployeeId } from '../../../../employee/Employee/domain/valueObject/EmployeeId'
import { HardDriveCapacityId } from '../../../../Features/HardDrive/HardDriveCapacity/domain/valueObject/HardDriveCapacityId'
import { HardDriveTypeId } from '../../../../Features/HardDrive/HardDriveType/domain/valueObject/HardDriveTypeId'
import { MemoryRamCapacity } from '../../../../Features/MemoryRam/MemoryRamCapacity/MemoryRamCapacity'
import { MemoryRamValues } from '../../../../Features/MemoryRam/MemoryRamCapacity/MemoryRamValues'
import { OperatingSystemId } from '../../../../Features/OperatingSystem/OperatingSystem/domain/valueObject/OperatingSystemId'
import { OperatingSystemArqId } from '../../../../Features/OperatingSystem/OperatingSystemArq/domain/valueObject/OperatingSystemArqID'
import { ProcessorId } from '../../../../Features/Processor/domain/valueObject/ProcessorId'
import { LocationId } from '../../../../Location/Location/domain/valueObject/LocationId'
import { ModelSeriesId } from '../../../../ModelSeries/ModelSeries/domain/valueObject/ModelSeriesId'
import { StatusId } from '../../../Status/domain/valueObject/StatusId'
import { DeviceActivo } from '../valueObject/DeviceActivo'
import { DeviceObservation } from '../valueObject/DeviceObservation'
import { DeviceSerial } from '../valueObject/DeviceSerial'
import { DeviceStocknumber } from '../valueObject/DeviceStock'
import { ComputerMemoryRam } from '../valueObject/ComputerMemoryRam'
import { ComputerName } from '../valueObject/ComputerName'
import { DeviceIPAddress } from '../valueObject/DeviceIPAddress'
import { MACAddress } from '../valueObject/MACAddress'
import { DeviceCategoryMismatchError } from '../errors/DeviceCategoryMismatchError'
import { DeviceCreatedDomainEvent } from '../event/DeviceCreatedDomainEvent'
import { ComputerConsistencyValidator } from '../service/ComputerConsistencyValidator'
import { DeviceConsistencyValidator } from '../service/DeviceConsistencyValidator'
import { ComputerDoesNotExistError } from '../errors/ComputerDoesNotExistError'
import { type TypeOfSiteId } from '../../../../Location/TypeOfSite/domain/valueObject/TypeOfSiteId'
import { type Generic } from '../../../../ModelSeries/ModelSeries/domain/valueObject/Generic'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type DeviceComputerParams, type DeviceComputerPrimitives } from '../dto/Computer.dto'
import { type DeviceDto } from '../dto/Device.dto'
import { type DeviceChangeFields } from '../dto/DeviceFields'

/**
 * @description Represents a computer device, extending the base Device class with specific properties.
 */
export class DeviceComputer extends Device {
	constructor(
		id: DeviceId,
		serial: DeviceSerial,
		activo: DeviceActivo,
		statusId: StatusId,
		categoryId: CategoryId,
		brandId: BrandId,
		modelId: ModelSeriesId,
		employeeId: EmployeeId | null,
		locationId: LocationId | null,
		observation: DeviceObservation,
		stockNumber: DeviceStocknumber,
		private computerName: ComputerName,
		private processorId: ProcessorId | null,
		private memoryRam: ComputerMemoryRam,
		private memoryRamCapacity: MemoryRamCapacity,
		private hardDriveCapacityId: HardDriveCapacityId | null,
		private hardDriveTypeId: HardDriveTypeId | null,
		private operatingSystemId: OperatingSystemId | null,
		private operatingSystemArqId: OperatingSystemArqId | null,
		private macAddress: MACAddress,
		private ipAddress: DeviceIPAddress
	) {
		super(
			id,
			serial,
			activo,
			statusId,
			categoryId,
			brandId,
			modelId,
			employeeId,
			locationId,
			observation,
			stockNumber
		)
		if (!DeviceComputer.isComputerCategory({ categoryId: categoryId.value })) {
			throw new DeviceCategoryMismatchError(
				`${CategoryDefault.COMPUTERS}, ${CategoryDefault.LAPTOPS}, ${CategoryDefault.ALLINONE} o ${CategoryDefault.SERVERS}`
			)
		}
	}

	static create(params: DeviceComputerParams): DeviceComputer {
		const deviceComputer = new DeviceComputer(
			DeviceId.random(),
			new DeviceSerial(params.serial),
			new DeviceActivo(params.activo),
			new StatusId(params.statusId),
			new CategoryId(params.categoryId),
			new BrandId(params.brandId),
			new ModelSeriesId(params.modelId),
			params.employeeId ? new EmployeeId(params.employeeId) : null,
			params.locationId ? new LocationId(params.locationId) : null,
			new DeviceObservation(params.observation),
			new DeviceStocknumber(params.stockNumber),
			new ComputerName(params.computerName),
			params.processorId ? new ProcessorId(params.processorId) : null,
			ComputerMemoryRam.fromPrimitives(params.memoryRam),
			new MemoryRamCapacity(ComputerMemoryRam.totalAmount(params.memoryRam)),
			params.hardDriveCapacityId ? new HardDriveCapacityId(params.hardDriveCapacityId) : null,
			params.hardDriveTypeId ? new HardDriveTypeId(params.hardDriveTypeId) : null,
			params.operatingSystemId ? new OperatingSystemId(params.operatingSystemId) : null,
			params.operatingSystemArqId ? new OperatingSystemArqId(params.operatingSystemArqId) : null,
			new MACAddress(params.macAddress),
			new DeviceIPAddress(params.ipAddress)
		)

		deviceComputer.record(
			new DeviceCreatedDomainEvent({
				aggregateId: deviceComputer.idValue,
				activo: deviceComputer.activoValue,
				serial: deviceComputer.serialValue,
				device: deviceComputer.toPrimitives()
			})
		)

		return deviceComputer
	}

	static isComputerCategory({ categoryId }: { categoryId: Primitives<CategoryId> }): boolean {
		const acceptedCategories: string[] = [
			CategoryValues.COMPUTADORAS,
			CategoryValues.ALLINONE,
			CategoryValues.LAPTOPS,
			CategoryValues.SERVIDORES
		]
		return acceptedCategories.includes(categoryId)
	}

	toPrimitives(): DeviceComputerPrimitives {
		return {
			...super.toPrimitives(),
			computerName: this.computerNameValue,
			processorId: this.processorValue,
			memoryRam: this.memoryRamValue,
			memoryRamCapacity: this.memoryRamCapacityValue,
			hardDriveCapacityId: this.hardDriveCapacityValue,
			hardDriveTypeId: this.hardDriveTypeValue,
			operatingSystemId: this.operatingSystemValue,
			operatingSystemArqId: this.operatingSystemArqValue,
			macAddress: this.macAddressValue,
			ipAddress: this.ipAddressValue
		}
	}

	static fromPrimitives(primitives: DeviceDto): DeviceComputer {
		const { computer } = primitives
		if (!computer) {
			throw new ComputerDoesNotExistError(primitives?.serial ?? primitives.id)
		}

		return new DeviceComputer(
			new DeviceId(primitives.id),
			new DeviceSerial(primitives.serial),
			new DeviceActivo(primitives.activo),
			new StatusId(primitives.statusId),
			new CategoryId(primitives.categoryId),
			new BrandId(primitives.brandId),
			new ModelSeriesId(primitives.modelId),
			primitives.employeeId ? new EmployeeId(primitives.employeeId) : null,
			primitives.locationId ? new LocationId(primitives.locationId) : null,
			new DeviceObservation(primitives.observation),
			new DeviceStocknumber(primitives.stockNumber),
			new ComputerName(computer.computerName),
			computer.processorId ? new ProcessorId(computer.processorId) : null,
			ComputerMemoryRam.fromPrimitives(computer.memoryRam),
			new MemoryRamCapacity(computer.memoryRamCapacity),
			computer.hardDriveCapacityId ? new HardDriveCapacityId(computer.hardDriveCapacityId) : null,
			computer.hardDriveTypeId ? new HardDriveTypeId(computer.hardDriveTypeId) : null,
			computer.operatingSystemId ? new OperatingSystemId(computer.operatingSystemId) : null,
			computer.operatingSystemArqId ? new OperatingSystemArqId(computer.operatingSystemArqId) : null,
			new MACAddress(computer.macAddress),
			new DeviceIPAddress(computer.ipAddress)
		)
	}

	update(
		params: Partial<DeviceComputerParams>,
		context: {
			typeOfSite: Primitives<TypeOfSiteId> | null
			generic: Primitives<Generic>
		},
		validator: DeviceConsistencyValidator
	): DeviceChangeFields {
		const changes: DeviceChangeFields = []
		const computerConsistencyValidator = new ComputerConsistencyValidator()

		super.update(params, context, validator)

		if (params.computerName !== undefined && this.computerNameValue !== params.computerName) {
			changes.push({ field: 'computerName', oldValue: this.computerNameValue, newValue: params.computerName })
			this.updateComputerName(params.computerName)
		}

		if (params.processorId !== undefined && this.processorValue !== params.processorId) {
			changes.push({ field: 'processorId', oldValue: this.processorValue, newValue: params.processorId })
			this.updateProcessor(params.processorId)
		}

		if (params.memoryRam !== undefined) {
			if (JSON.stringify(this.memoryRamValue) !== JSON.stringify(params.memoryRam)) {
				changes.push({ field: 'memoryRam', oldValue: this.memoryRamValue, newValue: params.memoryRam })
				changes.push({
					field: 'memoryRamCapacity',
					oldValue: this.memoryRamCapacityValue,
					newValue: ComputerMemoryRam.totalAmount(params.memoryRam)
				})
				this.updateMemoryRam(params.memoryRam)
			}
		}

		if (params.hardDriveCapacityId !== undefined && this.hardDriveCapacityValue !== params.hardDriveCapacityId) {
			changes.push({
				field: 'hardDriveCapacityId',
				oldValue: this.hardDriveCapacityValue,
				newValue: params.hardDriveCapacityId
			})
			this.updateHardDriveCapacity(params.hardDriveCapacityId)
		}

		if (params.hardDriveTypeId !== undefined && this.hardDriveTypeValue !== params.hardDriveTypeId) {
			changes.push({
				field: 'hardDriveTypeId',
				oldValue: this.hardDriveTypeValue,
				newValue: params.hardDriveTypeId
			})
			this.updateHardDriveType(params.hardDriveTypeId)
		}

		if (params.operatingSystemId !== undefined && this.operatingSystemValue !== params.operatingSystemId) {
			changes.push({
				field: 'operatingSystemId',
				oldValue: this.operatingSystemValue,
				newValue: params.operatingSystemId
			})
			this.updateOperatingSystem(params.operatingSystemId)
		}

		if (params.operatingSystemArqId !== undefined && this.operatingSystemArqValue !== params.operatingSystemArqId) {
			changes.push({
				field: 'operatingSystemArqId',
				oldValue: this.operatingSystemArqValue,
				newValue: params.operatingSystemArqId
			})
			this.updateOperatingSystemArq(params.operatingSystemArqId)
		}

		if (params.macAddress !== undefined && this.macAddressValue !== params.macAddress) {
			changes.push({ field: 'macAddress', oldValue: this.macAddressValue, newValue: params.macAddress })
			this.updateMACAddress(params.macAddress)
		}

		if (params.ipAddress !== undefined && this.ipAddressValue !== params.ipAddress) {
			changes.push({ field: 'ipAddress', oldValue: this.ipAddressValue, newValue: params.ipAddress })
			this.updateIPAddress(params.ipAddress)
		}

		// Validar consistencia específica de computadoras
		computerConsistencyValidator.validate(this)

		return changes
	}

	// Update methods
	updateComputerName(newComputerName: Primitives<ComputerName>): void {
		this.computerName = new ComputerName(newComputerName)
	}

	updateProcessor(newProcessorId: Primitives<ProcessorId> | null): void {
		this.processorId = newProcessorId ? new ProcessorId(newProcessorId) : null
	}

	updateMemoryRam(newMemoryRam: Primitives<MemoryRamValues>[]): void {
		this.memoryRam = ComputerMemoryRam.fromPrimitives(newMemoryRam)
		const newMemoryRamCapacity = ComputerMemoryRam.totalAmount(newMemoryRam)
		this.memoryRamCapacity = new MemoryRamCapacity(newMemoryRamCapacity)
	}

	updateOperatingSystem(newOperatingSystem: Primitives<OperatingSystemId> | null): void {
		this.operatingSystemId = newOperatingSystem ? new OperatingSystemId(newOperatingSystem) : null
	}

	updateOperatingSystemArq(newOperatingSystemArq: Primitives<OperatingSystemArqId> | null): void {
		this.operatingSystemArqId = newOperatingSystemArq ? new OperatingSystemArqId(newOperatingSystemArq) : null
	}

	updateHardDriveCapacity(newHDDCapacity: Primitives<HardDriveCapacityId> | null): void {
		this.hardDriveCapacityId = newHDDCapacity ? new HardDriveCapacityId(newHDDCapacity) : null
	}

	updateHardDriveType(newHDDType: Primitives<HardDriveTypeId> | null): void {
		this.hardDriveTypeId = newHDDType ? new HardDriveTypeId(newHDDType) : null
	}

	updateIPAddress(newIPAddress: Primitives<DeviceIPAddress>): void {
		this.ipAddress = new DeviceIPAddress(newIPAddress)
	}

	updateMACAddress(newMACAddress: Primitives<MACAddress>): void {
		this.macAddress = new MACAddress(newMACAddress)
	}

	// Getters
	get computerNameValue(): Primitives<ComputerName> {
		return this.computerName.value
	}

	get memoryRamCapacityValue(): Primitives<MemoryRamCapacity> {
		return this.memoryRamCapacity.value
	}

	get memoryRamValue(): Primitives<MemoryRamValues>[] {
		return this.memoryRam.toPrimitives()
	}

	get processorValue(): Primitives<ProcessorId> | null {
		return this.processorId?.value ?? null
	}

	get hardDriveCapacityValue(): Primitives<HardDriveCapacityId> | null {
		return this.hardDriveCapacityId?.value ?? null
	}

	get hardDriveTypeValue(): Primitives<HardDriveTypeId> | null {
		return this.hardDriveTypeId?.value ?? null
	}

	get operatingSystemValue(): Primitives<OperatingSystemId> | null {
		return this.operatingSystemId?.value ?? null
	}

	get operatingSystemArqValue(): Primitives<OperatingSystemArqId> | null {
		return this.operatingSystemArqId?.value ?? null
	}

	get macAddressValue(): Primitives<MACAddress> {
		return this.macAddress.value
	}

	get ipAddressValue(): Primitives<DeviceIPAddress> {
		return this.ipAddress.value
	}
}
