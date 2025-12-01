import { container } from '../di/container'
import { AppSettingsDependencies } from '../di/app-settings/app-settings.di'
import { type NextFunction, type Request, type Response } from 'express'
import { type JwtPayloadUser } from '../../Contexts/Auth/domain/GenerateToken'
import { type SettingsFinder } from '../../Contexts/AppSettings/application/SettingsFinder'
import { AppSettingDefaults, AppSettingKeys } from '../../Contexts/AppSettings/domain/entity/SettingsKeys'
import { PasswordExpiredError } from '../../Contexts/AppSettings/domain/errors/PasswordExpiredError'

export async function ensurePasswordNotExpired(req: Request, res: Response, next: NextFunction) {
	try {
		const userPayload = req.user as JwtPayloadUser

		// 1. Regla de Excepción: Si la contraseña está marcada para no expirar, saltamos la verificación.
		if (userPayload.passwordNeverExpires) {
			return next()
		}

		// 2. Si no hay fecha de cambio (ej. cuenta nueva o reseteada), forzamos el cambio.
		const passwordChangeAt = userPayload.passwordChangeAt ? new Date(userPayload.passwordChangeAt) : null
		if (!passwordChangeAt) {
			return next(new PasswordExpiredError())
		}

		// 3. Verificación de expiración por tiempo
		const settingsFinder: SettingsFinder = container.resolve(AppSettingsDependencies.Finder)
		const expiryDays = await settingsFinder.findAsNumber({
			key: AppSettingKeys.SECURITY.PASSWORD_EXPIRY_DAYS,
			fallback: AppSettingDefaults.SECURITY.PASSWORD_EXPIRY_DAYS
		})

		const expiryDate = new Date(passwordChangeAt)
		expiryDate.setDate(expiryDate.getDate() + expiryDays)

		if (new Date() >= expiryDate) {
			return next(new PasswordExpiredError())
		}

		// 4. La contraseña es válida, continuar.
		return next()
	} catch (error) {
		next(error)
	}
}
