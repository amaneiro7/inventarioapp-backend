import { type Request, type Response, type NextFunction } from 'express'
import { type Controller } from '../controller'
import { type InputTypeFinderAll } from '../../../Contexts/ModelSeries/InputType/application/InputTypeFinder'

import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from '../../di/container'
import { InputTypeDependencies } from '../../di/input-type/input-type.di'
import { CriteriaFromUrlConverter } from '../../../Contexts/Shared/infrastructure/criteria/CriteriaFromUrlConverter'

export class InputTypeGetAllController implements Controller {
	async run(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const getAll: InputTypeFinderAll = container.resolve(
				InputTypeDependencies.FinderAll
			)
			const convert = new CriteriaFromUrlConverter()
			const query = convert.toCriteria(req)

			const data = await getAll.run(query)
			res.status(httpStatus.OK).json(data)
		} catch (error) {
			next(error)
		}
	}
}
