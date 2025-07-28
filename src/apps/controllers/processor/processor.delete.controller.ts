import { type Request, type Response, type NextFunction } from 'express'
import { type Controller } from '../controller'
import { type ProcessorRemover } from '../../../Contexts/Features/Processor/Processor/application/ProcessorRemover'
import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from '../../di/container'
import { ProcessorDependencies } from '../../di/processor/processor.di'
import { SUCCESS_MESSAGES } from '../../constants/messages'

/**
 * Controller for deleting a processor.
 */
export class ProcessorDeleteController implements Controller {
	/**
	 * Handles the request to delete a processor by its ID.
	 * @param {Request} req - The Express request object, containing the processor ID in `req.params`.
	 * @param {Response} res - The Express response object.
	 * @param {NextFunction} next - The Express next middleware function.
	 * @returns {Promise<void>} A promise that resolves when the response is sent or an error is passed to the next middleware.
	 */
	async run(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const { id } = req.params
			const remover: ProcessorRemover = container.resolve(ProcessorDependencies.Remover)
			await remover.run({ id })
			res.status(httpStatus[200].statusCode).send({
				message: SUCCESS_MESSAGES.PROCESSOR_DELETED
			})
		} catch (error) {
			next(error)
		}
	}
}
