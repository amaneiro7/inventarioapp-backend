import { BrandId } from '../../../../Brand/domain/valueObject/BrandId'
import { CategoryValues } from '../../../../Category/Category/domain/CategoryOptions'
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
import { Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { StatusId } from '../../../Status/domain/valueObject/StatusId'
import { DeviceActivo } from '../valueObject/DeviceActivo'
import { DeviceId } from '../valueObject/DeviceId'
import { DeviceObservation } from '../valueObject/DeviceObservation'
import { DeviceSerial } from '../valueObject/DeviceSerial'
import { DeviceStocknumber } from '../valueObject/DeviceStock'
import { DeviceComputerParams, DeviceComputerPrimitives } from '../dto/Computer.dto'
import { ComputerMemoryRam } from '../valueObject/ComputerMemoryRam'
import { ComputerName } from '../valueObject/ComputerName'
import { IPAddress } from '../valueObject/IPAddress'
import { MACAddress } from '../valueObject/MACAddress'
import { Device } from './Device'

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
		private ipAddress: IPAddress
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
			throw new InvalidArgumentError('This device does not belong to the computer category')
		}
	}

	static create(params: DeviceComputerParams): DeviceComputer {
		return new DeviceComputer(
			DeviceId.random(),
			new DeviceSerial(params.serial),
			new DeviceActivo(params.activo),
			new StatusId(params.statusId),
			new CategoryId(params.categoryId),
			new BrandId(params.brandId),
			new ModelSeriesId(params.modelId),
			new EmployeeId(params.employeeId, params.statusId),
			new LocationId(params.locationId),
			new DeviceObservation(params.observation),
			new DeviceStocknumber(params.stockNumber, params.statusId),
			new ComputerName(params.computerName, params.statusId),
			new ProcessorId(params.processorId),
			ComputerMemoryRam.fromPrimitives(params.memoryRam),
			new MemoryRamCapacity(ComputerMemoryRam.totalAmount(params.memoryRam), params.statusId),
			new HardDriveCapacityId(params.hardDriveCapacityId, params.statusId),
			new HardDriveTypeId(params.hardDriveTypeId, params.hardDriveCapacityId),
			new OperatingSystemId(params.operatingSystemId, params.hardDriveCapacityId, params.statusId),
			new OperatingSystemArqId(params.operatingSystemArqId, params.operatingSystemId),
			new MACAddress(params.macAddress),
			new IPAddress(params.ipAddress, params.statusId)
		)
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

	static fromPrimitives(primitives: DeviceComputerPrimitives): DeviceComputer {
		return new DeviceComputer(
			new DeviceId(primitives.id),
			new DeviceSerial(primitives.serial),
			new DeviceActivo(primitives.activo),
			new StatusId(primitives.statusId),
			new CategoryId(primitives.categoryId),
			new BrandId(primitives.brandId),
			new ModelSeriesId(primitives.modelId),
			new EmployeeId(primitives.employeeId, primitives.statusId),
			new LocationId(primitives.locationId),
			new DeviceObservation(primitives.observation),
			new DeviceStocknumber(primitives.stockNumber, primitives.statusId),
			new ComputerName(primitives.computerName, primitives.statusId),
			new ProcessorId(primitives.processorId),
			ComputerMemoryRam.fromPrimitives(primitives.memoryRam),
			new MemoryRamCapacity(primitives.memoryRamCapacity, primitives.statusId),
			new HardDriveCapacityId(primitives.hardDriveCapacityId, primitives.statusId),
			new HardDriveTypeId(primitives.hardDriveTypeId, primitives.hardDriveCapacityId),
			new OperatingSystemId(primitives.operatingSystemId, primitives.hardDriveCapacityId, primitives.statusId),
			new OperatingSystemArqId(primitives.operatingSystemArqId, primitives.operatingSystemId),
			new MACAddress(primitives.macAddress),
			new IPAddress(primitives.ipAddress, primitives.statusId)
		)
	}

	// Update methods
	updateComputerName(newComputerName: Primitives<ComputerName>, statusId: Primitives<StatusId>): void {
		this.computerName = new ComputerName(newComputerName, statusId)
	}

	updateProcessor(newProcessorId: Primitives<ProcessorId>): void {
		this.processorId = new ProcessorId(newProcessorId)
	}

	updateMemoryRam(newMemoryRam: Primitives<MemoryRamValues>[]): void {
		this.memoryRam = ComputerMemoryRam.fromPrimitives(newMemoryRam)
	}

	updateMemoryRamCapacity(newMemoryRamCapacity: Primitives<MemoryRamCapacity>, status: Primitives<StatusId>): void {
		this.memoryRamCapacity = new MemoryRamCapacity(newMemoryRamCapacity, status)
	}

	updateOperatingSystem(
		newOperatingSystem: Primitives<OperatingSystemId>,
		hardDriveCapacity: Primitives<HardDriveCapacityId>,
		status: Primitives<StatusId>
	): void {
		this.operatingSystemId = new OperatingSystemId(newOperatingSystem, hardDriveCapacity, status)
	}

	updateOperatingSystemArq(
		newOperatingSystemArq: Primitives<OperatingSystemArqId>,
		opertaingSystem: Primitives<OperatingSystemId>
	): void {
		this.operatingSystemArqId = new OperatingSystemArqId(newOperatingSystemArq, opertaingSystem)
	}

	updateHardDriveCapacity(newHDDCapacity: Primitives<HardDriveCapacityId>, status: Primitives<StatusId>): void {
		this.hardDriveCapacityId = new HardDriveCapacityId(newHDDCapacity, status)
	}

	updateHardDriveType(
		newHDDType: Primitives<HardDriveTypeId>,
		hardDriveCapacity: Primitives<HardDriveCapacityId>
	): void {
		this.hardDriveTypeId = new HardDriveTypeId(newHDDType, hardDriveCapacity)
	}

	updateIPAddress(newIPAddress: Primitives<IPAddress>, status: Primitives<StatusId>): void {
		this.ipAddress = new IPAddress(newIPAddress, status)
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

	get processorValue(): Primitives<ProcessorId> {
		return this.processorId.value
	}

	get hardDriveCapacityValue(): Primitives<HardDriveCapacityId> {
		return this.hardDriveCapacityId.value
	}

	get hardDriveTypeValue(): Primitives<HardDriveTypeId> {
		return this.hardDriveTypeId.value
	}

	get operatingSystemValue(): Primitives<OperatingSystemId> {
		return this.operatingSystemId.value
	}

	get operatingSystemArqValue(): Primitives<OperatingSystemArqId> {
		return this.operatingSystemArqId.value ?? null
	}

	get macAddressValue(): Primitives<MACAddress> {
		return this.macAddress.value
	}

	get ipAddressValue(): Primitives<IPAddress> {
		return this.ipAddress.value
	}
}
