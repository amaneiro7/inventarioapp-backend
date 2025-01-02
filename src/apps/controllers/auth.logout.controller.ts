import { type NextFunction, type Request, type Response } from 'express'
import { type Controller } from './controller'
import httpStatus from '../../Contexts/Shared/infrastructure/utils/http-status'

export class AuthLogoutController implements Controller {
  async run(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      res
        .status(httpStatus.OK)
        .clearCookie('refreshToken')
        .clearCookie('accessToken')
        .json({ message: 'Sesion cerrada exitosamente' })
    } catch (error) {
      next(error)
    }
  }
}
