import { type Request, type Response, type NextFunction } from 'express'
import { type Controller } from '../controller'
import { type BrandUpdater } from '../../../Contexts/Brand/application/BrandUpdater'
import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from '../../di/container'
import { BrandDependencies } from '../../di/brand/brand.di'
interface BrandRequest extends Request {
	params: {
		id: string
	}
	body: {
		name: string
	}
}

export class BrandPatchController implements Controller {
	async run(req: BrandRequest, res: Response, next: NextFunction): Promise<void> {
		try {
			const { name } = req.body
			const { id } = req.params
			const update: BrandUpdater = container.resolve(BrandDependencies.Updater)
			await update.run({ id, newName: name })
			res.status(httpStatus[200].statusCode).json({
				message: 'Marca actualizada exitosamente'
			})
		} catch (error) {
			next(error)
		}
	}
}
