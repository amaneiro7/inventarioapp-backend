import { type Request, type Response, type NextFunction } from "express"
import { type Controller } from "./controller"
import { type BrandUpdater } from "../../Contexts/Brand/application/BrandUpdater"

import httpStatus from '../../Contexts/Shared/infrastructure/utils/http-status'
import container from "../dependency-injections"

interface BrandRequest extends Request {
    params: {
        id: string
    },
    body: {
        name: string
    }
}


export class BrandPatchController implements Controller {
    async run(req: BrandRequest, res: Response, next: NextFunction): Promise<void> {
        try {
            const { name } = req.body
            const { id } = req.params
            const updater: BrandUpdater = container.get('Brand.application.BrandCreator')
            await updater.run({ id, newName: name })
            res.status(httpStatus.CREATED).json({ message: 'Marca creada exitosamente' })
        } catch (error) {
            next(error)
        }
    }
}