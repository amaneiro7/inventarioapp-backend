import { asClass, type AwilixContainer } from 'awilix'
import { ComputerValidation } from '../../../Contexts/Features/Computer/application/ComputerValidation'

export const register = (container: AwilixContainer) => {
	container.register({
		computerValidation: asClass(ComputerValidation)
	})
}
