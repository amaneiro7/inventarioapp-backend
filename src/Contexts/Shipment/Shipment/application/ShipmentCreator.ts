import { Shipment } from '../domain/entity/Shipment'
import { SiteDoesNotExistError } from '../../../Location/Site/domain/SiteDoesNotExistError'
import { DeviceDoesNotExistError } from '../../../Device/Device/domain/DeviceDoesNotExistError'
import { EmployeeDoesNotExistError } from '../../../employee/Employee/domain/Errors/EmployeeDoesNotExistError'
import { UserDoesNotExistError } from '../../../User/user/domain/Errors/UserDoesNotExistError'
import { InvalidArgumentError } from '../../../Shared/domain/errors/ApiError'
import { type ShipmentRepository } from '../domain/repository/ShipmentRepository'
import { ShipmentDto, type ShipmentParams } from '../domain/entity/Shipment.dto'
import { type SiteRepository } from '../../../Location/Site/domain/SiteRepository'
import { type UserRepository } from '../../../User/user/domain/Repository/UserRepository'
import { type DeviceRepository } from '../../../Device/Device/domain/DeviceRepository'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type ReceivedBy } from '../domain/valueObject/ReceivedBy'
import { type SiteId } from '../../../Location/Site/domain/valueObject/SiteId'
import { type UserId } from '../../../User/user/domain/valueObject/UserId'
import { type DeviceId } from '../../../Device/Device/domain/DeviceId'
import { type EmployeeRepository } from '../../../employee/Employee/domain/Repository/EmployeeRepository'
import { type DeviceDto } from '../../../Device/Device/domain/Device.dto'
import { type JwtPayloadUser } from '../../../Auth/domain/GenerateToken'
import { type EventBus } from '../../../Shared/domain/event/EventBus'

export class ShipmentCreator {
	private readonly shipmentRepository: ShipmentRepository
	private readonly siteRepository: SiteRepository
	private readonly employeeRepository: EmployeeRepository
	private readonly userRepository: UserRepository
	private readonly deviceRepository: DeviceRepository
	private readonly eventBus: EventBus

	constructor({
		shipmentRepository,
		siteRepository,
		employeeRepository,
		userRepository,
		deviceRepository,
		eventBus
	}: {
		shipmentRepository: ShipmentRepository
		siteRepository: SiteRepository
		employeeRepository: EmployeeRepository
		userRepository: UserRepository
		deviceRepository: DeviceRepository
		eventBus: EventBus
	}) {
		this.shipmentRepository = shipmentRepository
		this.siteRepository = siteRepository
		this.employeeRepository = employeeRepository
		this.userRepository = userRepository
		this.deviceRepository = deviceRepository
		this.eventBus = eventBus
	}

	async run({ params, user }: { params: ShipmentParams; user?: JwtPayloadUser }): Promise<void> {
		if (!user?.sub) {
			throw new InvalidArgumentError('User is required to perform this action')
		}
		const { origin, destination, receivedBy, deviceIds } = params
		const sentBy = user.sub

		await Promise.all([
			this.ensureSiteExist(origin),
			this.ensureSiteExist(destination),
			this.ensureUserExist(sentBy),
			this.ensureEmployeeExist(receivedBy)
		])

		const lastShipment = await this.shipmentRepository.findLast()
		const nextShipmentCode = this.generateNextShipmentCode(lastShipment)
		// 1. Preparar los datos: Carga los device DTOs
		const devices = await this.createShipmentDevices(deviceIds)

		// 2. Crear el agregado completo
		const shipment = Shipment.create({ ...params, sentBy, devices, shipmentCode: nextShipmentCode })

		// 3. persistir el agregado
		// La implmentacion de 'save' ahora debe manejar los hijos

		await this.shipmentRepository.save(shipment)
		await this.eventBus.publish(shipment.pullDomainEvents())
	}

	private async createShipmentDevices(deviceIds: Primitives<DeviceId>[]): Promise<DeviceDto[]> {
		const uniqueDevices = [...new Set(deviceIds)]
		const devices = await Promise.all(
			uniqueDevices.map(async deviceId => {
				const device = await this.deviceRepository.findById(deviceId)
				if (device === null) {
					throw new DeviceDoesNotExistError(deviceId)
				}
				return device
			})
		)

		return devices
	}

	private async ensureSiteExist(siteId: Primitives<SiteId>): Promise<void> {
		const location = await this.siteRepository.findById(siteId)
		if (location === null) {
			throw new SiteDoesNotExistError(siteId)
		}
	}

	private async ensureEmployeeExist(employeeId?: Primitives<ReceivedBy>): Promise<void> {
		if (!employeeId) {
			return
		}
		const employee = await this.employeeRepository.findById(employeeId)
		if (employee === null) {
			throw new EmployeeDoesNotExistError(employeeId)
		}
	}

	private async ensureUserExist(userId: Primitives<UserId>): Promise<void> {
		const user = await this.userRepository.findById(userId) // This will now fetch UserPrimitives with new fields
		if (user === null) {
			throw new UserDoesNotExistError(userId)
		}
	}

	private generateNextShipmentCode(lastShipment: ShipmentDto | null): string {
		if (!lastShipment) {
			return `ENV-${new Date().getFullYear()}-00001`
		}
		const parts = lastShipment.shipmentCode.split('-')
		const nextNumber = parseInt(parts[2], 10) + 1
		return `ENV-${parts[1]}-${nextNumber.toString().padStart(5, '0')}`
	}
}
