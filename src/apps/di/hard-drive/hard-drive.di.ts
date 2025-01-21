import { asClass, type AwilixContainer } from 'awilix'
import { HardDriveValidation } from '../../../Contexts/Features/HardDrive/HardDrive/application/HardDriveValidation'

export const register = (container: AwilixContainer) => {
	container.register({
		hardDriveValidation: asClass(HardDriveValidation)
	})
}
