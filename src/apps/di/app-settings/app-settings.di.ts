import { type AwilixContainer, asClass } from 'awilix'
import { SettingsFinder } from '../../../Contexts/AppSettings/application/SettingsFinder'
import { SettingsFinderAll } from '../../../Contexts/AppSettings/application/SettingsFinderAll'
import { SettingsUpdater } from '../../../Contexts/AppSettings/application/SettingsUpdater'
import { SettingsGetController } from '../../controllers/app-settings/settings.get.controller'
import { SettingsGetAllController } from '../../controllers/app-settings/settings.get-all.controller'
import { SettingsPatchController } from '../../controllers/app-settings/settings.patch.controller'
import { SettingsUpdaterBulk } from '../../../Contexts/AppSettings/application/SettingsUpdaterBulk'
import { SettingsPatchBulkController } from '../../controllers/app-settings/settings.patch-bulk.controller'
//import { SequelizeSettingsRepository } from '../../../Contexts/Shared/AppSettings/infrastructure/persistence/sequelize/SequelizeSettingsRepository'
import { FileSettingsRepository } from '../../../Contexts/AppSettings/infrastructure/persistence/FileSettingsRepository'
import { SettingsAllowedDomainsGetController } from '../../controllers/app-settings/settings.get-allowed.controller'

export enum AppSettingsDependencies {
	Repository = 'settingsRepository',
	Finder = 'settingsFinder',
	FinderAll = 'settingsFinderAll',
	Updater = 'settingsUpdater',
	UpdaterBulk = 'settingsUpdaterBulk',
	GetController = 'settingsGetController',
	GetAllController = 'settingsGetAllController',
	PatchController = 'settingsPatchController',
	PatchBulkController = 'settingsPatchBulkController',
	AllowedDomainsGetController = 'settingsAllowedDomainsGetController'
}

export const register = (container: AwilixContainer): void => {
	container.register({
		[AppSettingsDependencies.Repository]: asClass(FileSettingsRepository).singleton(),
		//settingsRepository: asClass(SequelizeSettingsRepository).singleton(),

		[AppSettingsDependencies.Finder]: asClass(SettingsFinder).singleton(),
		[AppSettingsDependencies.FinderAll]: asClass(SettingsFinderAll),
		[AppSettingsDependencies.Updater]: asClass(SettingsUpdater),
		[AppSettingsDependencies.UpdaterBulk]: asClass(SettingsUpdaterBulk),
		[AppSettingsDependencies.GetController]: asClass(SettingsGetController),
		[AppSettingsDependencies.GetAllController]: asClass(SettingsGetAllController),
		[AppSettingsDependencies.PatchController]: asClass(SettingsPatchController),
		[AppSettingsDependencies.PatchBulkController]: asClass(SettingsPatchBulkController),
		[AppSettingsDependencies.AllowedDomainsGetController]: asClass(SettingsAllowedDomainsGetController)
	})
}
