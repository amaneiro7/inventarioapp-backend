import { type NextFunction, type Request, type Response } from 'express'
import passport from 'passport'
import { Strategy } from '../../../Contexts/Auth/infrastructure/passport'

export const authenticate = (req: Request, res: Response, next: NextFunction): any => {
  passport.authenticate(Strategy.JWT, { session: false })(req, res, next)
}
