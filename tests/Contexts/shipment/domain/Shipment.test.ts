import { StatusEnum } from '../../../../src/Contexts/Shipment/Shipment/domain/valueObject/ShipmentStatus'
import { ShipmentMother } from '../__mothers__/ShipmentMother'
import { DeviceMother } from '../__mothers__/DeviceMother'
import { ShipmentModificationError } from '../../../../src/Contexts/Shipment/Shipment/domain/errors/ShipmentModificationError'
import { InvalidShipmentStatusTransitionError } from '../../../../src/Contexts/Shipment/Shipment/domain/errors/InvalidShipmentStatusTransitionError'
import { Shipment } from '../../../../src/Contexts/Shipment/Shipment/domain/entity/Shipment'

describe('Shipment Entity', () => {
	describe('create', () => {
		it('should create a shipment with devices correctly', () => {
			const deviceId1 = '5592d735-4048-41c6-9e90-4993f5beb067'
			const deviceId2 = 'bc4c23c8-9f83-4610-834e-852384f2c7d6'
			const params = ShipmentMother.createParams([deviceId1, deviceId2])

			const shipment = Shipment.create(params)
			const primitives = shipment.toPrimitive()

			expect(primitives.id).toBeDefined()
			expect(primitives.status).toBe(StatusEnum.PENDING)
			expect(shipment.shipmentDevicePrimitives.length).toBe(2)
			expect(shipment.shipmentDevicePrimitives[0].deviceId).toBe(deviceId1)
		})
	})

	describe('Business Rules', () => {
		it('should throw error if trying to modify a delivered shipment', () => {
			const shipment = ShipmentMother.delivered()
			const newDestination = 'new-dest-id'

			expect(() => shipment.changeDestination(newDestination)).toThrow(ShipmentModificationError)
		})

		it('should throw error if trying to change destination while in transit', () => {
			const shipment = ShipmentMother.pendingWithOneComputer()
			shipment.changeStatus(StatusEnum.IN_TRANSIT)
			const newDestination = 'new-dest-id'

			expect(() => shipment.changeDestination(newDestination)).toThrow(ShipmentModificationError)
		})

		it('should allow changing destination when pending', () => {
			const shipment = ShipmentMother.pendingWithOneComputer()
			const newDestinationId = 'new-dest-id'
			const newDestination = 'new-dest-id'

			shipment.changeDestination(newDestination)
			expect(shipment.toPrimitive().destination).toBe(newDestinationId)
		})
	})

	describe('Status Transitions', () => {
		it('should transition from PENDING to IN_TRANSIT', () => {
			const shipment = ShipmentMother.pendingWithOneComputer()
			shipment.changeStatus(StatusEnum.IN_TRANSIT)
			expect(shipment.toPrimitive().status).toBe(StatusEnum.IN_TRANSIT)
		})

		it('should throw error when transitioning from PENDING to DELIVERED', () => {
			const shipment = ShipmentMother.pendingWithOneComputer()
			expect(() => shipment.changeStatus(StatusEnum.DELIVERED)).toThrow(InvalidShipmentStatusTransitionError)
		})

		it('should deliver a shipment that is IN_TRANSIT', () => {
			const shipment = ShipmentMother.pendingWithOneComputer()
			shipment.changeStatus(StatusEnum.IN_TRANSIT)

			const deliveryDate = new Date()
			const receivedById = 'emp-123'
			shipment.deliver(deliveryDate, receivedById)

			const primitives = shipment.toPrimitive()
			expect(primitives.status).toBe(StatusEnum.DELIVERED)
			expect(primitives.deliveryDate).toEqual(deliveryDate)
			expect(primitives.receivedBy).toBe(receivedById)
		})

		it('should throw error when trying to deliver a PENDING shipment', () => {
			const shipment = ShipmentMother.pendingWithOneComputer()
			expect(() => shipment.deliver(new Date(), 'emp-123')).toThrow(InvalidShipmentStatusTransitionError)
		})
	})
})
