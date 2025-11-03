import { type AwilixContainer, asClass } from 'awilix'
import { SettingsFinder } from '../../../Contexts/Shared/AppSettings/application/SettingsFinder'
import { SettingsFinderAll } from '../../../Contexts/Shared/AppSettings/application/SettingsFinderAll'
import { SettingsUpdater } from '../../../Contexts/Shared/AppSettings/application/SettingsUpdater'
import { SettingsGetController } from '../../controllers/app-settings/settings.get.controller'
import { SettingsGetAllController } from '../../controllers/app-settings/settings.get-all.controller'
import { SettingsPatchController } from '../../controllers/app-settings/settings.patch.controller'
import { SettingsUpdaterBulk } from '../../../Contexts/Shared/AppSettings/application/SettingsUpdaterBulk'
import { SettingsPatchBulkController } from '../../controllers/app-settings/settings.patch-bulk.controller'
//import { SequelizeSettingsRepository } from '../../../Contexts/Shared/AppSettings/infrastructure/persistence/sequelize/SequelizeSettingsRepository'
import { FileSettingsRepository } from '../../../Contexts/Shared/AppSettings/infrastructure/persistence/FileSettingsRepository'

export enum AppSettingsDependencies {
	Repository = 'settingsRepository',
	Finder = 'settingsFinder',
	FinderAll = 'settingsFinderAll',
	Updater = 'settingsUpdater',
	UpdaterBulk = 'settingsUpdaterBulk',
	GetController = 'settingsGetController',
	GetAllController = 'settingsGetAllController',
	PatchController = 'settingsPatchController',
	PatchBulkController = 'settingsPatchBulkController'
}

export const register = (container: AwilixContainer): void => {
	container.register({
		settingsRepository: asClass(FileSettingsRepository).singleton(),
		//settingsRepository: asClass(SequelizeSettingsRepository).singleton(),

		settingsFinder: asClass(SettingsFinder).singleton(),
		settingsFinderAll: asClass(SettingsFinderAll),
		settingsUpdater: asClass(SettingsUpdater),
		settingsUpdaterBulk: asClass(SettingsUpdaterBulk),
		settingsGetController: asClass(SettingsGetController),
		settingsGetAllController: asClass(SettingsGetAllController),
		settingsPatchController: asClass(SettingsPatchController),
		settingsPatchBulkController: asClass(SettingsPatchBulkController)
	})
}
