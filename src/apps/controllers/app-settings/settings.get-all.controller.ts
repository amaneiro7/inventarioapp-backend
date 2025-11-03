import { type Request, type Response, type NextFunction } from 'express'
import { type Controller } from '../controller'
import { type SettingsFinderAll } from '../../../Contexts/Shared/AppSettings/application/SettingsFinderAll'
import { type JwtPayloadUser } from '../../../Contexts/Auth/domain/GenerateToken'
import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from '../../di/container'
import { AppSettingsDependencies } from '../../di/app-settings/app-settings.di'
import { isSuperAdmin } from '../../../Contexts/User/Role/application/isSuperAdmin'

export class SettingsGetAllController implements Controller {
	async run(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const user = req.user as JwtPayloadUser
			isSuperAdmin({ user })
			const getAll: SettingsFinderAll = container.resolve(AppSettingsDependencies.FinderAll)
			const data = await getAll.run()
			res.status(httpStatus[200].statusCode).json(data)
		} catch (error) {
			next(error)
		}
	}
}
