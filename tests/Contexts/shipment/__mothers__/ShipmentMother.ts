import { type Primitives } from '../../../../src/Contexts/Shared/domain/value-object/Primitives'
import { type ShipmentId } from '../../../../src/Contexts/Shipment/Shipment/domain/valueObject/ShipmentId'
import { StatusEnum } from '../../../../src/Contexts/Shipment/Shipment/domain/valueObject/ShipmentStatus'
import { ReasonEnum } from '../../../../src/Contexts/Shipment/Shipment/domain/valueObject/ShipmentReason'
import {
	type ShipmentCreatorParams,
	type ShipmentDto
} from '../../../../src/Contexts/Shipment/Shipment/domain/entity/Shipment.dto'
import { Shipment } from '../../../../src/Contexts/Shipment/Shipment/domain/entity/Shipment'
import { DeviceMother } from './DeviceMother'

export class ShipmentMother {
	static createParams(devices: Primitives<ShipmentId>[]): ShipmentCreatorParams {
		return {
			origin: '80a80c0e-30d4-498f-8a2c-a99a73a2d53d',
			destination: '3da6c8fa-4408-431d-8bd7-717570a459fd',
			shipmentDate: new Date(),
			deliveryDate: null,
			sentBy: 'f2b5a80e-e353-43df-8d50-6e863871a678',
			receivedBy: '4c235bd1-b059-41a5-8d07-e429baee35f8',
			trackingNumber: null,
			observation: 'Test observation',
			status: StatusEnum.PENDING,
			reason: ReasonEnum.TRANSFER,
			devices: devices.map(id => DeviceMother.computer(id))
		}
	}

	static fromPrimitives(primitives: Partial<ShipmentDto>): ShipmentDto {
		const defaultComputer = DeviceMother.computer('164a8841-0bf9-4d55-b859-a833f47be547')
		const defaultShipmentDevice = {
			id: '8e6d20d9-6460-4958-87cf-d24b13b768a8',
			shipmentId: '8cde1de9-d2d7-4cc4-b52b-522c23b50c93',
			deviceId: defaultComputer.id,
			deviceSnapshot: { ...defaultComputer }
		}

		return {
			id: '9e4ad704-30a9-480e-9742-ea1c12ed05c0',
			origin: 'af421e5c-8910-45d2-864f-c03c9fd751f6',
			destination: '3dd15fef-a01d-4919-9352-927a35b21fd3',
			shipmentDate: new Date(),
			deliveryDate: null,
			sentBy: '8b5993eb-4ff5-43f8-a9f2-6dd1ab72cea6',
			receivedBy: '16c3e980-c1be-4424-8f42-25694f46407b',
			trackingNumber: null,
			observation: 'Test observation',
			status: StatusEnum.PENDING,
			reason: ReasonEnum.TRANSFER,
			shipmentDevice: [defaultShipmentDevice],
			...primitives
		}
	}

	static pendingWithOneComputer(): Shipment {
		const deviceId = '0dc86cef-4e7b-4ce5-a209-81fafe1361a7'
		const params = this.createParams([deviceId])
		return Shipment.create(params)
	}

	static delivered(): Shipment {
		const dto = this.fromPrimitives({ status: StatusEnum.DELIVERED, deliveryDate: new Date() })
		return Shipment.fromPrimitives(dto)
	}
}
