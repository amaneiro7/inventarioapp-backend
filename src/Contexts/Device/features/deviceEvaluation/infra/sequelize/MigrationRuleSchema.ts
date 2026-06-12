import { DataTypes, Model } from 'sequelize'
import type {
	BelongsToManyAddAssociationsMixin,
	BelongsToManySetAssociationsMixin,
	BelongsToManyGetAssociationsMixin,
	Sequelize
} from 'sequelize'
import type { MigrationRuleDto } from '../../domain/entity/MigrationRule.dto'
import type { MigrationRuleId } from '../../domain/valueObject/MigrationRuleId'
import type { ProcessorModel } from '../../../../../Features/Processor/infrastructure/sequelize/ProcessorSchema'
import type { ProcessorId } from '../../../../../Features/Processor/domain/valueObject/ProcessorId'
import type { Primitives } from '../../../../../Shared/domain/value-object/Primitives'
import type { ProcessorDto } from '../../../../../Features/Processor/domain/entity/Processor.dto'
import type { SequelizeModels } from '../../../../../Shared/infrastructure/persistance/Sequelize/SequelizeModels'
import type { MigrationRuleMinRamGb } from '../../domain/valueObject/MigrationRuleMinRamGb'
import type { MigrationRuleIsActive } from '../../domain/valueObject/MigrationRuleIsActive'
import type { MigrationRuleMinDiskGb } from '../../domain/valueObject/MigrationRuleMinDiskGb'

/**
 * @description Sequelize model for the `MigrationRule` entity.
 */
export class MigrationRuleModel
	extends Model<Omit<MigrationRuleDto, 'approvedProcessors'>>
	implements MigrationRuleDto
{
	declare id: Primitives<MigrationRuleId>
	declare minRamGb: Primitives<MigrationRuleMinRamGb>
	declare minDiskGb: Primitives<MigrationRuleMinDiskGb>
	declare isActive: Primitives<MigrationRuleIsActive>
	declare parentId: Primitives<MigrationRuleId> | null
	declare approvedProcessors: Primitives<ProcessorId>[] & Omit<ProcessorDto, 'MigrationRules'>[]

	// Association Mixins
	declare getApprovedProcessors: BelongsToManyGetAssociationsMixin<ProcessorModel>
	declare addApprovedProcessor: BelongsToManyAddAssociationsMixin<ProcessorModel, Primitives<ProcessorId>>
	declare setApprovedProcessors: BelongsToManySetAssociationsMixin<ProcessorModel, Primitives<ProcessorId>>
	declare removeApprovedProcessor: BelongsToManyAddAssociationsMixin<ProcessorModel, Primitives<ProcessorId>>

	static associate(models: SequelizeModels): void {
		this.belongsToMany(models.Processor, {
			as: 'approvedProcessors',
			through: 'processors_migration_rules',
			foreignKey: 'migrationRuleId',
			otherKey: 'processorId'
		})
	}

	static initialize(sequelize: Sequelize): void {
		this.init(
			{
				id: { type: DataTypes.UUID, primaryKey: true, allowNull: false },
				minDiskGb: {
					type: DataTypes.INTEGER,
					allowNull: false,
					field: 'min_disk_gb'
				},
				minRamGb: {
					type: DataTypes.INTEGER,
					allowNull: false,
					field: 'min_ram_gb'
				},
				isActive: {
					type: DataTypes.BOOLEAN,
					defaultValue: true
				}
			},
			{
				modelName: 'MigrationRule',
				tableName: 'migration_rules',
				timestamps: true,
				underscored: true,
				paranoid: true,
				sequelize,
				indexes: [
					{
						unique: true,
						fields: ['is_active'],
						where: {
							is_active: true,
							deleted_at: null
						},
						name: 'unique_active_migration_rule'
					}
				]
			}
		)
	}
}
