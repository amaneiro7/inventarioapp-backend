import { asClass, type AwilixContainer } from 'awilix'
import { SequelizeHardDriveTypeRepository } from '../../../Contexts/Features/HardDrive/HardDriveType/infraestructure/sequelize/SequelizeHardDriveTypeRepository'
import { HardDriveTypeFinderAll } from '../../../Contexts/Features/HardDrive/HardDriveType/application/HardDriveTypeFinder'
import { HardDriveTypeGetAllController } from '../../controllers/hard-drive/hard--drive-type.get-all.controller'

export enum HardDriveTypeDependencies {
	Repository = 'hardDriveTypeRepository',
	FinderAll = 'hardDriveTypeFinderAll',
	GetAllController = 'hardDriveTypeGetAllController'
}

export const register = (container: AwilixContainer) => {
	container.register({
		hardDriveTypeRepository: asClass(
			SequelizeHardDriveTypeRepository
		).singleton(),
		hardDriveTypeFinderAll: asClass(HardDriveTypeFinderAll),
		hardDriveTypeGetAllController: asClass(HardDriveTypeGetAllController)
	})
}
