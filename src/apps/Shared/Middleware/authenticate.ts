import { type NextFunction, type Request, type Response } from 'express'
import passport from 'passport'
import { StrategyOptions } from '../../../Contexts/Auth/infrastructure/passport/strategy-options'

export const authenticate = (req: Request, res: Response, next: NextFunction): any => {
  passport.authenticate(StrategyOptions.JWT, { session: false })(req, res, next)
}
