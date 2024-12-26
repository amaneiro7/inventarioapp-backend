import { type NextFunction, type Request, type Response } from 'express'
import { type Repository } from '../../../../../Contexts/Shared/domain/Repository'
import httpStatus from '../../Shared/utils/http-status'
import { UserRemover } from '../../../../../Contexts/User/User/application/UserRemover'
import { JwtPayloadUser } from '../../../../../Contexts/Auth/domain/GenerateToken'

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
