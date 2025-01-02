import { type Request, type Response, type NextFunction } from "express"
import { type Controller } from "./controller"
import { type BrandCreator } from "../../Contexts/Brand/application/BrandCreator"
import httpStatus from '../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from "../di/container"
interface BrandRequest extends Request {
    body: {
        name: string
    }
}

export class BrandPostController implements Controller {
    async run(req: BrandRequest, res: Response, next: NextFunction): Promise<void> {
        try {
            const { name } = req.body
            const brandCreator: BrandCreator = container.resolve('brandCreator')
            await brandCreator.run({ name })
            res.status(httpStatus.CREATED).json({ message: 'Marca creada exitosamente' })
        } catch (error) {
            next(error)
        }
    }
}