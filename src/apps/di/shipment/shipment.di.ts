import { type AwilixContainer, asClass } from 'awilix'
import { SequelizeShipmentRepository } from '../../../Contexts/Shipment/Shipment/infrastructure/Sequelize/SequelizeShipmentRepository'
import { ShipmentCreator } from '../../../Contexts/Shipment/Shipment/application/ShipmentCreator'
import { ShipmentFinder } from '../../../Contexts/Shipment/Shipment/application/ShipmentFinder'
import { ShipmentFinderAll } from '../../../Contexts/Shipment/Shipment/application/ShipmentFinderAll'
import { ShipmentUpdater } from '../../../Contexts/Shipment/Shipment/application/ShipmentUpdater'
import { SequelizeShipmentDeviceRepository } from '../../../Contexts/Shipment/ShipmentDevice/infrastructure/Sequelize/SequelizeShipmentDeviceRepository'
import { ShipmentGetController } from '../../controllers/shipments/shipment.get.controller'
import { ShipmentGetAllController } from '../../controllers/shipments/shipment.get-all.controller'
import { ShipmentPostController } from '../../controllers/shipments/shipment.post.controller'
import { ShipmentPatchController } from '../../controllers/shipments/shipment.patch.controller'

export enum ShipmentDependencies {
	Repository = 'shipmentRepository',
	Creator = 'shipmentCreator',
	Finder = 'shipmentFinder',
	FinderAll = 'shipmentFinderAll',
	Updater = 'shipmentUpdater',
	GetController = 'shipmentGetController',
	GetAllController = 'shipmentGetAllController',
	PostController = 'shipmentPostController',
	PatchController = 'shipmentPatchController'
}

export const register = (container: AwilixContainer): void => {
	container.register({
		shipmentRepository: asClass(SequelizeShipmentRepository).singleton(),
		shipmentDeviceRepository: asClass(SequelizeShipmentDeviceRepository).singleton(),
		shipmentCreator: asClass(ShipmentCreator),
		shipmentFinder: asClass(ShipmentFinder),
		shipmentFinderAll: asClass(ShipmentFinderAll),
		shipmentUpdater: asClass(ShipmentUpdater),
		shipmentGetController: asClass(ShipmentGetController),
		shipmentGetAllController: asClass(ShipmentGetAllController),
		shipmentPostController: asClass(ShipmentPostController),
		shipmentPatchController: asClass(ShipmentPatchController)
	})
}
