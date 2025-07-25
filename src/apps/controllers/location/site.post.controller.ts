import { type Request, type Response, type NextFunction } from 'express'
import { type Controller } from '../controller'
import { type SiteCreator } from '../../../Contexts/Location/Site/application/SiteCreator'
import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from '../../di/container'
import { SiteDependencies } from '../../di/location/site.di'

export class SitePostController implements Controller {
	async run(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const params = req.body
			const create: SiteCreator = container.resolve(SiteDependencies.Creator)
			await create.run(params)
			res.status(httpStatus[201].statusCode).send({
				message: 'Sitio creado exitosamente'
			})
		} catch (error) {
			next(error)
		}
	}
}
