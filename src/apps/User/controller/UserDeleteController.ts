import { type NextFunction, type Request, type Response } from 'express'
import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'

import { UserRemover } from '../../../Contexts/User/user/application/UserRemover'
import { type JwtPayloadUser } from '../../../Contexts/Auth/domain/GenerateToken'
import { type Repository } from '../../../Contexts/Shared/domain/Repository'

export class UserDeleteController {
    constructor(private readonly repository: Repository) { }

    remove = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const user = req.user as JwtPayloadUser
            const { id } = req.body
            await new UserRemover(this.repository).run({
                user,
                id
            })
            res.status(httpStatus.CREATED).json({ message: 'Usuario eliminado exitosamente' })
        } catch (error) {
            next(error)
        }
    }
}
