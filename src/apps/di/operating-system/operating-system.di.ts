import { asClass, type AwilixContainer } from 'awilix'
import { SequelizeOperatingSystemRepository } from '../../../Contexts/Features/OperatingSystem/OperatingSystem/infraesructure/sequelize/SequelizeOperatingSystemRepository'
import { OperatingSystemFinderAll } from '../../../Contexts/Features/OperatingSystem/OperatingSystem/application/OperatingSystemFinderAll'
import { OperatingSystemGetAllController } from '../../controllers/operating-system/operating-system.get-all.controller'

export enum OperatingSystemDependencies {
	Repository = 'operatingSystemRepository',
	FinderAll = 'operatingSystemFinderAll',
	GetAllController = 'operatingSystemGetAllController'
}

export const register = (container: AwilixContainer) => {
	container.register({
		operatingSystemRepository: asClass(
			SequelizeOperatingSystemRepository
		).singleton(),
		operatingSystemFinderAll: asClass(OperatingSystemFinderAll),
		operatingSystemGetAllController: asClass(
			OperatingSystemGetAllController
		)
	})
}
