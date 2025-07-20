import { type Request, type Response, type NextFunction } from 'express'
import { type Controller } from '../controller'
import { type VicepresidenciaEjecutivaFinderAll } from '../../../Contexts/employee/VicepresidenciaEjecutiva/application/VicepresidenciaEjecutivaFinderAll'
import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from '../../di/container'
import { VicepresidenciaEjecutivaDependencies } from '../../di/employee/vicepresidencia-ejecutiva.di'
import { CriteriaFromUrlConverter } from '../../../Contexts/Shared/infrastructure/criteria/CriteriaFromUrlConverter'

export class VicepresidenciaEjecutivaGetAllController implements Controller {
	async run(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const getAll: VicepresidenciaEjecutivaFinderAll = container.resolve(
				VicepresidenciaEjecutivaDependencies.FinderAll
			)
			const convert = new CriteriaFromUrlConverter()
			const query = convert.toCriteria(req)

			const data = await getAll.run(query)
			res.status(httpStatus[200].statusCode).json(data)
		} catch (error) {
			next(error)
		}
	}
}
