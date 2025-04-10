import { type Request, type Response, type NextFunction } from 'express'
import { type Controller } from '../controller'
import { type RegionUpdater } from '../../../Contexts/Location/Region/application/RegionUpdater'

import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from '../../di/container'
import { RegionDependencies } from '../../di/location/region.di'

export class RegionPatchController implements Controller {
	async run(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const params = req.body
			const { id } = req.params
			const update: RegionUpdater = container.resolve(RegionDependencies.Updater)
			await update.run({ id, params })
			res.status(httpStatus.CREATED).send({
				message: 'Región actualizado exitosamente'
			})
		} catch (error) {
			next(error)
		}
	}
}
