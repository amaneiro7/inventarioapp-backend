import { type NextFunction, type Request, type Response } from 'express'
import { type Controller } from '../controller'


import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'



export class AuthRefreshTokenController implements Controller {
  async run(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const token = req.cookies

      console.log(token)
      // if (!user) throw new Error('User not found')
      // const accessToken = generateAceessTokens(user)
      // const refreshToken = generateRefreshToken(user)
      // const infoUser = SendUserWithoutPassowrd(user, accessToken)
      res
        .status(httpStatus.OK)
        // .cookie('refreshToken', refreshToken, {
        //   httpOnly: true,
        //   // secure: process.env.NODE_ENV === 'production',
        //   sameSite: 'none',
        // })
        // .json({
        //   ...infoUser,
        //   message: 'Sesion iniciada exitosamente'
        // })
        .send('Token refrescado')
    } catch (error) {
      next(error)
    }
  }
}
