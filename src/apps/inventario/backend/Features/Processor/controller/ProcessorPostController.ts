import { type NextFunction, type Request, type Response } from 'express'
import httpStatus from '../../../Shared/utils/http-status'
import { ProcessorCreator } from '../../../../../../Contexts/Features/Processor/Processor/application/ProcessorCreator'
import { ProcessorUpdater } from '../../../../../../Contexts/Features/Processor/Processor/application/ProcessorUpdater'
import { type Repository } from '../../../../../../Contexts/Shared/domain/Repository'

export class ProcessorPostController {
  constructor(private readonly repository: Repository) { }

  create = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { productCollection, numberModel, cores, threads, frequency } = req.body
      await new ProcessorCreator(this.repository).run({ productCollection, numberModel, cores, threads, frequency })
      res.status(httpStatus.CREATED).json({ message: 'Procesador creado exitosamente' })
    } catch (error) {
      next(error)
    }
  }

  update = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { productCollection, numberModel, cores, threads, frequency } = req.body
      const { id } = req.params
      await new ProcessorUpdater(this.repository).run({ id, params: { productCollection, numberModel, cores, threads, frequency } })
      res.status(httpStatus.CREATED).json({ message: 'Procesador actualizado exitosamente' })
    } catch (error) {
      next(error)
    }
  }
}
