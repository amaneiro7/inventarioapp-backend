import { type NextFunction, type Request, type Response } from 'express'
import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { SearchAllCoordinacion } from '../../../Contexts/employee/Area/Coordinacion/application/CoordinacionFinderAll'
import { type Repository } from '../../../Contexts/Shared/domain/Repository'

export class CoordinacionGetController {
  constructor(private readonly repository: Repository) { }

  getAll = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const data = await new SearchAllCoordinacion(this.repository).search()
      res.status(httpStatus.OK).json(data)
    } catch (error) {
      next(error)
    }
  }
}
