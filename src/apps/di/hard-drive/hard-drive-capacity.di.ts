import { asClass, type AwilixContainer } from 'awilix'
import { SequelizeHardDriveCapacityRepository } from '../../../Contexts/Features/HardDrive/HardDriveCapacity/infraestructure/sequelize/SequelizeHardDriveCapacity'
import { HardDriveCapacityFinderAll } from '../../../Contexts/Features/HardDrive/HardDriveCapacity/application/HardDriveCapacityFinder'
import { HardDriveCapacityGetAllController } from '../../controllers/hard-drive/hard-drive-capacity.get-all.controller'

export enum HardDriveCapacityDependencies {
	Repository = 'hardDriveCapacityRepository',
	FinderAll = 'hardDriveCapacityFinderAll',
	GetAllController = 'hardDriveCapacityGetAllController'
}

export const register = (container: AwilixContainer) => {
	container.register({
		hardDriveCapacityRepository: asClass(SequelizeHardDriveCapacityRepository).singleton(),
		hardDriveCapacityFinderAll: asClass(HardDriveCapacityFinderAll),
		hardDriveCapacityGetAllController: asClass(HardDriveCapacityGetAllController)
	})
}
