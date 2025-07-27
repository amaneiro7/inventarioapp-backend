import { type Request, type Response, type NextFunction } from 'express'
import { type Controller } from '../controller'
import { type BrandUpdater } from '../../../Contexts/Brand/application/BrandUpdater'
import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from '../../di/container'
import { BrandDependencies } from '../../di/brand/brand.di'
export class BrandPatchController implements Controller {
	async run(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const params = req.body
			const { id } = req.params
			const update: BrandUpdater = container.resolve(BrandDependencies.Updater)
			await update.run({ id, params })
			res.status(httpStatus[200].statusCode).json({
				message: 'Marca actualizada exitosamente'
			})
		} catch (error) {
			next(error)
		}
	}
}
