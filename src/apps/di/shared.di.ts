import { asClass, type AwilixContainer } from 'awilix'
import { WinstonLogger } from '../../Contexts/Shared/infrastructure/WinstonLogger'
import { RedisRepository } from '../../Contexts/Shared/infrastructure/persistance/Redis/RedisRepository'
import { CacheService } from '../../Contexts/Shared/domain/CacheService'
import { SequelizeConfig } from '../../Contexts/Shared/infrastructure/persistance/Sequelize/SequelizeConfig'
import { PingService } from '../../Contexts/Shared/domain/Monitoring/application/PingService'
import { PingLogger } from '../../Contexts/Shared/domain/Monitoring/infra/PingLogger'
import { InMemoryEventBus } from '../../Contexts/Shared/infrastructure/event/inMemoryEventBus'

export enum SharedDependencies {
	Logger = 'logger',
	Database = 'database',
	CacheRepository = 'cacheRepository',
	Cache = 'cache',
	PingService = 'pingService',
	PingLogger = 'pingLogger',
	EventBus = 'eventBus'
}

export const register = (container: AwilixContainer) => {
	container.register({
		[SharedDependencies.Logger]: asClass(WinstonLogger).singleton(),
		[SharedDependencies.Database]: asClass(SequelizeConfig).singleton(),
		[SharedDependencies.CacheRepository]: asClass(RedisRepository).singleton(),
		[SharedDependencies.Cache]: asClass(CacheService).singleton(),
		[SharedDependencies.PingService]: asClass(PingService).singleton(),
		[SharedDependencies.PingLogger]: asClass(PingLogger).singleton(),
		[SharedDependencies.EventBus]: asClass(InMemoryEventBus).singleton()
	})
}
