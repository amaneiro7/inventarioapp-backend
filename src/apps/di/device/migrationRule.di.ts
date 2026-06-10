import { type AwilixContainer, asClass } from 'awilix'
import { SequelizeHardwareEvaluationRepository } from '../../../Contexts/Device/features/deviceEvaluation/infra/sequelize/SequelizeHardwareEvaluationRepository'
import { SequelizeMigrationRuleRepository } from '../../../Contexts/Device/features/deviceEvaluation/infra/sequelize/sequelizeMigrationRuleRepository'
import { MigrationRuleFinder } from '../../../Contexts/Device/features/deviceEvaluation/application/MigrationRuleFInder'
import { MigrationRulesFinderAll } from '../../../Contexts/Device/features/deviceEvaluation/application/MigrationRuleFinderAll'
import { MigrationRuleCreator } from '../../../Contexts/Device/features/deviceEvaluation/application/MigrationRuleCreator'
import { MigrationRuleUpdater } from '../../../Contexts/Device/features/deviceEvaluation/application/MigrationRuleUpdater'
import { MigrationRuleRemover } from '../../../Contexts/Device/features/deviceEvaluation/application/MigrationRuleRemover'
import { EvaluationHardwareDashboard } from '../../../Contexts/Device/features/deviceEvaluation/application/EvaluationHardwareDashboard'
import { MigrationRuleGetController } from '../../controllers/migration-rule/migration-rule.get.controller'
import { MigrationRuleGetAllController } from '../../controllers/migration-rule/migration-rule.get-all.controller'
import { MigrationRulePostController } from '../../controllers/migration-rule/migration-rule.post.controller'
import { MigrationRulePatchController } from '../../controllers/migration-rule/migration-rule.patch.controller'
import { MigrationRuleDeleteController } from '../../controllers/migration-rule/migration-rule.delete.controller'
import { EvaluationHardwareDashboardGetController } from '../../controllers/migration-rule/evaluation-hardware-dashboard.controller'

export enum MigrationRuleDependencies {
	Repository = 'migrationRuleRepository',
	Finder = 'migrationRuleFinder',
	FinderAll = 'migrationRuleFinderAll',
	Creator = 'migrationRuleCreator',
	Updater = 'migrationRuleUpdater',
	Remover = 'migrationRuleRemover',
	GetController = 'migrationRuleGetController',
	GetAllController = 'migrationRuleGetAllController',
	PostController = 'migrationRulePostController',
	PatchController = 'migrationRulePatchController',
	DeleteController = 'migrationRuleDeleteController',
	HardwareEvaluationRepository = 'hardwareEvaluationRepository',
	EvaluationHardwareDashboard = 'evaluationHardwareDashboard',
	EvaluationHardwareDashboardGetController = 'evaluationHardwareDashboardGetController'
}

export const register = (container: AwilixContainer) => {
	container.register({
		// Repositories
		[MigrationRuleDependencies.HardwareEvaluationRepository]: asClass(
			SequelizeHardwareEvaluationRepository
		).singleton(),
		[MigrationRuleDependencies.Repository]: asClass(SequelizeMigrationRuleRepository).singleton(),
		// Application Services
		[MigrationRuleDependencies.Finder]: asClass(MigrationRuleFinder),
		[MigrationRuleDependencies.FinderAll]: asClass(MigrationRulesFinderAll),
		[MigrationRuleDependencies.Creator]: asClass(MigrationRuleCreator),
		[MigrationRuleDependencies.Updater]: asClass(MigrationRuleUpdater),
		[MigrationRuleDependencies.Remover]: asClass(MigrationRuleRemover),
		// Dashboard
		[MigrationRuleDependencies.EvaluationHardwareDashboard]: asClass(EvaluationHardwareDashboard),
		// Controllers
		[MigrationRuleDependencies.GetController]: asClass(MigrationRuleGetController),
		[MigrationRuleDependencies.GetAllController]: asClass(MigrationRuleGetAllController),
		[MigrationRuleDependencies.PostController]: asClass(MigrationRulePostController),
		[MigrationRuleDependencies.PatchController]: asClass(MigrationRulePatchController),
		[MigrationRuleDependencies.DeleteController]: asClass(MigrationRuleDeleteController),
		[MigrationRuleDependencies.EvaluationHardwareDashboardGetController]: asClass(
			EvaluationHardwareDashboardGetController
		)
	})
}
