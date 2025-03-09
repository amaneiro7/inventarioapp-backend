import { type Request, type Response, type NextFunction } from 'express'
import { type Controller } from '../controller'
import { type CityCreator } from '../../../Contexts/Location/City/application/CityCreator'

import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from '../../di/container'
import { CityDependencies } from '../../di/location/city.di'

interface CityRequest extends Request {
	body: {
		name: string
		stateId: string
	}
}

export class CityPostController implements Controller {
	async run(req: CityRequest, res: Response, next: NextFunction): Promise<void> {
		try {
			const { name, stateId } = req.body
			const create: CityCreator = container.resolve(CityDependencies.Creator)
			await create.run({ name, stateId })
			res.status(httpStatus.CREATED).json({
				message: 'Ciudad creada exitosamente'
			})
		} catch (error) {
			next(error)
		}
	}
}
