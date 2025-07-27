import { type Request, type Response, type NextFunction } from 'express'
import { type Controller } from '../controller'
import { type BrandCreator } from '../../../Contexts/Brand/application/BrandCreator'
import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from '../../di/container'
import { BrandDependencies } from '../../di/brand/brand.di'

export class BrandPostController implements Controller {
	async run(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const params = req.body
			const create: BrandCreator = container.resolve(BrandDependencies.Creator)
			await create.run(params)
			res.status(httpStatus[201].statusCode).json({
				message: 'Marca creada exitosamente'
			})
		} catch (error) {
			next(error)
		}
	}
}
