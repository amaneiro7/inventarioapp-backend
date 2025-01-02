import httpStatus from '../../Contexts/Shared/infrastructure/utils/http-status'
import { type NextFunction, type Request, type Response } from 'express'
import { type UserPrimitives } from '../../Contexts/User/user/domain/User'
import { type RolePrimitives } from '../../Contexts/User/Role/domain/Role'

import { Controller } from './controller'
import { generateAceessTokens, generateRefreshToken } from '../../Contexts/Auth/domain/GenerateToken'
import { SendUserWithoutPassowrd } from '../../Contexts/Auth/domain/SendUserWithoutPassword'

type ReqUser = UserPrimitives & {
  role: RolePrimitives
}


export class AuthLoginController implements Controller {
  async run(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const user = req.user as ReqUser
      if (user === undefined) throw new Error('User not found')
      const accessToken = generateAceessTokens(user)
      const refreshToken = generateRefreshToken(user)
      const infoUser = SendUserWithoutPassowrd(user, accessToken)
      res
        .status(httpStatus.OK)
        .cookie('refreshToken', refreshToken, {
          httpOnly: true,
          // secure: process.env.NODE_ENV === 'production',
          sameSite: 'strict',
        })
        .json({
          ...infoUser,
          message: 'Sesion iniciada exitosamente'
        })
    } catch (error) {
      next(error)
    }
  }
}
