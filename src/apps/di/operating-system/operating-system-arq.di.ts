import { asClass, type AwilixContainer } from 'awilix'
import { SequelizeOperatingSystemArqRepository } from '../../../Contexts/Features/OperatingSystem/OperatingSystemArq/infraestructure/sequelize/SequelizeOperatingSystemArqRepository'
import { OperatingSystemArqFinderAll } from '../../../Contexts/Features/OperatingSystem/OperatingSystemArq/application/OperatingSystemArqFinderAll'
import { OperatingSystemArqGetAllController } from '../../controllers/operating-system/operating-system-arq.get-all.controller'

export enum OperatingSystemArqDependencies {
	Repository = 'operatingSystemArqRepository',
	FinderAll = 'operatingSystemArqFinderAll',
	GetAllController = 'operatingSystemArqGetAllController'
}

export const register = (container: AwilixContainer) => {
	container.register({
		operatingSystemArqRepository: asClass(SequelizeOperatingSystemArqRepository).singleton(),
		operatingSystemArqFinderAll: asClass(OperatingSystemArqFinderAll),
		operatingSystemArqGetAllController: asClass(OperatingSystemArqGetAllController)
	})
}
