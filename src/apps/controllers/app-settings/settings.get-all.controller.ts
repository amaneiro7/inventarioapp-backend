import { type Request, type Response, type NextFunction } from 'express'
import { type Controller } from '../controller'
import { type SettingsFinderAll } from '../../../Contexts/AppSettings/application/SettingsFinderAll'
import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from '../../di/container'
import { AppSettingsDependencies } from '../../di/app-settings/app-settings.di'

export class SettingsGetAllController implements Controller {
	async run(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const getAll: SettingsFinderAll = container.resolve(AppSettingsDependencies.FinderAll)
			const data = await getAll.run()
			res.status(httpStatus[200].statusCode).json(data)
		} catch (error) {
			next(error)
		}
	}
}
