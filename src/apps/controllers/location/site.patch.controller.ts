import { type Request, type Response, type NextFunction } from 'express'
import { type Controller } from '../controller'
import { type SiteUpdater } from '../../../Contexts/Location/Site/application/SiteUpdater'
import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from '../../di/container'
import { SiteDependencies } from '../../di/location/site.di'

export class SitePatchController implements Controller {
	async run(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const params = req.body
			const { id } = req.params
			const update: SiteUpdater = container.resolve(SiteDependencies.Updater)
			await update.run({ id, params })
			res.status(httpStatus[204].statusCode).send({
				message: 'Sitio actualizado exitosamente'
			})
		} catch (error) {
			next(error)
		}
	}
}
