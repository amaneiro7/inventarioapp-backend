import { container } from '../di/container'
import { AppSettingsDependencies } from '../di/app-settings/app-settings.di'
import { PasswordExpiredError } from '../../Contexts/AppSettings/domain/errors/PasswordExpiredError'
import { type NextFunction, type Request, type Response } from 'express'
import { type JwtPayloadUser } from '../../Contexts/Auth/domain/GenerateToken'

// Pseudocódigo del middleware
export async function ensurePasswordNotExpired(req: Request, res: Response, next: NextFunction) {
	const settingsFinder = container.resolve(AppSettingsDependencies.Finder)

	const userPayload = req.user as JwtPayloadUser
	const passwordChangeAt = new Date(userPayload.passwordChangeAt)

	const expiryDays = await settingsFinder.findAsNumber({ key: 'SECURITY.PASSWORD_EXPIRY_DAYS' })

	const expiryDate = new Date(passwordChangeAt)
	expiryDate.setDate(expiryDate.getDate() + expiryDays)

	if (new Date() > expiryDate) {
		// La contraseña ha expirado
		return next(new PasswordExpiredError())
	}

	// La contraseña es válida, continuar con la siguiente función en la cadena.
	return next()
}
