import { type NextFunction, type Request, type Response } from 'express'
import httpStatus from '../../Shared/utils/http-status'
import { SearchAllGerencia } from '../../../Contexts/employee/Area/Gerencia/application/GerenciaFinderAll'
import { type Repository } from '../../../Contexts/Shared/domain/Repository'

export class GerenciaGetController {
  constructor(private readonly repository: Repository) { }

  getAll = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const data = await new SearchAllGerencia(this.repository).search()
      res.status(httpStatus.OK).json(data)
    } catch (error) {
      next(error)
    }
  }
}
